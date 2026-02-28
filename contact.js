import Layout from '@/components/Layout'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    sujet: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Ici, vous pouvez ajouter la logique d'envoi du formulaire
    alert('Message envoyé !')
  }

  return (
    <Layout title="Contact - Kassiri Pulse">
      <div className="container-custom py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-serif font-bold mb-8">Contactez-nous</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 mb-6">
                Vous avez une question, une suggestion ou vous souhaitez nous contacter ? 
                Remplissez le formulaire ou utilisez nos coordonnées directes.
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Adresse</h3>
                  <p className="text-gray-600">Ouagadougou, Burkina Faso</p>
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600">contact@kassiripulse.com</p>
                </div>
                <div>
                  <h3 className="font-semibold">Téléphone</h3>
                  <p className="text-gray-600">+226 XX XX XX XX</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block mb-2 font-semibold">Nom complet</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                  value={formData.nom}
                  onChange={(e) => setFormData({...formData, nom: e.target.value})}
                />
              </div>

              <div>
                <label className="block mb-2 font-semibold">Email</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div>
                <label className="block mb-2 font-semibold">Sujet</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                  value={formData.sujet}
                  onChange={(e) => setFormData({...formData, sujet: e.target.value})}
                />
              </div>

              <div>
                <label className="block mb-2 font-semibold">Message</label>
                <textarea
                  required
                  rows="5"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>

              <button type="submit" className="btn-primary w-full">
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}