import { DatePicker } from "../datePicker/DatePicker";
import { LocationPicker } from "../locationPicker/LocationPicker";


export default function SelectField() {
  return (
    <form className="px-12 py-6 w-full gap-4 flex flex-col rounded-[10px] bg-(--card-white-color)">
     <div className="flex items-center gap-2">
        <label className=" w-5 h-5 flex items-center justify-center rounded-full border-4 border-(--active-color)/20">
          <span className="w-full h-full rounded-full  bg-(--active-color)">
          </span>
          <input type="radio" className="hidden" />
        </label>
        <h2 className="text-[16px] font-semibold">Picked-Up</h2>
     </div>
     <div className="flex items-center">
        <div className="flex flex-col gap-2">
          <h2 className="text-[16px] font-bold">Locations</h2>
          <LocationPicker />
        </div>
        <div className="w-1 h-full bg-gray-200" />
        <div className="flex flex-col gap-2">
          <h2 className="text-[16px] font-bold">Date</h2>
          <DatePicker />
        </div>
     </div>
    </form>
  )
}
