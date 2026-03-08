import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { IoClose } from "react-icons/io5";


export default function PopUp() {
  return (
    <div className='fixed z-50 top-0 left-0 w-full min-h-screen flex items-center justify-center bg-white/20 backdrop-blur-xl'>
      <div className='max-w-100 relative w-full flex flex-col bg-white p-8 rounded-xl shadow-md'>
        <Button variant="ghost" className='bg-red-400 cursor-pointer rounded-full absolute -top-3 -right-3 w-8 h-8'>
          <IoClose size={20} className='text-white' />
        </Button>
        <h2 className='text-2xl text-center font-semibold'>Sign In</h2>
        <form className='w-full flex flex-col gap-5'>
          <div className='flex flex-col gap-5'>
            <label className='text-gray-500'>
              Email
              <Input placeholder='name@example.com' className='border mt-2 py-6 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive' />
            </label>

            <label className='text-gray-500'>
              Password
              <Input placeholder='*********' type="password" className='border mt-2 py-6 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive' />
            </label>
          </div>
          <Button variant="ghost" type="submit" className={'bg-blue-400 cursor-pointer py-3 rounded-md text-white '}>
            Log in
          </Button>
        </form>
        <Link className='pt-5 text-center text-green-300' href={'/register'}>
            Create an account
        </Link>
      </div>
    </div>
  )
}
