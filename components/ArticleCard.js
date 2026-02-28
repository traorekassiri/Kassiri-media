import Link from 'next/link'
import Image from 'next/image'
import { format } from 'date-fns'
import { fr } from 'date-fns/locale'

export default function ArticleCard({ article, variant = 'normal' }) {
  const date = new Date(article.date)
  const formattedDate = format(date, 'dd MMMM yyyy', { locale: fr })

  const variants = {
    hero: 'col-span-2 row-span-2',
    large: 'col-span-2',
    normal: 'col-span-1'
  }

  return (
    <Link href={`/article/${article.category}/${article.slug}`}>
      <div className={`group cursor-pointer ${variants[variant]}`}>
        <div className="relative overflow-hidden rounded-lg mb-3">
          <div className="aspect-w-16 aspect-h-9">
            <Image
              src={article.image}
              alt={article.title}
              width={800}
              height={450}
              className="object-cover group-hover:scale-105 transition duration-300"
            />
          </div>
          {article.category === 'urgent' && (
            <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
              URGENT
            </span>
          )}
        </div>

        <div>
          <div className="flex items-center text-sm text-gray-500 mb-2">
            <span className="uppercase font-semibold text-secondary">{article.category}</span>
            <span className="mx-2">•</span>
            <span>{formattedDate}</span>
          </div>

          <h3 className={`font-serif font-bold mb-2 ${variant === 'hero' ? 'text-2xl' : 'text-lg'} group-hover:text-secondary transition`}>
            {article.title}
          </h3>

          <p className="text-gray-600 text-sm line-clamp-2">
            {article.description}
          </p>
        </div>
      </div>
    </Link>
  )
}