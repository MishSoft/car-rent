"use client";
import { container } from "../layout";
import Button from "../../ui/button/Button";
import CarItem from "../../ui/carItem/CarItem";
import {
  itemsContainer,
  rentalCarsSectionTitle,
  rentalCarsSectionWrapper,
  viewAllItemsButton,
} from "./popularCar.style";
import { useEffect, useState, useMemo } from "react";
import { Car } from "@/app/generated/prisma";
import { useDataFetchStore } from "@/store/useDataFetchStore";

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

export default function PopularCar() {
  const carsContext = useDataFetchStore((state) => state.cars);
  const fetchCarsContext = useDataFetchStore((state) => state.fetchCars);

  useEffect(() => {
    if (carsContext.length === 0) {
      fetchCarsContext();
    }
  }, [carsContext.length, fetchCarsContext]);

  const carData = useMemo(() => {
    return carsContext
      .filter((car) => car.isPopular || car.rentalsCount > 0)
      .sort((a, b) => {
        if (a.isPopular && !b.isPopular) return -1;
        if (!a.isPopular && b.isPopular) return 1;
        return (b.rentalsCount || 0) - (a.rentalsCount || 0);
      })
      .slice(0, 10);
  }, [carsContext]);

  return (
    <section className="my-10">
      <div className={rentalCarsSectionWrapper}>
        <h2 className={rentalCarsSectionTitle}>Popular Car</h2>
        <Button className={viewAllItemsButton}>View All</Button>
      </div>

      <div className={itemsContainer}>

        {carData.map((item) => {
          return (
            <CarItem
              routePath={`/rental-detail/${item.id}`}
              key={item.id}
              car_id={item.id}
              car_name={item.name}
              car_equipment={item.equipment}
              is_favorite={item.isFavorite || false}
              car_fuel={item.fuelCapacity}
              car_gearbox={item.transmission}
              car_passenger_quantity={item.passengerLimit}
              car_rent_price={item.pricePerDay as string}
              car_image={item.imageUrl}
            />
          )
        })}
      </div>
    </section>
  );
}
