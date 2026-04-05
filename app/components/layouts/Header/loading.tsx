"use client"
import { headerContainer, headerWrapper, iconContainer, iconsWrapper, loadingButton, loadingIcon, loadingIconText, loadingInput, loadingInputIcon, loadingInputText, loadingInputWrapper, loadingLogo, searchInputContainer } from './header.style'
import { container } from '../layout'
import { usePathname } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { MdFavorite } from 'react-icons/md'
import { IoNotifications } from 'react-icons/io5'
import { FaUser } from "react-icons/fa6";

export default function HeaderLoading() {
  const {data: session} = useSession()
  const pathname = usePathname()
  return (
    <header className={container(headerContainer)}>
      <div
        className={headerWrapper}
      >
        <div className={loadingLogo}></div>

        {
          pathname !== "/payment" && (
            <div className={searchInputContainer}>
              <div className={loadingInput}>
                <div className={loadingInputWrapper}>
                  <span className={loadingInputIcon}></span>
                  <span className={loadingInputText}></span>
                </div>
              </div>
            </div>
          )
        }


        <div className={iconsWrapper}>
          <div className={iconContainer}>
            <span className={loadingIcon}>
              <MdFavorite size={24} className='text-[#85A8F8]' />
            </span>
            {
              session?.user && (
                <span className={loadingIcon}>
                  <IoNotifications size={24} className='text-[#85A8F8]' />
                </span>
              )
            }
          </div>

          {
            session?.user ? (
              <span className={loadingIcon}>
                <FaUser size={24} className={loadingIconText} />
              </span>
            ) : (
                <span className={loadingButton}></span>
            )
          }
        </div>
      </div>
    </header>
  )
}
