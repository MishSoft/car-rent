"use client"
import Button from '../../ui/button/Button'
import Image from "next/image"
import { PromoCardProps } from './PromoCard.types';
import { getPromoCardStyles, imageContainer, imageStyle, promoCardBtn, promoCardDescription, promoCardLeftSide, promoCardTitle } from './promoCard.style';
import PromoCardLoading from './loading';
import { useEffect, useState } from 'react';

export default function PromoCard({ title, description, image, bgImage, buttonText, variant ="primary", className }: PromoCardProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])


  if (!mounted) {
    return <PromoCardLoading />
  }

  return (
    <div
      style={{ backgroundImage: `url(${bgImage})` }}
      className={getPromoCardStyles(variant)}>
      <div className={promoCardLeftSide}>
        <h2 className={promoCardTitle}>
          {title}
        </h2>
        <p className={promoCardDescription}>
          {description}
        </p>
        <Button className={promoCardBtn(variant)} >
          {
            buttonText
          }
        </Button>

      </div>
      <div className={imageContainer}>
        <Image
          fill
          className={imageStyle}
          src={image}
          alt="Car image"
          priority
        />
      </div>
    </div>
  );
}
