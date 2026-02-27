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
        <Button className="w-full flex items-center gap-10" variant="ghost">{position} <FaAngleDown/></Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-32">
        <DropdownMenuGroup>
          <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>

            {
              Cities.cities.map((item: CitiesProps) => {
                return (
                  <DropdownMenuRadioItem value={item.name_en}>
                    {item.name_en}
                  </DropdownMenuRadioItem>
                )
              })
            }
          </DropdownMenuRadioGroup>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

