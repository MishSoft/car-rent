"use client"

import * as React from "react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { FaAngleDown } from "react-icons/fa6"

export function DatePicker() {
  const [date, setDate] = React.useState<Date>()

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          className="cursor-pointer  text-gray-400 font-normal w-full justify-between px-0 gap-1 md:gap-2 hover:bg-transparent"
        >
          <span className="truncate text-[12px] md:text-[14px]">
            {date ? format(date, "PP") : "Select date"}
          </span>
          <FaAngleDown className="shrink-0 size-3 md:size-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
