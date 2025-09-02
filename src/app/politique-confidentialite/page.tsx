import Link from 'next/link'
import SimpleFooter from '@/components/SimpleFooter'

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
              <p>Dans le cadre de nos services, nous collectons et traitons des données personnelles pour faciliter la mise en relation avec nos partenaires afin d&apos;obtenir des devis pour la vente de biens immobiliers. Cette politique de confidentialité explique comment nous collectons, utilisons, partageons et protégeons vos données personnelles conformément au Règlement Général sur la Protection des Données (RGPD) (UE) 2016/679 et aux lois belges applicables.</p>
            </div>
          </section>

          {/* Responsable du traitement */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-display">
              1. Responsable du traitement
            </h2>
            <div className="prose prose-lg text-gray-700">
              <p>
                <strong>Xpert IMMO SRL</strong><br/>
                Avenue Molière 491 – bte12<br/>
                1050 IXELLES<br/>
                BELGIQUE<br/>
                Numéro d&apos;entreprise : BE 0563.951.763<br/>
                Assurance professionnelle : AXA
              </p>
            </div>
          </section>

          {/* Finalités du traitement */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-display">
              2. Finalités du traitement
            </h2>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>Nous collectons et traitons vos données personnelles pour les finalités suivantes :</p>
              <ul>
                <li><strong>Obtention de devis</strong> : Transmission de vos données à nos partenaires (agences immobilières, courtiers ou autres professionnels du secteur immobilier) pour fournir des devis personnalisés pour la vente de biens immobiliers.</li>
                <li><strong>Gestion de la relation client</strong> : Répondre à vos demandes, assurer le suivi des services et communiquer avec vous.</li>
                <li><strong>Amélioration de nos services</strong> : Analyse des données pour optimiser nos processus, sous réserve de votre consentement ou de notre intérêt légitime.</li>
                <li><strong>Respect des obligations légales</strong> : Conformité avec les lois belges et européennes, notamment en matière fiscale ou de lutte contre la fraude.</li>
              </ul>
            </div>
          </section>

          {/* Base légale du traitement */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-display">
              3. Base légale du traitement
            </h2>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>Le traitement de vos données repose sur les bases légales suivantes :</p>
              <ul>
                <li><strong>Consentement (Article 6(1)(a) RGPD)</strong> : Vous consentez explicitement à ce que vos données soient collectées et transmises à nos partenaires pour obtenir des devis.</li>
                <li><strong>Exécution d&apos;un contrat (Article 6(1)(b) RGPD)</strong> : Le traitement est nécessaire pour fournir les services demandés, notamment la mise en relation avec des partenaires.</li>
                <li><strong>Intérêt légitime (Article 6(1)(f) RGPD)</strong> : Nous pouvons traiter certaines données pour améliorer nos services ou prévenir la fraude, sauf si vos intérêts ou droits fondamentaux prévalent.</li>
                <li><strong>Obligation légale (Article 6(1)(c) RGPD)</strong> : Certaines données peuvent être traitées pour respecter les obligations légales belges, telles que les déclarations fiscales ou les obligations anti-blanchiment.</li>
              </ul>
            </div>
          </section>

          {/* Données collectées */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-display">
              4. Données collectées
            </h2>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>Nous collectons les catégories de données suivantes :</p>
              <ul>
                <li><strong>Données d&apos;identification</strong> : Nom, prénom, adresse e-mail, numéro de téléphone, adresse postale.</li>
                <li><strong>Données relatives au bien immobilier</strong> : Adresse du bien, type de bien (maison, appartement, etc.), superficie, caractéristiques spécifiques, estimation souhaitée.</li>
              </ul>
              <p>Nous nous engageons à collecter uniquement les données strictement nécessaires aux finalités décrites.</p>
            </div>
          </section>

          {/* Destinataires des données */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-display">
              5. Destinataires des données
            </h2>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>Vos données personnelles peuvent être transmises aux destinataires suivants :</p>
              <ul>
                <li><strong>Partenaires commerciaux</strong> : Agences immobilières, courtiers ou autres professionnels du secteur immobilier en Belgique pour la réalisation des devis.</li>
                <li><strong>Prestataires techniques</strong> : Hébergeurs, fournisseurs de services informatiques ou d&apos;analyse, sous réserve de garanties contractuelles conformes au RGPD.</li>
                <li><strong>Autorités publiques</strong> : En cas d&apos;obligation légale, comme le SPF Finances ou les autorités judiciaires belges.</li>
              </ul>
              <p>Les partenaires situés hors de l&apos;UE (si applicable) sont soumis à des garanties appropriées, telles que des clauses contractuelles types approuvées par la Commission européenne.</p>
            </div>
          </section>

          {/* Durée de conservation */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-display">
              6. Durée de conservation
            </h2>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>Vos données sont conservées pour la durée nécessaire aux finalités décrites :</p>
              <ul>
                <li><strong>Données pour les devis</strong> : Conservées pendant 2 mois après la dernière interaction, sauf demande de suppression anticipée.</li>
                <li><strong>Données de relation client</strong> : Conservées pendant la durée de la relation contractuelle et 1 an pour respecter les obligations légales belges.</li>
              </ul>
              <p>À l&apos;issue de ces périodes, vos données seront supprimées ou anonymisées.</p>
            </div>
          </section>

          {/* Vos droits */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-display">
              7. Vos droits
            </h2>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>Conformément au RGPD et à la législation belge, vous disposez des droits suivants :</p>
              <ul>
                <li><strong>Droit d&apos;accès</strong> : Consulter les données que nous détenons sur vous.</li>
                <li><strong>Droit de rectification</strong> : Demander la correction de données inexactes ou incomplètes.</li>
                <li><strong>Droit à l&apos;effacement</strong> : Demander la suppression de vos données, sous réserve des obligations légales.</li>
                <li><strong>Droit à la limitation</strong> : Demander la limitation du traitement dans certains cas.</li>
                <li><strong>Droit à la portabilité</strong> : Recevoir vos données dans un format structuré ou les transférer à un autre responsable de traitement.</li>
                <li><strong>Droit d&apos;opposition</strong> : Vous opposer au traitement pour des raisons tenant à votre situation particulière, notamment pour le marketing direct.</li>
                <li><strong>Droit de retirer votre consentement</strong> : Retirer votre consentement à tout moment pour les traitements basés sur celui-ci.</li>
              </ul>
              <p>Pour exercer ces droits, contactez-nous à : <a href="mailto:contact@xpert-immo.com">contact@xpert-immo.com</a> ou à notre adresse postale. Une vérification de votre identité pourra être requise.</p>
            </div>
          </section>

          {/* Sécurité des données */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-display">
              8. Sécurité des données
            </h2>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>Nous mettons en place des mesures techniques et organisationnelles pour protéger vos données, notamment :</p>
              <ul>
                <li>Chiffrement des données sensibles.</li>
                <li>Accès restreint aux données par du personnel formé.</li>
                <li>Audits réguliers de sécurité.</li>
              </ul>
              <p>En cas de violation de données, nous vous informerons dans les 72 heures si celle-ci est susceptible d&apos;entraîner un risque élevé pour vos droits et libertés, conformément au RGPD.</p>
            </div>
          </section>

          {/* Cookies et technologies similaires */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-display">
              9. Cookies et technologies similaires
            </h2>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>Si notre site utilise des cookies, ceux-ci servent à :</p>
              <ul>
                <li>Assurer le bon fonctionnement du site (cookies techniques).</li>
                <li>Analyser l&apos;utilisation du site (cookies analytiques, sous réserve de votre consentement).</li>
              </ul>
              <p>Vous pouvez gérer vos préférences via notre bannière de cookies ou les paramètres de votre navigateur.</p>
            </div>
          </section>

          {/* Plaintes */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-display">
              10. Plaintes
            </h2>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>Si vous estimez que le traitement de vos données n&apos;est pas conforme au RGPD, vous pouvez adresser une plainte à :</p>
              <ul>
                <li>Notre délégué à la protection des données (si applicable) : <a href="mailto:contact@xpert-immo.com">contact@xpert-immo.com</a></li>
                <li><strong>L&apos;Autorité de protection des données (APD) belge</strong> :<br/>
                  Adresse : Rue de la Presse 35, 1000 Bruxelles, Belgique<br/>
                  E-mail : <a href="mailto:contact@apd-gba.be">contact@apd-gba.be</a><br/>
                  Site web : <a href="https://www.autoriteprotectiondonnees.be" target="_blank" rel="noopener noreferrer">https://www.autoriteprotectiondonnees.be</a>
                </li>
              </ul>
            </div>
          </section>

          {/* Modifications de la politique */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-display">
              11. Modifications de la politique
            </h2>
            <div className="prose prose-lg text-gray-700">
              <p>Nous pouvons mettre à jour cette politique pour refléter les évolutions légales ou nos pratiques. Toute modification sera publiée sur notre site, et vous serez informé si nécessaire, conformément aux obligations du RGPD.</p>
            </div>
          </section>

          {/* Contact */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-display">
              12. Contact
            </h2>
            <div className="prose prose-lg text-gray-700">
              <p>Pour toute question concernant cette politique ou le traitement de vos données, contactez-nous :</p>
              <p><a href="mailto:contact@xpert-immo.com">contact@xpert-immo.com</a></p>
            </div>
          </section>

          {/* Footer */}
          <SimpleFooter />
        </div>
      </div>
    </div>
  )
}
