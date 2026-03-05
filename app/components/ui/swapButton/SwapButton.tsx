"use client"
import { FaExchangeAlt } from "react-icons/fa";
import { swapButton, swapIcon } from './swapButton.style';
import Button from "../button/Button";
import { useBookingStore } from "@/store/useLocationStore";


export default function SwapButton() {
  const swap = useBookingStore((state) => state.swapLocations)


  return (
    <Button onClick={swap} type="button" className={swapButton} >
      <FaExchangeAlt size={24} className={swapIcon} />
    </Button>
  )
}
