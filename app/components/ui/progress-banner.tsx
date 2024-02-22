"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-4 w-full overflow-hidden bg-white/35",
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-black/35 transition-all relative"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    >
      <p className='md:text-2xl text-base text-white fixed md:right-[-9.5rem] right-[-6rem] md:gap-20 gap-10 xl:top-[27.5%] bottom-[0.5] inline-flex font-light items-center'>
        CLOSING IN
        <span className="md:text-4xl text-2xl text-black"><b>22</b>days</span>
      </p>
      <div className="absolute"></div>
      <div className="before-element absolute right-[-13px] xl:top-[38%] bottom-2  w-0 h-0 border-t-[10px] border-t-transparent border-l-[13px] border-l-black/35 border-b-[10px] border-b-transparent" />
    </ProgressPrimitive.Indicator>
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
