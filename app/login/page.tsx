import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label' // Shadcn-ის Label გამოიყენე
import Link from 'next/link'

const LOGIN_FIELDS = [
  {
    id: 'email',
    label: "Email",
    type: "email",
    placeholder: "name@example.com"
  },
  {
    id: "password",
    label: "Password",
    type: "password",
    placeholder: "********"
  }
] as const

export default function RegisterPage() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50 p-4'>
      <div className='p-8 bg-white max-w-125 w-full rounded-xl shadow-md space-y-6'>
        <div className='space-y-2'>
          <h2 className='text-center text-2xl font-bold'>Register</h2>
          <p className='text-center text-sm text-muted-foreground'>Enter your details to create an account</p>
        </div>

        <form className='flex flex-col gap-4'>
          {
            LOGIN_FIELDS.map(field => (
              <div key={field.id} className='w-full space-y-2'>
                <Label htmlFor={field.id}>{field.label}</Label>
                <Input type={field.type} id={field.id} placeholder={field.placeholder} />
              </div>
            ))}

          <Button className='w-full sm:col-span-2 mt-2' type="submit">
            Sign In
          </Button>

          <p className='text-center col-span-2 text-gray-600'>
            If you don't have account <Link className='text-blue-500' href={'/register'}>
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}
