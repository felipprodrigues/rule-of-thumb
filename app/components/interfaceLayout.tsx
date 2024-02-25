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
import {sharedStyles, listStyles, gridStyles} from './interfaceStyles'

export default function InterfaceLayout({index, item, displayType}: poolCardProps) {
  const [eyebrowText, setEyebrowText] = useState(false)
  const pictureSrc = ParsePicture(item?.picture)

  const { computedVotes }: any = useVotingPoolStore();

  useEffect(()=> {
    if(computedVotes > 2) {
      setEyebrowText(false)
    }
  },[computedVotes])

  return (
    <div className={`${displayType === 'list' ? listStyles.componentHolder : gridStyles.componentHolder}`}
      style={{
        backgroundImage: displayType === 'grid' ? `url(${pictureSrc?.src})` : undefined,
      }}
    >

      <div className={`${displayType === 'list' ? listStyles.mainCardContent : ''}`}
        style={{
          backgroundImage: displayType === 'list' ? `url(${pictureSrc?.src})` : undefined,
          boxShadow: displayType === 'list' ? 'inset -85px 0px 100px rgba(120, 113, 108, 1)' : undefined
        }}
      >

        <div className={`${displayType === 'list' ? `${listStyles.descriptionBlock.imageHolder} ${item?.poolProgress && item.poolProgress < 50 ? "bg-[#F9AD1D]" : "bg-[#3CBBB4]"}` : gridStyles.mainCardContent}`}
        >
          {displayType === 'grid' && (
              <>
                {/* NAME DESCRIPTION BLOCK */}
                <div className={`${gridStyles.descriptionBlock.holder}`}>
                  <h1 className={`${gridStyles.descriptionBlock.title}`}>{item?.name}</h1>
                  <p className={`${gridStyles.descriptionBlock.paragraph}`}>{item?.description}</p>

                  <div className={`${gridStyles.descriptionBlock.imageHolder} ${item?.poolProgress && item.poolProgress < 50 ? "bg-[#F9AD1D]" : "bg-[#3CBBB4]"}`}>
                    <Image
                        src={item?.poolProgress && item.poolProgress < 50 ? thumbsDownIcon : thumbsUpIcon}
                        alt="Thumbs down icon"
                        width={16}
                        height={16}
                        priority
                      />
                  </div>
                </div>

                {/* ACTION BUTTONS GRID BLOCK */}
                <div className={`${gridStyles.actionButtonBlock}`}>
                  <p className={`${sharedStyles.actionButtonParagraph}`}>
                    {eyebrowText ? 'Thank you for your vote!' : `${differenceInTime(item?.lastUpdated)} years ago in ${item?.category}`}
                  </p>

                  <ActionButtons
                    item={item}
                    index={index}
                    setEyebrowText={setEyebrowText}
                    eyebrowText={eyebrowText}
                  />
                </div>
              </>
            )}

          {displayType === 'list' && (
            <Image
              src={item.poolProgress && item.poolProgress < 50 ? thumbsDownIcon : thumbsUpIcon}
              alt="Thumbs down icon"
              width={22}
              height={22}
              priority
            />
          )}
        </div>
      </div>

      {displayType === 'list' && (
        <>
          <div className={`${listStyles.descriptionBlock.holder}`}>
            <h1 className={`${listStyles.descriptionBlock.title}`}>{item.name}</h1>
            <p className={`${listStyles.descriptionBlock.paragraph}`}>{item.description}</p>
          </div>

          <div className={`${listStyles.actionButtonBlock}`}>
            <p className={`${sharedStyles.actionButtonParagraph}`}>
              {eyebrowText ? 'Thank you for your vote!' : `${differenceInTime(item.lastUpdated)} years ago in ${item.category}`}
            </p>

            <ActionButtons
              item={item}
              index={index}
              setEyebrowText={setEyebrowText}
              eyebrowText={eyebrowText}
            />
          </div>
        </>
      )}

      <footer className={`${sharedStyles.footer}`}>
        <div className={`${displayType === 'list' ? listStyles.footerThumbsUpBlock.holder : gridStyles.footerThumbsUpBlock.holder}`}>
          <Image
            src={thumbsUpIcon}
            alt="Thumbs up icon"
            width={displayType === 'list' ? listStyles.footerThumbsButton.size : gridStyles.footerThumbsButton.size}
            height={displayType === 'list' ? listStyles.footerThumbsButton.size : gridStyles.footerThumbsButton.size}
            priority
          />
          <span  className={`${displayType === 'list' ? listStyles.footerThumbsUpBlock.span : gridStyles.footerThumbsUpBlock.span}`}>{item?.positivePercentage.toFixed(2)}%</span>
        </div>

        <Progress value={item?.poolProgress} className={`${displayType === 'list' ? listStyles.footerProgress : gridStyles.footerProgress}`}/>

        <div className={`${displayType === 'list' ?  listStyles.footerThumbsDownBlock.holder : gridStyles.footerThumbsDownBlock.holder}`}>
          <span  className={`${displayType === 'list' ?  listStyles.footerThumbsDownBlock.span : gridStyles.footerThumbsDownBlock.span}`}>{item?.negativePercentage.toFixed(2)}%</span>
          <Image
              src={thumbsDownIcon}
              alt="Thumbs down icon"
              width={listStyles.footerThumbsButton.size}
              height={listStyles.footerThumbsButton.size}
              priority
            />
        </div>
      </footer>
    </div>)
}
