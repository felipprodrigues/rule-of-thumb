'use client'

import React from 'react'
import { Button } from './ui/button'
import closeIcon from '../../public/close.svg'
import Image from 'next/image'

export default function InformativeCard() {
  return (
    <div className='grid xl:grid-cols-[200px,1fr,150px] md:grid-cols-[auto,1fr] grid-cols-2 w-full justify-center bg-[#EBEBEB] p-5 gap-4'>

      <div className='flex flex-col items-center justify-center xl:max-w-[200px] md:max-w-[150px]'>
        <p className="text-[#464646] flex flex-col xl:items-start items-center md:w-auto w-full">
          <span className="font-light xl:text-lg text-sm">Speak out. Be heard.</span>
          <b className="xl:text-3xl text-2xl"> Be counted</b>
        </p>
      </div>

      <div className="flex items-center justify-center md:w-full">
        <p className='font-light md:text-lg text-base'>Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. It’s easy: You share your opinion, we analyze and put the data in a public report.</p>
      </div>

      <div className='xl:flex hidden items-center justify-center max-w-[150px]'>
        <Button className="bg-transparent rounded-none border-transparent hover:bg-transparent hover:scale-110">
          <Image
            src={closeIcon}
            alt="Close Icon"
            width={18}
            height={18}
            priority
          />
        </Button>
      </div>
    </div>
  )
}
