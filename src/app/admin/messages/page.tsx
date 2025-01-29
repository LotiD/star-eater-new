'use client'

import { useState, useEffect } from 'react'

interface Message {
  id: number
  name: string
  email: string
  message: string
  createdAt: string
}

export default function Messages() {
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchMessages()
  }, [])

  const fetchMessages = async () => {
    try {
      const response = await fetch('/api/admin/messages')
      const data = await response.json()
      if (data.success) {
        setMessages(data.messages)
      }
    } catch (error) {
      console.error('Erreur lors du chargement des messages:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: number) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer ce message ?')) return

    try {
      const response = await fetch(`/api/admin/messages/${id}`, {
        method: 'DELETE'
      })

      if (response.ok) {
        fetchMessages()
        alert('Message supprimé avec succès !')
      } else {
        alert('Erreur lors de la suppression du message')
      }
    } catch (error) {
      console.error('Erreur:', error)
      alert('Erreur lors de la suppression du message')
    }
  }

  if (loading) {
    return (
      <div className="text-center">
        <p className="text-xl text-black">Chargement des messages...</p>
      </div>
    )
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-black">Messages reçus</h1>
      
      <div className="grid gap-6">
        {messages.map((message) => (
          <div key={message.id} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-semibold text-black">{message.name}</h2>
                <p className="text-purple-900">{message.email}</p>
              </div>
              <button
                onClick={() => handleDelete(message.id)}
                className="text-red-600 hover:text-red-800"
              >
                Supprimer
              </button>
            </div>
            <p className="text-black whitespace-pre-wrap">{message.message}</p>
            <p className="mt-4 text-sm text-black">
              Reçu le {new Date(message.createdAt).toLocaleDateString('fr-FR', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </p>
          </div>
        ))}

        {messages.length === 0 && (
          <p className="text-center text-black">Aucun message reçu.</p>
        )}
      </div>
    </div>
  )
} 