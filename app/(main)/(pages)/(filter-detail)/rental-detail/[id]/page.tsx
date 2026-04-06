"use client";

import { useEffect, useState } from "react";
import { Car } from "@/app/generated/prisma";
import { Button } from "@/components/ui/button";
import IconButton from "@/app/components/ui/icon-button/icon-button";
import { CiHeart } from "react-icons/ci";
import { TiStarOutline, TiStarFullOutline } from "react-icons/ti";
import { useParams } from "next/navigation";
import Review from "@/app/(main)/components/layout/Reviews/Review";
import { FaAngleDown } from "react-icons/fa";
import Recomendation from "@/app/components/layouts/Recomendation/Recomendation";
import Link from "next/link";
import RentalDetailLoading from "../loading";

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

  return (
    <main className="w-full flex flex-col py-2 gap-5 px-6">
      {loading ? (
        <RentalDetailLoading />
      ) : !car ? (
        <div className="p-10 text-center text-red-500">
          Car not found
        </div>
      ) : (
        <div className="flex gap-8 flex-col sm:flex-row">

        {/* LEFT - IMAGES */}
        <div className="max-w-123 w-full flex flex-col gap-3">
          <div className="bg-blue-400 p-10 rounded-xl text-white">
            <img
              className="w-full h-50 object-contain mx-auto"
              src={car.imageUrl}
              alt={car.name}
            />
          </div>

          <div className="flex gap-2 items-center justify-between">
            <img className="w-full h-20 md:h-25 object-contain sm:object-cover border-2 border-blue-400 rounded-xl" src={car.imageUrl} alt="" />
            <img className="w-full h-20 md:h-25 object-contain sm:object-cover border-2  rounded-xl" src={car.imageUrl} alt="" />
            <img className="w-full h-20 md:h-25 object-contain sm:object-cover border-2  rounded-xl" src={car.imageUrl} alt="" />
          </div>
        </div>

        {/* RIGHT - INFO */}
        <div className="flex flex-col justify-between gap-5 p-6 bg-white rounded-xl w-full">

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
          <div className="grid grid-cols-2 gap-5 text-sm">
            <p className="flex items-center  justify-between">
              Type: <span className="font-semibold">{car.type}</span>
            </p>
            <p className="flex items-center  justify-between">
              Capacity: <span className="font-semibold">{car.passengerLimit}</span>
            </p>
            <p className="flex items-center  justify-between">
              Transmission: <span className="font-semibold">{car.transmission}</span>
            </p>
            <p className="flex items-center  justify-between">
              Fuel: <span className="font-semibold">{car.fuelCapacity}L</span>
            </p>
          </div>

          {/* PRICE */}
          <div className="flex justify-between items-center">
            <div>
              <h4 className="text-xl flex flex-col font-semibold">
                ${car.pricePerDay}.00/day
                <span className="text-gray-400 text-sm line-through">
                  $80.00
                </span>
              </h4>
            </div>

            <Link href={`/payment?carId=${car.id}`}>
              <Button className="bg-blue-500 text-white hover:bg-blue-600">
                Rent Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
      )}

      {/* Reviews */}
      <div className="bg-white flex flex-col  p-5 rounded-xl">
        <Review />

        <Button className="text-gray-500 flex items-center gap-2 mt-5 cursor-pointer">
          Show All
          <FaAngleDown size={20} />
        </Button>
      </div>

      <Recomendation />
    </main>
  );
}
