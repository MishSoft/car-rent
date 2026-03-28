import { create } from "zustand";

export type CarData = {
  id: string;
  name: string;
  equipment: string;
  fuelCapacity: string;
  transmission: string;
  passengerLimit: number;
  pricePerDay: string | number;
  oldPrice?: string | null;
  imageUrl: string;
  isAvailable: boolean;
  isPopular?: boolean;
  isRecommended?: boolean;
  rentalsCount: number;
  isFavorite?: boolean;
  type?: string;
};

interface DataFetchStore {
  cars: CarData[];
  isLoading: boolean;
  error: string | null;
  fetchCars: () => Promise<void>;
}

export const useDataFetchStore = create<DataFetchStore>((set) => ({
  cars: [],
  isLoading: false,
  error: null,
  fetchCars: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await fetch("/api/cars");
      if (!response.ok) throw new Error("Failed to fetch cars");
      const data = await response.json();
      set({ cars: data.cars || [], isLoading: false });
    } catch (error: any) {
      set({ error: error.message, isLoading: false });
    }
  },
}));
