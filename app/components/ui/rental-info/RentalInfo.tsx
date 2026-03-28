import React from 'react'
import SelectField from '../selector/selectField'
import PickIcon from '../pick-icon/PickIcon'
import { LocationPicker } from '../locationPicker/LocationPicker'
import { DatePicker } from '../datePicker/DatePicker'
import { DatePickerTime } from '../timePicker/TimePicker'

export default function RentalInfo() {
  return (
    <div className="flex flex-col">
      <fieldset className="flex flex-col gap-10">
        <div className="flex items-end justify-between">
          <legend className="flex flex-col gap-1 font-semibold text-[16px]">
            Rental Info
            <small className='font-normal text-[14px] text-gray-400'>Please select your rental date</small>
          </legend>
          <span className='text-[14px] font-normal text-gray-400'>Step 2 of 4</span>
        </div>
        <div className="flex flex-col gap-10">
          <div className='flex items-center gap-2'>
            <PickIcon/>
            <h2 className='font-semibold'>Pick - Up</h2>
          </div>
          <div className='grid grid-cols-2 gap-[24px]'>
            <div className='flex flex-col gap-[16px]'>
              <label htmlFor="location" className='font-semibold'>Location</label>
              <div className='px-[32px] py-2 bg-[#F6F7F9] rounded-xl'>
                <LocationPicker type='pickup' />
              </div>
            </div>

            <div className='flex flex-col gap-[16px]'>
              <label htmlFor="location" className='font-semibold'>Date</label>
              <div className='px-[32px] py-2 bg-[#F6F7F9] rounded-xl'>
                <DatePicker type={'pickup'}/>
              </div>
            </div>

            <div className='flex flex-col gap-[16px]'>
              <label htmlFor="location" className='font-semibold'>Time</label>
              <div className='px-[32px] py-2 bg-[#F6F7F9] rounded-xl'>
                <DatePickerTime type={'pickup'}/>
              </div>
            </div>
          </div>


        </div>
        <div className="flex flex-col gap-10">
          <div className='flex items-center gap-2'>
            <PickIcon />
            <h2 className='font-semibold'>Drop-Off</h2>
          </div>
          <div className='grid grid-cols-2 gap-[24px]'>
            <div className='flex flex-col gap-[16px]'>
              <label htmlFor="location" className='font-semibold'>Location</label>
              <div className='px-[32px] py-2 bg-[#F6F7F9] rounded-xl'>
                <LocationPicker type='dropoff' />
              </div>
            </div>

            <div className='flex flex-col gap-[16px]'>
              <label htmlFor="location" className='font-semibold'>Date</label>
              <div className='px-[32px] py-2 bg-[#F6F7F9] rounded-xl'>
                <DatePicker type={'dropoff'} />
              </div>
            </div>

            <div className='flex flex-col gap-[16px]'>
              <label htmlFor="location" className='font-semibold'>Time</label>
              <div className='px-[32px] py-2 bg-[#F6F7F9] rounded-xl'>
                <DatePickerTime type={'dropoff'} />
              </div>
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  )
}
