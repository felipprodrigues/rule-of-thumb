import React from "react";
import peoplePicture from '../../public/bg-people.@2x.png'
import { Button } from "./ui/button";

export default function SubmitCard() {
  return (
    <div className='xl:gap-10 md:gap-8 gap-4 flex md:flex-row flex-col items-center justify-center backdrop-sepia-0 bg-white/80 bg-cover bg-no-repeat bg-center md:p-6 px-10 py-6 bg-blend-overlay'
      style={{ backgroundImage: `url(${peoplePicture.src}) ` }}
    >
      <p className="font-normal text-[#464646] text-2xl md:text-left text-center md:w-auto w-full">Is there anyone else you would want us to add?</p>

      <Button className="xl:w-[450px] md:w-[225px] w-full xl:p-8 md:p-6 p-8 rounded-none bg-transparent hover:bg-transparent xl:text-2xl text-xl font-normal border-2 border-[#333333] text-[#333333]">
        Submit a name
      </Button>
    </div>
  );
}

