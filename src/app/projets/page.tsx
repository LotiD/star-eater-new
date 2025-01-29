import Link from 'next/link'
import Image from 'next/image'
import { getProjects } from '@/services/projectsService'

export default async function Projects() {
  const projects = await getProjects() // ⚡ Fetch des données côté serveur

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-black">Nos Projets</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
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
      </div>
    </div>
  )
}
