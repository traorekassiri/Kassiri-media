import Layout from '@/components/Layout'
import ArticleCard from '@/components/ArticleCard'
import { getAllPosts, getPostsByCategory, getRecentPosts } from '@/lib/posts'

export default function Home({ grandArticles, urgentArticles, uneArticles, recentPosts, categoryPosts }) {
  return (
    <Layout>
      {/* GRAND ARTICLE */}
      {grandArticles.length > 0 && (
        <div className="container-custom mt-8">
          <ArticleCard article={grandArticles[0]} variant="hero" />
        </div>
      )}

      {/* URGENT */}
      {urgentArticles.length > 0 && (
        <div className="container-custom mt-8">
          <h2 className="text-2xl font-serif font-bold mb-4 text-red-600 border-l-4 border-red-600 pl-3">
            ⚡ URGENT
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {urgentArticles.slice(0, 3).map(article => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      )}

      {/* À LA UNE */}
      {uneArticles.length > 0 && (
        <div className="container-custom mt-8">
          <h2 className="text-2xl font-serif font-bold mb-4 text-primary border-l-4 border-primary pl-3">
            À LA UNE
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {uneArticles.slice(0, 4).map(article => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      )}

      {/* ACTUALITÉS RÉCENTES */}
      <div className="container-custom mt-12">
        <h2 className="text-2xl font-serif font-bold mb-4 border-l-4 border-gray-900 pl-3">
          ACTUALITÉS RÉCENTES
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recentPosts.map(article => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </div>

      {/* CATÉGORIES */}
      <div className="container-custom mt-12">
        <h2 className="text-2xl font-serif font-bold mb-4 border-l-4 border-gray-900 pl-3">
          PAR CATÉGORIES
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['politique', 'economie', 'culture', 'sport', 'sante'].map(cat => (
            <div key={cat} className="bg-white p-4 rounded shadow">
              <h3 className="font-serif font-bold text-lg mb-2 capitalize">{cat}</h3>
              {categoryPosts[cat]?.slice(0, 2).map(article => (
                <div key={article.slug} className="mb-2">
                  <a href={`/article/${article.category}/${article.slug}`} className="text-sm hover:text-secondary">
                    {article.title}
                  </a>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts()

  return {
    props: {
      grandArticles: getPostsByCategory('grand'),
      urgentArticles: getPostsByCategory('urgent'),
      uneArticles: getPostsByCategory('a_la_une'),
      recentPosts: getRecentPosts(6),
      categoryPosts: {
        politique: getPostsByCategory('politique'),
        economie: getPostsByCategory('economie'),
        culture: getPostsByCategory('culture'),
        sport: getPostsByCategory('sport'),
        sante: getPostsByCategory('sante'),
      }
    }
  }
}