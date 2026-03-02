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
import { pickerButton, pickerSpan, pickerIcon, pickerDropDown } from "../layout/layout"
import { useBookingStore } from "@/store/useLocationStore"



interface CitiesProps {
  name_ka: string;
  name_en: string,
  region: string
}

export function LocationPicker({type}:{type: "pickup" | "dropoff"}) {
  // const [position, setPosition] = React.useState("Select your city")
  const location = useBookingStore((state) => state[type].location)
  const setField = useBookingStore((state) => state.setField)

  const handleCityChange = (value: string) => {
    setField(type, 'location', value)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>

        <Button
          className={pickerButton}
          variant="ghost"
        >
          <span className={pickerSpan}>
            {
              location || "Select your city"
            }
          </span>
          <FaAngleDown className={pickerIcon} />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className={pickerDropDown}>
        <DropdownMenuRadioGroup value={location} onValueChange={handleCityChange}>
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
