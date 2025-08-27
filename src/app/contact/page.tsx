'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          message: `
NOUVELLE DEMANDE DE CONTACT

=== INFORMATIONS CONTACT ===
Nom: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Téléphone: ${formData.phone || 'Non renseigné'}

=== SUJET ===
${formData.subject}

=== MESSAGE ===
${formData.message}

=== TYPE DE DEMANDE ===
Demande de contact générale
          `.trim()
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Erreur:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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

            {/* Carte */}
            <div className="bg-white rounded-2xl shadow-soft p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 font-display">🗺️ Notre Localisation</h2>
              <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <span className="text-4xl mb-2 block">📍</span>
                  <p className="text-sm">Carte interactive à venir</p>
                  <p className="text-xs mt-1">Avenue Molière 491, 1050 Ixelles</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulaire de contact */}
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-200 bg-white py-8 mt-16">
        <div className="max-w-4xl mx-auto px-4">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
