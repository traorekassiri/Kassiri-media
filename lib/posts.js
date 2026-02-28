import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const contentDirectory = path.join(process.cwd(), 'content')

// Catégories automatiques basées sur les dossiers
export const categories = [
  'grand',
  'urgent',
  'a_la_une',
  'politique',
  'economie',
  'culture',
  'sport',
  'sante'
]

// Récupère tous les articles de toutes les catégories
export function getAllPosts() {
  const allPosts = []

  categories.forEach(category => {
    const categoryPath = path.join(contentDirectory, category)
    if (fs.existsSync(categoryPath)) {
      const files = fs.readdirSync(categoryPath)
      const categoryPosts = files
        .filter(file => file.endsWith('.md'))
        .map(file => {
          const filePath = path.join(categoryPath, file)
          const fileContent = fs.readFileSync(filePath, 'utf8')
          const { data, content } = matter(fileContent)

          return {
            slug: file.replace(/\.md$/, ''),
            category,
            title: data.title,
            date: data.date,
            image: data.image || '/images/default.jpg',
            description: data.description,
            content,
            ...data
          }
        })

      allPosts.push(...categoryPosts)
    }
  })

  // Tri par date (plus récent d'abord)
  return allPosts.sort((a, b) => new Date(b.date) - new Date(a.date))
}

// Récupère les articles par catégorie
export function getPostsByCategory(category) {
  const allPosts = getAllPosts()
  return allPosts.filter(post => post.category === category)
}

// Récupère un article spécifique
export async function getPostBySlug(slug, category) {
  const filePath = path.join(contentDirectory, category, `${slug}.md`)
  const fileContent = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContent)

  // Convertir markdown en HTML
  const processedContent = await remark()
    .use(html)
    .process(content)
  const contentHtml = processedContent.toString()

  return {
    slug,
    category,
    contentHtml,
    title: data.title,
    date: data.date,
    image: data.image,
    description: data.description,
    ...data
  }
}

// Récupère tous les slugs pour la génération statique
export function getAllSlugs() {
  const slugs = []

  categories.forEach(category => {
    const categoryPath = path.join(contentDirectory, category)
    if (fs.existsSync(categoryPath)) {
      const files = fs.readdirSync(categoryPath)
      files
        .filter(file => file.endsWith('.md'))
        .forEach(file => {
          slugs.push({
            params: {
              category,
              slug: file.replace(/\.md$/, '')
            }
          })
        })
    }
  })

  return slugs
}

// Récupère les articles récents (pour la home)
export function getRecentPosts(limit = 6) {
  const allPosts = getAllPosts()
  return allPosts.slice(0, limit)
}