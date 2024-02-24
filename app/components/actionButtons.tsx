/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Image from 'next/image'
import thumbsUpIcon from '../../public/thumbs-up.svg'
import thumbsDownIcon from '../../public/thumbs-down.svg'
import { useToast } from "./ui/use-toast"
import { useVotingPoolStore } from "../store/useVotingPoolStore";

interface ActionButtonsProps {
  item: any
  index: number
  eyebrowText: boolean
  setEyebrowText: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ActionButtons({item, index, eyebrowText, setEyebrowText}: ActionButtonsProps) {
  const { toast } = useToast()
  const [vote, setVote] = useState('')

  const {
    handleVote,
    computedVotes,
    handleComputedVotes,
    resetComputedVotes,
    handleUpOrDownVote
  }: any = useVotingPoolStore();

  useEffect(() => {
    handleUpOrDownVote(vote)
  }, [vote])


  useEffect(() => {
    if(computedVotes) {
      setEyebrowText(false)
      resetComputedVotes()
    }

  }, [computedVotes])

  return (
    <div className="flex gap-3">
      <Button
        disabled={eyebrowText}
        onClick={() => setVote('up')}
        className={`${vote === 'up' ? "border-white" : "border-transparent"} border-2 flex items-center justify-center bg-[#3CBBB4] hover:bg-[#3CBBB4] rounded-none xl:w-11 xl:h-11 w-8 h-8 opacity-90 hover:opacity-100 p-1.5`}
      >
        <Image
          src={thumbsUpIcon}
          alt="Thumbs up Icon"
          className="xl:text-2xl md:text-xl text-base"
          width={0}
          height={0}
          priority
        />
      </Button>

      <Button
        disabled={eyebrowText}
        onClick={() => setVote('down')}
        className={`${vote === 'down' ? "border-white" : "border-transparent"} border-2 flex items-center justify-center bg-[#FBBD4A] hover:bg-[#FBBD4A] rounded-none xl:w-11 xl:h-11 w-8 h-8 opacity-90 hover:opacity-100 p-1.5`}
      >
        <Image
          src={thumbsDownIcon}
          alt="Thumbs down Icon"
          className="xl:text-2xl md:text-xl text-base"
          width={0}
          height={0}
          priority
        />
      </Button>

      {eyebrowText ? (
        <Button
          onClick={() => {
            setEyebrowText(false)
            handleComputedVotes()
          }}
          className={`flex min-w-[130px] max-w-[130px] text-base items-center pr-6 pl-6 justify-center text-white bg-black/90 hover:bg-black rounded-none opacity-85 hover:opacity-100 xl:h-11 h-8 xl:pr-6 xl:pl-6 md:pr-2 md:pl-2`}
        >
          Vote Again
        </Button>
      ) : (
        <Button
          disabled={!vote}
          onClick={async () => {
            await handleVote(item, index, vote, setVote);
            setEyebrowText(true)
            toast({
              title: `Your voice matters! Thank you for your vote! 🗳️`
            });
          }}
          className={`flex min-w-[130px] max-w-[130px] text-base items-center pr-6 pl-6 justify-center text-white ${!vote ? "bg-[#303030]" : "bg-black/90"} hover:bg-black rounded-none opacity-85 hover:opacity-100 xl:h-11 h-8 xl:pr-6 xl:pl-6 md:pr-2 md:pl-2`}
        >
          Vote Now
        </Button>

      )}
    </div>
  );
}
