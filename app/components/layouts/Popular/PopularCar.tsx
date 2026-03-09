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
import cars from "@/data/CardData.json";
import { useEffect, useState } from "react";

type Cars = {
  name: string;
  equipment: string;
  fuelCapacity: string;
  transmission: string;
  passengerCapacity: string;
  pricePerDay: string;
  oldPrice: string;
  imageUrl: string;
  isAvailable: boolean;
  isPopular?: boolean;
};

export default function PopularCar() {
  const [carData, setCarData] = useState<Cars[]>([]);
  useEffect(() => {
    const popularCars = cars.cars.filter((car) => car.isPopular);
    setCarData(popularCars);
  }, []);

  return (
    <section className={container()}>
      <div className={rentalCarsSectionWrapper}>
        <h2 className={rentalCarsSectionTitle}>Popular Car</h2>
        <Button className={viewAllItemsButton}>View All</Button>
      </div>

      <div className={itemsContainer}>
        {carData.map((item, index) => (
          <CarItem
            key={index}
            car_name={item.name}
            car_equipment={item.equipment}
            is_favorite={false}
            car_fuel={item.fuelCapacity}
            car_gearbox={item.transmission}
            car_passenger_quantity={item.passengerCapacity}
            car_rent_price={item.pricePerDay}
            car_image={item.imageUrl}
          />
        ))}
      </div>
    </section>
  );
}
