'use server'

import { PrismaClient } from '@prisma/client'
import { revalidatePath } from 'next/cache'

const prisma = new PrismaClient()

interface ProjectState {
  message: string
  success: boolean
  project?: any
}

export async function getProjects() {
  try {
    const projects = await prisma.project.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    })
    return { success: true, projects }
  } catch (error) {
    console.error('Erreur lors de la récupération des projets:', error)
    return { success: false, error: 'Une erreur est survenue' }
  }
}

export async function createProject(prevState: ProjectState, formData: FormData) {
  try {
    const project = await prisma.project.create({
      data: {
        title: formData.get('title') as string,
        category: formData.get('category') as string,
        year: parseInt(formData.get('year') as string),
        synopsis: formData.get('synopsis') as string,
        image: formData.get('image') as string,
        slug: formData.get('slug') as string
      }
    })
    revalidatePath('/admin/projets')
    return { 
      success: true, 
      message: 'Projet créé avec succès',
      project 
    }
  } catch (error) {
    console.error('Erreur lors de la création du projet:', error)
    return { 
      success: false, 
      message: 'Une erreur est survenue lors de la création du projet'
    }
  }
}

export async function deleteProject(id: number) {
  try {
    await prisma.project.delete({
      where: { id }
    })
    revalidatePath('/admin/projets')
    return { success: true }
  } catch (error) {
    console.error('Erreur lors de la suppression du projet:', error)
    return { success: false, error: 'Une erreur est survenue' }
  }
} 