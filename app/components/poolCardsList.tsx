'use client'
import { Progress } from './ui/progress-pool-card'
import Image from 'next/image'
import thumbsUpIcon from '../../public/thumbs-up.svg'
import thumbsDownIcon from '../../public/thumbs-down.svg'
import ActionButtons from './actionButtons'
import differenceInTime from '../helpers/findTimeDifference'
import { ParsePicture } from '../helpers/findPicture'
import { poolCardProps, useVotingPoolStore } from '../store/useVotingPoolStore'
import { useEffect, useState } from 'react'


export default function PoolCardsList({index, item}: poolCardProps) {
  const pictureSrc = ParsePicture(item?.picture)
  const [eyebrowText, setEyebrowText] = useState(false)

  const { computedVotes }: any = useVotingPoolStore();

  useEffect(()=> {
    if(computedVotes > 2) {
      setEyebrowText(false)
    }
  },[computedVotes])

  return (
    <div className='grid xl:grid-cols-[200px,1fr,350px] md:grid-cols-[200px,1fr,200px] w-full justify-center bg-gradient-to-r from-stone-500/80 via-stone-600 to-stone-500/80 gap-x-4 relative xl:min-h-[200px] md:min-h-[175px]'>
      <div className='w-full h-auto bg-cover max-w-[200px] bg-no-repeat bg-center mix-blend-normal relative'
        style={{ backgroundImage: `url(${pictureSrc?.src})`, boxShadow: 'inset -85px 0px 100px rgba(120, 113, 108, 1)' }}
      >
        <div className={`absolute left-0 p-3 flex items-center justify-center ${item?.poolProgress && item.poolProgress < 50 ? "bg-[#F9AD1D]" : "bg-[#3CBBB4]"}`}
        >
          <Image
            src={item?.poolProgress && item.poolProgress < 50 ? thumbsDownIcon : thumbsUpIcon}
            alt="Thumbs down icon"
            width={22}
            height={22}
            priority
          />
        </div>
      </div>

      <div className="flex flex-col flex-1 pt-2 shadow-left">
        <h1 className="xl:text-4xl md:text-2xl font-normal text-white">{item?.name}</h1>
        <p className="xl:text-lg md:text-sm font-light text-white">{item?.description}</p>
      </div>

      <div className='flex flex-col items-end pt-2 pr-4 xl:gap-2 md:gap-5'>
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
          <span className="xl:text-2xl md:text-xl text-base text-white">{item?.positivePercentage.toFixed(2)}%</span>
        </div>

        <Progress value={item?.poolProgress} className="xl:min-h-14 md:min-h-10"/>

        <div className='absolute right-0 p-2 pr-4 flex items-center gap-2'>
          <span className="xl:text-2xl md:text-xl text-white">{item?.negativePercentage.toFixed(2)}%</span>
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

