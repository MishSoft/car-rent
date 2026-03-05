"use client"
import  { useState } from 'react'
import { container } from '../layout'
import Button from '../../ui/button/Button'
import CarItem from '../../ui/carItem/CarItem'
import { itemsContainer, rentalCarsSectionTitle, rentalCarsSectionWrapper, viewAllItemsButton } from './popularCar.style'

export default function PopularCar() {
  const [isFavorite, setIsFavorite] = useState(false)
  return (
    <section className={container()}>
      <div className={rentalCarsSectionWrapper}>
        <h2 className={rentalCarsSectionTitle}>Popular Car</h2>
        <Button className={viewAllItemsButton}>
          View All
        </Button>
      </div>
      <div className={itemsContainer}>
        {
          [1, 2, 3, 4].map((item: number) => {
            console.log(item)
            return (
              <CarItem key={item} car_name={'Koenigsegg'} car_equipment={'Sport'} is_favorite={false} car_fuel={'90'} car_gearbox={'Manual'} car_passenger_quantity={'2'} car_rent_price={'99'} car_image={'/images/car1.png'} data={item} />
            )
          })
        }
      </div>
    </section>
  )
}
