import Layout from '@/components/Layout'

export default function MentionsLegales() {
  return (
    <Layout title="Mentions légales - Kassiri Pulse">
      <div className="container-custom py-12">
        <div className="max-w-3xl mx-auto prose">
          <h1>Mentions légales</h1>

          <h2>Éditeur du site</h2>
          <p>
            <strong>Kassiri Pulse</strong><br />
            Responsable de publication : Traore Joseph Kassiri Stephane<br />
            Burkina Faso
          </p>

          <h2>Hébergement</h2>
          <p>
            Le site est hébergé par GitHub Pages et Vercel.<br />
            GitHub : https://github.com<br />
            Vercel : https://vercel.com
          </p>

          <h2>Propriété intellectuelle</h2>
          <p>
            L'ensemble du contenu de ce site (textes, images, vidéos) est la propriété 
            exclusive de Kassiri Pulse sauf mention contraire. Toute reproduction est 
            soumise à autorisation préalable.
          </p>

          <h2>Cookies</h2>
          <p>
            Ce site utilise des cookies à des fins d'analyse et d'amélioration de 
            l'expérience utilisateur. En continuant votre navigation, vous acceptez 
            leur utilisation.
          </p>

          <h2>Protection des données</h2>
          <p>
            Conformément à la loi informatique et libertés, vous disposez d'un droit 
            d'accès, de rectification et de suppression des données vous concernant.
          </p>
        </div>
      </div>
    </Layout>
  )
}