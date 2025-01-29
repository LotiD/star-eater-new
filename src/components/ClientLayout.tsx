'use client'

import Navigation from "@/components/Navigation"
import { usePathname } from "next/navigation"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isAdmin = pathname?.startsWith('/admin')

  return (
    <>
      {!isAdmin && <Navigation />}
      <main className="min-h-screen bg-gray-50">
        {children}
      </main>
    </>
  )
} 