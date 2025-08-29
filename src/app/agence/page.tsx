'use client';

import { useRouter } from 'next/navigation';
import ContactForm from '@/components/ContactForm';

export default function AgencePage() {
  const router = useRouter();

  const handleSubmit = async (formData: {
    name: string;
    email: string;
    phone: string;
    message: string;
  }) => {
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: `
            <h2>🏢 Demande de Partenariat - Agent Immobilier</h2>
            <p><strong>Nom :</strong> ${formData.name}</p>
            <p><strong>Email :</strong> ${formData.email}</p>
            <p><strong>Téléphone :</strong> ${formData.phone}</p>
            <p><strong>Message :</strong></p>
            <p>${formData.message}</p>
          `,
        }),
      });

      if (response.ok) {
        router.push('/merci');
      } else {
        // Erreur lors de l'envoi
      }
    } catch {
      // Gestion d'erreur silencieuse
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header avec image de fond */}
      <div 
        className="relative h-96 bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{ 
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("/hero2.png")', 
          backgroundPosition: 'center' 
        }}
      >
        <div className="text-center text-white z-10">
          <h1 className="text-5xl font-bold mb-4 font-display">
            🏢 Partenariat Agence
          </h1>
          <p className="text-xl max-w-2xl mx-auto leading-relaxed">
            Rejoignez le réseau Meilleure-agence.be et développez votre activité immobilière
          </p>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Section d'introduction */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 font-display">
            Devenez Partenaire de Meilleure-agence.be
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Vous êtes agent immobilier et vous souhaitez devenir partenaire de Meilleure-agence.be ? 
            Complétez ce formulaire et nous recontacterons prochainement.
          </p>
        </div>

        {/* Avantages du partenariat */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 bg-white rounded-2xl shadow-soft border border-gray-100">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Développement Commercial</h3>
            <p className="text-gray-600">
              Accédez à une clientèle qualifiée et développez votre portefeuille de prospects
            </p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-2xl shadow-soft border border-gray-100">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Réseau Partenaires</h3>
            <p className="text-gray-600">
              Intégrez un réseau d&apos;agences de confiance et bénéficiez de synergies
            </p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-2xl shadow-soft border border-gray-100">
            <div className="text-4xl mb-4">💼</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Support Marketing</h3>
            <p className="text-gray-600">
              Bénéficiez de notre expertise marketing et de nos outils de prospection
            </p>
          </div>
        </div>

        {/* Formulaire de contact */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              📝 Demande de Partenariat
            </h3>
            
            <ContactForm 
              onSubmit={handleSubmit}
              submitButtonText="🚀 Envoyer ma demande de partenariat"
              showPhone={true}
              messagePlaceholder="Décrivez votre agence, votre zone d&apos;activité et vos motivations pour rejoindre notre réseau..."
            />
          </div>
        </div>

        {/* Informations supplémentaires */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 border border-primary-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              💡 Pourquoi nous rejoindre ?
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-left max-w-4xl mx-auto">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">✅ Avantages</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Accès à une base de prospects qualifiés</li>
                  <li>• Support marketing et formation</li>
                  <li>• Réseau d&apos;agences partenaires</li>
                  <li>• Outils de prospection avancés</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">🎯 Critères</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Agence immobilière établie</li>
                  <li>• Zone d&apos;activité définie</li>
                  <li>• Engagement qualité client</li>
                  <li>• Volonté de développement</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
