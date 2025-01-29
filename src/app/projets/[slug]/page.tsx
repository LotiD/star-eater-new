import Image from 'next/image'
import { getProjectBySlug } from '@/services/projectsService'
import { notFound } from 'next/navigation'

interface ProjectProps {
  params: { slug: string }
}

export default async function ProjectDetails({ params }: ProjectProps) {
  const project = await getProjectBySlug(params.slug)

  if (!project) {
    return notFound() // Affiche une 404 si le projet n'existe pas
  }

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-black mb-4">{project.title}</h1>
        <p className="text-purple-600">{project.category} - {project.year}</p>

        <div className="relative h-64 w-full my-6">
          <Image src={project.image} alt={project.title} fill className="object-cover rounded-lg" />
        </div>

        <p className="text-lg text-black">{project.synopsis}</p>
      </div>
    </div>
  )
}
