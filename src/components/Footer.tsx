import Link from 'next/link'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  return (
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
          © {new Date().getFullYear()} Star Eater - Tous droits réservés.
        </div>
      </div>
    </footer>
  )
}
