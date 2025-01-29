'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="font-bold text-xl text-purple-900">
            STAR EATER
          </Link>

          {/* Menu burger pour mobile */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Menu desktop */}
          <div className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              className="text-black hover:text-purple-900 transition-colors"
            >
              Accueil
            </Link>
            <Link 
              href="/projets" 
              className="text-black hover:text-purple-900 transition-colors"
            >
              Projets
            </Link>
            <Link 
              href="/contact" 
              className="text-black hover:text-purple-900 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="md:hidden py-4 bg-white">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-black hover:text-purple-900 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link 
                href="/projets" 
                className="text-black hover:text-purple-900 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Projets
              </Link>
              <Link 
                href="/contact" 
                className="text-black hover:text-purple-900 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 