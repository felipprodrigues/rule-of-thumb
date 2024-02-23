import React from "react";
import { Button } from "./ui/button";
import Image from 'next/image'
import thumbsUpIcon from '../../public/thumbs-up.svg'
import thumbsDownIcon from '../../public/thumbs-down.svg'
import { VoteProps } from "./poolShell";

interface ActionButtonsProps {
  vote: string
  setVote: (string: string) => void
}


export default function ActionButtons({vote, setVote}: ActionButtonsProps) {
  return (
    <>
      <Button onClick={() => setVote('up')} className={`${(vote === 'up') ? "border-white" : " border-transparent"} border-2  flex items-center justify-center bg-[#3CBBB4] hover:bg-[#3CBBB4] rounded-none xl:w-11 xl:h-11 w-8 h-8 opacity-90 hover:opacity-100 p-1.5`}>
        <Image
          src={thumbsUpIcon}
          alt="Thumbs up Icon"
          className="xl:text-2xl md:text-xl text-base"
          width={0}
          height={0}
          priority
        />
      </Button>

      <Button onClick={() => setVote('down')} className={`${(vote === 'down') ? "border-white" : " border-transparent"} border-[1px] flex items-center justify-center bg-[#FBBD4A] hover:bg-[#FBBD4A] rounded-none xl:w-11 xl:h-11 w-8 h-8 opacity-90 hover:opacity-100 p-1.5`}>
        <Image
          src={thumbsDownIcon}
          alt="Thumbs down Icon"
          className="xl:text-2xl md:text-xl text-base"
          width={0}
          height={0}
          priority
        />
      </Button>
    </>
  );
}


