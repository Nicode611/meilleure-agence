'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieManager() {
  const [showManager, setShowManager] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true,
    performance: false,
    functionality: false,
    targeting: false
  });

  useEffect(() => {
    // Charger les préférences sauvegardées
    const savedConsent = localStorage.getItem('cookie-consent');
    if (savedConsent) {
      setPreferences(JSON.parse(savedConsent));
    }
  }, []);

  const updatePreference = (type: keyof typeof preferences, value: boolean) => {
    if (type === 'essential') return; // Les cookies essentiels ne peuvent pas être désactivés
    
    const newPreferences = {
      ...preferences,
      [type]: value
    };
    setPreferences(newPreferences);
    saveConsent(newPreferences);
  };

  const saveConsent = (consent: typeof preferences) => {
    localStorage.setItem('cookie-consent', JSON.stringify(consent));
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    
    // Ici vous pouvez ajouter la logique pour activer/désactiver les cookies
    // selon les préférences de l'utilisateur
  };

  const withdrawConsent = () => {
    const minimalPreferences = {
      essential: true,
      performance: false,
      functionality: false,
      targeting: false
    };
    setPreferences(minimalPreferences);
    saveConsent(minimalPreferences);
    alert('Votre consentement a été retiré. Seuls les cookies essentiels restent actifs.');
  };

  const getConsentDate = () => {
    const date = localStorage.getItem('cookie-consent-date');
    if (date) {
      return new Date(date).toLocaleDateString('fr-FR');
    }
    return 'Aucune date enregistrée';
  };

  if (!showManager) {
    return (
      <button
        onClick={() => setShowManager(true)}
        className="fixed right-0 bottom-8 z-[9999] bg-white hover:bg-gray-50 text-gray-600 hover:text-primary-600 border border-gray-200 hover:border-primary-300 rounded-l-lg shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden hover:w-auto w-16 h-12"
      >
        <div className="flex items-center justify-center space-x-2 px-3 py-2 min-w-max h-full">
          <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Gérer mes cookies
          </span>
          <span className="text-2xl flex-shrink-0">🍪</span>
        </div>
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="sticky top-0 bg-white p-6 border-b border-gray-200 rounded-t-2xl">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-900">Gestion des Cookies</h2>
            <button
              onClick={() => setShowManager(false)}
              className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 hover:text-gray-800 transition-all duration-200"
            >
              ✕
            </button>
          </div>
          <p className="text-gray-600 mt-2">
            Dernière mise à jour : {getConsentDate()}
          </p>
        </div>

        <div className="p-6 space-y-6">
          {/* Cookies essentiels */}
          <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
            <div className="flex-1">
              <h3 className="font-semibold text-green-800">🍪 Cookies Essentiels</h3>
              <p className="text-sm text-green-600 mt-1">
                Nécessaires au fonctionnement du site. Ne peuvent pas être désactivés.
              </p>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={preferences.essential}
                disabled
                className="w-5 h-5 text-green-600 bg-green-100 border-green-300 rounded focus:ring-green-500"
              />
            </div>
          </div>

          {/* Cookies de performance */}
          <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
            <div className="flex-1">
              <h3 className="font-semibold text-blue-800">📊 Cookies de Performance</h3>
              <p className="text-sm text-blue-600 mt-1">
                Aident à analyser l&apos;utilisation du site et à améliorer les performances.
              </p>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={preferences.performance}
                onChange={(e) => updatePreference('performance', e.target.checked)}
                className="w-5 h-5 text-blue-600 bg-blue-100 border-blue-300 rounded focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Cookies de fonctionnalité */}
          <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
            <div className="flex-1">
              <h3 className="font-semibold text-purple-800">⚙️ Cookies de Fonctionnalité</h3>
              <p className="text-sm text-purple-600 mt-1">
                Améliorent l&apos;expérience utilisateur en mémorisant vos préférences.
              </p>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={preferences.functionality}
                onChange={(e) => updatePreference('functionality', e.target.checked)}
                className="w-5 h-5 text-purple-600 bg-purple-100 border-purple-300 rounded focus:ring-purple-500"
              />
            </div>
          </div>

          {/* Cookies de ciblage */}
          <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg">
            <div className="flex-1">
              <h3 className="font-semibold text-orange-800">🎯 Cookies de Ciblage</h3>
              <p className="text-sm text-orange-600 mt-1">
                Personnalisent la publicité et le contenu selon vos intérêts.
              </p>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={preferences.targeting}
                onChange={(e) => updatePreference('targeting', e.target.checked)}
                className="w-5 h-5 text-orange-600 bg-orange-100 border-orange-300 rounded focus:ring-orange-500"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200">
            <button
              onClick={withdrawConsent}
              className="px-4 py-2 text-sm text-red-700 bg-red-100 hover:bg-red-200 rounded-lg transition-colors duration-200"
            >
              Retirer mon consentement
            </button>
            <div className="flex-1"></div>
            <Link
              href="/cookies"
              className="px-4 py-2 text-sm text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200 text-center"
            >
              En savoir plus
            </Link>
            <button
              onClick={() => setShowManager(false)}
              className="px-4 py-2 text-sm text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors duration-200"
            >
              Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
