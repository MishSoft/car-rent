"use client"
import Link from "next/link";
import IconButton from "../../ui/icon-button/icon-button";
import { MdFavorite } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";
import UserAvatar from "../../ui/user-avatar/UserAvatar";
import { headerContainer, headerWrapper, icon, iconColor, iconContainer, iconsWrapper, inputContainer, inputStyle, inputWrapper, logoText, searchInputContainer, settingButton } from './header.style';
import { container } from "../layout";
import { FaUser } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { VscSettings } from "react-icons/vsc";
import { Input } from "@/components/ui/input";
import { useSession } from "next-auth/react"
import { Button } from "@/components/ui/button";
import FavoriteSidebar from "../../sidebars/FavoriteSidebar";
import NotificationSidebar from "../../sidebars/NotificationSidebar";

export default function Header() {
  const { data: session } = useSession()
  return (
    <header className={container(headerContainer)}>
      <div
        className={headerWrapper}
      >
        <Link href="/">
          <h1 className={logoText}>
            morent
          </h1>
        </Link>

        <div className={searchInputContainer}>
          <div className={inputContainer}>
            <div className={inputWrapper}>
              <CiSearch size={25} className={iconColor} />

              <Input
                type="text"
                className={inputStyle}
                placeholder="Search something here"
                aria-label="search"
              />
            </div>

            <Link href={'/search'} className={settingButton}>
              <VscSettings size={20} className={iconColor} />
            </Link>
          </div>
        </div>

        <div className={iconsWrapper}>
          <div className={iconContainer}>
            <FavoriteSidebar />
            {
              session?.user && <NotificationSidebar />
            }
            {/* <IconButton
              className={icon}
              icon={<IoIosSettings size={24} />}
            /> */}
          </div>

          {
            session?.user ? (
              <UserAvatar />
            ) : (
              <Button
                onClick={() => window.location.href = '/login'}
                className="bg-(--logo-color)">
                Sign In
              </Button>
            )
          }
        </div>
      </div>
    </header>
  );
}
