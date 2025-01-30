'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

export default function Home() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in')
        }
      })
    }, observerOptions)

    document.querySelectorAll('.section-animate').forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="home-container w-full max-w-full overflow-x-hidden">
      <div className="home-content pt-16 w-full max-w-full">
        {/* Hero Section */}
        <section className="min-h-screen bg-gradient-to-r from-purple-900 to-indigo-800 text-white flex items-center"
          style={{ backgroundImage: "url('/hero-bg.webp')", backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center section-animate opacity-0">
              <h1 className="text-5xl font-bold mb-6 text-white font-sans">STAR EATER</h1>
              <p className="text-xl mb-8">
                Regarder devant soi est le prémisse du premier pas. La réussite est la finalité de nos pas.
              </p>
              <Link 
                href="/contact" 
                className="bg-white text-purple-900 px-8 py-3 rounded-full font-semibold hover:bg-purple-100 transition-colors inline-block"
              >
                Contactez-nous
              </Link>
            </div>
          </div>
        </section>

        {/* À propos Section */}
        <section className="min-h-screen flex items-center">
          <div className="container mx-auto px-4">
            <div className="section-animate opacity-0">
              <h2 className="text-3xl font-bold text-center mb-12 text-black font-sans">Notre Mission</h2>
              <div className="max-w-3xl mx-auto text-center">
                <p className="text-lg mb-8 text-black">
                  En tant qu'auteurs d'ebooks, nous créons des contenus qui inspirent, éduquent et divertissent. 
                  Notre expertise s'étend de la fiction aux guides pratiques, en passant par le développement personnel.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Valeurs Section */}
        <section className="min-h-screen bg-purple-900 flex items-center"
        style={{ backgroundImage: "url('/values-section.webp')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="container mx-auto py-24 px-4">
            <div className="section-animate opacity-0">
              <h2 className="text-3xl font-bold text-center mb-12 text-white">Nos Valeurs</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto">
                <div className="bg-white p-8 rounded-xl shadow-lg text-center transform hover:scale-110 transition-transform border-black neon-effect">
                  <h3 className="text-xl font-semibold mb-4 text-black">Persévérance</h3>
                  <p className="text-black">Nous ne reculons devant aucun défi pour atteindre l'excellence.</p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg text-center transform hover:scale-110 transition-transform border-blue-200 neon-effect">
                  <h3 className="text-xl font-semibold mb-4 text-black">Innovation</h3>
                  <p className="text-black">Nous repoussons constamment les limites de la créativité.</p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg text-center transform hover:scale-110 transition-transform border-blue-200 neon-effect">
                  <h3 className="text-xl font-semibold mb-4 text-black">Créativité</h3>
                  <p className="text-black">Nous donnons vie aux idées les plus audacieuses.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="min-h-screen flex items-center">
          <div className="container mx-auto px-4 text-center section-animate opacity-0">
            <h2 className="text-3xl font-bold mb-8 text-black">Prêt à commencer votre voyage littéraire ?</h2>
            <Link 
              href="/projets" 
              className="bg-purple-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-800 transition-colors inline-block"
            >
              Découvrir nos projets
            </Link>
          </div>
        </section>
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
    </div>
    
  )
}
