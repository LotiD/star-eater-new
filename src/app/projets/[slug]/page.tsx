import Image from 'next/image'
import { getProjectBySlug } from '@/services/projectsService'
import { notFound } from 'next/navigation'

interface ProjectProps {
  params: Promise<{ slug: string }>
}

export default async function ProjectDetails({ params }: ProjectProps) {
  const project = await getProjectBySlug((await params).slug)

  if (!project) {
    return notFound() // Affiche une 404 si le projet n'existe pas
  }

  return (
    <div className="min-h-screen py-16 mt-6">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-black mb-4">{project.title}</h1>
        <p className="text-purple-600">{project.category} - {project.year}</p>

        <div className="max-w-2xl mx-auto my-6">
          <div className="relative w-full" style={{ paddingTop: '56.25%' }}> {/* Ratio 16:9 */}
            <Image 
              src={project.image} 
              alt={project.title} 
              fill
              className="object-contain rounded-lg"
              sizes="(max-width: 768px) 100vw, 42rem"
            />
          </div>
        </div>
        <p className="text-lg text-black">{project.synopsis}</p>
      </div>
    </div>
  )

}
