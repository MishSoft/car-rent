import React from 'react'

export default function SidebarLoading() {
  return (
    <aside className=" hidden lg:flex
  lg:max-w-[280px]
  xl:max-w-[320px]
  w-full
  flex-col gap-8
  px-6 py-10
  bg-(--card-white-color)">
      <div className="flex flex-col gap-7">
        <span className="text-xs uppercase tracking-widest font-semibold text-(--card-gray-color)">
          type
        </span>
        <div className="flex flex-col gap-[32px]">
          {
            Array.from({length: 6}).map((_, i) => (
              <div key={i}>
                <div className='flex items-center gap-2'>
                  <span className='w-[15px] animate-pulse h-[15px] rounded-full bg-(--loading-color)'></span>
                  <span className='w-[115px] animate-pulse h-[15px] rounded-full bg-(--loading-color)'></span>
                </div>
              </div>
            ))
          }
        </div>
      </div>

      <div className="flex flex-col gap-7">
        <span className="text-xs uppercase tracking-widest font-semibold text-(--card-gray-color)">
          capacity
        </span>
        <div className="flex flex-col gap-[32px]">
          {
            Array.from({ length: 6 }).map((_, i) => (
              <div key={i}>
                <div className='flex items-center gap-2'>
                  <span className='w-[15px] animate-pulse h-[15px] rounded-full bg-(--loading-color)'></span>
                  <span className='w-[115px] animate-pulse h-[15px] rounded-full bg-(--loading-color)'></span>
                </div>
              </div>
            ))
          }
        </div>
      </div>

      <div className="flex flex-col gap-7">
        <span className="text-xs uppercase tracking-widest font-semibold text-(--card-gray-color)">
          price
        </span>
        <div className="flex flex-col gap-3 ">
          <div className='relative animate-pulse w-full after:absolute after:content-[] after:w-[20px] after:top-[-4px] after:right-10 after:h-[20px] after:bg-(--loading-color) after:rounded-full after:border-3 after:border-(--card-white-color)  h-[12px] bg-(--loading-secondary-color) rounded-full'>
            <span className='absolute w-[80%] h-full h-full bg-(--loading-color) rounded-full'></span>
          </div>
          <span className="font-semibold text-(--icon-gray-color)">
            Max. $100.00
          </span>
        </div>
      </div>
    </aside>
  )
}
