import React from 'react'
import { container } from '../layout'
import { recomendationTitle, recomendationItemContainer } from "./recomendation.style"
import CarItem from '../../ui/carItem/CarItem'
import cars from "@/data/CardData.json"

export default function Recomendation() {
  return (
    <section className={container()}>
      <h2 className={recomendationTitle}>Recomendation Car</h2>
      <div className={recomendationItemContainer}>
        {
          cars.cars.map((item, index) => (
            <CarItem car_name={item.name} car_equipment={item.equipment} is_favorite={false} car_fuel={item.fuelCapacity} car_image={item.imageUrl} car_gearbox={item.transmission} car_passenger_quantity={item.passengerCapacity} car_rent_price={item.pricePerDay} />
          ))
        }
      </div>
    </section>
  )
}
