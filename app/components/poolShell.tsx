'use client'
import React, { useEffect } from 'react'
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
import { VotingPoolProps, useVotingPoolStore } from '../store/useVotingPoolStore'



export default function PoolShell() {
  const { viewMode, votingPool, setViewMode, fetchData}: any = useVotingPoolStore();

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between ">
        <h1 className="xl:text-5xl text-2xl font-light">Previous Rulings</h1>

        <div className="md:flex hidden">
            <Select onValueChange={(e) => setViewMode(e)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="List" defaultValue={viewMode}/>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="list">List</SelectItem>
                <SelectItem value="grid">Grid</SelectItem>
              </SelectContent>
            </Select>
        </div>
      </div>

      <div className="hidden md:flex flex-col gap-4">
        {viewMode === 'list' ? (
          votingPool.map((item: VotingPoolProps, index: number) => (
            <PoolCardsList
              key={item.id}
              index={index}
              item={item}
            />
          ))
        ) : (
          <div className="md:grid xl:grid-cols-3 md:grid-cols-2 gap-4">
            {votingPool.map((item: VotingPoolProps, index: number) => (
              <PoolCardsGrid
                key={item.id}
                index={index}
                item={item}
              />
            ))}
          </div>
        )}
      </div>

      <ScrollArea className="md:hidden rounded-md border">
        <div className="flex w-max gap-2 p-4">
          {votingPool.map((item: VotingPoolProps, index: number) => {
            return (
              <PoolCardsGrid
                key={item.id}
                index={index}
                item={item}
              />
            )
          })}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  )
}


