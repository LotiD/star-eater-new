'use client'

import { useActionState } from 'react'
import { submitContact } from './actions'

const initialState = {
  message: '',
  success: false
}

export default function Contact() {
  const [state, formAction] = useActionState(submitContact, initialState)

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">Contactez-nous</h1>
          
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
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nom
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-purple-900 text-white py-3 px-6 rounded-md hover:bg-purple-800 transition-colors"
            >
              Envoyer
            </button>
          </form>

          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold mb-4">Autres moyens de nous contacter</h2>
            <p className="text-gray-600">
              Email: contact@stareater.com<br />
              Téléphone: +33 1 23 45 67 89<br />
              Adresse: 123 Rue de la Fiction, 75000 Paris
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 