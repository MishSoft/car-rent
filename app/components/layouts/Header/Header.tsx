import Link from "next/link";
import Input from "../../ui/input/Input";
import IconButton from "../../ui/icon-button/icon-button";
import { MdFavorite } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";
import UserAvatar from "../../ui/user-avatar/UserAvatar";
import { headerContainer, headerWrapper, icon, iconContainer, iconsWrapper, logoText, searchInputContainer } from "./header.style";
import { container } from "../layout";
import Button from "../../ui/button/Button";

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
          <Input />
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
          <Button className={"bg-(--logo-color) px-8 py-2.5 cursor-pointer hover:bg-(--active-color) duration-200 hover:scale-105 rounded-full text-md font-semibold text-(--card-white-color)"}>
            Sign In
          </Button>
          {/* <UserAvatar /> */}
        </div>
      </div>
    </header>
  );
}
