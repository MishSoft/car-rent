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
  isAvailable: boolean;
}
import Link from 'next/link';
import { Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

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

  const handleRemoveFavorite = async (carId: string) => {
    try {
      // Toggle favorite back, which removes it and sets isAvailable to false
      const res = await fetch('/api/favorites', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ carId })
      });
      if (res.ok) {
        setFavorites((prev) => prev.filter(c => c.id !== carId));
      }
    } catch {
      // ignore
    }
  };

  const availableFavorites = favorites.filter(car => car.isAvailable);

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
        <div className="mt-8 space-y-4 overflow-y-auto max-h-[calc(100vh-100px)] px-2 pb-4">
          {loading ? (
            <p className="text-center text-gray-500">Loading...</p>
          ) : availableFavorites.length === 0 ? (
            <p className="text-center text-gray-500">No favorites yet.</p>
          ) : (
            availableFavorites.map((car) => (
              <div key={car.id} className="flex flex-col gap-3 p-3 border rounded-lg shadow-sm">
                <div className="flex items-center gap-4">
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
                <div className="flex justify-between items-center mt-2 border-t pt-2 gap-2">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => handleRemoveFavorite(car.id)}
                    className="text-red-500 hover:text-red-600 hover:bg-red-50 flex-1 px-2 h-8"
                  >
                    <Trash2 className="w-4 h-4 mr-1" />
                    Remove
                  </Button>
                  <Link href={`/rental-detail/${car.id}`} className="flex-1">
                    <Button variant="default" size="sm" className="w-full text-xs h-8">
                      Continue to Rental
                    </Button>
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
