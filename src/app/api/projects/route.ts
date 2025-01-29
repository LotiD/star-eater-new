import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
  try {
    const projects = await prisma.project.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    })

    return NextResponse.json({ success: true, projects })
  } catch (error) {
    console.error('Erreur lors de la récupération des projets:', error)
    return NextResponse.json(
      { success: false, error: 'Une erreur est survenue' },
      { status: 500 }
    )
  }
} 