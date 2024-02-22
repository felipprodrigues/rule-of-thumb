import React from 'react'
import { Button } from './ui/button'
import elonPicture from '../../public/elon-small@2x.png'
import { Progress } from './ui/progress-pool-card'
import Image from 'next/image'
import thumbsUpIcon from '../../public/thumbs-up.svg'
import thumbsDownIcon from '../../public/thumbs-down.svg'

export default function PoolCardsGrid() {
  return (
      <div>
        <div className='justify-center min-h-[450px] max-h-[450px] md:max-w-full max-w-[400px] bg-cover bg-no-repeat bg-center relative flex items-end'
          style={{ backgroundImage: `url(${elonPicture.src})` }}
        >
          <div className='flex flex-col w-full gap-3 pt-12 pb-14 pl-10 pr-10 relative'>
              <div >
                <h1 className="lx:text-4xl md:text-3xl  font-normal text-white">Elon Musk</h1>
                <p className="text-base font-light text-white">Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. It’s easy: You share your opinion, we analyze and put the data in a public report.</p>

                <div className='absolute left-0 top-[3.5rem] p-1.5 flex items-center justify-center bg-[#F9AD1D]'>
                  <Image
                      src={thumbsDownIcon}
                      alt="Thumbs down icon"
                      width={16}
                      height={16}
                      priority
                    />
                </div>
              </div>

              <div className="flex items-end flex-col gap-3">
                <p className="font-bold text-white text-sm">24 days ago in Business</p>

                <div className="flex gap-3">
                  <Button className="flex items-center justify-center bg-[#3CBBB4] hover:bg-[#3CBBB4] rounded-none xl:w-11 xl:h-11 md:w-8 md:h-8 opacity-90 hover:opacity-100 p-1.5">
                    <Image
                      src={thumbsUpIcon}
                      alt="Thumbs up Icon"
                      className="xl:text-2xl md:text-xl text-base"
                      width={0}
                      height={0}
                      priority
                    />
                  </Button>

                  <Button className="flex items-center justify-center bg-[#FBBD4A] hover:bg-[#FBBD4A] rounded-none xl:w-11 xl:h-11 md:w-8 md:h-8 opacity-90 hover:opacity-100 p-1.5">
                    <Image
                      src={thumbsDownIcon}
                      alt="Thumbs down Icon"
                      className="xl:text-2xl md:text-xl text-base"
                      width={0}
                      height={0}
                      priority
                    />
                  </Button>

                  <Button className="flex text-base items-center pr-6 pl-6 justify-center text-white bg-[#303030] hover:bg-black/90 rounded-none opacity-85 hover:opacity-100 xl:h-11 md:h-8 xl:pr-6 xl:pl-6 md:pr-2 md:pl-2">
                    Vote Now
                  </Button>
                </div>
              </div>
          </div>

          <footer className='w-full absolute flex items-center bottom-0'>
            <div className='text-2xl text-white absolute left-0 z-10 p-2 pl-4 flex items-center font-normal gap-2'>
              <Image
                  src={thumbsUpIcon}
                  alt="Thumbs up icon"
                  width={15}
                  height={15}
                  priority
                />
              <span className="xl:text-lg md:text-base text-sm text-white">25.5%</span>
            </div>

            <Progress value={55} className="min-h-10"/>

            <div className='text-2xl text-white absolute right-0 p-2 pr-4 flex items-center font-normal gap-2'>
              <span className="xl:text-lg md:text-base text-sm text-white">74.5%</span>
              <Image
                  src={thumbsDownIcon}
                  alt="Thumbs down icon"
                  width={15}
                  height={15}
                  priority
                />
            </div>
          </footer>
        </div>





      </div>



  )
}

