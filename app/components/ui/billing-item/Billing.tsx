"use client";

import { Input } from "@/components/ui/input";
import { usePaymentStore } from "@/store/usePaymentStore";

export default function Billing() {
  const { payment, setField } = usePaymentStore();

  return (
    <div className="flex flex-col">
      <fieldset className="flex flex-col gap-10">
        <div className="flex items-end justify-between">
          <legend className="flex flex-col gap-1 font-semibold text-[16px]">
            Billing Info
            <small className='font-normal text-[14px] text-gray-400'>Please enter your billing info</small>
          </legend>
          <span className='text-[14px] font-normal text-gray-400'>Step 1 of 4</span>
        </div>
        <div className="grid grid-cols-2 gap-[24px]">
          <div className="flex flex-col gap-[16px]">
            <label className="font-semibold" htmlFor="name">Name</label>
            <Input className="px-[32px] py-6 bg-[#F6F7F9] rounded-xl" type="text" placeholder="Your name" value={payment.userName} onChange={(e) => setField("userName", e.target.value)} />
          </div>
          <div className="flex flex-col gap-[16px]">
            <label className="font-semibold" htmlFor="phone">Phone Number</label>
            <Input className="px-[32px] py-6 bg-[#F6F7F9] rounded-xl" type="tel" placeholder="Phone number" value={payment.userPhone} onChange={(e) => setField("userPhone", e.target.value)} />
          </div>
          <div className="flex flex-col gap-[16px]">
            <label className="font-semibold" htmlFor="address">Address</label>
            <Input className="px-[32px] py-6 bg-[#F6F7F9] rounded-xl" type="text" placeholder="Address" value={payment.userAddress} onChange={(e) => setField("userAddress", e.target.value)} />
          </div>
          <div className="flex flex-col gap-[16px]">
            <label className="font-semibold" htmlFor="town">Town / City</label>
            <Input className="px-[32px] py-6 bg-[#F6F7F9] rounded-xl" type="text" placeholder="Town City" value={payment.userTown} onChange={(e) => setField("userTown", e.target.value)} />
          </div>
        </div>
      </fieldset>
    </div>
  )
}
