'use client'

import { useRouter } from 'next/navigation'
import { useActionState } from 'react'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { login } from './actions'

const initialState = {
  error: '',
  success: false
}

export default function AdminLogin() {
  const router = useRouter()
  const [state, formAction] = useActionState(login, initialState)
  const [shouldRedirect, setShouldRedirect] = useState(false)

  useEffect(() => {
    if (state.success && !shouldRedirect) {
      setShouldRedirect(true)
    }
  }, [state.success, shouldRedirect])

  useEffect(() => {
    if (shouldRedirect) {
      sessionStorage.setItem('adminAuthenticated', 'true')
      router.push('/admin/dashboard')
    }
  }, [shouldRedirect, router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-black">Administration</h1>
          <Link 
            href="/"
            className="text-purple-900 hover:text-purple-800 font-medium"
          >
            ← Retour au site
          </Link>
        </div>
        
        {state.error && (
          <div className="bg-red-100 text-red-700 p-3 rounded-md">
            {state.error}
          </div>
        )}

        <form action={formAction} className="mt-8 space-y-6">
          <div>
            <label htmlFor="username" className="block text-xl font-medium text-black">
              Identifiant
            </label>
            <input
              id="username"
              name="username"
              type="text"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-black"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-xl font-medium text-black">
              Mot de passe
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-black"
            />
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-white text-2xl bg-purple-900 hover:bg-purple-800"
          >
            Se connecter
          </button>
        </form>
      </div>
    </div>
  )
} 