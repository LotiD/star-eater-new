'use server'

import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
  try {
    const [totalProjects, totalMessages] = await Promise.all([
      prisma.project.count(),
      prisma.contact.count()
    ])

    return NextResponse.json({
      success: true,
      stats: {
        totalProjects,
        totalMessages
      }
    })
  } catch (error) {
    console.error('Erreur lors de la récupération des statistiques:', error)
    return NextResponse.json(
      { success: false, error: 'Une erreur est survenue' },
      { status: 500 }
    )
  }
} 