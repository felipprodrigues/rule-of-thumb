import React from "react";
import peoplePicture from '../../public/bg-people.@2x.png'
import { Button } from "./ui/button";

export default function SubmitCard() {
  return (
    <div className='gap-10 justify-center backdrop-sepia-0 bg-white/80 bg-cover bg-no-repeat bg-center flex items-center p-6 bg-blend-overlay'
      style={{ backgroundImage: `url(${peoplePicture.src}) ` }}
    >
      <p className="font-normal text-[#464646] text-2xl">Is there anyone else you would want us to add?</p>

      <Button className="w-[450px] p-8 rounded-none bg-transparent hover:bg-transparent text-2xl font-normal border-2 border-[#333333] text-[#333333]">
        Submit a name
      </Button>
    </div>
  );
}

