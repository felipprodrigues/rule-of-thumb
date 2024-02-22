'use client'

import popeDesktop from '../../public/pope-francis.@2x.png'
import thumbsUp from '../../public/thumbs-up.svg'
import wikipedia from '../../public/wikipedia.svg'
import thumbsDown from '../../public/thumbs-down.svg'
import { SearchIcon } from 'lucide-react'

import Image from 'next/image'
import { Button } from './ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card"

import { Progress } from "./ui/progress-banner"

export default function Header() {
  return (
    <header
      className='h-screen w-full bg-cover bg-no-repeat flex flex-col items-center'
      style={{ backgroundImage: `url(${popeDesktop.src})`, backgroundPosition: "0 15%"}}
    >
      <div className="w-full flex justify-center bg-gradient-to-b from-black/55 to-transparent">
        <div className="max-w-[75%] w-full min-h-48 flex items-center justify-between">
          <h2 className='text-4xl text-white'>Rule of thumb.</h2>

          <nav className=''>
            <ul className='flex items-center list-none gap-4'>
              <li>
                <a className="text-white font-light hover:underline  cursor-pointer">Past Trials</a>
              </li>
              <li>
                <a className="text-white font-light hover:underline cursor-pointer">How It Works</a>
              </li>
              <li>
                <a className="text-white font-light hover:underline cursor-pointer">Login / Sign Up</a>
              </li>
              <SearchIcon className='text-white ml-4' size={36} />
            </ul>
          </nav>

        </div>
      </div>

      <div className="max-w-[75%] w-full flex-1">
        <Card className="max-w-[720px] backdrop-blur-xl bg-black/25 border-none">
          <CardHeader>
            <p className="text-white font-thin leading-none text-lg">What's your opinion on</p>
            {/* <br /> */}
            <CardTitle className="font-normal text-[54px] leading-none text-white mt-0">
              Pope Francis?
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-6">
            <p className="text-white font-thin text-2xl">
              He’s talking tough on clergy sexual abuse, <br />
              or is he just another pervert protector? <br />
              (thumbs down) or a true pedophile <br />
              punishing pontiff? (thumbs up)
            </p>

            <div className='flex items-center gap-2'>
              <Image
                src={wikipedia}
                alt="Wikipedia logo"
                width={27}
                height={18}
                priority
              />

              <p className="text-white font-thin leading-none text-lg">More information</p>
            </div>

            <p className="text-white font-bold text-[27px]">
              What's Your Verdict?
            </p>
          </CardContent>
          <CardFooter className="grid grid-cols-2 p-0">
            <Button className="rounded-none p-10 bg-[#3CBBB4CC] hover:bg-[#3CBBB4CC] opacity-85 hover:opacity-100">
              <Image
                src={thumbsUp}
                alt="Thumbs up"
                width={27}
                height={18}
                priority
              />

            </Button>
            <Button className="rounded-none p-10 bg-[#F9AD1D] hover:bg-[#F9AD1D] opacity-85 hover:opacity-100">
              <Image
                src={thumbsDown}
                alt="Thumbs down"
                width={27}
                height={18}
                priority
              />
            </Button>
          </CardFooter>
        </Card>
      </div>

      <footer className='w-full relative flex items-center'>
        <Progress value={22} className="min-h-20"/>
      </footer>
    </header>
  )
}
