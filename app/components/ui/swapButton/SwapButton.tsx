"use client"
import { FaExchangeAlt } from "react-icons/fa";
import { swapButton, swapIcon } from './swapButton.style';
import Button from "../button/Button";
import { useBookingStore } from "@/store/useLocationStore";
import SwapButtonLoading from "./loading";
import { useEffect, useState } from "react";


export default function SwapButton() {
    const [mounted, setMounter] = useState(false)
    const swap = useBookingStore((state) => state.swapLocations)

    useEffect(() => {
      setMounter(true)
    }, [])

    if (!mounted) {
      return <SwapButtonLoading />
    }


  return (
    <Button onClick={swap} type="button" className={swapButton} >
      <FaExchangeAlt size={24} className={swapIcon} />
    </Button>
  )
}

