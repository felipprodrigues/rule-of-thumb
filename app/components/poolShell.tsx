'use client'
import React, { useEffect, useState } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"
import PoolCardsList from './poolCardsList'
import PoolCardsGrid from './poolCardsGrid'

import { ScrollArea, ScrollBar } from "./ui/scroll-area"
import { api } from '@/lib/axios'

export interface VoteProps{
  vote: string
  setVote: (val: string) => void
  item?: VotingPoolProps
  index?: number
  handleVote: (item: any, index: any) => void;
}

export interface VotingPoolProps {
  name: string
  description: string
  category: string
  picture: string
  lastUpdated: string
  votes: VotesProps
  id: string
  positivePercentage: number;
  negativePercentage: number;
  poolProgress: number
}

export interface VotesProps {
  positive: number
  negative: number
}


export default function PoolShell() {
  const [viewMode, setViewMode] = useState('list')
  const [vote, setVote] = useState('')
  const [votingPool, setVotingPool] = useState<VotingPoolProps[]>([])

  async function fetchData() {
    try {
      const response = await api.get('/data');
      const data = response.data;

      const updatedVotingPool = calculateVotePercentage(data);
      setVotingPool(updatedVotingPool);

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  function calculateVotePercentage(data: VotingPoolProps[]): VotingPoolProps[] {
    if (!data) return [];
    return data.map(pool => {
      const totalVotes = pool.votes.positive + pool.votes.negative;
      const positivePercentage = (pool.votes.positive / totalVotes) * 100;
      const negativePercentage = (pool.votes.negative / totalVotes) * 100;

      const poolProgress = totalVotes === 0 ? 0 : (pool.votes.positive / totalVotes) * 100;



      return {
        ...pool,
        positivePercentage,
        negativePercentage,
        poolProgress
      };
    });
  }

  const handleVote = async (index: number, item: VotingPoolProps) => {
    const updatedVotingPool = [...votingPool];
    const updatedItem = { ...updatedVotingPool[index] };

    if (vote === 'up') {
      updatedItem.votes.positive += 1;
    } else if (vote === 'down') {
      updatedItem.votes.negative += 1;
    }

    const totalVotes = updatedItem.votes.positive + updatedItem.votes.negative;
    updatedItem.positivePercentage = (updatedItem.votes.positive / totalVotes) * 100;
    updatedItem.negativePercentage = (updatedItem.votes.negative / totalVotes) * 100;

    updatedItem.poolProgress = updatedItem.positivePercentage;

    updatedVotingPool[index] = updatedItem;

    console.log(item.id, 'aqui o id dele')
    try {
      await api.put(`/data/${item.id}`, updatedItem)

      setVotingPool(updatedVotingPool);

      console.log('Success!')
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between ">
        <h1 className="xl:text-5xl text-2xl font-light">Previous Rulings</h1>

        <div className="md:flex hidden">
            <Select onValueChange={(e) => setViewMode(e)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="List" defaultValue="list"/>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="list" >List</SelectItem>
                <SelectItem value="grid" >Grid</SelectItem>
              </SelectContent>
            </Select>
        </div>
      </div>

      <div className="hidden md:flex flex-col gap-4">
        {viewMode === 'list' ? (
          votingPool.map((item, index) => (
            <PoolCardsList
              key={item.id}
              vote={vote}
              setVote={setVote}
              index={index}
              item={item}
              handleVote={handleVote}
            />
          ))
        ) : (
          <div className="md:grid xl:grid-cols-3 md:grid-cols-2 gap-4">
            {votingPool.map((item, index) => (
              <PoolCardsGrid
                key={item.id}
                vote={vote}
                setVote={setVote}
                index={index}
                item={item}
                handleVote={handleVote}
              />
            ))}
          </div>
        )}
      </div>


      <ScrollArea className="md:hidden rounded-md border">
        <div className="flex w-max gap-2 p-4">
          {votingPool.map((item, index) => {
            return (
              <PoolCardsGrid
                key={item.id}
                vote={vote}
                setVote={setVote}
                index={index}
                item={item}
                handleVote={handleVote}
              />
            )
          })}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  )
}


