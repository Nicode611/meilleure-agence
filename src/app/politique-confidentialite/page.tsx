import Link from 'next/link'

export default function PolitiqueConfidentialite() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header */}
      <div className="bg-primary-600 text-white py-8">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/" className="text-primary-100 hover:text-white transition-colors duration-200 mb-4 inline-block">
            ← Retour à l&apos;accueil
          </Link>
          <h1 className="text-4xl font-bold font-display">Politique de Confidentialité</h1>
          <p className="text-primary-100 mt-2">Dernière mise à jour : 26 août 2025</p>
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
              <p>Vos données à caractère personnel sont traitées par et sous la responsabilité de <strong>Xpert IMMO SRL</strong>, dont le siège social est établi à 1050 Bruxelles (TVA/BCE : BE 0563.951.763), ci-après dénommée « IMMO‑9 » ou « Nous ».</p>
              <p>Pour toute question concernant la présente Charte de Protection de la Vie Privée, vous pouvez nous écrire à l’adresse ci‑dessus ou par e‑mail à <a href="mailto:contact@xpert-immo.com">contact@xpert-immo.com</a>.</p>
            </div>
          </section>

          {/* Collecte des données */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-display">
              Collecte des Données
            </h2>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>Les données à caractère personnel que l’utilisateur communique lors d’une demande via notre site ou via nos réseaux sociaux sont traitées uniquement afin de répondre à sa sollicitation.</p>
              <p>Aucune donnée n’est collectée automatiquement par le site en lui‑même. Les seules données traitées sont celles que vous nous communiquez volontairement. Les éventuelles informations collectées automatiquement ne le sont que par des outils statistiques (comme Google Analytics) et concernent uniquement l’adresse IP, le navigateur utilisé, les pages visitées, et restent totalement anonymes.</p>
              <p>Les données peuvent être transmises à notre personnel ou, si nécessaire, à des tiers afin d’assurer le traitement de votre demande. En cas de refus de fournir certaines données indispensables, il se peut que nous ne puissions pas répondre à votre demande.</p>
            </div>
          </section>

          {/* Utilisation des données */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-display">
              Utilisation des Données
            </h2>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>Vos données peuvent être utilisées pour :</p>
              <ul>
                <li>répondre à vos demandes et assurer le suivi de vos dossiers ;</li>
                <li>vous adresser des annonces correspondant à vos critères de recherche ;</li>
                <li>vous informer ponctuellement sur nos services et actions.</li>
              </ul>
            </div>
          </section>

          {/* Partage des données */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-display">
              Partage des Données
            </h2>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>Les données personnelles sont exclusivement destinées à un usage interne et ne seront jamais cédées à des tiers à des fins commerciales. Elles ne sont communiquées à des tiers que lorsque cela est nécessaire au traitement de votre demande ou dans le cadre d’obligations légales.</p>
              <p>En cas de concours ou opérations spécifiques, vos données pourront être utilisées uniquement pour le bon déroulement de l’opération et pour l’envoi de rappels éventuels liés à celle‑ci.</p>
            </div>
          </section>

          {/* Sécurité */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-display">
              Sécurité des Données
            </h2>
            <div className="prose prose-lg text-gray-700">
              <p>Nous mettons en œuvre toutes les mesures techniques et organisationnelles nécessaires afin de garantir la sécurité et la confidentialité de vos données personnelles, en conformité avec le RGPD.</p>
              <p>Nos sous‑traitants et collaborateurs sont soumis à une stricte obligation de confidentialité et au respect des prescriptions légales applicables.</p>
            </div>
          </section>

          {/* Cookies */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-display">
              Cookies et Technologies Similaires
            </h2>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>Lors de votre navigation sur <a href="http://www.immo-9.be" target="_blank" rel="noopener noreferrer">www.immo-9.be</a>, des cookies peuvent être installés sur votre terminal afin de :</p>
              <ul>
                <li>assurer le bon fonctionnement du site (cookies techniques de session) ;</li>
                <li>adapter la présentation du site à vos préférences ;</li>
                <li>établir des statistiques de fréquentation.</li>
              </ul>
              <p>Vous pouvez configurer votre navigateur pour accepter ou refuser les cookies, ou être averti de leur dépôt.</p>
            </div>
          </section>

          {/* Droits des utilisateurs */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-display">
              Vos Droits
            </h2>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>Conformément au RGPD, vous disposez des droits suivants :</p>
              <ul>
                <li><strong>Droit d’accès</strong> : savoir si vos données sont traitées et obtenir une copie ;</li>
                <li><strong>Droit de rectification</strong> : corriger des informations inexactes ou incomplètes ;</li>
                <li><strong>Droit à l’effacement</strong> : supprimer vos données lorsqu’elles ne sont plus nécessaires ;</li>
                <li><strong>Droit à la limitation</strong> : limiter temporairement le traitement de vos données ;</li>
                <li><strong>Droit à la portabilité</strong> : recevoir vos données dans un format structuré ;</li>
                <li><strong>Droit d’opposition</strong> : vous opposer au traitement ou à la prospection.</li>
              </ul>
              <p>Pour exercer vos droits, contactez‑nous à l’adresse indiquée ci‑dessous. Nous répondrons dans un délai maximal d’un mois.</p>
            </div>
          </section>

          {/* Contact */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-display">
              Nous Contacter
            </h2>
            <div className="prose prose-lg text-gray-700">
              <p>
                IMMO‑9 Bruxelles<br/>
                Avenue Molière 491 – bte12<br/>
                1050 Ixelles – Belgique<br/>
                Tél : 0486 880 450<br/>
                Email : <a href="mailto:contact@xpert-immo.com">contact@xpert-immo.com</a>
              </p>
            </div>
          </section>

          {/* Modifications */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-display">
              Modifications de cette Politique
            </h2>
            <div className="prose prose-lg text-gray-700">
              <p>Nous nous réservons le droit de modifier la présente politique de confidentialité à tout moment afin de rester en conformité avec la législation en vigueur et de refléter les évolutions de nos pratiques. Toute modification sera publiée sur cette page avec une nouvelle date de mise à jour.</p>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
