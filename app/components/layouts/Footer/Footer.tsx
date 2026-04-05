"use client"
import { useEffect, useState } from 'react'
import { container } from '../layout'
import Navigation from '../Nav/Navigation'
import { footerBottom, footerBottomLinks, footerBottomText, footerContainer, footerDescription, footerLogo, footerText, footerWrapper } from './footer.style'
import FooterLoading from './loading'

export default function Footer() {
  const [mounted, setMounted] = useState(false)
  const date = new Date()
  const year = date.getFullYear()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <FooterLoading />
  }

  return (
    <footer className={container(footerContainer)}>
      <div className={footerWrapper}>
        <div className={footerText}>
          <h2 className={footerLogo}>morent</h2>
          <p className={footerDescription}>Our vision is to provide convenience and help increase your sales business.</p>
        </div>

        <Navigation/>
      </div>
      <div className={footerBottom}>
        <p className={footerBottomText}>
          &copy;{year}MORENT.All rights reserved
        </p>

        <div className={footerBottomLinks}>
          <a href="#">
            Privacy & Policy
          </a>
          <a href="#">
            Terms & Condition
          </a>
        </div>
      </div>
    </footer>
  )
}

