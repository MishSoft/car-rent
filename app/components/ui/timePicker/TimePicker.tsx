"use client"
import { useState, useMemo } from "react"
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
import { pickerButton, pickerSpan, pickerIcon, pickerDropDown } from "../layout/layout"
import { timePickerGroup, timePickerLabel, timePickerInput } from "./timePicker.style"
import { useBookingStore } from "@/store/useLocationStore"

type Period = "AM" | "PM";

interface TimeData {
  hours: string;
  minutes: string;
  period: Period;
}

export function DatePickerTime({ type }: { type: 'pickup' | 'dropoff' }) {

  const timeValue = useBookingStore((state) => state[type].time) || "12:00 AM";
  const setField = useBookingStore((state) => state.setField);

  const timeData = useMemo(() => {
    const [t, period] = timeValue.split(" ");
    const [hours, minutes] = t.split(":");
    return { hours, minutes, period: period as "AM" | "PM" };
  }, [timeValue]);

  const handleUpdate = (updates: { hours?: string, minutes?: string, period?: string }) => {
    const { hours, minutes, period } = { ...timeData, ...updates };
    const newTime = `${hours.padStart(2, '0')}:${minutes.padStart(2, '0')} ${period}`;
    setField(type, 'time', newTime);
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className={pickerButton} variant="ghost">
          <span className={pickerSpan}>{timeValue}</span>
          <FaAngleDown className={pickerIcon} />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className={pickerDropDown}>
        <DropdownMenuGroup className={timePickerGroup}>
          <DropdownMenuLabel className={timePickerLabel}>Hours</DropdownMenuLabel>
          <Input
            type="number"
            min={1}
            max={12}
            value={timeData.hours}
            onChange={(e) => handleUpdate({ hours: e.target.value })}
            className={timePickerInput}
            placeholder="12"
          />
        </DropdownMenuGroup>

        <div className="flex items-end pb-2 font-bold">:</div>

        <DropdownMenuGroup className={timePickerGroup}>
          <DropdownMenuLabel className={timePickerLabel}>Minutes</DropdownMenuLabel>
          <Input
            type="number"
            min={0}
            max={59}
            value={timeData.minutes}
            onChange={(e) => handleUpdate({ minutes: e.target.value })}
            className={timePickerInput}
            placeholder="00"
          />
        </DropdownMenuGroup>

        <DropdownMenuGroup className={timePickerGroup}>
          <DropdownMenuLabel className={timePickerLabel}>Period</DropdownMenuLabel>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Input value={timeData.period} readOnly className={`${timePickerInput} cursor-pointer`} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => handleUpdate({ period: "AM" })}>AM</DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleUpdate({ period: "PM" })}>PM</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
