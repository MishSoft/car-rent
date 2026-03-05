import Image from "next/image";
import Hero from "./components/layouts/Hero/Hero";
import BookingSelector from "./components/layouts/BookingSelector/BookingSelector";
import PopularCar from "./components/layouts/Popular/PopularCar";

export default function Home() {
  return (
    <div>
      <Hero />
      <BookingSelector />
      <PopularCar />
    </div>
  );
}
