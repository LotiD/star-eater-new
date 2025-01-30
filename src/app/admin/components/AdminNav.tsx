'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'

export default function AdminNav() {
  const router = useRouter()
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleLogout = () => {
    sessionStorage.removeItem('adminAuthenticated')
    router.push('/admin')
  }

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo (modifiable si besoin) */}
          <Link href="/admin/dashboard" className="font-bold text-xl text-purple-900">
            Admin Panel
          </Link>

          {/* Menu burger pour mobile */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6 text-black"
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
            {[
              { href: "/admin/dashboard", label: "Dashboard" },
              { href: "/admin/projets", label: "Projets" },
              { href: "/admin/messages", label: "Messages" }
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-sm font-medium ${
                  pathname === href 
                    ? 'text-purple-900 border-b-2 border-purple-900' 
                    : 'text-gray-600 hover:text-black'
                } transition-colors`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Bouton Déconnexion (desktop) */}
          <button
            onClick={handleLogout}
            className="hidden md:inline-flex items-center px-4 py-2 text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition"
          >
            Déconnexion
          </button>
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="md:hidden py-4 bg-white shadow-lg rounded-lg">
            <div className="flex flex-col space-y-4">
              {[
                { href: "/admin/dashboard", label: "Dashboard" },
                { href: "/admin/projets", label: "Projets" },
                { href: "/admin/messages", label: "Messages" }
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-2 text-center ${
                    pathname === href ? 'text-purple-900 font-semibold' : 'text-gray-600 hover:text-black'
                  }`}
                >
                  {label}
                </Link>
              ))}

              {/* Bouton Déconnexion en mobile */}
              <button
                onClick={() => {
                  handleLogout()
                  setIsMenuOpen(false)
                }}
                className="block w-full text-center px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
              >
                Déconnexion
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
