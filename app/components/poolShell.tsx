'use client'
import React from 'react'
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


export default function PoolShell() {

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between ">
        <h1 className="xl:text-5xl text-2xl font-light">Previous Rulings</h1>

        <div className="md:flex hidden">
          <Select >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="List" defaultValue="list"/>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="list">List</SelectItem>
              <SelectItem value="grid">Grid</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>


      <div className="hidden md:block">
        {/* <PoolCardsList/> */}

        <div className="md:grid xl:grid-cols-3 md:grid-cols-2 gap-4">
          <PoolCardsGrid/>
          <PoolCardsGrid/>
          <PoolCardsGrid/>
        </div>
      </div>






      <ScrollArea className="md:hidden rounded-md border">
        <div className="flex w-max gap-2 p-4">
          <PoolCardsGrid/>
          <PoolCardsGrid/>
          <PoolCardsGrid/>
          <PoolCardsGrid/>
          <PoolCardsGrid/>
          <PoolCardsGrid/>
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>




    </div>
  )
}


