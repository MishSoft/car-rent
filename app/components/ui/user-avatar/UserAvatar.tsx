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

export default function UserAvatar() {

  const handleLogout = async () => {
    await signOut({
      callbackUrl: "/"
    })
  }
  return (
    <div className='relative w-11  h-11 overflow-hidden rounded-full cursor-pointer inline-flex items-center justify-center p-2 transition-colors'>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="rounded-full cursor-pointer">
            <Avatar>
              <AvatarImage src="/avatar/user.png" alt="user-avatar" />
              <AvatarFallback>LR</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className=" border rounded-xl shadow-xl p-5">
          <DropdownMenuGroup>
            <DropdownMenuItem className="cursor-pointer hover:bg-gray-300/20">
              <BadgeCheckIcon />
              Account
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer hover:bg-gray-300/20">
              <CreditCardIcon />
              Billing
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer hover:bg-gray-300/20">
              <BellIcon />
              Notifications
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleLogout} className="cursor-pointer hover:bg-gray-300/20">
            <LogOutIcon />
            Sign Out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
