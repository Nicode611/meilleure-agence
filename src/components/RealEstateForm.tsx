'use client';

import { useState } from 'react';

interface FormData {
  // Étape 1 - Type de projet
  projectType: string;
  propertyType: string;
  
  // Étape 2 - Localisation
  region: string;
  city: string;
  budget: string;
  
  // Étape 3 - Détails du bien
  surface: string;
  rooms: string;
  features: string[];
  
  // Étape 4 - Timeline et financement
  timeline: string;
  financing: string;
  currentSituation: string;
  
  // Étape 5 - Contact et validation
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  additionalInfo: string;
}

const initialFormData: FormData = {
  projectType: '',
  propertyType: '',
  region: '',
  city: '',
  budget: '',
  surface: '',
  rooms: '',
  features: [],
  timeline: '',
  financing: '',
  currentSituation: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  additionalInfo: ''
};

export default function RealEstateForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const totalSteps = 5;
  const progressPercentage = (currentStep / totalSteps) * 100;

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFeaturesChange = (feature: string) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
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
NOUVEAU PROJET IMMOBILIER

=== INFORMATIONS CONTACT ===
Nom: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Téléphone: ${formData.phone}

=== TYPE DE PROJET ===
Type de projet: ${formData.projectType}
Type de bien: ${formData.propertyType}

=== LOCALISATION ===
Région: ${formData.region}
Ville: ${formData.city}
Budget: ${formData.budget}

=== DÉTAILS DU BIEN ===
Surface: ${formData.surface}
Nombre de pièces: ${formData.rooms}
Caractéristiques: ${formData.features.join(', ') || 'Aucune'}

=== TIMELINE ET FINANCEMENT ===
Timeline: ${formData.timeline}
Financement: ${formData.financing}
Situation actuelle: ${formData.currentSituation}

=== INFORMATIONS SUPPLÉMENTAIRES ===
${formData.additionalInfo || 'Aucune information supplémentaire'}
          `.trim()
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData(initialFormData);
        setCurrentStep(1);
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

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Type de projet</h2>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Quel est votre projet immobilier ?
              </label>
              <select
                value={formData.projectType}
                onChange={(e) => handleInputChange('projectType', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Sélectionnez votre projet</option>
                <option value="achat-residence-principale">Achat résidence principale</option>
                <option value="achat-residence-secondaire">Achat résidence secondaire</option>
                <option value="investissement-locatif">Investissement locatif</option>
                <option value="construction-neuve">Construction neuve</option>
                <option value="renovation">Rénovation</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Type de bien recherché
              </label>
              <select
                value={formData.propertyType}
                onChange={(e) => handleInputChange('propertyType', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Sélectionnez le type de bien</option>
                <option value="appartement">Appartement</option>
                <option value="maison">Maison</option>
                <option value="terrain">Terrain</option>
                <option value="local-commercial">Local commercial</option>
                <option value="immeuble">Immeuble</option>
              </select>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Localisation et budget</h2>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Région souhaitée
              </label>
              <select
                value={formData.region}
                onChange={(e) => handleInputChange('region', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Sélectionnez une région</option>
                <option value="ile-de-france">Île-de-France</option>
                <option value="provence-alpes-cote-azur">Provence-Alpes-Côte d&apos;Azur</option>
                <option value="occitanie">Occitanie</option>
                <option value="nouvelle-aquitaine">Nouvelle-Aquitaine</option>
                <option value="auvergne-rhone-alpes">Auvergne-Rhône-Alpes</option>
                <option value="autre">Autre</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ville ou secteur précis
              </label>
              <input
                type="text"
                value={formData.city}
                onChange={(e) => handleInputChange('city', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Ex: Paris, Lyon, secteur Montpellier..."
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Budget envisagé
              </label>
              <select
                value={formData.budget}
                onChange={(e) => handleInputChange('budget', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Sélectionnez votre budget</option>
                <option value="moins-100k">Moins de 100k€</option>
                <option value="100k-200k">100k€ - 200k€</option>
                <option value="200k-300k">200k€ - 300k€</option>
                <option value="300k-500k">300k€ - 500k€</option>
                <option value="500k-1m">500k€ - 1M€</option>
                <option value="plus-1m">Plus de 1M€</option>
              </select>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Détails du bien</h2>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Surface souhaitée (m²)
              </label>
              <select
                value={formData.surface}
                onChange={(e) => handleInputChange('surface', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Sélectionnez la surface</option>
                <option value="moins-30">Moins de 30m²</option>
                <option value="30-50">30m² - 50m²</option>
                <option value="50-80">50m² - 80m²</option>
                <option value="80-120">80m² - 120m²</option>
                <option value="120-200">120m² - 200m²</option>
                <option value="plus-200">Plus de 200m²</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nombre de pièces
              </label>
              <select
                value={formData.rooms}
                onChange={(e) => handleInputChange('rooms', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Sélectionnez le nombre de pièces</option>
                <option value="1">1 pièce</option>
                <option value="2">2 pièces</option>
                <option value="3">3 pièces</option>
                <option value="4">4 pièces</option>
                <option value="5">5 pièces</option>
                <option value="plus-5">Plus de 5 pièces</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Caractéristiques souhaitées (plusieurs choix possibles)
              </label>
              <div className="grid grid-cols-2 gap-2">
                {['Balcon/Terrasse', 'Jardin', 'Parking', 'Cave', 'Piscine', 'Ascenseur'].map((feature) => (
                  <label key={feature} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.features.includes(feature)}
                      onChange={() => handleFeaturesChange(feature)}
                      className="mr-2"
                    />
                    <span className="text-sm">{feature}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Timeline et financement</h2>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Dans combien de temps souhaitez-vous concrétiser ?
              </label>
              <select
                value={formData.timeline}
                onChange={(e) => handleInputChange('timeline', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Sélectionnez une timeline</option>
                <option value="immediat">Immédiatement</option>
                <option value="3-mois">Dans les 3 mois</option>
                <option value="6-mois">Dans les 6 mois</option>
                <option value="1-an">Dans l&apos;année</option>
                <option value="plus-1-an">Dans plus d&apos;un an</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mode de financement
              </label>
              <select
                value={formData.financing}
                onChange={(e) => handleInputChange('financing', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Sélectionnez le financement</option>
                <option value="credit-immobilier">Crédit immobilier</option>
                <option value="comptant">Comptant</option>
                <option value="mixte">Mixte (crédit + apport)</option>
                <option value="non-defini">Pas encore défini</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Votre situation actuelle
              </label>
              <select
                value={formData.currentSituation}
                onChange={(e) => handleInputChange('currentSituation', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Sélectionnez votre situation</option>
                <option value="locataire">Locataire</option>
                <option value="proprietaire">Propriétaire</option>
                <option value="heberge">Hébergé</option>
                <option value="premier-achat">Premier achat</option>
              </select>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Vos coordonnées</h2>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Prénom *
                </label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nom *
                </label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Téléphone
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="06 12 34 56 78"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Informations supplémentaires
              </label>
              <textarea
                value={formData.additionalInfo}
                onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
                placeholder="Précisions sur votre projet, contraintes particulières..."
              />
            </div>

            {submitStatus === 'success' && (
              <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
                🎉 Votre projet a été envoyé avec succès ! Nous vous recontacterons rapidement.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
                ❌ Erreur lors de l&apos;envoi. Veuillez réessayer.
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.projectType && formData.propertyType;
      case 2:
        return formData.region && formData.city && formData.budget;
      case 3:
        return formData.surface && formData.rooms;
      case 4:
        return formData.timeline && formData.financing && formData.currentSituation;
      case 5:
        return formData.firstName && formData.lastName && formData.email;
      default:
        return false;
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      {/* Barre de progression */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">
            Étape {currentStep} sur {totalSteps}
          </span>
          <span className="text-sm font-medium text-blue-600">
            {Math.round(progressPercentage)}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      {/* Contenu de l'étape */}
      {renderStep()}

      {/* Boutons de navigation */}
      <div className="flex justify-between mt-8">
        <button
          onClick={prevStep}
          disabled={currentStep === 1}
          className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Précédent
        </button>

        {currentStep < totalSteps ? (
          <button
            onClick={nextStep}
            disabled={!isStepValid()}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Suivant
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={!isStepValid() || isSubmitting}
            className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Envoi en cours...' : 'Envoyer mon projet'}
          </button>
        )}
      </div>
    </div>
  );
}
