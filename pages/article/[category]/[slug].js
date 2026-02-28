import Layout from '@/components/Layout'
import { getAllSlugs, getPostBySlug } from '@/lib/posts'
import Image from 'next/image'
import { format } from 'date-fns'
import { fr } from 'date-fns/locale'

export default function Article({ post }) {
  const date = new Date(post.date)
  const formattedDate = format(date, 'dd MMMM yyyy', { locale: fr })

  return (
    <Layout title={`${post.title} - Kassiri Pulse`}>
      <article className="container-custom mt-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-6">
            <div className="flex items-center text-sm text-gray-500 mb-3">
              <span className="uppercase font-semibold text-secondary">{post.category}</span>
              <span className="mx-2">•</span>
              <span>{formattedDate}</span>
            </div>

            <h1 className="text-4xl font-serif font-bold mb-4">{post.title}</h1>
            <p className="text-xl text-gray-600">{post.description}</p>
          </div>

          {post.image && (
            <div className="relative h-[400px] mb-8 rounded-lg overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </div>
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllSlugs()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug, params.category)
  return {
    props: { post }
  }
}