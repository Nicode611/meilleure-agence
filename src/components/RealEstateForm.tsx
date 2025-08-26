'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface FormData {
  // Code postal
  postalCode: string;
  
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
  postalCode: '',
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

interface RealEstateFormProps {
  postalCode: string;
}

export default function RealEstateForm({ postalCode }: RealEstateFormProps) {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    ...initialFormData,
    postalCode: postalCode
  });
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
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .header h1 { margin: 0; font-size: 28px; font-weight: 300; }
        .header .subtitle { margin: 10px 0 0 0; opacity: 0.9; font-size: 16px; }
        .content { background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        .section { margin-bottom: 25px; }
        .section-title { color: #667eea; font-size: 18px; font-weight: 600; margin-bottom: 15px; padding-bottom: 8px; border-bottom: 2px solid #e9ecef; }
        .field { margin-bottom: 12px; }
        .field-label { font-weight: 600; color: #495057; margin-bottom: 4px; }
        .field-value { color: #6c757d; padding: 8px 12px; background-color: #f8f9fa; border-radius: 6px; border-left: 4px solid #667eea; }
        .features-grid { display: inline-block; }
        .feature-tag { display: inline-block; background: #e3f2fd; color: #1976d2; padding: 4px 12px; border-radius: 20px; margin: 2px; font-size: 14px; }
        .footer { text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e9ecef; color: #6c757d; font-size: 14px; }
        .highlight { background: linear-gradient(120deg, #a8edea 0%, #fed6e3 100%); padding: 20px; border-radius: 8px; margin: 20px 0; text-align: center; }
        .highlight h3 { margin: 0 0 10px 0; color: #495057; }
        .highlight p { margin: 0; color: #6c757d; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🏠 Nouveau Projet Immobilier</h1>
            <p class="subtitle">Demande de devis reçue</p>
        </div>
        
        <div class="content">
            <div class="highlight">
                <h3>🎯 Projet de ${formData.projectType.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</h3>
                <p>Type de bien : ${formData.propertyType.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</p>
            </div>

            <div class="section">
                <div class="section-title">👤 Informations de Contact</div>
                <div class="field">
                    <div class="field-label">Nom complet</div>
                    <div class="field-value">${formData.firstName} ${formData.lastName}</div>
                </div>
                <div class="field">
                    <div class="field-label">Email</div>
                    <div class="field-value">${formData.email}</div>
                </div>
                ${formData.phone ? `<div class="field">
                    <div class="field-label">Téléphone</div>
                    <div class="field-value">${formData.phone}</div>
                </div>` : ''}
            </div>

            <div class="section">
                <div class="section-title">📍 Localisation & Budget</div>
                <div class="field">
                    <div class="field-label">Région</div>
                    <div class="field-value">${formData.region.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</div>
                </div>
                <div class="field">
                    <div class="field-label">Ville/Secteur</div>
                    <div class="field-value">${formData.city}</div>
                </div>
                <div class="field">
                    <div class="field-label">Budget envisagé</div>
                    <div class="field-value">${formData.budget.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</div>
                </div>
            </div>

            <div class="section">
                <div class="section-title">🏗️ Détails du Bien</div>
                <div class="field">
                    <div class="field-label">Surface souhaitée</div>
                    <div class="field-value">${formData.surface.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</div>
                </div>
                <div class="field">
                    <div class="field-label">Nombre de pièces</div>
                    <div class="field-value">${formData.rooms === 'plus-5' ? 'Plus de 5 pièces' : formData.rooms + ' pièce' + (formData.rooms !== '1' ? 's' : '')}</div>
                </div>
                ${formData.features.length > 0 ? `<div class="field">
                    <div class="field-label">Caractéristiques souhaitées</div>
                    <div class="features-grid">
                        ${formData.features.map(feature => `<span class="feature-tag">${feature}</span>`).join('')}
                    </div>
                </div>` : ''}
            </div>

            <div class="section">
                <div class="section-title">⏰ Timeline & Financement</div>
                <div class="field">
                    <div class="field-label">Délai de réalisation</div>
                    <div class="field-value">${formData.timeline.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</div>
                </div>
                <div class="field">
                    <div class="field-label">Mode de financement</div>
                    <div class="field-value">${formData.financing.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</div>
                </div>
                <div class="field">
                    <div class="field-label">Situation actuelle</div>
                    <div class="field-value">${formData.currentSituation.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</div>
                </div>
            </div>

            ${formData.additionalInfo ? `<div class="section">
                <div class="section-title">💬 Informations Supplémentaires</div>
                <div class="field-value" style="font-style: italic;">${formData.additionalInfo}</div>
            </div>` : ''}

            <div class="footer">
                <p>📧 Demande reçue le ${new Date().toLocaleDateString('fr-FR', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                })}</p>
                <p>🚀 Prêt à vous accompagner dans votre projet immobilier !</p>
            </div>
        </div>
    </div>
</body>
</html>
          `.trim()
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        // Rediriger vers la page de remerciement après un court délai
        setTimeout(() => {
          router.push('/merci');
        }, 1500);
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
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2 font-display">Type de projet</h2>
              <p className="text-base text-gray-600">Décrivez votre projet immobilier</p>
            </div>
            
            <div className="space-y-5">
              <div>
                <label className="block text-base font-semibold text-gray-700 mb-2">
                  Quel est votre projet immobilier ?
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => handleInputChange('projectType', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 text-base bg-white hover:border-primary-300 text-gray-800"
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
                <label className="block text-base font-semibold text-gray-700 mb-2">
                  Type de bien recherché
                </label>
                <select
                  value={formData.propertyType}
                  onChange={(e) => handleInputChange('propertyType', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 text-base bg-white hover:border-primary-300 text-gray-800"
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
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2 font-display">Localisation et budget</h2>
              <p className="text-base text-gray-600">Définissez votre zone de recherche et votre budget</p>
            </div>
            
            <div className="space-y-5">
              <div>
                <label className="block text-base font-semibold text-gray-700 mb-2">
                  Région souhaitée
                </label>
                <select
                  value={formData.region}
                  onChange={(e) => handleInputChange('region', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 text-base bg-white hover:border-primary-300 text-gray-800"
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
                <label className="block text-base font-semibold text-gray-700 mb-2">
                  Ville ou secteur précis
                </label>
                <input
                  type="text"
                  value={formData.city}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 text-base bg-white hover:border-primary-300 placeholder-gray-400 text-gray-800"
                  placeholder="Ex: Paris, Lyon, secteur Montpellier..."
                  required
                />
              </div>

              <div>
                <label className="block text-base font-semibold text-gray-700 mb-2">
                  Budget envisagé
                </label>
                <select
                  value={formData.budget}
                  onChange={(e) => handleInputChange('budget', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 text-base bg-white hover:border-primary-300 text-gray-800"
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
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2 font-display">Détails du bien</h2>
              <p className="text-base text-gray-600">Précisez vos critères de recherche</p>
            </div>
            
            <div className="space-y-5">
              <div>
                <label className="block text-base font-semibold text-gray-700 mb-2">
                  Surface souhaitée (m²)
                </label>
                <select
                  value={formData.surface}
                  onChange={(e) => handleInputChange('surface', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 text-base bg-white hover:border-primary-300 text-gray-800"
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
                <label className="block text-base font-semibold text-gray-700 mb-2">
                  Nombre de pièces
                </label>
                <select
                  value={formData.rooms}
                  onChange={(e) => handleInputChange('rooms', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 text-base bg-white hover:border-primary-300 text-gray-800"
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
                <label className="block text-base font-semibold text-gray-700 mb-2">
                  Caractéristiques souhaitées (plusieurs choix possibles)
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {['Balcon/Terrasse', 'Jardin', 'Parking', 'Cave', 'Piscine', 'Ascenseur'].map((feature) => (
                    <label key={feature} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-primary-50 transition-all duration-300 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={formData.features.includes(feature)}
                        onChange={() => handleFeaturesChange(feature)}
                        className="w-4 h-4 text-primary-600 bg-white border-2 border-gray-300 rounded focus:ring-primary-500 focus:ring-2 transition-all duration-300 group-hover:border-primary-400"
                      />
                      <span className="text-base text-gray-700 group-hover:text-primary-700 font-medium">{feature}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2 font-display">Timeline et financement</h2>
              <p className="text-base text-gray-600">Planifiez votre projet immobilier</p>
            </div>
            
            <div className="space-y-5">
              <div>
                <label className="block text-base font-semibold text-gray-700 mb-2">
                  Dans combien de temps souhaitez-vous concrétiser ?
                </label>
                <select
                  value={formData.timeline}
                  onChange={(e) => handleInputChange('timeline', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 text-base bg-white hover:border-primary-300 text-gray-800"
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
                <label className="block text-base font-semibold text-gray-700 mb-2">
                  Mode de financement
                </label>
                <select
                  value={formData.financing}
                  onChange={(e) => handleInputChange('financing', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 text-base bg-white hover:border-primary-300 text-gray-800"
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
                <label className="block text-base font-semibold text-gray-700 mb-2">
                  Votre situation actuelle
                </label>
                <select
                  value={formData.currentSituation}
                  onChange={(e) => handleInputChange('currentSituation', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 text-base bg-white hover:border-primary-300 text-gray-800"
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
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2 font-display">Vos coordonnées</h2>
              <p className="text-base text-gray-600">Finalisez votre demande</p>
            </div>
            
            <div className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-base font-semibold text-gray-700 mb-2">
                    Prénom *
                  </label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 text-base bg-white hover:border-primary-300 text-gray-800"
                    required
                  />
                </div>
                <div>
                  <label className="block text-base font-semibold text-gray-700 mb-2">
                    Nom *
                  </label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 text-base bg-white hover:border-primary-300 text-gray-800"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-base font-semibold text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 text-base bg-white hover:border-primary-300 text-gray-800"
                  required
                />
              </div>

              <div>
                <label className="block text-base font-semibold text-gray-700 mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 text-base bg-white hover:border-primary-300 placeholder-gray-400 text-gray-800"
                  placeholder="06 12 34 56 78"
                />
              </div>

              <div>
                <label className="block text-base font-semibold text-gray-700 mb-2">
                  Informations supplémentaires
                </label>
                <textarea
                  value={formData.additionalInfo}
                  onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 text-base bg-white hover:border-primary-300 placeholder-gray-400 resize-none text-gray-800"
                  rows={4}
                  placeholder="Précisions sur votre projet, contraintes particulières..."
                />
              </div>

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-50 border-2 border-green-200 text-green-800 rounded-lg text-center">
                  <div className="text-xl mb-2">🎉</div>
                  <div className="text-base font-semibold">Votre projet a été envoyé avec succès !</div>
                  <div className="text-green-600">Redirection vers la page de confirmation...</div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 border-2 border-red-200 text-red-800 rounded-lg text-center">
                  <div className="text-xl mb-2">❌</div>
                  <div className="text-base font-semibold">Erreur lors de l&apos;envoi</div>
                  <div className="text-red-600">Veuillez réessayer</div>
                </div>
              )}
            </div>
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
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-soft border border-gray-100">
      {/* Barre de progression */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-3">
          <span className="text-base font-semibold text-gray-700">
            Étape {currentStep} sur {totalSteps}
          </span>
          <span className="text-base font-bold text-primary-600">
            {Math.round(progressPercentage)}%
          </span>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-2.5">
          <div
            className="bg-gradient-to-r from-primary-500 to-primary-600 h-2.5 rounded-full transition-all duration-500 ease-out shadow-medium"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      {/* Contenu de l'étape */}
      <div className="mb-8">
        {renderStep()}
      </div>

      {/* Boutons de navigation */}
      <div className="flex justify-between items-center pt-6 border-t border-gray-100">
        <button
          onClick={prevStep}
          disabled={currentStep === 1}
          className="px-6 py-3 border-2 border-gray-200 text-gray-600 rounded-xl hover:bg-gray-50 hover:border-primary-300 hover:text-primary-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 font-medium text-base shadow-soft hover:shadow-medium"
        >
          ← Précédent
        </button>

        {currentStep < totalSteps ? (
          <button
            onClick={nextStep}
            disabled={!isStepValid()}
            className="px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl hover:from-primary-600 hover:to-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 font-medium text-base shadow-medium hover:shadow-large transform hover:-translate-y-1"
          >
            Suivant →
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={!isStepValid() || isSubmitting}
            className="px-6 py-3 bg-gradient-to-r from-secondary-500 to-secondary-600 text-white rounded-xl hover:from-secondary-600 hover:to-secondary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 font-medium text-base shadow-medium hover:shadow-large transform hover:-translate-y-1"
          >
            {isSubmitting ? 'Envoi en cours...' : '🚀 Envoyer mon projet'}
          </button>
        )}
      </div>
    </div>
  );
}
