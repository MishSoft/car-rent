"use client"
import React, { useState } from 'react'
import { container } from '../layout'
import { recomendationTitle, recomendationItemContainer } from "./recomendation.style"
import CarItem from '../../ui/carItem/CarItem'
import cars from "@/data/CardData.json"
import ShowMoreButton from '../ShowMoreButton/ShowMoreButton'

export default function Recomendation() {
  const [visibleItems, setVisibleItems] = useState(8)



  return (
    <section className={container()}>
      <h2 className={recomendationTitle}>Recomendation Car</h2>
      <div className={recomendationItemContainer}>
        {
          cars.cars.slice(0, visibleItems).map((item, index) => (
            <CarItem key={index} old_price={item.oldPrice} car_name={item.name} car_equipment={item.equipment} is_favorite={false} car_fuel={item.fuelCapacity} car_image={item.imageUrl} car_gearbox={item.transmission} car_passenger_quantity={item.passengerCapacity} car_rent_price={item.pricePerDay} />
          ))
        }
      </div>
      {
        visibleItems < cars.cars.length && (
          <div className='flex items-center justify-between mt-20 px-5 py-2.5'>
            <ShowMoreButton setIncrementVisibility={() => setVisibleItems(prev => prev + 4)} />
            <span className='text-[15px] text-(--card-gray-color) font-semibold'>{cars.cars.length} Car</span>
          </div>
        )
      }
    </section>
  )
}
