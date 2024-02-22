import React from 'react'
import { Button } from './ui/button'
import elonPicture from '../../public/elon-small@2x.png'
import { Progress } from './ui/progress-pool-card'
import Image from 'next/image'
import thumbsUpIcon from '../../public/thumbs-up.svg'
import thumbsDownIcon from '../../public/thumbs-down.svg'


export default function PoolCardsList() {
  return (
      <div className='grid xl:grid-cols-[200px,1fr,350px] md:grid-cols-[200px,1fr,200px] w-full justify-center bg-[#333]/60 gap-x-4 relative xl:min-h-[200px] md:min-h-[175px]'>
        <div className='w-full h-auto bg-cover max-w-[200px] bg-no-repeat bg-center mix-blend-normal relative'
          style={{ backgroundImage: `url(${elonPicture.src})` }}
        >
          <div className='absolute left-0 p-3 flex items-center justify-center bg-[#F9AD1D]'>
            <Image
                src={thumbsDownIcon}
                alt="Thumbs down icon"
                width={22}
                height={22}
                priority
              />
          </div>
        </div>

        <div className="flex flex-col flex-1 pt-2">
          <h1 className="xl:text-4xl md:text-2xl font-normal text-white">Elon Musk</h1>
          <p className="xl:text-lg md:text-sm font-light text-white">Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. It’s easy: You share your opinion, we analyze and put the data in a public report.</p>
        </div>

        <div className='flex flex-col items-end pt-2 pr-4 xl:gap-2 md:gap-5'>
          <p className="font-bold text-white xl:text-base md:text-xs">24 days ago in Business</p>

          <div className="flex gap-2">
            <Button className="flex items-center justify-center bg-[#3CBBB4] hover:bg-[#3CBBB4] rounded-none xl:w-11 xl:h-11 md:w-8 md:h-8 opacity-90 hover:opacity-100 p-2">
              <Image
                src={thumbsUpIcon}
                alt="Thumbs up Icon"
                className="xl:text-2xl md:text-xl text-base"
                width={0}
                height={0}
                priority
              />
            </Button>

            <Button className="flex items-center justify-center bg-[#FBBD4A] hover:bg-[#FBBD4A] rounded-none xl:w-11 xl:h-11 md:w-8 md:h-8 opacity-90 hover:opacity-100 p-2">
              <Image
                src={thumbsDownIcon}
                alt="Thumbs down Icon"
                width={24}
                height={24}
                priority
              />
            </Button>

            <Button className="flex xl:text-base md:text-sm items-center justify-center text-white bg-[#303030] hover:bg-black/90 rounded-none opacity-85 hover:opacity-100 xl:h-11 md:h-8 xl:pr-6 xl:pl-6 md:pr-2 md:pl-2">
              Vote Now
            </Button>
          </div>
        </div>

        <footer className='w-full absolute flex items-center bottom-0'>
          <div className='absolute left-0 z-10 p-2 pl-4 flex items-center gap-2'>
            <Image
                src={thumbsUpIcon}
                alt="Thumbs up icon"
                className="xl:text-2xl md:text-xl text-base"
                width={0}
                height={0}
                priority
              />
            <span className="xl:text-2xl md:text-xl text-base text-white">25.5%</span>
          </div>

          <Progress value={55} className="xl:min-h-14 md:min-h-10"/>

          <div className='absolute right-0 p-2 pr-4 flex items-center gap-2'>
            <span className="xl:text-2xl md:text-xl text-white">74.5%</span>
            <Image
                src={thumbsDownIcon}
                alt="Thumbs down icon"
                className="xl:text-2xl md:text-xl text-base"
                width={0}
                height={0}
                priority
              />
          </div>
        </footer>
      </div>



  )
}

