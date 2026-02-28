"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Cities from "@/data/Cities.json"
import { FaAngleDown } from "react-icons/fa6";



interface CitiesProps {
  name_ka: string;
  name_en: string,
  region: string
}

export function LocationPicker() {
  const [position, setPosition] = React.useState("Select your city")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>

        <Button
          className="cursor-pointer text-gray-500 gap-1 md:gap-2 justify-between w-full px-0 h-auto font-normal hover:bg-transparent"
          variant="ghost"
        >
          <span className=" text-[12px] md:text-[14px]">
            {position}
          </span>
          <FaAngleDown className="shrink-0 size-3 md:size-4" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="min-w-32">
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          {Cities.cities.map((item: CitiesProps) => (
            <DropdownMenuRadioItem key={item.name_en} value={item.name_en}>
              {item.name_en}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
