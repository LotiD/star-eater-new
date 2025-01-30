'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useActionState } from 'react'
import { getProjects, createProject, deleteProject } from './actions'

interface Project {
  id: number
  title: string
  category: string
  year: number
  synopsis: string
  image: string
  slug: string
}

const initialState = {
  message: '',
  success: false
}

export default function AdminProjects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [state, formAction] = useActionState(createProject, initialState)
  const [formData, setFormData] = useState({
    title: '',
    category: 'Roman de fiction',
    year: new Date().getFullYear(),
    synopsis: '',
    image: '/placeholder.jpg',
    slug: ''
  })

  useEffect(() => {
    fetchProjects()
  }, [])

  useEffect(() => {
    if (state.success) {
      setFormData({
        title: '',
        category: 'Roman de fiction',
        year: new Date().getFullYear(),
        synopsis: '',
        image: '/placeholder.jpg',
        slug: ''
      })
      fetchProjects()
    }
  }, [state.success])

  const fetchProjects = async () => {
    try {
      const result = await getProjects()
      if (result.success && result.projects) {
        setProjects(result.projects)
      }
    } catch (error) {
      console.error('Erreur lors du chargement des projets:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: number) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer ce projet ?')) return

    try {
      const result = await deleteProject(id)
      if (result.success) {
        fetchProjects()
        alert('Projet supprimé avec succès !')
      } else {
        alert('Erreur lors de la suppression du projet')
      }
    } catch (error) {
      console.error('Erreur:', error)
      alert('Erreur lors de la suppression du projet')
    }
  }

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[éèê]/g, 'e')
      .replace(/[àâ]/g, 'a')
      .replace(/[ùû]/g, 'u')
      .replace(/[ôö]/g, 'o')
      .replace(/[ïî]/g, 'i')
      .replace(/[ç]/g, 'c')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
  }

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value
    setFormData({
      ...formData,
      title,
      slug: generateSlug(title)
    })
  }

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
        <h1 className="text-4xl font-bold text-center mb-12 text-black">Administration des Projets</h1>

        {/* Formulaire d'ajout */}
        <div className="max-w-2xl mx-auto mb-16 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-black">Ajouter un projet</h2>
          
          {state.message && (
            <div className={`mb-6 p-4 rounded-md ${
              state.success 
                ? 'bg-green-100 text-green-700' 
                : 'bg-red-100 text-red-700'
            }`}>
              {state.message}
            </div>
          )}

          <form action={formAction} className="space-y-6">
            <div>
              <label className="block text-xl font-medium mb-1 text-black">
                Titre
              </label>
              <input
                type="text"
                name="title"
                required
                value={formData.title}
                onChange={handleTitleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent text-black"
              />
            </div>

            <div>
              <label className="block text-xl font-medium mb-1 text-black">
                Catégorie
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent text-black"
              >
                <option value="Roman de fiction">Roman de fiction</option>
                <option value="Essai Pratique">Essai Pratique</option>
              </select>
            </div>

            <div>
              <label className="block text-xl font-medium mb-1 text-black">
                Année
              </label>
              <input
                type="number"
                name="year"
                required
                value={formData.year}
                onChange={(e) => setFormData({ ...formData, year: parseInt(e.target.value) })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent text-black"
              />
            </div>

            <div>
              <label className="block text-xl font-medium mb-1 text-black">
                Synopsis
              </label>
              <textarea
                name="synopsis"
                required
                value={formData.synopsis}
                onChange={(e) => setFormData({ ...formData, synopsis: e.target.value })}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent text-black"
              />
            </div>

            <div>
              <label className="block text-xl font-medium mb-1 text-black">
                Image URL
              </label>
              <input
                type="text"
                name="image"
                required
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent text-black"
              />
            </div>

            <div>
              <label className="block text-xl font-medium mb-1 text-black">
                Slug (généré automatiquement)
              </label>
              <input
                type="text"
                name="slug"
                readOnly
                value={formData.slug}
                className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md text-black"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-purple-900 text-white text-2xl py-3 px-6 rounded-md hover:bg-purple-800 transition-colors"
            >
              Ajouter le projet
            </button>
          </form>
        </div>

        {/* Liste des projets */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-black">Projets existants</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div key={project.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="relative h-48 mb-4">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="contain"
                    className="object-cover rounded-md"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-black">{project.title}</h3>
                <p className="text-sm text-purple-600 mb-2">{project.category}</p>
                <p className="mb-2 text-black">{project.synopsis}</p>
                <p className="text-sm mb-4 text-black">Année : {project.year}</p>
                <button
                  onClick={() => handleDelete(project.id)}
                  className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition-colors"
                >
                  Supprimer
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 