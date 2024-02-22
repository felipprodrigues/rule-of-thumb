import React from 'react'
import facebookIcon from '../../public/facebook.svg'
import twitterIcon from '../../public/twitter.svg'
import { Button } from './ui/button'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="border-t-black flex  w-full border-t-[1px] border-dashed ">
      <nav className=' flex items-end justify-between w-full md:mt-5 mb-10 mt-2'>
        <ul className='flex md:items-center items-start md:flex-row flex-col list-none gap-4'>
          <li>
            <a className="text-[#333333] font-normal hover:underline text-base cursor-pointer">Terms and Conditions</a>
          </li>
          <li>
            <a className="text-[#333333] font-normal hover:underline text-base cursor-pointer">Privacy Policy</a>
          </li>
          <li>
            <a className="text-[#333333] font-normal hover:underline text-base cursor-pointer">Contact Us</a>
          </li>
        </ul>

        <ul className='flex items-center md:flex-row flex-col list-none md:gap-4'>
          <li>
            <span className="text-[#333333] font-normal hover:underline  cursor-pointer">Follow us</span>
          </li>

          <ul className="flex gap-3">
            <li>
              <Button className="bg-transparent p-0 hover:bg-transparent" asChild>
                <a href="https://www.facebook.com/formulamonks/" target="_blank" rel="noopener noreferrer">
                  <Image
                    src={facebookIcon}
                    alt="Facebook Icon"
                    className="xl:text-2xl md:text-xl text-base"
                      width={0}
                      height={0}
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
                    className="xl:text-2xl md:text-xl text-base"
                      width={0}
                      height={0}
                    priority
                  />
                </a>
              </Button>
            </li>
          </ul>
        </ul>
      </nav>

    </footer>
  )
}
