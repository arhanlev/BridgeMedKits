'use client'

import React, { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-primary">BridgeMedKits</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary">
              About
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-primary">
              Services
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary">
              Contact
            </Link>
            <button className="bg-primary text-white px-4 py-2 rounded-full hover:bg-opacity-90">
              Donate
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-primary">
              Home
            </Link>
            <Link href="/about" className="block px-3 py-2 text-gray-700 hover:text-primary">
              About
            </Link>
            <Link href="/services" className="block px-3 py-2 text-gray-700 hover:text-primary">
              Services
            </Link>
            <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:text-primary">
              Contact
            </Link>
            <Link href="/donate"className="w-full mt-4 bg-primary text-white px-4 py-2 rounded-full hover:bg-opacity-90">
              Donate
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar 