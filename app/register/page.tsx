'use client'

import { useState } from "react"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import Link from 'next/link'

const REGISTER_FIELDS = [
  { id: 'name', label: "Name", type: "text", placeholder: "Joe", cols: 1 },
  { id: 'lastname', label: "Last Name", type: "text", placeholder: "Doe", cols: 1 },
  { id: 'email', label: "Email", type: "email", placeholder: "name@example.com", cols: 2 },
  { id: 'password', label: "Password", type: "password", placeholder: "********", cols: 1 },
  { id: 'repeat_password', label: "Repeat Password", type: "password", placeholder: "********", cols: 1 }
] as const

export default function RegisterPage() {
  const [form, setForm] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({ ...prev, [e.target.id]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (form.password !== form.repeat_password) {
      alert("Passwords do not match")
      return
    }



    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${form.name} ${form.lastname}`,
          email: form.email,
          password: form.password
        })
      })

      const data = await res.json()

      if (!res.ok) {
        alert(data.error || "Registration failed")
        return
      }

    alert("Account created! Please login.")
    // Optional: redirect to login page
    window.location.href = "/login"

  } catch (err) {
    console.error("Something went wrong ", err)
  }
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50 p-4'>
      <div className='p-8 bg-white max-w-125 w-full rounded-xl shadow-md space-y-6'>
        <div className='space-y-2'>
          <h2 className='text-center text-2xl font-bold'>Register</h2>
          <p className='text-center text-sm text-muted-foreground'>Enter your details to create an account</p>
        </div>

        <form className='grid grid-cols-1 sm:grid-cols-2 gap-4' onSubmit={handleSubmit}>
          {REGISTER_FIELDS.map(field => (
            <div key={field.id} className={cn("space-y-2", field.cols === 2 && "sm:col-span-2")}>
              <Label htmlFor={field.id}>{field.label}</Label>
              <Input type={field.type} id={field.id} placeholder={field.placeholder} onChange={handleChange} />
            </div>
          ))}

          <Button className='w-full bg-black sm:col-span-2 mt-2' type="submit">Sign Up</Button>
          <p className='text-center col-span-2 text-gray-600'>
            If you already have an account{" "}
            <Link className='text-blue-500' href={'/login'}>Sign In</Link>
          </p>
        </form>
      </div>
    </div>
  )
}
