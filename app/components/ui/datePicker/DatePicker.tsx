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
import { pickerButton, pickerSpan, pickerIcon } from "../layout/layout"
import { useBookingStore } from "@/store/useLocationStore"

export function DatePicker({ type }: { type: 'pickup' | 'dropoff' }) {

  const date = useBookingStore((state) => state[type].date)
  const setField = useBookingStore((state) => state.setField)

  const handleDateSelect = (newDate: Date | undefined) => {
    if (newDate) {
      setField(type, 'date', format(newDate, "PP"))
    }
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          className={pickerButton}
        >
          <span className={pickerSpan}>
            {date ? format(date, "PP") : "Select date"}
          </span>
          <FaAngleDown className={pickerIcon} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleDateSelect}
          initialFocus
          disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
        />
      </PopoverContent>
    </Popover>
  )
}
