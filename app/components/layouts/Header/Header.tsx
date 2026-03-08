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
import Button from "../../ui/button/Button";
import { CiSearch } from "react-icons/ci";
import { VscSettings } from "react-icons/vsc";
import { Input } from "@/components/ui/input";

export default function Header() {
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

            <button className={settingButton}>
              <VscSettings size={25} className={iconColor} />
            </button>
          </div>
        </div>

        <div className={iconsWrapper}>
          <div className={iconContainer}>
            <IconButton
              className={icon}
              icon={<MdFavorite size={24} />}
            />
            <IconButton
              className={icon}
              icon={<IoNotifications size={24} />}
              badge
            />
            <IconButton
              className={icon}
              icon={<IoIosSettings size={24} />}
            />
          </div>

          <UserAvatar />
        </div>
      </div>
    </header>
  );
}
