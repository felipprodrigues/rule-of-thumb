import { differenceInDays } from "date-fns"

export default function differenceInTime(time: string | undefined) {
  if(!time) return

  const diff = differenceInDays(new Date(), time as string)

  const diffInYears = Math.round(diff / 365)

  return diffInYears
}
