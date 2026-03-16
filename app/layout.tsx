// app/layout.tsx
import type { Metadata } from "next"
import "./globals.css"
import localFont from 'next/font/local'
import SessionProviderWrapper from "./provider/SessionProviderWrapper"

const plusJakarta = localFont({
  src: [
    {
      path: '../public/fonts/PlusJakartaSans-VariableFont_wght.ttf',
      style: 'normal',
    },
    {
      path: '../public/fonts/PlusJakartaSans-Italic-VariableFont_wght.ttf',
      style: 'italic',
    },
  ],
  variable: '--font-plus-jakarta',
})

export const metadata: Metadata = {
  title: "Morent Car Rental",
  description: "Browse and rent cars easily",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${plusJakarta.variable} antialiased`}>
        <SessionProviderWrapper>{children}</SessionProviderWrapper>
      </body>
    </html>
  )
}
