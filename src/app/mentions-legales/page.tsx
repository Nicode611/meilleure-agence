import Link from 'next/link'
import SimpleFooter from '@/components/SimpleFooter'

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header */}
      <div className="bg-primary-600 text-white py-8">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/" className="text-primary-100 hover:text-white transition-colors duration-200 mb-4 inline-block">
            ← Retour à l&apos;accueil
          </Link>
          <h1 className="text-4xl font-bold font-display">Mentions Légales</h1>
          <p className="text-primary-100 mt-2">Dernière mise à jour : 26 août 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-soft p-8 md:p-12">
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-display">Éditeur du site / Direction de la publication</h2>
            <div className="prose prose-lg text-gray-700">
              <p><strong>Xpert IMMO SRL</strong></p>
              <p>Avenue Molière 491 – bte12<br/>1050 IXELLES<br/>BELGIQUE</p>
              <ul>
                <li>Agrément professionnel immobilier : IPI 501.883</li>
                <li>Numéro d&apos;entreprise : BE 0563.951.763</li>
                <li>Assurance professionnelle : AXA</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-display">Hébergement</h2>
            <div className="prose prose-lg text-gray-700">
              <p>Vercel – <a href="http://www.vercel.com" target="_blank" rel="noopener noreferrer">www.vercel.com</a></p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-display">Droits d’auteur / Propriété intellectuelle</h2>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p><strong>Meilleure-agence.be</strong> a ouvert ce site pour l’information personnelle de ses utilisateurs. Aucune exploitation commerciale, même partielle, des données qui y sont présentées ne pourra être effectuée sans l’accord préalable et écrit de <strong>Meilleure-agence.be</strong>.</p>
              <p><strong>Meilleure-agence.be</strong> avise les utilisateurs de ce site que les éléments de ce site&nbsp;:</p>
              <ul>
                <li>sont protégés par la législation sur le droit d’auteur (photographies, articles, dessins, séquences animées, etc.) ;</li>
                <li>sont protégés par la législation sur les marques (marques des partenaires apparaissant sur le site). Cette liste ne peut constituer en aucune manière une limitation des marques dont Under Art Communication et affiliés est propriétaire.</li>
              </ul>
              <p>Les éléments ainsi protégés sont la propriété de <strong>Meilleure-agence.be</strong> ou de tiers ayant autorisé Under Art Communication à les exploiter. Toute reproduction, représentation, utilisation, adaptation, modification, incorporation, traduction, commercialisation, partielle ou intégrale, sans l’autorisation écrite préalable de <strong>Meilleure-agence.be</strong>, est interdite et est susceptible de constituer un délit de contrefaçon de droit d’auteur et/ou de dessins et/ou de marque, puni de trois ans d’emprisonnement et de 300&nbsp;000&nbsp;€ d’amende.</p>
              <p><em>Crédits photographiques</em> : photos des produits et des campagnes&nbsp;: Shutterstock.</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-display">Création d’un lien</h2>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>Il est possible de créer un lien vers ce site sans autorisation expresse de l’éditeur, à la seule condition que ce lien ouvre une nouvelle fenêtre du navigateur. Toutefois, <strong>Meilleure-agence.be</strong> se réserve le droit de demander la suppression d’un lien qu’il estime non conforme à sa politique éditoriale.</p>
              <p>Dans les autres cas et notamment :</p>
              <ul>
                <li>si vous souhaitez afficher les logos, marques et/ou créations de <strong>Meilleure-agence.be</strong> ;</li>
                <li>si le contenu du site <a href="http://www.meilleure-agence.be.com" target="_blank" rel="noopener noreferrer">www.meilleure-agence.be.com</a> doit s’intégrer dans la navigation de votre site (ex. : cadres/frames) ;</li>
                <li>si l’accès aux pages contenant le lien vers le site <a href="http://www.meilleure-agence.be.com" target="_blank" rel="noopener noreferrer">www.Meilleure-agence.be.com</a> n’est pas gratuit,</li>
              </ul>
              <p>vous devez demander l’autorisation expresse de <strong>Meilleure-agence.be</strong> à l’adresse mentionnée au point « Éditeur du site / Direction de la publication ». La libre autorisation de faire un lien n’inclut pas le droit à la reproduction d’une partie du contenu du site pour fabriquer ce lien.</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-display">Protection des données personnelles</h2>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p><strong>Politique Meilleure-agence.be</strong> de protection des données personnelles collectées sur Internet : <strong>Meilleure-agence.be</strong> met tout en œuvre pour protéger les données personnelles des visiteurs de ce site dans le respect de la législation sur la protection des données à caractère personnel.</p>
              <p><strong>Types d’informations collectées et utilisation</strong> : <strong>Meilleure-agence.be</strong> collecte uniquement les données personnelles (nom, prénom, adresses postale et électronique) que vous soumettez volontairement (ex. : demande d’informations, avis sur nos sites/produits). A chaque collecte, les finalités et modalités de traitement sont clairement exposées.</p>
              <p><strong>Partage des données personnelles</strong> : des informations de nature commerciale peuvent être envoyées avec votre autorisation. <strong>Meilleure-agence.be</strong> peut recourir à des prestataires (exécution de commandes, assistance promotionnelle, services techniques). Ces entreprises peuvent accéder aux données personnelles si nécessaire pour leurs tâches et s’engagent à respecter la législation applicable. Elles ne peuvent utiliser ces données qu’aux seules fins d’exécuter leurs missions. <strong>Meilleure-agence.be</strong> ne vend, ne cède et ne communique aucune donnée personnelle à des tiers.</p>
              <p>Si vous souhaitez recevoir de la documentation commerciale provenant de partenaires, <strong>Meilleure-agence.be</strong> ne partagera pas vos données ; un lien ou un moyen de contact pourra vous être communiqué pour accéder aux offres des partenaires.</p>
              <p>En cas d’obligation légale, administrative ou judiciaire de communication à un tiers autorisé, <strong>Meilleure-agence.be</strong> s’engage, préalablement à toute communication, à en informer les personnes concernées.</p>
              <p><strong>Enfants</strong> : une attention particulière est portée aux communications concernant les enfants et les familles.</p>
              <p><strong>Accès / rectification / suppression</strong> : vous gardez le contrôle des données que vous nous communiquez. Pour accéder, modifier, supprimer vos données ou modifier vos préférences de contact, merci de nous écrire à l’adresse indiquée dans la section « Nous contacter ».</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-display">Cookies</h2>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p><strong>Cookies du site</strong> : lors de votre connexion à <a href="http://www.Meilleure-agence.be.com" target="_blank" rel="noopener noreferrer">www.Meilleure-agence.be.com</a>, et sous réserve de vos choix de navigateur, des cookies peuvent être installés afin de : établir des statistiques de fréquentation, adapter la présentation du site à vos préférences d’affichage, mémoriser des informations saisies dans des formulaires, gérer et sécuriser l’accès à des espaces réservés (compte, panier).</p>
              <p><strong>Cookies tiers</strong> : un ou plusieurs cookies de sociétés partenaires peuvent être placés via nos pages ou contenus publicitaires (mesure des affichages, identification des publicités, comptage des clics, statistiques, reconnaissance de votre navigateur sur d’autres sites). L’émission et l’utilisation de ces cookies sont soumises aux politiques de ces tiers. Nous n’avons ni accès ni contrôle sur ces cookies.</p>
              <p><strong>Vos choix</strong> : vous pouvez configurer votre navigateur pour accepter ou refuser les cookies, ou être averti de leur dépôt, et gérer l’acceptation/ le refus au cas par cas.</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-display">Réseaux sociaux</h2>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>Le site peut utiliser des applications tierces permettant de partager des contenus avec d’autres personnes ou de faire connaître votre opinion (ex. : boutons « Partager », « J’aime » de Facebook, Twitter). Lorsque vous consultez une page contenant un tel bouton, votre navigateur établit une connexion directe avec les serveurs du réseau social.</p>
              <p>Si vous êtes connecté au réseau social, ces boutons permettent de relier les pages consultées à votre compte. Si vous cliquez sur un bouton de partage ou laissez un commentaire, les informations correspondantes seront transmises au réseau social et publiées sur votre compte. Si vous ne souhaitez pas cette liaison, déconnectez‑vous du réseau social avant de visiter notre site.</p>
              <p>Ces boutons sont soumis aux politiques de confidentialité des réseaux sociaux concernés ; nous vous invitons à les consulter.</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-display">Sécurité</h2>
            <div className="prose prose-lg text-gray-700">
              <p>Conformément à la loi, <strong>Meilleure-agence.be</strong> met en œuvre toutes les précautions de sécurité nécessaires au respect de la confidentialité des données personnelles.</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-display">Nous contacter</h2>
            <div className="prose prose-lg text-gray-700">
              <p>
              IMMO-9 BRUXELLES<br/>
                Avenue Molière 491 – bte12L<br/>
                1050 IXELLES – BELGIQUE<br/>
                Tél&nbsp;: 0486 880 450
              </p>
            </div>
          </section>

          {/* Footer */}
          <SimpleFooter />
        </div>
      </div>
    </div>
  )
}
