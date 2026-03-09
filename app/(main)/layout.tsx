import React from 'react'
import Header from '../components/layouts/Header/Header'
import Footer from '../components/layouts/Footer/Footer'

export default function layout({children}: {children: React.ReactNode}) {
  return (
    <div>
      <Header/>
      {children}
      <Footer />
    </div>
  )
}
