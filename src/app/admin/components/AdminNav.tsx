'use client'

import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'

export default function AdminNav() {
  const router = useRouter()
  const pathname = usePathname()

  const handleLogout = () => {
    sessionStorage.removeItem('adminAuthenticated')
    router.push('/admin')
  }

  return (
    <nav className="bg-white shadow-md mb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8">
            <Link 
              href="/admin/dashboard" 
              className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                pathname === '/admin/dashboard' 
                  ? 'border-purple-900 text-black' 
                  : 'border-transparent text-gray-500 hover:text-black'
              }`}
            >
              Dashboard
            </Link>
            <Link 
              href="/admin/projets" 
              className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                pathname === '/admin/projets' 
                  ? 'border-purple-900 text-black' 
                  : 'border-transparent text-gray-500 hover:text-black'
              }`}
            >
              Projets
            </Link>
            <Link 
              href="/admin/messages" 
              className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                pathname === '/admin/messages' 
                  ? 'border-purple-900 text-black' 
                  : 'border-transparent text-gray-500 hover:text-black'
              }`}
            >
              Messages
            </Link>
          </div>
          <button
            onClick={handleLogout}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
          >
            Déconnexion
          </button>
        </div>
      </div>
    </nav>
  )
} 