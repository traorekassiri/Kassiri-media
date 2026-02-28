import Layout from '@/components/Layout'

export default function Confidentialite() {
  return (
    <Layout title="Politique de confidentialité - Kassiri Pulse">
      <div className="container-custom py-12">
        <div className="max-w-3xl mx-auto prose">
          <h1>Politique de confidentialité</h1>

          <h2>Collecte des données</h2>
          <p>
            Nous collectons uniquement les données nécessaires au fonctionnement 
            du site : nom, email (via formulaire de contact) et données de navigation 
            anonymisées.
          </p>

          <h2>Utilisation des données</h2>
          <p>
            Vos données sont utilisées pour :<br />
            - Répondre à vos messages<br />
            - Améliorer notre contenu<br />
            - Vous envoyer la newsletter (si abonnement)
          </p>

          <h2>Partage des données</h2>
          <p>
            Nous ne partageons aucune donnée personnelle avec des tiers sans votre 
            consentement explicite.
          </p>

          <h2>Sécurité</h2>
          <p>
            Nous mettons en œuvre toutes les mesures techniques pour protéger vos 
            données contre tout accès non autorisé.
          </p>

          <h2>Vos droits</h2>
          <p>
            Vous pouvez à tout moment :<br />
            - Demander l'accès à vos données<br />
            - Rectifier vos données<br />
            - Supprimer vos données<br />
            - Vous désabonner de la newsletter
          </p>

          <p className="mt-8">
            Pour exercer vos droits, contactez-nous à : privacy@kassiripulse.com
          </p>
        </div>
      </div>
    </Layout>
  )
}