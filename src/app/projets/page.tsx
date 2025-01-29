'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { PrismaClient } from '@prisma/client'

interface Project {
  id: number
  title: string
  category: string
  year: number
  synopsis: string
  image: string
  slug: string
}

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Tous')
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/projects')
        const data = await response.json()
        if (data.success) {
          setProjects(data.projects)
        }
      } catch (error) {
        console.error('Erreur lors du chargement des projets:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  const filteredProjects = projects.filter(project => 
    selectedCategory === 'Tous' ? true : project.category === selectedCategory
  )

  if (loading) {
    return (
      <div className="min-h-screen py-16 flex items-center justify-center">
        <div className="text-xl text-black">Chargement des projets...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-black">Nos Projets</h1>
        
        {/* Filtres */}
        <div className="mb-8 flex justify-center gap-4">
          <button 
            onClick={() => setSelectedCategory('Tous')}
            className={`px-4 py-2 rounded-full transition-colors ${
              selectedCategory === 'Tous' 
                ? 'bg-purple-900 text-white' 
                : 'border border-purple-900 text-purple-900 hover:bg-purple-100'
            }`}
          >
            Tous
          </button>
          <button 
            onClick={() => setSelectedCategory('Roman de fiction')}
            className={`px-4 py-2 rounded-full transition-colors ${
              selectedCategory === 'Roman de fiction' 
                ? 'bg-purple-900 text-white' 
                : 'border border-purple-900 text-purple-900 hover:bg-purple-100'
            }`}
          >
            Fiction
          </button>
          <button 
            onClick={() => setSelectedCategory('Essai Pratique')}
            className={`px-4 py-2 rounded-full transition-colors ${
              selectedCategory === 'Essai Pratique' 
                ? 'bg-purple-900 text-white' 
                : 'border border-purple-900 text-purple-900 hover:bg-purple-100'
            }`}
          >
            Essai Pratique
          </button>
        </div>

        {/* Liste des projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Link href={`/projets/${project.slug}`} key={project.id} className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="text-sm text-purple-600 font-semibold">{project.category}</span>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-purple-900 text-black">{project.title}</h3>
                  <p className="mb-4 text-black">{project.synopsis}</p>
                  <span className="text-sm text-black">Année : {project.year}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Message si aucun projet */}
        {filteredProjects.length === 0 && (
          <div className="text-center mt-8 text-black">
            Aucun projet ne correspond à cette catégorie.
          </div>
        )}
      </div>
    </div>
  )
}
