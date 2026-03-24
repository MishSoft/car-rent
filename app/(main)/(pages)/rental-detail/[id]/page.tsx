"use client";

import { useEffect, useState } from "react";
import { Car } from "@/app/generated/prisma";
import { Button } from "@/components/ui/button";
import IconButton from "@/app/components/ui/icon-button/icon-button";
import { CiHeart } from "react-icons/ci";
import { TiStarOutline, TiStarFullOutline } from "react-icons/ti";
import { useParams } from "next/navigation";

export default function Page() {
  const params = useParams();
  const id = params.id as string;

  const [car, setCar] = useState<Car | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    async function fetchCar() {
      try {
        const res = await fetch(`/api/cars/${id}`);
        const data = await res.json();

        if (res.ok) {
          setCar(data);
        } else {
          console.error(data.error);
        }
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchCar();
  }, [id]);

  // 🔄 Loading UI
  if (loading) {
    return (
      <div className="p-10 text-center text-gray-500">
        Loading car...
      </div>
    );
  }

  // ❌ Not found
  if (!car) {
    return (
      <div className="p-10 text-center text-red-500">
        Car not found
      </div>
    );
  }

  return (
    <main className="w-full flex flex-col py-10 gap-5 px-6">
      <div className="flex gap-8">

        {/* LEFT - IMAGES */}
        <div className="max-w-[492px] w-full flex flex-col gap-3">
          <div className="bg-blue-400 p-6 rounded-xl text-white">
            <h2 className="text-xl font-semibold">
              Sports car with the best design
            </h2>
            <img
              className="mx-auto object-contain"
              src={car.imageUrl}
              alt={car.name}
            />
          </div>

          <div className="flex gap-2">
            <img className="w-32" src={car.imageUrl} alt="" />
            <img className="w-32" src={car.imageUrl} alt="" />
            <img className="w-32" src={car.imageUrl} alt="" />
          </div>
        </div>

        {/* RIGHT - INFO */}
        <div className="flex flex-col gap-5 p-6 bg-white rounded-xl w-full">

          {/* HEADER */}
          <div className="flex justify-between">
            <div>
              <h2 className="text-2xl font-semibold">{car.name}</h2>

              <div className="flex items-center gap-2 text-yellow-500">
                <TiStarFullOutline />
                <TiStarFullOutline />
                <TiStarFullOutline />
                <TiStarOutline className="text-gray-400" />
                <TiStarOutline className="text-gray-400" />
              </div>
            </div>

            <IconButton icon={<CiHeart />} />
          </div>

          {/* DESCRIPTION */}
          <p className="text-gray-400">
            High-quality rental car with comfort and performance.
          </p>

          {/* DETAILS */}
          <div className="grid grid-cols-2 gap-2 text-sm">
            <p>
              Type: <span className="font-semibold">{car.type}</span>
            </p>
            <p>
              Capacity: <span className="font-semibold">{car.passengerLimit}</span>
            </p>
            <p>
              Transmission: <span className="font-semibold">{car.transmission}</span>
            </p>
            <p>
              Fuel: <span className="font-semibold">{car.fuelCapacity}L</span>
            </p>
          </div>

          {/* PRICE */}
          <div className="flex justify-between items-center">
            <div>
              <h4 className="text-xl font-semibold">
                ${car.pricePerDay}/day
              </h4>
            </div>

            <Button className="bg-blue-500 text-white hover:bg-blue-600">
              Rent Now
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
