import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

import ClientLayout from "./ClientLayout"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Annie's Wellness Sanctuary Spa",
  description: "Your Mobile Spa Experience – Relax, Rejuvenate, Revitalize",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}



import './globals.css'