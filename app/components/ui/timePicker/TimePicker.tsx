"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import { FaAngleDown } from "react-icons/fa6"

export function DatePickerTime() {
  // დროის სელექტორისთვის სასურველია გქონდეს state, რომ ღილაკზე აისახოს
  const [time, setTime] = React.useState("")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="cursor-pointer text-gray-500 font-normal w-full justify-between px-0 gap-1 md:gap-2 hover:bg-transparent"
          variant="ghost"
        >
          <span className="truncate text-[12px] md:text-[14px]">
            {time || "Select time"}
          </span>
          <FaAngleDown className="shrink-0 size-3 md:size-4" />
        </Button>
      </DropdownMenuTrigger>

      {/* Dropdown-ის შიგთავსი რომ მობილურზე ეკრანს არ გასცდეს */}
      <DropdownMenuContent className="flex gap-2 p-2 min-w-[200px] justify-center">
        <DropdownMenuGroup className="flex flex-col items-center gap-1">
          <DropdownMenuLabel className="text-[10px] uppercase text-gray-400">Hours</DropdownMenuLabel>
          <Input maxLength={2} className="text-center w-10 h-10 md:w-12 md:h-12 p-0" placeholder="00" />
        </DropdownMenuGroup>

        <div className="flex items-end pb-2 font-bold">:</div>

        <DropdownMenuGroup className="flex flex-col items-center gap-1">
          <DropdownMenuLabel className="text-[10px] uppercase text-gray-400">Minutes</DropdownMenuLabel>
          <Input maxLength={2} className="text-center w-10 h-10 md:w-12 md:h-12 p-0" placeholder="00" />
        </DropdownMenuGroup>

        <DropdownMenuGroup className="flex flex-col items-center gap-1">
          <DropdownMenuLabel className="text-[10px] uppercase text-gray-400">Period</DropdownMenuLabel>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Input
                value="AM"
                readOnly
                className="cursor-pointer text-center w-10 h-10 md:w-12 md:h-12 p-0 bg-secondary"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => { }}>AM</DropdownMenuItem>
              <DropdownMenuItem onClick={() => { }}>PM</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
