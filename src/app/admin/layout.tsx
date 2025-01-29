'use client'

import { useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import AdminNav from './components/AdminNav'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const isAuthenticated = sessionStorage.getItem('adminAuthenticated')
    if (!isAuthenticated && pathname !== '/admin') {
      router.push('/admin')
    }
  }, [pathname, router])

  if (pathname === '/admin') {
    return children
  }

  return (
    <div>
      <AdminNav />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  )
} 
