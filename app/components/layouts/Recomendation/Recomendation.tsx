"use client"
import React, { useEffect, useState } from 'react'
import { container } from '../layout'
import { recomendationTitle, recomendationItemContainer } from "./recomendation.style"
import CarItem from '../../ui/carItem/CarItem'
import cars from "@/data/CardData.json"
import ShowMoreButton from '../ShowMoreButton/ShowMoreButton'
import { Car } from '@/app/generated/prisma'

type Cars = {
  id: string;
  name: string;
  equipment: string;
  fuelCapacity: string;
  transmission: string;
  passengerLimit: number;
  pricePerDay: string;
  oldPrice: string;
  imageUrl: string;
  isAvailable: boolean;
  isPopular?: boolean;
  rentalsCount: number;
  isFavorite?: boolean;
};

export default function Recomendation() {
  const [visibleItems, setVisibleItems] = useState(8)
  const [carData, setCarData] = useState<Cars[]>([]);

  useEffect(() => {
    async function fetchCars() {
      const res = await fetch("/api/cars");
      const data = await res.json();

      const recommendedCars = data.cars
        .filter((car: Car) => car.isRecommended || car.rentalsCount > 0)
        .sort((a: Car, b: Car) => {
          if (a.isRecommended && !b.isRecommended) return -1;
          if (!a.isRecommended && b.isRecommended) return 1;
          return b.rentalsCount - a.rentalsCount;
        })
        .slice(0, 10);


      setCarData(recommendedCars);
    }

    fetchCars();
  }, []);

  return (
    <section className="py-10">
      <h2 className={recomendationTitle}>Recomendation Car</h2>
      <div className={recomendationItemContainer}>
        {
          carData.slice(0, visibleItems).map((item, index) => (
            <CarItem key={index} old_price={item.oldPrice} car_id={item.id} car_name={item.name} car_equipment={item.equipment} is_favorite={item.isFavorite || false} car_fuel={item.fuelCapacity} car_image={item.imageUrl} car_gearbox={item.transmission} car_passenger_quantity={item.passengerLimit} car_rent_price={item.pricePerDay} />
          ))
        }
      </div>
      {
        visibleItems < carData.length && (
          <div className='flex items-center justify-between mt-20 px-5 py-2.5'>
            <ShowMoreButton setIncrementVisibility={() => setVisibleItems(prev => prev + 4)} />
            <span className='text-[15px] border text-(--card-gray-color) font-semibold'>{carData.length} Car</span>
          </div>
        )
      }
    </section>
  )
}

