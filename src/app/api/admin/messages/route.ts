import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
  try {
    const messages = await prisma.contact.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    })

    return NextResponse.json({ success: true, messages })
  } catch (error) {
    console.error('Erreur lors de la récupération des messages:', error)
    return NextResponse.json(
      { success: false, error: 'Une erreur est survenue' },
      { status: 500 }
    )
  }
} 