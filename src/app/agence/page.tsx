'use client';

import ContactForm from '@/components/ContactForm';
import MainFooter from '@/components/MainFooter';
import Link from 'next/link';

export default function AgencePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Bouton de retour */}
        <div className="mb-8">
          <Link 
            href="/"
            className="inline-flex items-center px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            ← Retour à l&apos;accueil
          </Link>
        </div>
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6 font-display">
            🏢 Agence
          </h1>
          <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-8">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Vous êtes agent immobilier et vous souhaitez devenir partenaire de <strong className="text-primary-600">Meilleure-agence.be</strong> ? <br />
              Complétez ce formulaire et nous recontacterons prochainement.
            </p>
            
            <ContactForm 
              submitButtonText="Envoyer ma demande"
              showPhone={true}
              messagePlaceholder="Décrivez votre agence et vos motivations..."
            />
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <MainFooter />
    </div>
  );
}
