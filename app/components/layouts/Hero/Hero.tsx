import PromoCard from '../../ui/PromoCard/PromoCard'
import { getPromoCardStyles } from '../../ui/PromoCard/promoCard.style'
import { container } from '../layout'
import { herContainer, heroInner, heroWrapper, proCardContainer } from './hero.style'

export default function Hero() {
  return (
    <div className={`${herContainer} ${container}`}>
      <div className={heroWrapper} />
      <section className={heroInner}>
        <div className={proCardContainer}>
          <PromoCard
            variant='primary'
            buttonText='Rental Car'
            className={getPromoCardStyles('primary')}
            title={'The Best Platform for Car Rental'}
            description={'Ease of doing a car rental safely and reliably. Of course at a low price.'}
            image={'/images/car1.png'}
            bgImage={'/effects/BG.svg'}
          />
        </div>
        <div className={proCardContainer}>
          <PromoCard
            variant='secondary'
            buttonText='Rental Car'
            className={getPromoCardStyles('secondary')}
            title={'Easy way to rent a car at a low price'}
            description={'Providing cheap car rental services and safe and comfortable facilities.'}
            image={'/images/car2.png'}
            bgImage={'/effects/BG2.svg'}
          />
        </div>
      </section>
    </div>
  )
}
