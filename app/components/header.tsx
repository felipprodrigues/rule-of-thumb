'use client'

import popeDesktop from '../../public/pope-francis.@2x.png'
import popeMobile from '../../public/pope@mobile.png'
import thumbsUp from '../../public/thumbs-up.svg'
import wikipedia from '../../public/wikipedia.svg'
import thumbsDown from '../../public/thumbs-down.svg'
import {SearchIcon} from 'lucide-react'
import iconHamburguer from '../../public/hamburger.svg'
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
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "./ui/sheet"

import { useState, useEffect } from 'react'
import { useSession, signIn, signOut } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"
import { getInitials } from '../helpers/findInitials'

export default function Header() {
  const [bgImage, setBgImage] = useState('');
  const [progress, setProgress] = useState(22);

  useEffect(() => {
    const storedData = localStorage.getItem("@pope-pool");
    if (storedData) {
      setProgress(JSON.parse(storedData));
    } else {
      setProgress(22);
    }
  }, []);

  const session = useSession()


  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 1024) {
        setBgImage(popeMobile.src);
      } else {
        setBgImage(popeDesktop.src);
      }
    }

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const setProgressWithLocalStorage = (newProgress: number) => {
    localStorage.setItem('@pope-pool', JSON.stringify(newProgress));
    setProgress(newProgress);
  };

  const handleIncrement = () => {
    setProgressWithLocalStorage(Math.min(progress + 1, 100));
  };

  const handleDecrement = () => {
    setProgressWithLocalStorage(Math.max(progress - 1, 0));
  }

  function handleLogIn() {
    signIn()
  }

  function handleLogout() {
    signOut()
  }

  return (
    <header
      className='xl:h-screen w-full bg-cover bg-no-repeat flex flex-col items-center'
      style={{ backgroundImage: `url(${bgImage})`, backgroundPosition: "0 15%"}}
    >
      <div className="w-full flex justify-center bg-gradient-to-b from-black/55 to-transparent">
        <div className="xl:max-w-[75%] object-scale-down max-w-[95%] w-full xl:min-h-48 min-h-32 flex items-center justify-between">
          <h2 className='xl:text-4xl text-2xl text-white'>Rule of thumb.</h2>

          <nav className='xl:max-w-[75%] xl:block hidden'>
            <ul className='flex items-center list-none gap-4'>
              <li>
                <a className="text-white font-light hover:underline  cursor-pointer">Past Trials</a>
              </li>
              <li>
                <a className="text-white font-light hover:underline cursor-pointer">How It Works</a>
              </li>
              <li>
                {session.status === 'authenticated' ? (
                    <Dialog>
                      <DialogTrigger asChild >
                        <Avatar className="cursor-pointer">
                          <AvatarImage src={session?.data?.user?.image ?? ''} />
                          <AvatarFallback>{getInitials(session?.data?.user?.image ?? '')}</AvatarFallback>
                        </Avatar>
                      </DialogTrigger>
                      <DialogContent className="rounded-none">
                        <DialogHeader className="mb-4">
                          <DialogTitle className="text-center w-full ">Log out</DialogTitle>
                          <DialogDescription className="text-center w-full ">
                            <b>Are you sure you want to log out?</b>
                          </DialogDescription>
                        </DialogHeader>
                        <DialogFooter className="md:justify-center flex w-full">
                          <Button type="submit" variant="destructive" className="rounded-none">Cancel</Button>
                          <Button type="submit" variant="outline" onClick={handleLogout} className="rounded-none">Log out</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  ) : (
                    <a className="text-white font-light hover:underline cursor-pointer" onClick={handleLogIn}>Login</a>
                  )}
              </li>
              {session.status === 'authenticated' ? null : (
                <SearchIcon className='text-white ml-4' size={36} />
              )}
            </ul>
          </nav>

          <div className="xl:hidden">
            <Sheet>
              <SheetTrigger>
                <Image
                  src={iconHamburguer}
                  alt="Hamburguer icon"
                  className="xl:text-2xl md:text-xl text-base"
                  width={0}
                  height={0}
                  priority
                />
              </SheetTrigger>
              <SheetContent>
                {session.status === 'authenticated' && (
                  <div className="flex items-center gap-2">
                    <Avatar>
                      <AvatarImage src={session?.data?.user?.image} />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>

                    <span className="text-black font-light">{session?.data?.user?.name}</span>
                  </div>
                )}
                <nav className='py-8'>
                  <ul className='flex flex-col list-none gap-4'>
                    <li className="border-b-[1px] border-slate-200 hover:bg-slate-50 p-2 cursor-pointer">
                      <a className="text-black font-light hover:underline  ">Past Trials</a>
                    </li>
                    <li className="border-b-[1px] border-slate-200 hover:bg-slate-50 p-2 cursor-pointer">
                      <a className="text-black font-light hover:underline ">How It Works</a>
                    </li>
                    <li className="border-b-[1px] border-slate-200 hover:bg-slate-50 p-2 cursor-pointer">
                      <a className="text-black font-light hover:underline ">{session.status === 'authenticated' ? ('Log out'):('Log in')}</a>
                    </li>
                  </ul>
                </nav>
              </SheetContent>
            </Sheet>
          </div>

        </div>
      </div>

      <div className="xl:max-w-[75%] mb-20 max-w-[95%] w-full flex-1 relative">
        <Card className="xl:max-w-[720px] max-w-[50%] backdrop-blur-xl bg-black/25 border-none">
          <CardHeader>
            <p className="text-white font-thin leading-none xl:text-lg md:text-base text-sm">What's your opinion on</p>
            <CardTitle className="font-normal xl:text-6xl text-4xl leading-none text-white mt-0">
              Pope Francis?
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-6">
            <p className="text-white font-thin xl:text-2xl md:text-lg text-base">
              He’s talking tough on clergy sexual abuse, <br />
              or is he just another pervert protector? <br />
              (thumbs down) or a true pedophile <br />
              punishing pontiff? (thumbs up)
            </p>

            <div className='md:flex hidden items-center gap-2'>
              <Image
                src={wikipedia}
                alt="Wikipedia logo"
                width={27}
                height={18}
                priority
              />

              <p className="text-white font-thin leading-none xl:text-lg md:text-base">More information</p>
            </div>

            <p className="text-white font-bold xl:text-3xl md:text-xl text-base">
              What's Your Verdict?
            </p>
          </CardContent>
          <CardFooter className="grid grid-cols-2 p-0">
            <Button onClick={handleIncrement} className="rounded-none xl:p-10 md:p-9 p-8 bg-[#3CBBB4CC] hover:bg-[#3CBBB4CC] opacity-85 hover:opacity-100">
              <Image
                src={thumbsUp}
                alt="Thumbs up"
                width={28}
                height={28}
                priority
              />
            </Button>

            <Button onClick={handleDecrement} className="rounded-none xl:p-10 md:p-9 p-8 bg-[#F9AD1D] hover:bg-[#F9AD1D] opacity-85 hover:opacity-100">
              <Image
                src={thumbsDown}
                alt="Thumbs down"
                width={28}
                height={28}
                priority
              />
            </Button>
          </CardFooter>
        </Card>
      </div>

      <footer className='w-full relative flex items-center'>
        <Progress value={progress} className="xl:min-h-20 md:min-h-11 min-h-9"/>
      </footer>
    </header>
  )
}
