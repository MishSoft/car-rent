import Image from "next/image"
// <Image fill src={'/avatar/user.png'} alt="user-avatar" />
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  BadgeCheckIcon,
  BellIcon,
  CreditCardIcon,
  LogOutIcon,
} from "lucide-react"


import { signOut } from "next-auth/react"
import { userAvatar, userAvatarContent, userAvatarItem, userAvatarTrigger } from "./userAvatar.style"

export default function UserAvatar() {

  const handleLogout = async () => {
    await signOut({
      callbackUrl: "/"
    })
  }
  return (
    <div className={userAvatar}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className={userAvatarTrigger}>
            <Avatar>
              <AvatarImage src="/avatar/user.png" alt="user-avatar" />
              <AvatarFallback>LR</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className={userAvatarContent}>
          <DropdownMenuGroup>
            <DropdownMenuItem className={userAvatarItem}>
              <BadgeCheckIcon />
              Account
            </DropdownMenuItem>
            <DropdownMenuItem className={userAvatarItem}>
              <CreditCardIcon />
              Billing
            </DropdownMenuItem>
            <DropdownMenuItem className={userAvatarItem}>
              <BellIcon />
              Notifications
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleLogout} className={userAvatarItem}>
            <LogOutIcon />
            Sign Out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
