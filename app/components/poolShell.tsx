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

export default function PoolShell() {


  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between ">
        <h1 className="text-5xl font-light">Previous Rulings</h1>

        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="List" defaultValue="list"/>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="list">List</SelectItem>
            <SelectItem value="grid">Grid</SelectItem>
          </SelectContent>
        </Select>
      </div>


      <PoolCardsList/>
      <PoolCardsGrid/>


    </div>
  )
}


