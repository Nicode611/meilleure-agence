import Link from 'next/link'
import Image from 'next/image'

export default function Merci() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header */}
      <div className="bg-primary-600 text-white py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold font-display mb-4">Merci ! 🎉</h1>
          <p className="text-primary-100 text-lg">
            Votre demande a été envoyée avec succès
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-soft p-8 md:p-12 text-center">
          
          {/* Icon de succès */}
          <div className="w-24 h-24 mx-auto mb-8 bg-green-100 rounded-full flex items-center justify-center">
            <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          {/* Message principal */}
          <h2 className="text-3xl font-bold text-gray-900 mb-6 font-display">
            Votre demande a été reçue !
          </h2>
          
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Nous avons bien reçu votre demande de devis immobilier. Notre équipe va analyser votre projet 
            et vous mettre en relation avec les meilleurs professionnels de votre région.
          </p>

          {/* Prochaines étapes */}
          <div className="bg-blue-50 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">
              📋 Prochaines étapes
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                  1
                </div>
                <div>
                  <h4 className="font-medium text-blue-800">Analyse de votre projet</h4>
                  <p className="text-sm text-blue-600">Notre équipe étudie vos besoins</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                  2
                </div>
                <div>
                  <h4 className="font-medium text-blue-800">Sélection des professionnels</h4>
                  <p className="text-sm text-blue-600">Nous identifions les meilleurs experts</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                  3
                </div>
                <div>
                  <h4 className="font-medium text-blue-800">Contact sous 24h</h4>
                  <p className="text-sm text-blue-600">Un conseiller vous appelle</p>
                </div>
              </div>
            </div>
          </div>

          {/* Informations importantes */}
          <div className="bg-yellow-50 rounded-xl p-6 mb-8">
            <h3 className="text-lg font-semibold text-yellow-800 mb-3">
              ⏰ Délai de réponse
            </h3>
            <p className="text-yellow-700">
              Vous recevrez un appel de notre équipe dans les <strong>24 heures ouvrables</strong>. 
              Si vous n'avez pas de nouvelles, n'hésitez pas à nous contacter.
            </p>
          </div>

          {/* Contact d'urgence */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              📞 Besoin d'aide immédiate ?
            </h3>
            <p className="text-gray-700 mb-4">
              Notre équipe est disponible pour répondre à vos questions urgentes.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a 
                href="tel:+32123456789" 
                className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors duration-200"
              >
                📞 Appeler maintenant
              </a>
              <a 
                href="mailto:contact@meilleure.agence.be" 
                className="inline-flex items-center justify-center px-6 py-3 bg-gray-600 text-white font-medium rounded-lg hover:bg-gray-700 transition-colors duration-200"
              >
                ✉️ Envoyer un email
              </a>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/" 
              className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white font-medium rounded-xl hover:bg-primary-700 transition-all duration-200 hover:scale-105 shadow-lg"
            >
              🏠 Retour à l'accueil
            </Link>
            
            <Link 
              href="/politique-confidentialite" 
              className="inline-flex items-center justify-center px-8 py-4 bg-gray-100 text-gray-700 font-medium rounded-xl hover:bg-gray-200 transition-all duration-200"
            >
              📋 Politique de confidentialité
            </Link>
          </div>

          {/* Footer */}
          <div className="border-t border-gray-200 pt-8 mt-12">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-600 mb-4 md:mb-0">
                <p>© 2025 meilleure.agence.be. Tous droits réservés.</p>
              </div>
              <div className="flex space-x-6">
                <Link href="/politique-confidentialite" className="text-primary-600 hover:text-primary-700 transition-colors duration-200">
                  Politique de Confidentialité
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
