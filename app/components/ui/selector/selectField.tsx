import { DatePicker } from "../datePicker/DatePicker";
import { LocationPicker } from "../locationPicker/LocationPicker";
import { DatePickerTime } from "../timePicker/TimePicker";
import { selectorForm, selecotrTitleContainer, selectorRadio, selectorRadioSpan, selectorTitle, selectorPickerContainer, selectorPickerItemContainer, selectorPickerItemInner } from "./selector.style";
import { SelectorProps } from "./selector.types";


export default function SelectField({ title, type }: SelectorProps & {type: 'pickup' | 'dropoff'}) {
  return (
    <form className={selectorForm}>
      <div className={selecotrTitleContainer}>
        <div className={selectorRadio}>
          <span className={selectorRadioSpan}>
          </span>
        </div>
        <h2 className={selectorTitle}>{title}</h2>
      </div>
      <div className={selectorPickerContainer}>

        <div className="flex flex-col gap-1 min-w-0">
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
