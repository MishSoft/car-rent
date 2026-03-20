"use client"
import CarItem from '@/app/components/ui/carItem/CarItem'
import cars from "@/data/CardData.json"
import BookingSelector from '@/app/components/layouts/BookingSelector/BookingSelector'
import { useState } from 'react'
import ShowMoreButton from '@/app/components/layouts/ShowMoreButton/ShowMoreButton'




export default function page() {
  const [visibleItems, setVisibleItems] = useState(8)
  return (
    <>
      <BookingSelector />

      <div className='w-full
  grid
  [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]
  gap-5'>
        {cars.cars.slice(0, visibleItems).map(item => (
          <CarItem routePath={`/rental-detail/${item.id}`} className='w-full' key={item.name} car_name={item.name} car_equipment={item.equipment} is_favorite={false} car_fuel={item.fuelCapacity} car_gearbox={item.transmission} car_passenger_quantity={item.passengerCapacity} car_rent_price={item.pricePerDay} car_image={item.imageUrl} />
        ))}
      </div>

      {visibleItems < cars.cars.length && (
        <div className='flex flex-col sm:flex-row items-center justify-between gap-4 mt-10 sm:mt-16 lg:mt-20'>
          <ShowMoreButton setIncrementVisibility={() => setVisibleItems(prev => prev + 4)} />
          <span className='text-sm sm:text-base text-(--card-gray-color) font-semibold'>
            {cars.cars.length} Car
          </span>
        </div>
      )}
    </>
  )
}

