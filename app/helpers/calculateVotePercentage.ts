import { VotingPoolProps } from "../components/poolShell";

export function calculateVotePercentage(data: VotingPoolProps[]): VotingPoolProps[] {
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
