"use client"
import { useEffect, useState } from "react";
import { DatePicker } from "../datePicker/DatePicker";
import { LocationPicker } from "../locationPicker/LocationPicker";
import PickIcon from "../pick-icon/PickIcon";
import { DatePickerTime } from "../timePicker/TimePicker";
import SelectorLoading from "./loading";
import { selectorForm, selecotrTitleContainer, selectorTitle, selectorPickerContainer, selectorPickerItemContainer, selectorPickerItemInner, selectorPickerItemInnerContainer } from "./selector.style";
import { SelectorProps } from "./selector.types";


export default function SelectField({ title, type }: SelectorProps & {type: 'pickup' | 'dropoff'}) {
  const [mounted, setMounter] = useState(false)

  useEffect(() => {
    setMounter(true)
  }, [])

  if (!mounted) {
    return <SelectorLoading />
  }

  return (
    <form className={selectorForm}>
      <div className={selecotrTitleContainer}>
        <PickIcon />
        <h2 className={selectorTitle}>{title}</h2>
      </div>
      <div className={selectorPickerContainer}>

        <div className={selectorPickerItemInnerContainer}>
          <h2 className={selectorPickerItemInner}>Locations</h2>
          <LocationPicker type={type} />
        </div>

        <div className={selectorPickerItemContainer}>
          <div className={selectorPickerItemInner}>
            <h2 className={selectorPickerItemInner}>Date</h2>
            <DatePicker type={type} />
          </div>
        </div>

        <div className={selectorPickerItemContainer}>
          <div className={selectorPickerItemInner}>
            <h2 className={selectorPickerItemInner}>Time</h2>
            <DatePickerTime type={type} />
          </div>
        </div>
      </div>
    </form>

  )
}
