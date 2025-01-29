'use server'

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function submitContact(prevState: any, formData: FormData) {
  try {
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const message = formData.get('message') as string

    if (!name || !email || !message) {
      return {
        message: 'Tous les champs sont requis',
        success: false
      }
    }

    await prisma.contact.create({
      data: {
        name,
        email,
        message
      }
    })

    return {
      message: 'Message envoyé avec succès !',
      success: true
    }
  } catch (error) {
    console.error('Erreur lors de l\'envoi du message:', error)
    return {
      message: 'Une erreur est survenue lors de l\'envoi du message',
      success: false
    }
  }
} 