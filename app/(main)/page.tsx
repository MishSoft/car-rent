"use client"
import Hero from "../components/layouts/Hero/Hero";
import BookingSelector from "../components/layouts/BookingSelector/BookingSelector";
import PopularCar from "../components/layouts/Popular/PopularCar";
import Recomendation from "../components/layouts/Recomendation/Recomendation";
import PopUp from "../components/ui/popup/PopUp";
import { usePopUpStore } from "@/store/usePopUpStore";

export default function Home() {
  return (
    <main className="py-10 px-15">
      <Hero />
      <BookingSelector />
      <PopularCar />
      <Recomendation />
    </main>
  );
}
