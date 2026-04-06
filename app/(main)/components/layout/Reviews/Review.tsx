"use client"
import { Button } from '@/components/ui/button'
import { TiStarFullOutline, TiStarOutline } from 'react-icons/ti'
import ReviewLoading from './loading'
import { useEffect, useState } from 'react'
import * as S from './review.style'

export default function Review() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])


  if (!mounted) {
    return <ReviewLoading />
  }

  return (
    <article className={S.reviewArticle}>
      <div className={S.reviewHeader}>
        <h2 className={S.reviewTitle}>Reviews</h2>
        <span className={S.reviewCount}>13</span>
      </div>
      <div className={S.reviewsContainer}>
        <div className={S.reviewItemContainer}>
          <div className={S.reviewItemHeader}>
            <div className={S.reviewUserContainer}>
              <img className={S.reviewUserImage} src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg" alt="" />
              <div className={S.reviewUserInfo}>
                <h3 className={S.reviewUserName}>Alex Stanton</h3>
                <span className={S.reviewUserRole}>CEO at Bukalapak</span>
              </div>
            </div>
            <div className={S.reviewDateContainer}>
              <span className={S.reviewDate}>21 July 2022</span>
              <div className={S.reviewStarsContainer}>
                <TiStarFullOutline />
                <TiStarFullOutline />
                <TiStarFullOutline />
                <TiStarFullOutline />
                <TiStarOutline className={S.reviewStarOutline} />
              </div>
            </div>


          </div>
          <div className={S.reviewContentContainer}>
            <p className={S.reviewText}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. A iure rem dolore illum ab ducimus debitis deleniti natus dicta deserunt error reiciendis vitae accusamus blanditiis expedita eos, molestiae aspernatur? Nulla?
            </p>
            <Button className={S.reviewReadMoreButton}>Read More</Button>
          </div>
        </div>
      </div>
    </article>
  )
}
