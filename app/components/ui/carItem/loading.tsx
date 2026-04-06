import React from 'react'
import { FaHeart } from 'react-icons/fa6'
import { FaImage } from "react-icons/fa6";


export default function CarItemLoading() {
  return (
    <article className="w-full h-[388px] flex flex-col justify-between p-[24px] bg-white rounded-xl">
      <div className=" flex items-center justify-between    ">
        <div className="flex flex-col gap-3 justify-between">
          <span className="w-[116px] rounded-full animate-pulse h-[16px] bg-(--loading-color)"></span>
          <span className="w-[116px] rounded-full animate-pulse h-[16px] bg-(--loading-secondary-color)"></span>
        </div>
        <FaHeart size={20}  className="text-[#ED3F3F]" />
      </div>

      <div className="w-full">
        <FaImage size={50} className="mx-auto animate-pulse text-(--loading-color)" />
      </div>
      <div className="flex items-center justify-between">
        <span className='w-[68px] h-[16px] animate-pulse rounded-full bg-(--loading-secondary-color)'></span>
        <span className='w-[68px] h-[16px] animate-pulse rounded-full bg-(--loading-secondary-color)'></span>
        <span className='w-[68px] h-[16px] animate-pulse rounded-full bg-(--loading-secondary-color)'></span>
      </div>

      <div className="flex items-center justify-between">
        <div className='flex flex-col gap-3'>
          <span className='w-[116px] rounded-full animate-pulse h-[16px] bg-(--loading-color)'></span>
          <span className='w-[116px] rounded-full animate-pulse h-[16px] bg-(--loading-secondary-color)'></span>
        </div>
        <span className='w-[116px] h-[40px] animate-pulse bg-(--loading-color) rounded-xl'></span>
      </div>
    </article>
  )
}
