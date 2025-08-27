import Link from 'next/link'
import SimpleFooter from '@/components/SimpleFooter'

export default function Cookies() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header */}
      <div className="bg-primary-600 text-white py-8">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/" className="text-primary-100 hover:text-white transition-colors duration-200 mb-4 inline-block">
            ← Retour à l&apos;accueil
          </Link>
          <h1 className="text-4xl font-bold font-display">Politique des Cookies</h1>
          <p className="text-primary-100 mt-2">Dernière mise à jour : Aout 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-soft p-8 md:p-12">
          
          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-display">
              Qu&apos;est-ce qu&apos;un Cookie ?
            </h2>
            <div className="prose prose-lg text-gray-700">
              <p>
                Un cookie est un petit fichier texte stocké sur votre ordinateur ou appareil mobile lorsque vous visitez un site web. 
                Les cookies permettent au site de mémoriser vos actions et préférences (telles que la connexion, la langue, la taille de police 
                et d&apos;autres préférences d&apos;affichage) sur une période donnée, afin que vous n&apos;ayez pas à les saisir à nouveau 
                à chaque fois que vous consultez le site ou naviguez d&apos;une page à l&apos;autre.
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
                  Ces cookies sont strictement nécessaires au fonctionnement du site. Ils permettent de mémoriser vos préférences 
                  de consentement aux cookies et de maintenir votre session. Sans ces cookies, le site ne pourrait pas fonctionner 
                  correctement. Ces cookies ne collectent aucune information personnelle et ne peuvent pas être désactivés.
                </p>
              </div>

              {/* Cookies de performance */}
              <div className="mb-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">📊 Cookies de Performance</h3>
                <p className="text-blue-700">
                  Ces cookies nous aident à comprendre comment les visiteurs interagissent avec notre site en collectant 
                  des informations anonymes sur les pages visitées, le temps passé sur le site et les erreurs éventuelles. 
                  Ces données nous permettent d&apos;améliorer les performances et l&apos;expérience utilisateur.
                </p>
              </div>

              {/* Cookies de fonctionnalité */}
              <div className="mb-6 p-4 bg-purple-50 rounded-lg border-l-4 border-purple-400">
                <h3 className="text-lg font-semibold text-purple-800 mb-2">⚙️ Cookies de Fonctionnalité</h3>
                <p className="text-purple-700">
                  Ces cookies permettent au site de mémoriser vos choix et de fournir des fonctionnalités améliorées et 
                  personnalisées. Par exemple, ils peuvent mémoriser votre code postal saisi pour pré-remplir les formulaires 
                  ou vos préférences de langue et de région.
                </p>
              </div>

              {/* Cookies de ciblage */}
              <div className="mb-6 p-4 bg-orange-50 rounded-lg border-l-4 border-orange-400">
                <h3 className="text-lg font-semibold text-orange-800 mb-2">🎯 Cookies de Ciblage</h3>
                <p className="text-orange-700">
                  Ces cookies peuvent être définis par nos partenaires publicitaires pour créer un profil de vos intérêts 
                  et vous proposer des publicités pertinentes sur d&apos;autres sites. Ils ne stockent pas directement 
                  d&apos;informations personnelles, mais identifient de manière unique votre navigateur et appareil.
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
                Notre site peut utiliser des services tiers qui placent leurs propres cookies. Ces cookies ne sont pas 
                sous notre contrôle direct et sont soumis aux politiques de confidentialité de ces tiers. Nous vous 
                recommandons de consulter leurs politiques respectives pour plus d&apos;informations.
              </p>
              <p className="mt-4">
                <strong>Services tiers utilisés :</strong>
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li><strong>Resend</strong> : Service d&apos;envoi d&apos;emails pour le traitement des formulaires</li>
                <li><strong>Vercel</strong> : Hébergement et déploiement de l&apos;application</li>
              </ul>
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
                  <li>Utilisez le bouton &quot;🍪 Gérer mes cookies&quot; en bas à droite de chaque page</li>
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
                La durée de conservation des cookies varie selon leur type :
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li><strong>Cookies de session</strong> : Supprimés automatiquement à la fermeture de votre navigateur</li>
                <li><strong>Cookies persistants</strong> : Conservés jusqu&apos;à leur expiration ou suppression manuelle</li>
                <li><strong>Préférences de consentement</strong> : Conservées pendant 12 mois maximum</li>
                <li><strong>Données de formulaire</strong> : Conservées uniquement le temps de la session</li>
              </ul>
            </div>
          </section>

          {/* Mise à jour */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-display">
              Mise à Jour de cette Politique
            </h2>
            <div className="prose prose-lg text-gray-700">
              <p>
                Nous nous réservons le droit de modifier cette politique des cookies à tout moment. Toute modification 
                sera publiée sur cette page avec une nouvelle date de mise à jour. Nous vous recommandons de consulter 
                régulièrement cette page pour rester informé de nos pratiques en matière de cookies.
              </p>
              <p className="mt-4">
                En cas de modification substantielle de cette politique, nous vous en informerons via une notification 
                visible sur notre site ou par email si vous nous avez fourni vos coordonnées.
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
                Si vous avez des questions concernant notre politique des cookies ou souhaitez exercer vos droits 
                relatifs à la protection des données, n&apos;hésitez pas à nous contacter :
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="font-semibold">meilleure.agence.be</p>
                <p>Email : contact@meilleure.agence.be</p>
                <p>Adresse : Avenue Molière 491 – bte12, 1050 IXELLES, BELGIQUE</p>
                <p>Téléphone : 0486 880 450</p>
              </div>
            </div>
          </section>

          {/* Footer */}
          <SimpleFooter />
        </div>
      </div>
    </div>
  )
}
