'use client'

import Link from 'next/link'

import Image from 'next/image'
import { useEffect } from 'react'


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
    <div className="home-container">
      <div className="home-content pt-16">
        {/* Hero Section */}
        <section className="h-screen snap-start bg-gradient-to-r from-purple-900 to-indigo-800 text-white flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center section-animate opacity-0">
              <h1 className="text-5xl font-bold mb-6 text-white">STAR EATER</h1>
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
        <section className="h-screen snap-start flex items-center">
          <div className="container mx-auto px-4">
            <div className="section-animate opacity-0">
              <h2 className="text-3xl font-bold text-center mb-12 text-black">Notre Mission</h2>
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
        <section className="h-screen snap-start bg-gray-100 flex items-center">
          <div className="container mx-auto px-4">
            <div className="section-animate opacity-0">
              <h2 className="text-3xl font-bold text-center mb-12 text-black">Nos Valeurs</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="bg-white p-6 rounded-lg shadow-md text-center transform hover:scale-105 transition-transform">
                  <h3 className="text-xl font-semibold mb-4 text-black">Persévérance</h3>
                  <p className="text-black">Nous ne reculons devant aucun défi pour atteindre l'excellence.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center transform hover:scale-105 transition-transform">
                  <h3 className="text-xl font-semibold mb-4 text-black">Innovation</h3>
                  <p className="text-black">Nous repoussons constamment les limites de la créativité.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center transform hover:scale-105 transition-transform">
                  <h3 className="text-xl font-semibold mb-4 text-black">Créativité</h3>
                  <p className="text-black">Nous donnons vie aux idées les plus audacieuses.</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="h-screen snap-start flex items-center">
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
      </div>
    </div>
  )
}
