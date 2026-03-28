import { create } from "zustand";

export interface FavoriteCar {
  id: string;
  name: string;
  type: string;
  pricePerDay: string | number;
  imageUrl: string;
  isAvailable: boolean;
  equipment?: string;
  fuelCapacity?: string;
  transmission?: string;
  passengerLimit?: number;
  oldPrice?: string | null;
}

interface FavoritesStore {
  favorites: FavoriteCar[];
  isLoaded: boolean;
  setFavorites: (cars: FavoriteCar[]) => void;
  addFavorite: (car: FavoriteCar) => void;
  removeFavorite: (carId: string) => void;
}

export const useFavoritesStore = create<FavoritesStore>((set) => ({
  favorites: [],
  isLoaded: false,
  setFavorites: (cars) => set({ favorites: cars, isLoaded: true }),
  addFavorite: (car) => set((state) => {
    if (state.favorites.some(c => c.id === car.id)) return state;
    return { favorites: [...state.favorites, car] };
  }),
  removeFavorite: (carId) => set((state) => ({
    favorites: state.favorites.filter(c => c.id !== carId)
  }))
}));
