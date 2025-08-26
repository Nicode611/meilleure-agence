import Link from 'next/link'

export default function Cookies() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header */}
      <div className="bg-primary-600 text-white py-8">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/" className="text-primary-100 hover:text-white transition-colors duration-200 mb-4 inline-block">
            ← Retour à l'accueil
          </Link>
          <h1 className="text-4xl font-bold font-display">Politique des Cookies</h1>
          <p className="text-primary-100 mt-2">Dernière mise à jour : [DATE]</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-soft p-8 md:p-12">
          
          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-display">
              Qu'est-ce qu'un Cookie ?
            </h2>
            <div className="prose prose-lg text-gray-700">
              <p>
                [VOTRE TEXTE D'EXPLICATION SUR LES COOKIES ICI]
              </p>
            </div>
          </section>

          {/* Types de cookies */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-display">
              Types de Cookies Utilisés
            </h2>
            <div className="prose prose-lg text-gray-700">
              
              {/* Cookies essentiels */}
              <div className="mb-6 p-4 bg-green-50 rounded-lg border-l-4 border-green-400">
                <h3 className="text-lg font-semibold text-green-800 mb-2">🍪 Cookies Essentiels</h3>
                <p className="text-green-700">
                  [VOTRE TEXTE SUR LES COOKIES ESSENTIELS ICI]
                </p>
              </div>

              {/* Cookies de performance */}
              <div className="mb-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">📊 Cookies de Performance</h3>
                <p className="text-blue-700">
                  [VOTRE TEXTE SUR LES COOKIES DE PERFORMANCE ICI]
                </p>
              </div>

              {/* Cookies de fonctionnalité */}
              <div className="mb-6 p-4 bg-purple-50 rounded-lg border-l-4 border-purple-400">
                <h3 className="text-lg font-semibold text-purple-800 mb-2">⚙️ Cookies de Fonctionnalité</h3>
                <p className="text-purple-700">
                  [VOTRE TEXTE SUR LES COOKIES DE FONCTIONNALITÉ ICI]
                </p>
              </div>

              {/* Cookies de ciblage */}
              <div className="mb-6 p-4 bg-orange-50 rounded-lg border-l-4 border-orange-400">
                <h3 className="text-lg font-semibold text-orange-800 mb-2">🎯 Cookies de Ciblage</h3>
                <p className="text-orange-700">
                  [VOTRE TEXTE SUR LES COOKIES DE CIBLAGE ICI]
                </p>
              </div>
            </div>
          </section>

          {/* Cookies tiers */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-display">
              Cookies Tiers
            </h2>
            <div className="prose prose-lg text-gray-700">
              <p>
                [VOTRE TEXTE SUR LES COOKIES TIERS ICI]
              </p>
            </div>
          </section>

          {/* Gestion des cookies */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-display">
              Comment Gérer vos Cookies
            </h2>
            <div className="prose prose-lg text-gray-700">
              
              {/* Gestion via notre site */}
              <div className="mb-6 p-4 bg-primary-50 rounded-lg border-l-4 border-primary-400">
                <h3 className="text-lg font-semibold text-primary-800 mb-2">🎛️ Gestion Directe sur notre Site</h3>
                <p className="text-primary-700 mb-3">
                  Vous pouvez gérer vos préférences de cookies directement depuis notre site :
                </p>
                <ul className="list-disc list-inside text-primary-700 space-y-1">
                  <li>Utilisez le bouton "🍪 Gérer mes cookies" en bas à droite de chaque page</li>
                  <li>Modifiez vos préférences à tout moment</li>
                  <li>Retirez votre consentement quand vous le souhaitez</li>
                  <li>Consultez la date de votre dernier consentement</li>
                </ul>
              </div>

              {/* Paramètres du navigateur */}
              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">🌐 Paramètres de votre Navigateur</h3>
                <p className="text-gray-700 mb-3">
                  Vous pouvez également gérer les cookies via les paramètres de votre navigateur web :
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary-600 rounded-full"></span>
                    <span>Chrome : Paramètres → Confidentialité et sécurité → Cookies</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary-600 rounded-full"></span>
                    <span>Firefox : Options → Confidentialité → Cookies</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary-600 rounded-full"></span>
                    <span>Safari : Préférences → Confidentialité → Cookies</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary-600 rounded-full"></span>
                    <span>Edge : Paramètres → Cookies et permissions</span>
                  </div>
                </div>
              </div>

              {/* Outils de gestion */}
              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">🛠️ Outils de Gestion</h3>
                <p className="text-gray-700">
                  Vous pouvez également utiliser des outils tiers pour gérer vos cookies, comme des extensions de navigateur spécialisées dans la protection de la vie privée.
                </p>
              </div>
            </div>
          </section>

          {/* Durée de conservation */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-display">
              Durée de Conservation des Cookies
            </h2>
            <div className="prose prose-lg text-gray-700">
              <p>
                [VOTRE TEXTE SUR LA DURÉE DE CONSERVATION ICI]
              </p>
            </div>
          </section>

          {/* Mise à jour */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-display">
              Mise à Jour de cette Politique
            </h2>
            <div className="prose prose-lg text-gray-700">
              <p>
                [VOTRE TEXTE SUR LES MISES À JOUR ICI]
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
                <p>© 2024 meilleure.agence.be. Tous droits réservés.</p>
              </div>
              <div className="flex space-x-6">
                <Link href="/" className="text-primary-600 hover:text-primary-700 transition-colors duration-200">
                  Accueil
                </Link>
                <Link href="/politique-confidentialite" className="text-primary-600 hover:text-primary-700 transition-colors duration-200">
                  Politique de Confidentialité
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
