import Link from 'next/link'

export default function PolitiqueConfidentialite() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header */}
      <div className="bg-primary-600 text-white py-8">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/" className="text-primary-100 hover:text-white transition-colors duration-200 mb-4 inline-block">
            ← Retour à l'accueil
          </Link>
          <h1 className="text-4xl font-bold font-display">Politique de Confidentialité</h1>
          <p className="text-primary-100 mt-2">Dernière mise à jour : [DATE]</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-soft p-8 md:p-12">
          
          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-display">
              Introduction
            </h2>
            <div className="prose prose-lg text-gray-700">
              <p>
                [VOTRE TEXTE D'INTRODUCTION ICI]
              </p>
            </div>
          </section>

          {/* Collecte des données */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-display">
              Collecte des Données
            </h2>
            <div className="prose prose-lg text-gray-700">
              <p>
                [VOTRE TEXTE SUR LA COLLECTE DES DONNÉES ICI]
              </p>
            </div>
          </section>

          {/* Utilisation des données */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-display">
              Utilisation des Données
            </h2>
            <div className="prose prose-lg text-gray-700">
              <p>
                [VOTRE TEXTE SUR L'UTILISATION DES DONNÉES ICI]
              </p>
            </div>
          </section>

          {/* Partage des données */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-display">
              Partage des Données
            </h2>
            <div className="prose prose-lg text-gray-700">
              <p>
                [VOTRE TEXTE SUR LE PARTAGE DES DONNÉES ICI]
              </p>
            </div>
          </section>

          {/* Sécurité */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-display">
              Sécurité des Données
            </h2>
            <div className="prose prose-lg text-gray-700">
              <p>
                [VOTRE TEXTE SUR LA SÉCURITÉ ICI]
              </p>
            </div>
          </section>

          {/* Cookies */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-display">
              Cookies et Technologies Similaires
            </h2>
            <div className="prose prose-lg text-gray-700">
              <p>
                [VOTRE TEXTE SUR LES COOKIES ICI]
              </p>
            </div>
          </section>

          {/* Droits des utilisateurs */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-display">
              Vos Droits
            </h2>
            <div className="prose prose-lg text-gray-700">
              <p>
                [VOTRE TEXTE SUR LES DROITS DES UTILISATEURS ICI]
              </p>
            </div>
          </section>

          {/* Contact */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-display">
              Nous Contacter
            </h2>
            <div className="prose prose-lg text-gray-700">
              <p>
                [VOTRE TEXTE DE CONTACT ICI]
              </p>
            </div>
          </section>

          {/* Modifications */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-display">
              Modifications de cette Politique
            </h2>
            <div className="prose prose-lg text-gray-700">
              <p>
                [VOTRE TEXTE SUR LES MODIFICATIONS ICI]
              </p>
            </div>
          </section>

          {/* Footer */}
          <div className="border-t border-gray-200 pt-8 mt-12">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-600 mb-4 md:mb-0">
                <p>© 2024 meilleure.agence.be. Tous droits réservés.</p>
              </div>
              <div className="flex space-x-6">
                <Link href="/" className="text-primary-600 hover:text-primary-700 transition-colors duration-200">
                  Accueil
                </Link>
                <Link href="/cookies" className="text-primary-600 hover:text-primary-700 transition-colors duration-200">
                  Cookies
                </Link>
                <Link href="/mentions-legales" className="text-primary-600 hover:text-primary-700 transition-colors duration-200">
                  Mentions Légales
                </Link>
                <Link href="/conditions-utilisation" className="text-primary-600 hover:text-primary-700 transition-colors duration-200">
                  Conditions d'Utilisation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
