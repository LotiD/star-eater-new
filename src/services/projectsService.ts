import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getProjects() {
  try {
    const projects = await prisma.project.findMany();
    return projects;
  } catch (error) {
    console.error("Erreur lors de la récupération des projets :", error);
    return [];
  }
}

export async function getProjectBySlug(slug: string) {
  return await prisma.project.findUnique({
    where: { slug }
  })
}