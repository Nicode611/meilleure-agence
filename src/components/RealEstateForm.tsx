'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { formConfig, Question } from '@/config/formQuestions';

interface FormData {
  [key: string]: string | string[];
  postalCode: string;
}

// Fonction pour initialiser dynamiquement le FormData basé sur la configuration
const initializeFormData = (postalCode: string): FormData => {
  const initialData: FormData = { postalCode };
  
  // Parcourir toutes les étapes et questions pour initialiser les champs
  formConfig.steps.forEach(step => {
    step.questions.forEach(question => {
      if (question.type === 'checkbox') {
        initialData[question.id] = [];
      } else {
        initialData[question.id] = '';
      }
    });
  });
  
  return initialData;
};

interface RealEstateFormProps {
  postalCode: string;
}

export default function RealEstateForm({ postalCode }: RealEstateFormProps) {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(() => initializeFormData(postalCode));
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const totalSteps = formConfig.totalSteps;
  const progressPercentage = (currentStep / totalSteps) * 100;

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleCheckboxChange = (field: keyof FormData, value: string) => {
    setFormData(prev => {
      const currentValues = prev[field] as string[];
      const newValues = currentValues.includes(value)
        ? currentValues.filter(v => v !== value)
        : [...currentValues, value];
      
      return {
        ...prev,
        [field]: newValues
      };
    });
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

  // Fonction utilitaire pour formater les valeurs du formulaire
  const formatFormValue = (value: string | string[]): string => {
    if (Array.isArray(value)) {
      return value.join(', ');
    }
    return value || '';
  };

  // Fonction utilitaire pour formater les valeurs avec capitalisation
  const formatFormValueWithCapitalization = (value: string | string[]): string => {
    const stringValue = formatFormValue(value);
    return stringValue.replace(/-/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase());
  };

  // Fonction pour générer l'email HTML dynamiquement
  const generateEmailHTML = (): string => {
    let emailContent = `
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
        
        <div class="content">`;

    // Générer le contenu dynamiquement basé sur la configuration
    formConfig.steps.forEach((step) => {
      if (step.questions.length > 0) {
        emailContent += `
            <div class="section">
                <div class="section-title">${step.title}</div>`;
        
        step.questions.forEach(question => {
          const value = formData[question.id];
          if (value && (Array.isArray(value) ? value.length > 0 : value !== '')) {
            emailContent += `
                <div class="field">
                    <div class="field-label">${question.label}</div>
                    <div class="field-value">`;
            
            if (question.type === 'checkbox' && Array.isArray(value)) {
              emailContent += `<div class="features-grid">
                        ${(value as string[]).map(feature => `<span class="feature-tag">${feature}</span>`).join('')}
                    </div>`;
            } else if (question.type === 'select') {
              emailContent += formatFormValueWithCapitalization(value);
            } else {
              emailContent += formatFormValue(value);
            }
            
            emailContent += `
                    </div>
                </div>`;
          }
        });
        
        emailContent += `
            </div>`;
      }
    });

    emailContent += `
            <div class="footer">
                <p>📧 Demande reçue le ${new Date().toLocaleDateString('fr-FR', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                })}</p>
            </div>
        </div>
    </div>
</body>
</html>`;

    return emailContent;
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
          message: generateEmailHTML().trim()
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

  // Fonction pour rendre un champ de formulaire dynamiquement
  const renderField = (question: Question) => {
    const value = formData[question.id] || (question.type === 'checkbox' ? [] : '');
    
    switch (question.type) {
      case 'text':
      case 'email':
      case 'tel':
        return (
          <input
            type={question.type}
            value={value as string}
            onChange={(e) => handleInputChange(question.id as keyof FormData, e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 text-base bg-white hover:border-primary-300 placeholder-gray-400 text-gray-800"
            placeholder={question.placeholder}
            required={question.required}
          />
        );
      
      case 'select':
        return (
          <select
            value={value as string}
            onChange={(e) => handleInputChange(question.id as keyof FormData, e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 text-base bg-white hover:border-primary-300 text-gray-800"
            required={question.required}
          >
            <option value="">{question.placeholder || 'Sélectionnez une option'}</option>
            {question.options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            ))}
          </select>
        );
      
      case 'checkbox':
        return (
          <div className="grid grid-cols-2 gap-3">
            {question.options?.map((option) => (
              <label key={option.value} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-primary-50 transition-all duration-300 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={(value as string[]).includes(option.value)}
                  onChange={() => handleCheckboxChange(question.id as keyof FormData, option.value)}
                  className="w-4 h-4 text-primary-600 bg-white border-2 border-gray-300 rounded focus:ring-primary-500 focus:ring-2 transition-all duration-300 group-hover:border-primary-400"
                />
                <span className="text-base text-gray-700 group-hover:text-primary-700 font-medium">{option.text}</span>
              </label>
            ))}
          </div>
        );
      
      case 'textarea':
        return (
          <textarea
            value={value as string}
            onChange={(e) => handleInputChange(question.id as keyof FormData, e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 text-base bg-white hover:border-primary-300 placeholder-gray-400 resize-none text-gray-800"
            rows={question.rows || 4}
            placeholder={question.placeholder}
            required={question.required}
          />
        );
      
      default:
        return null;
    }
  };

  // Fonction pour rendre une étape dynamiquement
  const renderStep = () => {
    const currentStepData = formConfig.steps[currentStep - 1];
    if (!currentStepData) return null;

    return (
      <div className="space-y-6">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 font-display">{currentStepData.title}</h2>
          <p className="text-base text-gray-600">{currentStepData.subtitle}</p>
        </div>
        
        <div className="space-y-5">
          {currentStepData.questions.map((question) => (
            <div key={question.id}>
              <label className="block text-base font-semibold text-gray-700 mb-2">
                {question.label} {question.required && '*'}
              </label>
              {renderField(question)}
            </div>
          ))}
        </div>

        {/* Affichage des messages de statut pour la dernière étape */}
        {currentStep === totalSteps && (
          <>
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
          </>
        )}
      </div>
    );
  };

  // Fonction pour valider une étape dynamiquement
  const isStepValid = () => {
    const currentStepData = formConfig.steps[currentStep - 1];
    if (!currentStepData) return false;

    return currentStepData.questions.every((question: Question) => {
      if (!question.required) return true;
      
      const value = formData[question.id];
      if (question.type === 'checkbox') {
        return Array.isArray(value) && value.length > 0;
      } else {
        return value && value !== '';
      }
    });
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
