import Image from 'next/image'
import { getProjectBySlug } from '@/services/projectsService'
import { notFound } from 'next/navigation'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'
import Link from 'next/link'

interface ProjectProps {
  params: { slug: string }
}

export default async function ProjectDetails({ params }: ProjectProps) {
  const project = await getProjectBySlug(params.slug)

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
      <footer className="bg-purple-300 text-white py-10">
          <div className="container mx-auto px-6 lg:px-12">
            {/* Grid Responsive */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
              
              {/* Section Logo & Description */}
              <div>
                <Link href="/" className="text-2xl font-bold mb-3">STAR EATER</Link>
              </div>

              {/* Section Navigation */}
              <div>
                <h3 className="text-xl font-semibold mb-3">Navigation</h3>
                <ul className="space-y-2">
                  <li><Link href="/projets" className="hover:text-purple-400 transition">Projets</Link></li>
                  <li><Link href="/contact" className="hover:text-purple-400 transition">Contact</Link></li>
                </ul>
              </div>

              {/* Section Réseaux Sociaux */}
              <div>
                <h3 className="text-xl font-semibold mb-3">Suivez-nous</h3>
                <div className="flex justify-center md:justify-start gap-4">
                  <Link href="https://facebook.com" target="_blank" className="text-white hover:text-blue-500 transition text-2xl">
                    <FaFacebook />
                  </Link>
                  <Link href="https://twitter.com" target="_blank" className="text-white hover:text-blue-400 transition text-2xl">
                    <FaTwitter />
                  </Link>
                  <Link href="https://instagram.com" target="_blank" className="text-white hover:text-pink-500 transition text-2xl">
                    <FaInstagram />
                  </Link>
                  <Link href="https://linkedin.com" target="_blank" className="text-white hover:text-blue-600 transition text-2xl">
                    <FaLinkedin />
                  </Link>
                </div>
              </div>

            </div>

            {/* Copyright */}
            <div className="border-t border-white mt-8 pt-6 text-center text-white text-sm">
              © {new Date().getFullYear()} MonSite. Tous droits réservés.
            </div>
          </div>
        </footer>
    </div>
  )

}
