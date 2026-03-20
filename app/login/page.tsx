"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { signIn, getSession } from 'next-auth/react'
import Link from 'next/link'
import { useState } from 'react'

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
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')



  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)
    setError('')

    const result = await signIn('credentials', {
      redirect: false,
      email,
      password
    })

    setLoading(false)

    if (result?.error) {
      setError("Invalid Credential")
    } else {
      const session = await getSession()
      if (session?.user?.role === 'ADMIN') {
        window.location.href = "/admin"
      } else {
        window.location.href = "/"
      }
    }
  }


  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50 p-4'>
      <div className='p-8 bg-white max-w-125 w-full rounded-xl shadow-md space-y-6'>
        <div className='space-y-2'>
          <h2 className='text-center text-2xl font-bold'>Register</h2>
          <p className='text-center text-sm text-muted-foreground'>Enter your details to create an account</p>
        </div>

        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          {
            LOGIN_FIELDS.map(field => (
              <div key={field.id} className='w-full space-y-2'>
                <Label htmlFor={field.id}>{field.label}</Label>
                <Input

                  type={field.type}
                  id={field.id}
                  value={field.id === 'email' ? email : password}
                  onChange={e => field.id === 'email' ? setEmail(e.target.value) : setPassword(e.target.value)}
                  placeholder={field.placeholder} />
              </div>
            ))}
          {
            error && <p className='text-red-500 text-sm'>{error}</p>
          }
          <Button disabled={loading} className='w-full sm:col-span-2 mt-2 bg-(--logo-color) cursor-pointer' type="submit">
            {
              loading ? "Sign in..." : "Sign In"
            }
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
