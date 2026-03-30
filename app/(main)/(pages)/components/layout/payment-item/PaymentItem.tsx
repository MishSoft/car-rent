"use client";

import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { TiStarFullOutline, TiStarOutline } from "react-icons/ti";
import { useSearchParams } from "next/navigation";
import { Car } from "@/app/generated/prisma";
import { useBookingStore } from "@/store/useLocationStore";

export default function PaymentItem() {
  const searchParams = useSearchParams();
  const carId = searchParams.get('carId');
  const [car, setCar] = useState<Car | null>(null);
  const { pickup, dropoff } = useBookingStore();

  useEffect(() => {
    if (!carId) return;
    async function fetchCar() {
      try {
        const res = await fetch(`/api/cars/${carId}`);
        const data = await res.json();
        if (res.ok) setCar(data);
      } catch (err) {
        console.error("Fetch car error:", err);
      }
    }
    fetchCar();
  }, [carId]);

  let days = 1;
  if (pickup.date && dropoff.date) {
    const diffTime = Math.abs(new Date(dropoff.date).getTime() - new Date(pickup.date).getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays > 0) days = diffDays;
  }

  const subtotal = car ? (car.pricePerDay * days) : 0;
  const tax = 0; // Tax calculation placeholder
  const total = subtotal + tax;

  if (!car) {
    return (
      <article className="flex flex-col bg-white rounded-xl gap-3 p-8">
        <div className="text-gray-500">Please select a car first to view the rental summary.</div>
      </article>
    );
  }

  return (
    <article className="flex flex-col bg-white rounded-xl gap-3 p-8">
      <div>
        <h2 className="text-xl font-semibold">Rental Summary</h2>
        <p className="text-[#90A3BF] text-sm">
          Prices may change depending on the length of the rental and the price
          of your rental car. {days > 1 && `(Renting for ${days} days)`}
        </p>
      </div>
      <div className="flex items-center border-b pb-5 gap-3">
        <div className="bg-[#F6F7F9] rounded-xl flex items-center justify-center p-4 w-[132px] h-[108px]">
          <img src={car.imageUrl} alt={car.name} className="object-cover w-full h-full rounded" />
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-2xl font-semibold">{car.name}</h3>
          <div className="flex items-center">
            <div className="flex items-center gap-1">
              <TiStarFullOutline className="text-yellow-500" />
              <TiStarFullOutline className="text-yellow-500" />
              <TiStarFullOutline className="text-yellow-500" />
              <TiStarFullOutline className="text-yellow-500" />
              <TiStarOutline className="text-gray-400" />
            </div>
            <span className="text-sm text-gray-400">440+ Reviewer</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-[24px] items-center justify-between">
          <h3 className="flex items-center w-full justify-between">Subtotal
            <span>${subtotal.toFixed(2)}</span>
          </h3>

          <h3 className="flex items-center w-full justify-between">Tax
            <span>${tax.toFixed(2)}</span>
          </h3>
        </div>

        <div className="flex items-center bg-[#F6F7F9] justify-between p-2 pl-6 rounded-xl">
          <input 
            type="text" 
            placeholder="Apply promo code" 
            className="bg-transparent outline-none w-full text-sm placeholder:text-gray-500 font-medium" 
          />
          <Button className="text-[#1A202C] cursor-pointer font-semibold hover:bg-gray-200 ml-2 rounded-lg" variant="ghost">Apply now</Button>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <h3 className="flex text-[#1A202C] text-[14px] text-[#90A3BF] flex-col">Total Rental Price <p>Overall price and includes rental discount</p></h3>
        <h4 className="text-2xl font-semibold">${total.toFixed(2)}</h4>
      </div>
    </article>
  );
}
