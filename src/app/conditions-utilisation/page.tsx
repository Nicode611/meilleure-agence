import Link from 'next/link'

export default function ConditionsUtilisation() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header */}
      <div className="bg-primary-600 text-white py-8">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/" className="text-primary-100 hover:text-white transition-colors duration-200 mb-4 inline-block">
            ← Retour à l&apos;accueil
          </Link>
          <h1 className="text-4xl font-bold font-display">Conditions d&apos;Utilisation</h1>
          <p className="text-primary-100 mt-2">Dernière mise à jour : [DATE]</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-soft p-8 md:p-12">
          
          {/* Acceptation des conditions */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-display">
              Acceptation des Conditions
            </h2>
            <div className="prose prose-lg text-gray-700">
              <p>
                [VOTRE TEXTE SUR L&apos;ACCEPTATION DES CONDITIONS ICI]
              </p>
            </div>
          </section>

          {/* Description du service */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-display">
              Description du Service
            </h2>
            <div className="prose prose-lg text-gray-700">
              <p>
                [VOTRE TEXTE SUR LA DESCRIPTION DU SERVICE ICI]
              </p>
            </div>
          </section>

          {/* Utilisation du service */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-display">
              Utilisation du Service
            </h2>
            <div className="prose prose-lg text-gray-700">
              <p>
                [VOTRE TEXTE SUR L&apos;UTILISATION DU SERVICE ICI]
              </p>
            </div>
          </section>

          {/* Obligations de l'utilisateur */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-display">
              Obligations de l&apos;Utilisateur
            </h2>
            <div className="prose prose-lg text-gray-700">
              <p>
                [VOTRE TEXTE SUR LES OBLIGATIONS ICI]
              </p>
            </div>
          </section>

          {/* Propriété intellectuelle */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-display">
              Propriété Intellectuelle
            </h2>
            <div className="prose prose-lg text-gray-700">
              <p>
                [VOTRE TEXTE SUR LA PROPRIÉTÉ INTELLECTUELLE ICI]
              </p>
            </div>
          </section>

          {/* Limitation de responsabilité */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-display">
              Limitation de Responsabilité
            </h2>
            <div className="prose prose-lg text-gray-700">
              <p>
                [VOTRE TEXTE SUR LA LIMITATION DE RESPONSABILITÉ ICI]
              </p>
            </div>
          </section>

          {/* Résiliation */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-display">
              Résiliation
            </h2>
            <div className="prose prose-lg text-gray-700">
              <p>
                [VOTRE TEXTE SUR LA RÉSILIATION ICI]
              </p>
            </div>
          </section>

          {/* Droit applicable */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-display">
              Droit Applicable et Juridiction
            </h2>
            <div className="prose prose-lg text-gray-700">
              <p>
                [VOTRE TEXTE SUR LE DROIT APPLICABLE ICI]
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

          {/* Footer */}
          <div className="border-t border-gray-200 pt-8 mt-12">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-600 mb-4 md:mb-0">
                <p>© 2025 meilleure.agence.be. Tous droits réservés.</p>
              </div>
              <div className="flex space-x-6">
                <Link href="/" className="text-primary-600 hover:text-primary-700 transition-colors duration-200">
                  Accueil
                </Link>
                <Link href="/politique-confidentialite" className="text-primary-600 hover:text-primary-700 transition-colors duration-200">
                  Politique de Confidentialité
                </Link>
                <Link href="/cookies" className="text-primary-600 hover:text-primary-700 transition-colors duration-200">
                  Cookies
                </Link>
                <Link href="/mentions-legales" className="text-primary-600 hover:text-primary-700 transition-colors duration-200">
                  Mentions Légales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
