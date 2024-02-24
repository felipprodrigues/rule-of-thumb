'use client'

import peoplePicture from '../../public/bg-people.@2x.png'
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogClose
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useState } from 'react';

export default function SubmitCard() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const { toast } = useToast()

  function resetInputFields() {
    setName('')
    setEmail('')
  }

  return (
    <div className='xl:gap-10 md:gap-8 gap-4 flex md:flex-row flex-col items-center justify-center backdrop-sepia-0 bg-white/80 bg-cover bg-no-repeat bg-center md:p-6 px-10 py-6 bg-blend-overlay'
      style={{ backgroundImage: `url(${peoplePicture.src}) ` }}
    >
      <p className="font-normal text-[#464646] text-2xl md:text-left text-center md:w-auto w-full">Is there anyone else you would want us to add?</p>

      <Dialog>
        <DialogTrigger asChild >
          <Button className="xl:w-[450px] md:w-[225px] w-full xl:p-8 md:p-6 p-8 rounded-none bg-transparent hover:bg-transparent xl:text-2xl text-xl font-normal border-2 border-[#333333] text-[#333333]">
            Submit a name
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Your Voice Matters!</DialogTitle>
          <DialogDescription>
            <p>Join the ranks of decision-makers shaping our platform's future!</p>
            <br/>
            <p>Let's expand our pool of inspiring personalities together! Drop your suggestions below and be part of the movement </p>
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value={name} required onChange={(e) => setName(e.target.value)} placeholder="Barack Obama" className="col-span-3 rounded-none" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Email
            </Label>
            <Input id="username" value={email} required onChange={(e) => setEmail(e.target.value)} placeholder="your-email@email.com" className="col-span-3 rounded-none" />
          </div>
        </div>
        <DialogFooter className="md:justify-center flex w-full">
          <DialogClose asChild>
            <Button type="button" variant="outline" className="rounded-none"
              onClick={() => {
                resetInputFields();
                toast({
                  title: "Wow! Thanks a lot for your suggestion! 🎉",
                  description: 'Your suggestion brings even more excitement to our community. Keep them coming!',
                })
              }}
            >
              Submit
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
      </Dialog>
    </div>
  );
}

