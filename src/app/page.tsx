import Link from 'next/link'
// import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 to-indigo-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 text-white">STAR EATER</h1>
            <p className="text-xl mb-8">
              Regarder devant soi est le prémisse du premier pas. La réussite est la finalité de nos pas.
            </p>
            <Link 
              href="/contact" 
              className="bg-white text-purple-900 px-8 py-3 rounded-full font-semibold hover:bg-purple-100 transition-colors"
            >
              Contactez-nous
            </Link>
          </div>
        </div>
      </section>

      {/* À propos Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">Notre Mission</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg mb-8 text-black">
              En tant qu&apos;auteurs d&apos;ebooks, nous créons des contenus qui inspirent, éduquent et divertissent. 
              Notre expertise s&apos;étend de la fiction aux guides pratiques, en passant par le développement personnel.
            </p>
          </div>
        </div>
      </section>

      {/* Valeurs Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">Nos Valeurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-4 text-black">Persévérance</h3>
              <p className="text-black">Nous ne reculons devant aucun défi pour atteindre l&apos;excellence.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-4 text-black">Innovation</h3>
              <p className="text-black">Nous repoussons constamment les limites de la créativité.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-4 text-black">Créativité</h3>
              <p className="text-black">Nous donnons vie aux idées les plus audacieuses.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-black">Prêt à commencer votre voyage littéraire ?</h2>
          <Link 
            href="/projets" 
            className="bg-purple-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-800 transition-colors"
          >
            Découvrir nos projets
          </Link>
        </div>
      </section>
    </div>
  )
}
