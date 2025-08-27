'use client';

import Link from 'next/link';
import SimpleFooter from '@/components/SimpleFooter';

export default function Contact() {



  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header */}
      <div className="bg-primary-600 text-white py-8">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/" className="text-primary-100 hover:text-white transition-colors duration-200 mb-4 inline-block">
            ← Retour à l&apos;accueil
          </Link>
          <h1 className="text-4xl font-bold font-display">Nous Contacter</h1>
          <p className="text-primary-100 mt-2">Une question ? Un projet ? Contactez-nous !</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Informations de l'entreprise */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-soft p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 font-display">📞 Nos Coordonnées</h2>
              
              <div className="space-y-6">
                {/* Adresse */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🏢</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Adresse</h3>
                    <p className="text-gray-600 leading-relaxed">
                      IMMO-9 / Xpert IMMO SRL<br />
                      Avenue Molière 491 – bte12<br />
                      1050 IXELLES<br />
                      BELGIQUE
                    </p>
                  </div>
                </div>

                {/* Téléphone */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📱</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Téléphone</h3>
                    <p className="text-gray-600">
                      <a href="tel:0486880450" className="hover:text-primary-600 transition-colors duration-200">
                        0486 880 450
                      </a>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">✉️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:contact@meilleure.agence.be" className="hover:text-primary-600 transition-colors duration-200">
                      contact@xpert-immo.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* Horaires */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🕒</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Horaires d&apos;ouverture</h3>
                    <p className="text-gray-600">
                      Lundi - Vendredi : 9h00 - 18h00<br />
                      Samedi : 9h00 - 12h00<br />
                      Dimanche : Fermé
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Informations légales */}
            <div className="bg-white rounded-2xl shadow-soft p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 font-display">⚖️ Informations Légales</h2>
              
              <div className="space-y-4 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span className="font-medium">Agrément professionnel immobilier :</span>
                  <span>IPI 501.883</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Numéro d&apos;entreprise :</span>
                  <span>BE 0563.951.763</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Assurance professionnelle :</span>
                  <span>AXA</span>
                </div>
              </div>
            </div>

            {/* Carte Google Maps */}
            <div className="bg-white rounded-2xl shadow-soft p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 font-display">🗺️ Notre Localisation</h2>
              <div className="rounded-xl overflow-hidden h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2520.7998031834277!2d4.362273976802542!3d50.81634777166439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c4f00a538b27%3A0xe3db1c4368e3f6ef!2sAv.%20Moli%C3%A8re%20491%2C%201050%20Ixelles%2C%20Belgique!5e0!3m2!1sfr!2s!4v1756300355795!5m2!1sfr!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation IMMO-9 - Avenue Molière 491, 1050 Ixelles"
                  className="w-full h-full"
                />
              </div>
              <div className="mt-4 text-center">
                <a
                  href="https://maps.google.com/?q=Avenue+Molière+491,+1050+Ixelles,+Belgique"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors duration-200 font-medium"
                >
                  <span>📍</span>
                  <span>Ouvrir dans Google Maps</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          </div>

          {/* Formulaire de contact */}
        </div>
      </div>

      {/* Footer */}
      <SimpleFooter />
    </div>
  );
}
