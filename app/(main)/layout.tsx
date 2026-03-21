import React from 'react'
import Header from '../components/layouts/Header/Header'
import Footer from '../components/layouts/Footer/Footer'
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"

export default async function layout({children}: {children: React.ReactNode}) {
  const session = await getServerSession(authOptions);

  if (session?.user?.role === "ADMIN") {
    redirect("/admin");
  }

  return (
    <div>
      <Header/>
      {children}
      <Footer />
    </div>
  )
}
