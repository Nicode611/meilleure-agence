'use client';

import { useState } from 'react';
import RealEstateForm from '@/components/RealEstateForm';
import Image from 'next/image';
import Link from 'next/link';
import CookieBanner from '@/components/CookieBanner';
import CookieManager from '@/components/CookieManager';

export default function Home() {
  const [showForm, setShowForm] = useState(false);
  const [postalCode, setPostalCode] = useState(['', '', '', '']);
  const [isPostalCodeValid, setIsPostalCodeValid] = useState(false);

  const handlePostalCodeChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newPostalCode = [...postalCode];
      newPostalCode[index] = value;
      setPostalCode(newPostalCode);
      
      // Auto-focus sur le champ suivant
      if (value && index < 3) {
        const nextInput = document.getElementById(`postal-${index + 1}`);
        if (nextInput) nextInput.focus();
      }
      
      // Vérifier la validité après un délai pour permettre la saisie
      setTimeout(() => validatePostalCode(newPostalCode), 100);
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !postalCode[index] && index > 0) {
      // Si on appuie sur Backspace sur un champ vide, aller au champ précédent
      const prevInput = document.getElementById(`postal-${index - 1}`);
      if (prevInput) {
        prevInput.focus();
        // Supprimer le contenu du champ précédent
        const newPostalCode = [...postalCode];
        newPostalCode[index - 1] = '';
        setPostalCode(newPostalCode);
        validatePostalCode(newPostalCode);
      }
    }
  };

  const validatePostalCode = (code: string[]) => {
    const fullCode = code.join('');
    const isComplete = code.every(digit => digit !== '');
    
    if (isComplete && fullCode.length === 4) {
      // Vérifier si c'est un code postal belge valide
      const isValidBelgianCode = isValidBelgianPostalCode(fullCode);
      setIsPostalCodeValid(isValidBelgianCode);
    } else {
      setIsPostalCodeValid(false);
    }
  };

  const isValidBelgianPostalCode = (code: string): boolean => {
    const codeNum = parseInt(code);
    
    // Codes postaux belges valides (ranges approximatifs)
    // Source: https://fr.wikipedia.org/wiki/Code_postal_en_Belgique
    
    // Ranges principaux utilisés en Belgique
    const validRanges = [
      [1000, 1299], // Bruxelles-Capitale
      [1300, 1499], // Brabant wallon
      [1500, 1999], // Brabant flamand
      [2000, 2999], // Anvers
      [3000, 3499], // Brabant flamand
      [3500, 3999], // Limbourg
      [4000, 4999], // Liège
      [5000, 5999], // Namur
      [6000, 6599], // Hainaut
      [6600, 6999], // Luxembourg
      [7000, 7999], // Hainaut
      [8000, 8999], // Flandre occidentale
      [9000, 9999]  // Flandre orientale
    ];
    
    // Vérifier si le code est dans un des ranges valides
    return validRanges.some(([min, max]) => codeNum >= min && codeNum <= max);
  };

  const handleContinue = () => {
    if (isPostalCodeValid) {
      setShowForm(true);
    }
  };

  const getFullPostalCode = () => {
    return postalCode.join('');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="w-full h-[73px] border-b border-primary-400 bg-primary-600">
        <div className="h-full flex items-center px-4">
          <div className="w-[311px] h-6">
            {/* Logo placeholder - vous pouvez remplacer par votre logo */}
            <div className="text-md font-light text-white">meilleure.agence.be</div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative">
        {/* Header Section with Background */}
        <div className="relative w-full h-[827px] bg-cover bg-center overflow-hidden" 
             style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url("/hero2.png")', backgroundPosition: 'bottom' }}>
          {/* Filtre noir semi-transparent pour améliorer la lisibilité */}
          <div className="absolute inset-0 bg-[#00000067]"></div>
          
          {/* Animated background elements - Liquid Glass Style */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-20 w-32 h-32 rounded-full liquid-glass animate-float" style={{animationDelay: '0s'}}></div>
            <div className="absolute bottom-10 left-3/4 w-20 h-20 rounded-full liquid-glass animate-float" style={{animationDelay: '3s'}}></div>
            <div className="absolute top-1/2 left-1/3 w-16 h-16 rounded-full liquid-glass animate-float" style={{animationDelay: '2s'}}></div>
            <div className="absolute bottom-20 right-1/4 w-28 h-28 rounded-full liquid-glass animate-float" style={{animationDelay: '4s'}}></div>
          </div>
          
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-10">
            <div className="text-center max-w-4xl px-4 animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg font-display leading-tight">
              Choisissez votre meilleure agence immobilière
              </h1>
              <p className="text-lg text-white mb-8 drop-shadow-lg max-w-2xl mx-auto opacity-90">
              Recevez 4 devis d&apos;agence immobilière de votre région avant de vous décider et économisez jusqu&apos;à 50%
              </p>
              
              {/* Formulaire de code postal */}
              <div className="bg-primary-600 border-1 border-primary-400 rounded-2xl p-8 max-w-md mx-auto shadow-large animate-slide-up">
                <p className="text-white text-center mb-6 font-semibold text-lg">
                  Entrez votre code postal ici
                </p>
                <div className="flex gap-3 justify-center">
                  {[0, 1, 2, 3].map((index) => (
                    <input
                      key={index}
                      id={`postal-${index}`}
                      type="text"
                      maxLength={1}
                      value={postalCode[index]}
                      onChange={(e) => handlePostalCodeChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      className={`w-10 h-14 border-b-2 rounded-lg text-center text-lg text-black bg-white font-mono focus:outline-none focus:bg-gray-100 transition-all duration-200 ${
                        postalCode[index] 
                          ? 'border-secondary-500' 
                          : 'border-primary-500'
                      }`}
                      placeholder="_"
                    />
                  ))}
                </div>
                <div className="flex justify-center mb-4">
                  
                </div>
                {/* Barres de validation sous chaque chiffre */}
                <div className="flex gap-3 justify-center mb-4">
                  {[0, 1, 2, 3].map((index) => {
                    let barColor = 'bg-gray-300'; // Gris par défaut (vide)
                    
                    if (postalCode[index] !== '') {
                      if (isPostalCodeValid) {
                        barColor = 'bg-green-500'; // Vert si valide
                      } else if (postalCode.every(digit => digit !== '')) {
                        barColor = 'bg-red-500'; // Rouge si invalide
                      } else {
                        barColor = 'bg-blue-500'; // Bleu si en cours de saisie
                      }
                    }
                    
                    return (
                      <div
                        key={index}
                        className={`w-10 h-1 rounded-full transition-all duration-300 ${barColor}`}
                      />
                    );
                  })}
                </div>
                <button 
                  onClick={handleContinue}
                  disabled={!isPostalCodeValid}
                  className={`w-full py-4 px-6 rounded-xl transition-all duration-300 font-medium text-lg shadow-medium transform hover:-translate-y-1 ${
                    isPostalCodeValid 
                      ? 'bg-primary-500 text-white hover:bg-primary-700 hover:shadow-large cursor-pointer' 
                      : 'bg-gray-400 text-gray-200 cursor-not-allowed'
                  }`}
                >
                  {isPostalCodeValid ? 'Continuer' : 'Entrez votre code postal'}
                </button>
              </div>
              
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 font-display">
                Comment ça marche ?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comparez les agences immobilières en 3 étapes simples et économisez jusqu&apos;à 50 % !
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Step 1 */}
              <div className="text-center group">
                <div className="relative">
                  <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:cursor-pointer group-hover:scale-110 duration-300 shadow-soft">
                  <Image
                      src="/pen.svg" 
                      alt="Step 1" 
                      width={48} 
                      height={48} 
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                Demandez vos devis gratuits
                </h3>
                <p className="text-gray-600 leading-relaxed">
                Remplissez notre formulaire en quelques minutes, sans frais.
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center group">
                <div className="relative">
                  <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:cursor-pointer group-hover:scale-110 duration-300 shadow-soft">
                    <Image
                      src="/doc.svg" 
                      alt="Step 2" 
                      width={48} 
                      height={48} 
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                Recevez jusqu&apos;à 4 devis gratuits
                </h3>
                <p className="text-gray-600 leading-relaxed">
                Comparez les offres d&apos;agences fiables adaptées à vos besoins.
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center group">
                <div className="relative">
                  <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:cursor-pointer group-hover:scale-110 duration-300 shadow-soft">
                  <Image
                      src="/user.svg" 
                      alt="Step 3" 
                      width={48} 
                      height={48} 
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                Choisissez et économisez
                </h3>
                <p className="text-gray-600 leading-relaxed">
                Sélectionnez la meilleure offre et réalisez des économies jusqu&apos;à 50 %.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white w-full">
        <div className="mx-auto pt-16">
          <div className="flex flex-col-reverse md:grid md:grid-cols-4 gap-8 px-4 md:px-16">
            {/* Logo and Description */}
            <div className="col-span-1 md:col-span-2">
              <div className="text-3xl text-primary-600 font-bold mb-4 font-display">meilleure.agence.be</div>
              <p className="text-gray-600 text-[0.7rem] md:max-w-xs leading-relaxed">
                Recevez jusqu&apos;à 4 devis de professionnels de votre région et comparez pour faire le meilleur choix.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4 text-lg">À propos de nous</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-primary-600 transition-colors duration-200">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4 text-lg">Professionnels</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-primary-600 transition-colors duration-200">Inscrivez-vous en tant que Pro</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-100 mt-12 py-4 px-4 w-full bg-gray-100">
            <div className="flex flex-col-reverse text-[0.7rem] md:flex-row justify-between md:items-center">
              <span className="text-gray-500 mt-4 md:mt-0 md:mb-0">© 2025 Hoogstoel - Tous droits réservés</span>
              <div className="flex md:flex-row flex-col justify-center md:gap-6 text-gray-500">
                <Link href="/politique-confidentialite" className="hover:text-primary-600 transition-colors duration-200">Politique de confidentialité</Link>
                <Link href="/cookies" className="hover:text-primary-600 transition-colors duration-200">Cookies</Link>
                <Link href="/mentions-legales" className="hover:text-primary-600 transition-colors duration-200">Mentions légales</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal du formulaire */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[95vh] overflow-y-auto shadow-2xl animate-slide-up">
            <div className="sticky top-0 bg-white p-6 border-b border-gray-200 flex justify-between items-center rounded-t-2xl">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 font-display">Votre Projet Immobilier</h2>
                <p className="text-gray-600 mt-2">Décrivez-nous votre projet en quelques étapes</p>
              </div>
              <button
                onClick={() => setShowForm(false)}
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 hover:text-gray-800 transition-all duration-200 group"
              >
                <svg className="w-6 h-6 group-hover:rotate-90 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <RealEstateForm postalCode={getFullPostalCode()} />
            </div>
          </div>
        </div>
      )}
      
      {/* Bannière de consentement aux cookies */}
      <CookieBanner />
      
      {/* Gestionnaire de cookies flottant */}
      <CookieManager />
    </div>
  );
}
