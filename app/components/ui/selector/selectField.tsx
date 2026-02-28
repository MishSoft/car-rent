import { DatePicker } from "../datePicker/DatePicker";
import { LocationPicker } from "../locationPicker/LocationPicker";
import { DatePickerTime } from "../timePicker/TimePicker";


export default function SelectField() {
  return (
    <form className="px-4 z-0 py-5 md:px-12 md:py-6 w-full gap-4 flex flex-col rounded-[10px] bg-(--card-white-color)">
     <div className="flex items-center gap-2">
        <label className=" w-5 h-5 flex items-center justify-center rounded-full border-4 border-(--active-color)/20">
          <span className="w-full h-full rounded-full  bg-(--active-color)">
          </span>
        </label>
        <h2 className="text-[16px] font-semibold">Picked-Up</h2>
     </div>
      <div className="grid grid-cols-3 gap-5 items-center w-full">

        <div className="flex flex-col gap-1 min-w-0">
          <h2 className="text-[12px] md:text-[16px] font-bold">Locations</h2>
          <LocationPicker />
        </div>

        <div className="flex items-center border-l border-gray-200 pl-2 md:pl-4 gap-1 min-w-0">
          <div className="flex flex-col gap-1 w-full">
            <h2 className="text-[12px] md:text-[16px] font-bold">Date</h2>
            <DatePicker />
          </div>
        </div>

        <div className="flex items-center border-l border-gray-200 pl-2 md:pl-4 gap-1 min-w-0">
          <div className="flex flex-col gap-1 w-full">
            <h2 className="text-[12px] md:text-[16px] font-bold">Time</h2>
            <DatePickerTime />
          </div>
        </div>
      </div>
    </form>
  )
}
