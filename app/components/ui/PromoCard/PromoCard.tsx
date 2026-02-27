import Button from '../../ui/button/Button'
import Image from "next/image"
import { PromoCardProps } from './PromoCard.types';
import { imageContainer, imageStyle, promoCardBtn, promoCardDescription, promoCardLeftSide, promoCardTitle } from './promoCard.style';

export default function PromoCard({ title, description, image, bgImage, buttonText, variant ="primary", className }: PromoCardProps) {

  return (
    <div
      style={{ backgroundImage: `url(${bgImage})` }}
      className={className}>
      <div className={promoCardLeftSide}>
        <h2 className={promoCardTitle}>
          {title}
        </h2>
        <p className={promoCardDescription}>
          {description}
        </p>
        <Button
          className={promoCardBtn(variant || 'primary')}
          title={buttonText}
        />
      </div>
      <div className={imageContainer}>
        <Image
          fill
          className={`${imageStyle} ${imageStyle}`}
          src={image}
          alt="Car image"
          priority
        />
      </div>
    </div>
  );
}
