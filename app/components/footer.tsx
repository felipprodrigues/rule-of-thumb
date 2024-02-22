import React from 'react'
import facebookIcon from '../../public/facebook.svg'
import twitterIcon from '../../public/twitter.svg'
import { Button } from './ui/button'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="mb-[10rem] border-t-black flex  w-full border-t-[1px] border-dashed h-20">
      <nav className=' flex items-end justify-between w-full'>
        <ul className='flex items-center list-none gap-4'>
          <li>
            <a className="text-[#333333] font-normal hover:underline  cursor-pointer">Terms and Conditions</a>
          </li>
          <li>
            <a className="text-[#333333] font-normal hover:underline cursor-pointer">Privacy Policy</a>
          </li>
          <li>
            <a className="text-[#333333] font-normal hover:underline cursor-pointer">Contact Us</a>
          </li>
        </ul>

        <ul className='flex items-center list-none gap-4'>
          <li>
            <span className="text-[#333333] font-normal hover:underline  cursor-pointer">Follow us</span>
          </li>
          <li>
            <Button className="bg-transparent p-0 hover:bg-transparent" asChild>
              <a href="https://www.facebook.com/formulamonks/" target="_blank" rel="noopener noreferrer">
                <Image
                  src={facebookIcon}
                  alt="Facebook Icon"
                  width={24}
                  height={24}
                  priority
                />
              </a>
            </Button>
          </li>
          <li>
            <Button className="bg-transparent p-0 hover:bg-transparent" asChild>
              <a href="https://twitter.com/FormulaMonks" target="_blank" rel="noopener noreferrer">
                <Image
                  src={twitterIcon}
                  alt="Twitter Icon"
                  width={24}
                  height={24}
                  priority
                />
              </a>
            </Button>

          </li>
        </ul>
      </nav>

    </footer>
  )
}
