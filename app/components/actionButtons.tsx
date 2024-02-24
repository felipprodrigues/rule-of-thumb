import React, { useState } from "react";
import { Button } from "./ui/button";
import Image from 'next/image'
import thumbsUpIcon from '../../public/thumbs-up.svg'
import thumbsDownIcon from '../../public/thumbs-down.svg'


interface ActionButtonsProps {
  item: any
  index: number
  setVote: (string: any) => void
  handleVote: (item: any, index: number) => void
}

export default function ActionButtons({item, index, setVote, handleVote}: ActionButtonsProps) {
  const [clickedButtons, setClickedButtons] = useState<{ up: boolean, down: boolean }>({ up: false, down: false });

  const handleUpClick = () => {
    setVote("up");
    setClickedButtons({ up: true, down: false });
  };

  const handleDownClick = () => {
    setVote("down");
    setClickedButtons({ up: false, down: true });
  };

  return (
    <div className="flex gap-3">
      <Button
        onClick={handleUpClick}
        className={`${clickedButtons.up ? "border-white" : "border-transparent"} border-2 flex items-center justify-center bg-[#3CBBB4] hover:bg-[#3CBBB4] rounded-none xl:w-11 xl:h-11 w-8 h-8 opacity-90 hover:opacity-100 p-1.5`}
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
        onClick={handleDownClick}
        className={`${clickedButtons.down ? "border-white" : "border-transparent"} border-2 flex items-center justify-center bg-[#FBBD4A] hover:bg-[#FBBD4A] rounded-none xl:w-11 xl:h-11 w-8 h-8 opacity-90 hover:opacity-100 p-1.5`}
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

      <Button disabled={!clickedButtons.up && !clickedButtons.down} onClick={() => handleVote(index, item)} className={`flex text-base items-center pr-6 pl-6 justify-center text-white ${!clickedButtons.up && !clickedButtons.down ? "bg-[#303030]" : "bg-black/90"} hover:bg-black rounded-none opacity-85 hover:opacity-100 xl:h-11 h-8 xl:pr-6 xl:pl-6 md:pr-2 md:pl-2`}>
        Vote Now
      </Button>
    </div>
  );
}
