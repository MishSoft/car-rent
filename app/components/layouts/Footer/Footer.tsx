import React from 'react'
import { container } from '../layout'
import Navigation from '../Nav/Navigation'

export default function Footer() {
  const date = new Date()
  const year = date.getFullYear()
  return (
    <footer className={container(' bg-(--card-white-color)')}>
      <div className='flex md:justify-between  py-5 border-b border-gray-300 items-start gap-12 flex-col md:flex-row'>
        <div className='flex flex-col gap-4 '>
          <h2 className='text-[32px] text-(--logo-color) uppercase font-semibold'>morent</h2>
          <p className='max-w-73 text-[16px] text-(--card-gray-color)'>Our vision is to provide convenience and help increase your sales business.</p>
        </div>

        <Navigation/>
      </div>
      <div className='pt-9 flex  md:flex-row flex-col-reverse gap-5  md:items-center justify-between'>
        <p className='text-[16px] font-semibold '>
          &copy;{year}MORENT.All rights reserved
        </p>

        <div className='flex items-center justify-between gap-15'>
          <a href="#">
            Privacy & Policy
          </a>
          <a href="#">
            Terms & Condition
          </a>
        </div>
      </div>
    </footer>
  )
}

