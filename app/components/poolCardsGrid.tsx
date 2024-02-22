import React from 'react'
import { Button } from './ui/button'
// import Image from 'next/image'
import elonPicture from '../../public/elon-small@2x.png'
import cristinaPicture from '../../public/cristina-small@2x.png'
import gretaPicture from '../../public/greta-small.png'
import { Progress } from './ui/progress-pool-card'
import Image from 'next/image'
import thumbsUpIcon from '../../public/thumbs-up.svg'
import thumbsDownIcon from '../../public/thumbs-down.svg'


export default function PoolCardsGrid() {
  return (
      <div className="grid grid-cols-3 gap-7">
        <div className='justify-center min-h-[450px] max-h-[450px] bg-cover bg-no-repeat bg-center relative flex items-end'
          style={{ backgroundImage: `url(${elonPicture.src})` }}
        >
          <div className='flex flex-col w-full gap-3 pt-12 pb-14 pl-10 pr-10 relative'>
              <div >
                <h1 className="text-4xl font-normal text-white">Elon Musk</h1>
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
                  <Button className="flex items-center justify-center bg-[#3CBBB4] hover:bg-[#3CBBB4] rounded-none w-11 h-11 opacity-90 hover:opacity-100 p-1.5">
                    <Image
                      src={thumbsUpIcon}
                      alt="Thumbs up Icon"
                      width={18}
                      height={18}
                      priority
                    />
                  </Button>

                  <Button className="flex items-center justify-center bg-[#FBBD4A] hover:bg-[#FBBD4A] rounded-none opacity-90 hover:opacity-100 w-11 h-11 p-1.5">
                    <Image
                      src={thumbsDownIcon}
                      alt="Thumbs down Icon"
                      width={18}
                      height={18}
                      priority
                    />
                  </Button>

                  <Button className="flex text-base items-center pr-6 pl-6 justify-center text-white bg-[#303030] hover:bg-black/90 rounded-none opacity-85 hover:opacity-100 h-11">
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
              <span className="text-lg text-white">25.5%</span>
            </div>

            <Progress value={55} className="min-h-10"/>

            <div className='text-2xl text-white absolute right-0 p-2 pr-4 flex items-center font-normal gap-2'>
              <span className="text-lg text-white">74.5%</span>
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








        <div className='justify-center min-h-[450px] max-h-[450px] bg-cover bg-no-repeat bg-center'
          style={{ backgroundImage: `url(${cristinaPicture.src})` }}
        >
        </div>
        <div className='justify-center min-h-[450px] max-h-[450px] bg-cover bg-no-repeat bg-center'
          style={{ backgroundImage: `url(${gretaPicture.src})` }}
        >
        </div>


        {/* <div className="flex flex-col pt-2">
          <h1 className="text-4xl font-normal text-white">Elon Musk</h1>
          <p className="text-lg font-light text-white">Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. It’s easy: You share your opinion, we analyze and put the data in a public report.</p>
        </div> */}

        {/* <div className='flex flex-col items-end pt-2 pr-4 gap-2'>
          <p className="font-bold text-white">24 days ago in Business</p>

          <div className="flex gap-2">
            <Button className="flex items-center justify-center bg-[#3CBBB4] hover:bg-[#3CBBB4] rounded-none w-11 h-11 opacity-90 hover:opacity-100 p-2">
              <Image
                src={thumbsUpIcon}
                alt="Thumbs up Icon"
                width={24}
                height={24}
                priority
              />
            </Button>

            <Button className="flex items-center justify-center bg-[#FBBD4A] hover:bg-[#FBBD4A] rounded-none opacity-90 hover:opacity-100 w-11 h-11 p-2">
              <Image
                src={thumbsDownIcon}
                alt="Thumbs down Icon"
                width={24}
                height={24}
                priority
              />
            </Button>

            <Button className="flex items-center justify-center text-white bg-[#303030] hover:bg-black/90 rounded-none opacity-85 hover:opacity-100 h-11 p-2">
              Vote Now
            </Button>
          </div>
        </div> */}

        {/* <footer className='w-full absolute flex items-center bottom-0'>
          <div className='text-2xl text-white absolute left-0 z-10 p-2 pl-4 flex items-center font-normal gap-2'>
            <Image
                src={thumbsUpIcon}
                alt="Thumbs up icon"
                width={22}
                height={22}
                priority
              />
            <span className="text-4xl text-white">25.5%</span>
          </div>

          <Progress value={55} className="min-h-14"/>

          <div className='text-2xl text-white absolute right-0 p-2 pr-4 flex items-center font-normal gap-2'>
            <span className="text-4xl text-white">74.5%</span>
            <Image
                src={thumbsDownIcon}
                alt="Thumbs down icon"
                width={22}
                height={22}
                priority
              />
          </div>
        </footer> */}
      </div>



  )
}

