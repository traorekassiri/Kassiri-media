import Head from 'next/head'
import Link from 'next/link'
import { FaTiktok, FaYoutube, FaFacebook, FaInstagram } from 'react-icons/fa'

export default function Layout({ children, title = 'Kassiri Pulse - Média africain et international' }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Kassiri Pulse - L'information africaine et internationale en continu" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-white shadow-md">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-3xl font-serif font-bold text-primary">
              Kassiri Pulse
            </Link>

            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="hover:text-secondary transition">Accueil</Link>
              <Link href="/categorie/afrique" className="hover:text-secondary transition">Afrique</Link>
              <Link href="/categorie/international" className="hover:text-secondary transition">International</Link>
              <Link href="/categorie/economie" className="hover:text-secondary transition">Économie</Link>
              <Link href="/categorie/culture" className="hover:text-secondary transition">Culture</Link>
              <Link href="/contact" className="hover:text-secondary transition">Contact</Link>
            </nav>

            <div className="flex space-x-4">
              <a href="#" className="hover:text-secondary transition"><FaTiktok size={20} /></a>
              <a href="#" className="hover:text-secondary transition"><FaYoutube size={20} /></a>
              <a href="#" className="hover:text-secondary transition"><FaFacebook size={20} /></a>
              <a href="#" className="hover:text-secondary transition"><FaInstagram size={20} /></a>
            </div>
          </div>
        </div>
      </header>

      <main className="min-h-screen">
        {children}
      </main>

      <footer className="bg-gray-900 text-white mt-12">
        <div className="container-custom py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-serif font-bold mb-4">Kassiri Pulse</h3>
              <p className="text-gray-400">Votre source d'information africaine et internationale</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Liens utiles</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/a-propos" className="hover:text-white transition">À propos</Link></li>
                <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
                <li><Link href="/mentions-legales" className="hover:text-white transition">Mentions légales</Link></li>
                <li><Link href="/confidentialite" className="hover:text-white transition">Confidentialité</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">Recevez l'actualité chaque matin</p>
              <input 
                type="email" 
                placeholder="Votre email"
                className="w-full px-3 py-2 text-gray-900 rounded"
              />
              <button className="mt-2 bg-secondary hover:bg-opacity-90 text-white px-4 py-2 rounded w-full">
                S'abonner
              </button>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-4 text-center text-gray-400">
            <p>Éditeur : Kassiri Pulse | Responsable : Traore Joseph Kassiri Stephane | Burkina Faso</p>
            <p className="mt-2">Hébergement : GitHub + Vercel</p>
          </div>
        </div>
      </footer>
    </>
  )
}