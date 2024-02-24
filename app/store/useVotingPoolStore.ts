// src/store/votingPoolStore.js
import { api } from '@/lib/axios';
import { create } from 'zustand';
import { calculateVotePercentage } from '../helpers/calculateVotePercentage';

export interface VotingPoolProps {
  name: string
  description: string
  category: string
  picture: string
  lastUpdated: string
  votes: VotesKeyProps
  id: string
  positivePercentage: number;
  negativePercentage: number;
  poolProgress: number
}

export interface poolCardProps{
  index: number
  item: VotingPoolProps
}

export interface VotesKeyProps {
  positive: number
  negative: number
}

export const useVotingPoolStore = create((set) => ({
  viewMode: 'list',
  vote: '',
  votingPool: [],
  computedVotes: false,
  resetVotes: 0,
  setVote: '',

  setViewMode: (mode: string) => set({ viewMode: mode }),
  setVotingPool: (pool: any) => set({ votingPool: pool }),

  fetchData: async () => {
    try {
      const response = await api.get('/data');
      const data = response.data;

      const updatedVotingPool = calculateVotePercentage(data);

      set({ votingPool: updatedVotingPool });

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },

  handleVote: async (item: VotingPoolProps, index: number, vote: string, setVote: React.Dispatch<React.SetStateAction<string>>) => {
    try {
      const updatedItem = { ...item };

      if (vote === 'up') {
        updatedItem.votes.positive += 1;
      } else if (vote === 'down') {
        updatedItem.votes.negative += 1;
      }

      const totalVotes = updatedItem.votes.positive + updatedItem.votes.negative;
      updatedItem.positivePercentage = (updatedItem.votes.positive / totalVotes) * 100;
      updatedItem.negativePercentage = (updatedItem.votes.negative / totalVotes) * 100;
      updatedItem.poolProgress = updatedItem.positivePercentage;

      await api.put(`/data/${item.id}`, updatedItem);

      setVote('')

      set((state: any) => {
        const updatedVotingPool = [...state.votingPool];
        updatedVotingPool[index] = updatedItem;

        return { ...state, votingPool: updatedVotingPool };
      });

      console.log('Voting pool updated successfully!');
    } catch (error) {
      console.error('Error updating data:', error);
    }
  },

  handleUpOrDownVote: (vote: string) => {
    set({ setVote: vote });
  },

  handleComputedVotes: () => {
    set({ computedVotes: true })
  },
  resetComputedVotes: () => {
    set({ computedVotes: false })
  },
}));
