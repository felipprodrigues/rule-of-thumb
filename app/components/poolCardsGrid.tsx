'use client'
import { Progress } from './ui/progress-pool-card'
import Image from 'next/image'
import thumbsUpIcon from '../../public/thumbs-up.svg'
import thumbsDownIcon from '../../public/thumbs-down.svg'
import ActionButtons from './actionButtons'
import differenceInTime from '../helpers/findTimeDifference'
import { ParsePicture } from '../helpers/findPicture'
import { useEffect, useState } from 'react'
import { poolCardProps, useVotingPoolStore } from '../store/useVotingPoolStore'

export default function PoolCardsGrid({index, item}: poolCardProps) {
  const [eyebrowText, setEyebrowText] = useState(false)
  const pictureSrc = ParsePicture(item?.picture)

  const { computedVotes }: any = useVotingPoolStore();

  useEffect(()=> {
    if(computedVotes > 2) {
      setEyebrowText(false)
    }
  },[computedVotes])

  return (
      <div>
        <div className='justify-center min-h-[450px] max-h-[450px] md:max-w-full max-w-[400px] bg-cover bg-no-repeat bg-center relative flex items-end'
          style={{ backgroundImage: `url(${pictureSrc?.src})` }}
        >
          <div className='flex flex-col w-full gap-3 pt-12 pb-14 pl-10 pr-10 relative'>
              <div className="md:h-[135px] h-[120px]">
                <h1 className="lx:text-4xl md:text-3xl  text-2xl font-normal text-white">{item?.name}</h1>
                <p className="md:text-base text-sm font-light text-white">{item?.description}</p>

                <div className={`absolute left-0 top-[3.5rem] p-1.5 flex items-center justify-center ${item?.poolProgress && item.poolProgress < 50 ? "bg-[#F9AD1D]" : "bg-[#3CBBB4]"}`}>
                  <Image
                      src={item?.poolProgress && item.poolProgress < 50 ? thumbsDownIcon : thumbsUpIcon}
                      alt="Thumbs down icon"
                      width={16}
                      height={16}
                      priority
                    />
                </div>
              </div>

              <div className="flex items-end flex-col gap-3">
                <p className="font-bold text-white xl:text-base md:text-xs">
                  {eyebrowText ? 'Thank you for your vote!' : `${differenceInTime(item?.lastUpdated)} years ago in ${item?.category}`}
                </p>

                <ActionButtons
                  item={item}
                  index={index}
                  setEyebrowText={setEyebrowText}
                  eyebrowText={eyebrowText}
                />
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
              <span  className="xl:text-lg md:text-base text-sm text-white">{item?.positivePercentage.toFixed(2)}%</span>
            </div>

            <Progress value={item?.poolProgress} className="min-h-10"/>

            <div className='text-2xl text-white absolute right-0 p-2 pr-4 flex items-center font-normal gap-2'>
              <span  className="xl:text-lg md:text-base text-sm text-white">{item?.negativePercentage.toFixed(2)}%</span>
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

