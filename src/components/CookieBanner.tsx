'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true, // Toujours activé
    performance: false,
    functionality: false,
    targeting: false
  });

  useEffect(() => {
    // Vérifier si le consentement a déjà été donné
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptAll = () => {
    const allPreferences = {
      essential: true,
      performance: true,
      functionality: true,
      targeting: true
    };
    setPreferences(allPreferences);
    saveConsent(allPreferences);
    setShowBanner(false);
  };

  const acceptSelected = () => {
    saveConsent(preferences);
    setShowBanner(false);
  };

  const rejectAll = () => {
    const minimalPreferences = {
      essential: true,
      performance: false,
      functionality: false,
      targeting: false
    };
    setPreferences(minimalPreferences);
    saveConsent(minimalPreferences);
    setShowBanner(false);
  };

  const saveConsent = (consent: typeof preferences) => {
    localStorage.setItem('cookie-consent', JSON.stringify(consent));
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    
    // Ici vous pouvez ajouter la logique pour activer/désactiver les cookies
    // selon les préférences de l'utilisateur
  };

  const togglePreference = (type: keyof typeof preferences) => {
    if (type === 'essential') return; // Les cookies essentiels ne peuvent pas être désactivés
    setPreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-large p-4">
      <div className="max-w-6xl mx-auto">
        {!showPreferences ? (
          // Bannière principale
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                🍪 Nous utilisons des cookies
              </h3>
              <p className="text-gray-600 text-sm">
                Nous utilisons des cookies pour améliorer votre expérience, analyser le trafic et personnaliser le contenu. 
                En cliquant sur "Accepter tout", vous consentez à l'utilisation de tous les cookies. 
                <Link href="/cookies" className="text-primary-600 hover:text-primary-700 underline ml-1">
                  En savoir plus
                </Link>
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <button
                onClick={() => setShowPreferences(true)}
                className="px-4 py-2 text-sm text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200"
              >
                Personnaliser
              </button>
              <button
                onClick={rejectAll}
                className="px-4 py-2 text-sm text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200"
              >
                Refuser tout
              </button>
              <button
                onClick={acceptAll}
                className="px-4 py-2 text-sm text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors duration-200"
              >
                Accepter tout
              </button>
            </div>
          </div>
        ) : (
          // Panneau de préférences détaillées
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">
                Préférences de Cookies
              </h3>
              <button
                onClick={() => setShowPreferences(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Cookies essentiels */}
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <div>
                  <h4 className="font-medium text-green-800">🍪 Cookies Essentiels</h4>
                  <p className="text-sm text-green-600">Nécessaires au fonctionnement du site</p>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={preferences.essential}
                    disabled
                    className="w-4 h-4 text-green-600 bg-green-100 border-green-300 rounded focus:ring-green-500"
                  />
                </div>
              </div>

              {/* Cookies de performance */}
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <div>
                  <h4 className="font-medium text-blue-800">📊 Cookies de Performance</h4>
                  <p className="text-sm text-blue-600">Aide à analyser l'utilisation du site</p>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={preferences.performance}
                    onChange={() => togglePreference('performance')}
                    className="w-4 h-4 text-blue-600 bg-blue-100 border-blue-300 rounded focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Cookies de fonctionnalité */}
              <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                <div>
                  <h4 className="font-medium text-purple-800">⚙️ Cookies de Fonctionnalité</h4>
                  <p className="text-sm text-purple-600">Améliorent l'expérience utilisateur</p>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={preferences.functionality}
                    onChange={() => togglePreference('functionality')}
                    className="w-4 h-4 text-purple-600 bg-purple-100 border-purple-300 rounded focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Cookies de ciblage */}
              <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                <div>
                  <h4 className="font-medium text-orange-800">🎯 Cookies de Ciblage</h4>
                  <p className="text-sm text-orange-600">Personnalisent la publicité</p>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={preferences.targeting}
                    onChange={() => togglePreference('targeting')}
                    className="w-4 h-4 text-orange-600 bg-orange-100 border-orange-300 rounded focus:ring-orange-500"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-end">
              <button
                onClick={rejectAll}
                className="px-4 py-2 text-sm text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200"
              >
                Refuser tout
              </button>
              <button
                onClick={acceptSelected}
                className="px-4 py-2 text-sm text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors duration-200"
              >
                Enregistrer mes choix
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
