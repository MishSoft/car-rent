import { FaRegHeart, FaHeart } from "react-icons/fa6";
import { FaGasPump } from "react-icons/fa";
import { TbManualGearbox } from "react-icons/tb";
import { FaUsers } from "react-icons/fa6";

import Button from "../button/Button";
import { article, carInfoContainer, carInfoSpan, carRentPriceContainer, carRentPriceDayText, carRentPriceText, defaultFavoriteIcon, favoriteButton, isActiveFavoriteIcon, itemHeader, itemHeaderSpan, itemImage, itemImageContainer, itemTitle, itemTitleContainer, rentalButton } from "./caritem.style";


export default function CarItem({
  car_name,
  car_equipment,
  is_favorite,
  car_fuel,
  car_gearbox,
  car_passenger_quantity,
  car_rent_price,
  car_image,
}: CarProps) {

  return (
    <article className={article}>
      <div className={itemHeader}>
        <div className={itemTitleContainer}>
          <h2 className={itemTitle}>
            {car_name}
          </h2>
          <span className={itemHeaderSpan}>
            {car_equipment}
          </span>
        </div>
        <Button className={favoriteButton}>
          {is_favorite ? <FaHeart size={20} className={isActiveFavoriteIcon} /> : <FaRegHeart size={20} className={defaultFavoriteIcon} />}
        </Button>
      </div>

      <div className={itemImageContainer}>
        <img className={itemImage} src={car_image} alt={`${car_name} image`} />
      </div>
      <div className={carInfoContainer}>
        <span className={carInfoSpan}>
          <FaGasPump className="size-5" />
          {car_fuel}L
        </span>

        <span className={carInfoSpan}>
          <TbManualGearbox className="size-5" />
          {car_gearbox}
        </span>

        <span className={carInfoSpan}>
          <FaUsers className="size-5" />
          {car_passenger_quantity}
        </span>
      </div>

      <div className={carRentPriceContainer}>
        <h2 className={carRentPriceText}>
          ${`${car_rent_price}.00/`}
          <span className={carRentPriceDayText}>day</span>
        </h2>
        <Button className={rentalButton}>
          Rental Now
        </Button>
      </div>
    </article>
  )
}
