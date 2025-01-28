'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const projects = [
  {
    id: 1,
    title: "Battle of the End",
    category: "Roman de fiction",
    year: "2024",
    synopsis: "Bla bla bla",
    image: "/placeholder.jpg",
    slug: "battle-of-the-end"
  },
  {
    id: 2,
    title: "Moi, étudiant, je veux être en forme",
    category: "Essai Pratique",
    year: "2025",
    synopsis: "Bla bla bla",
    image: "/placeholder.jpg",
    slug: "etudiant-en-forme"
  },
  {
    id: 3,
    title: "Reprogrammer votre Esprit : Développez une Mentalité de Croissance et Transformez Votre Vie",
    category: "Essai Pratique",
    year: "2025",
    synopsis: "Bla bla bla",
    image: "/placeholder.jpg",
    slug: "reprogrammer-esprit"
  }
]

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Tous')

  const filteredProjects = projects.filter(project => 
    selectedCategory === 'Tous' ? true : project.category === selectedCategory
  )

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Nos Projets</h1>
        
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
                  <h3 className="text-xl font-bold mb-2 group-hover:text-purple-900">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.synopsis}</p>
                  <span className="text-sm text-gray-500">Année : {project.year}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Message si aucun projet */}
        {filteredProjects.length === 0 && (
          <div className="text-center text-gray-600 mt-8">
            Aucun projet ne correspond à cette catégorie.
          </div>
        )}
      </div>
    </div>
  )
} 