'use client'

import React from 'react'
import { Button } from './ui/button'
import closeIcon from '../../public/close.svg'
import Image from 'next/image'

export default function InformativeCard() {
  return (
    <div className='grid grid-cols-[200px,1fr,150px] w-full justify-center bg-[#EBEBEB] p-5 gap-4'>

      <div className='flex flex-col items-center justify-center max-w-[200px]'>
        <p className="text-[#464646] flex flex-col ">
          <span className="font-light text-lg">Speak out. Be heard.</span>
          <b className="text-3xl"> Be counted</b>
        </p>
      </div>

      <div className="flex items-center justify-center flex-1">
        <p className='font-light text-lg'>Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. It’s easy: You share your opinion, we analyze and put the data in a public report.</p>
      </div>

      <div className='flex items-center justify-center max-w-[150px]'>
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
