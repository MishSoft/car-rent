import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label' // Shadcn-ის Label გამოიყენე
import { cn } from '@/lib/utils'
import { FileDiff } from 'lucide-react'
import Link from 'next/link'

const REGISTER_FIELDS = [
  {
    id: 'name',
    label: "name",
    type: "text",
    placeholder: "Joe",
    cols: 1
  },

  {
    id: 'lastname',
    label: "LastName",
    type: "text",
    placeholder: "Doe",
    cols: 1
  },

  {
    id: 'email',
    label: "Email",
    type: "email",
    placeholder: "name@example.com",
    cols: 2
  },

  {
    id: 'password',
    label: "Password",
    type: "password",
    placeholder: "********",
    cols: 1
  },

  {
    id: 'repeat_password',
    label: "Repeat Password",
    type: "password",
    placeholder: "********",
    cols: 1
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

        <form className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          {
            REGISTER_FIELDS.map(field => (
              <div key={field.id} className={cn(
                "space-y-2",
                field.cols === 2 && "sm:col-span-2" // თუ cols არის 2, გაწელე
              )}>
                <Label htmlFor={field.id}>
                  {field.label}
                </Label>
                <Input type={field.type} id={field.id} placeholder={field.placeholder} />
              </div>
            ))
          }


          <Button className='w-full sm:col-span-2 mt-2' type="submit">
            Sign Up
          </Button>
          <p className='text-center col-span-2 text-gray-600'>
            If you have already account <Link className='text-blue-500' href={'/login'}>
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}
