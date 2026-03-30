import { create } from "zustand";

interface BookingInfo {
  location: string;
  date: Date | undefined;
  time: string;
}


interface BookingStore {
  pickup: BookingInfo,
  dropoff: BookingInfo,
  setField: (type: 'pickup' | 'dropoff', field: keyof BookingInfo, value: any) => void
  swapLocations: () => void
}

export const useBookingStore = create<BookingStore>((set) => ({
  pickup: { location: "", date: undefined, time: "12:00 AM" },
  dropoff: { location: "", date: undefined, time: "12:00 AM" },

  setField: (type, field, value) =>
    set((state) => ({
      [type]: { ...state[type], [field]: value },
    })),

  swapLocations: () =>
    set((state) => ({
      pickup: { ...state.pickup, location: state.dropoff.location },
      dropoff: { ...state.dropoff, location: state.pickup.location },
    })),
}));
