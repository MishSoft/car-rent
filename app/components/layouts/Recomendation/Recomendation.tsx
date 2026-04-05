"use client"
import React, { useEffect, useState } from 'react'
import { container } from '../layout'
import { recomendationTitle, recomendationItemContainer } from "./recomendation.style"
import CarItem from '../../ui/carItem/CarItem'
import cars from "@/data/CardData.json"
import ShowMoreButton from '../ShowMoreButton/ShowMoreButton'
import { Car } from '@/app/generated/prisma'
import { useDataFetchStore } from "@/store/useDataFetchStore";
import CarItemLoading from '../../ui/carItem/loading';

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
  const carsContext = useDataFetchStore((state) => state.cars);
  const fetchCarsContext = useDataFetchStore((state) => state.fetchCars);
  const isLoading = useDataFetchStore((state) => state.isLoading);

  useEffect(() => {
    if (carsContext.length === 0) {
      fetchCarsContext();
    }
  }, [carsContext.length, fetchCarsContext]);

  const carData = React.useMemo(() => {
    return carsContext
      .filter((car) => car.isRecommended || car.rentalsCount > 0)
      .sort((a, b) => {
        if (a.isRecommended && !b.isRecommended) return -1;
        if (!a.isRecommended && b.isRecommended) return 1;
        return (b.rentalsCount || 0) - (a.rentalsCount || 0);
      })
      .slice(0, 10);
  }, [carsContext]);

  return (
    <section className="py-10">
      <h2 className={recomendationTitle}>Recomendation Car</h2>
      <div className={recomendationItemContainer}>
        {isLoading
          ? Array.from({ length: 8 }).map((_, index) => <CarItemLoading key={index} />)
          : carData.slice(0, visibleItems).map((item, index) => (
            <CarItem routePath={`/rental-detail/${item.id}`} key={index} old_price={item.oldPrice as string} car_id={item.id} car_name={item.name} car_equipment={item.equipment} is_favorite={item.isFavorite || false} car_fuel={item.fuelCapacity} car_image={item.imageUrl} car_gearbox={item.transmission} car_passenger_quantity={item.passengerLimit} car_rent_price={item.pricePerDay as string} />
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

