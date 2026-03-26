import { FaRegHeart, FaHeart } from "react-icons/fa6";
import { useState } from "react";


import { article, carInfoContainer, carInfoSpan, carRentPriceContainer, carRentPriceDayText, carRentPriceText, defaultFavoriteIcon, favoriteButton, isActiveFavoriteIcon, itemHeader, itemHeaderSpan, itemImage, itemImageContainer, itemTitle, itemTitleContainer, rentalButton } from "./caritem.style";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function CarItem({
  car_name,
  car_equipment,
  is_favorite,
  car_fuel,
  car_gearbox,
  car_passenger_quantity,
  car_rent_price,
  car_image,
  className,
  old_price,
  routePath,
  car_id
}: CarProps) {

  const { data: session } = useSession()
  const route = useRouter()
  const [isFav, setIsFav] = useState(is_favorite);

  const handleFavoriteClick = async () => {
    if (!session?.user) {
        route.push('/login');
        return;
    }
    const previousState = isFav;
    setIsFav(!previousState);
    try {
      const res = await fetch('/api/favorites', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ carId: car_id })
      });
      if (!res.ok) {
        setIsFav(previousState);
      }
    } catch {
      setIsFav(previousState);
    }
  };

  return (
    <article className={article(className)}>
      <div className={itemHeader}>
        <div className={itemTitleContainer}>
          <h2 className={itemTitle}>
            {car_name}
          </h2>
          <span className={itemHeaderSpan}>
            {car_equipment}
          </span>
        </div>
        <Button onClick={handleFavoriteClick} className={favoriteButton}>
          {isFav ? <FaHeart size={20} className={isActiveFavoriteIcon} /> : <FaRegHeart size={20} className={defaultFavoriteIcon} />}
        </Button>
      </div>

      <div className={itemImageContainer}>
        <img className={itemImage} src={car_image} alt={`${car_name} image`} />
      </div>
      <div className={carInfoContainer}>
        <span className={carInfoSpan}>
          <Image width={24} height={24} src={'/icons/gas-station.svg'} alt="Gas Station icon" />
          {car_fuel}L
        </span>

        <span className={carInfoSpan}>
          <Image width={24} height={24} src={'/icons/transmission.svg'} alt="Gas Station icon" />
          {car_gearbox}
        </span>

        <span className={carInfoSpan}>
          <Image width={24} height={24} src={'/icons/profile-2user.svg'} alt="Gas Station icon" />
          {car_passenger_quantity}
        </span>
      </div>

      <div className={carRentPriceContainer}>
        <div>
          <h2 className={carRentPriceText}>
            ${`${car_rent_price}.00/`}
            <span className={carRentPriceDayText}>day</span>
          </h2>
          {
            old_price && <span className="text-gray-400 line-through">${old_price}.00</span>
          }
        </div>
        {
          session?.user ? (
            <Button onClick={() => route.push(routePath || '/')} className={rentalButton}>
              Rental Now
            </Button>
          ) : (
            <Link href={'/login'} className={rentalButton}>
              Rental Now
            </Link>
          )
        }
      </div>
    </article>
  )
}
