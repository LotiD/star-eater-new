'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface Stats {
  totalProjects: number
  totalMessages: number
}

export default function Dashboard() {
  const [stats, setStats] = useState<Stats>({ totalProjects: 0, totalMessages: 0 })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('/api/admin/stats')
        const data = await response.json()
        if (data.success) {
          setStats(data.stats)
        }
      } catch (error) {
        console.error('Erreur lors du chargement des statistiques:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [])

  if (loading) {
    return (
      <div className="text-center">
        <p className="text-xl text-black">Chargement...</p>
      </div>
    )
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-black">Tableau de bord</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link href="/admin/projets" className="block">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2 text-black">Projets</h2>
            <p className="text-4xl font-bold text-purple-900">{stats.totalProjects}</p>
            <p className="mt-2 text-black">Projets publiés</p>
          </div>
        </Link>

        <Link href="/admin/messages" className="block">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2 text-black">Messages</h2>
            <p className="text-4xl font-bold text-purple-900">{stats.totalMessages}</p>
            <p className="mt-2 text-black">Messages reçus</p>
          </div>
        </Link>
      </div>
    </div>
  )
} 