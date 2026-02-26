import Image from "next/image"

export default function UserAvatar() {
  return (
    <div className='relative w-11 h-11 overflow-hidden rounded-full cursor-pointer inline-flex items-center justify-center p-2 transition-colors'>
      <Image fill src={'/avatar/user.png'} alt="user-avatar" />
    </div>
  )
}
