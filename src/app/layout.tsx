import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BridgeMedKits - Connecting Communities with Medical Supplies',
  description: 'BridgeMedKits is dedicated to providing essential medical supplies to communities in need.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="pt-16"> {/* Add padding-top to account for fixed navbar */}
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
} 