"use client";

import { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MdFavorite } from "react-icons/md";
import IconButton from "../ui/icon-button/icon-button";
import { icon } from "../layouts/Header/header.style";

interface Car {
  id: string;
  name: string;
  type: string;
  pricePerDay: number;
  imageUrl: string;
}

export default function FavoriteSidebar() {
  const [favorites, setFavorites] = useState<Car[]>([]);
  const [loading, setLoading] = useState(false);

  async function fetchFavorites() {
    setLoading(true);
    try {
      const res = await fetch("/api/favorites");
      if (res.ok) {
        const data = await res.json();
        setFavorites(data);
      }
    } catch (err) {
      console.error("Failed to fetch favorites", err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <IconButton 
          className={icon} 
          icon={<MdFavorite size={24} />} 
          onClick={fetchFavorites}
        />
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle>Your Favorites</SheetTitle>
        </SheetHeader>
        <div className="mt-8 space-y-4 overflow-y-auto max-h-[calc(100vh-100px)]">
          {loading ? (
            <p className="text-center text-gray-500">Loading...</p>
          ) : favorites.length === 0 ? (
            <p className="text-center text-gray-500">No favorites yet.</p>
          ) : (
            favorites.map((car) => (
              <div key={car.id} className="flex items-center gap-4 p-3 border rounded-lg hover:shadow-sm transition-shadow">
                <img src={car.imageUrl} alt={car.name} className="w-20 h-12 object-contain" />
                <div className="flex-1">
                  <h4 className="font-semibold text-sm">{car.name}</h4>
                  <p className="text-xs text-gray-500">{car.type}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-sm text-blue-600">${car.pricePerDay}</p>
                  <p className="text-[10px] text-gray-400">/ day</p>
                </div>
              </div>
            ))
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
