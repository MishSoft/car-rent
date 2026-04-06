import { FaRegHeart, FaHeart } from "react-icons/fa6";
import { useState } from "react";


import { article, carInfoContainer, carInfoSpan, carRentPriceContainer, carRentPriceDayText, carRentPriceText, defaultFavoriteIcon, favoriteButton, isActiveFavoriteIcon, itemHeader, itemHeaderSpan, itemImage, itemImageContainer, itemTitle, itemTitleContainer, rentalButton } from "./caritem.style";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useFavoritesStore } from "@/store/useFavoritesStore";
import CarItemLoading from "./loading";


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

  const { data: session, status } = useSession()
  const route = useRouter()
  const [isFavLocal, setIsFavLocal] = useState(is_favorite);

  const favorites = useFavoritesStore((state) => state.favorites);
  const isLoaded = useFavoritesStore((state) => state.isLoaded);
  const addFavorite = useFavoritesStore((state) => state.addFavorite);
  const removeFavorite = useFavoritesStore((state) => state.removeFavorite);



  // Use global sync if initialized, otherwise local state
  const isFav = isLoaded ? favorites.some((c) => c.id === car_id) : isFavLocal;

  const handleFavoriteClick = async () => {
    if (!session?.user) {
        route.push('/login');
        return;
    }

    const previousState = isFav;
    setIsFavLocal(!previousState);

    if (!previousState && car_id) {
       addFavorite({
         id: car_id,
         name: car_name || "",
         type: car_equipment || "",
         equipment: car_equipment,
         fuelCapacity: car_fuel,
         transmission: car_gearbox,
         passengerLimit: car_passenger_quantity,
         pricePerDay: car_rent_price,
         oldPrice: old_price,
         imageUrl: car_image || "",
         isAvailable: true
       });
    } else if (car_id) {
       removeFavorite(car_id);
    }

    try {
      const res = await fetch('/api/favorites', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ carId: car_id })
      });
      if (!res.ok) {
        setIsFavLocal(previousState);
        if (previousState && car_id) addFavorite({ id: car_id, name: car_name || "", type: car_equipment || "", imageUrl: car_image || "", pricePerDay: car_rent_price, isAvailable: true });
        else if (car_id) removeFavorite(car_id);
      }
    } catch {
      setIsFavLocal(previousState);
      if (previousState && car_id) addFavorite({ id: car_id, name: car_name || "", type: car_equipment || "", imageUrl: car_image || "", pricePerDay: car_rent_price, isAvailable: true });
      else if (car_id) removeFavorite(car_id);
    }
  };

  if (status === "loading") {
    return <CarItemLoading />
  }

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
        <Button variant="link" onClick={handleFavoriteClick} className={favoriteButton}>
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
