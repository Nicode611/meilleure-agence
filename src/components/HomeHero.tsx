"use client";
import { useEffect, useState } from 'react';
import RealEstateForm from '@/components/RealEstateForm';

export default function HomeHero({ communeName }: { communeName?: string }) {
  const [showForm, setShowForm] = useState(false);
  const [postalCode, setPostalCode] = useState(['', '', '', '']);
  const [isPostalCodeValid, setIsPostalCodeValid] = useState(false);

  const variants = communeName
    ? [
        (
          <>
            Vous vendez votre maison à <span className="text-primary-500">{communeName}</span> ?
          </>
        ),
        (
          <>
            Vous avez un projet immobilier à <span className="text-primary-500">{communeName}</span> ?
          </>
        ),
        (
          <>
            Vous voulez acheter une maison à <span className="text-primary-500">{communeName}</span> ?
          </>
        ),
        (
          <>
            Vous souhaitez estimer votre bien à <span className="text-primary-500">{communeName}</span> ?
          </>
        ),
      ]
    : [
        <>Vous vendez votre maison ?</>,
        <>Vous avez un projet immobilier ?</>,
        <>Vous voulez acheter une maison ?</>,
        <>Vous souhaitez estimer votre bien ?</>,
      ];

  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [animPhase, setAnimPhase] = useState<'idle' | 'out' | 'in'>('idle');

  useEffect(() => {
    const interval = setInterval(() => {
      // phase sortie à gauche
      setAnimPhase('out');
      setTimeout(() => {
        // change le texte et prépare l'entrée depuis la droite
        setHeadlineIndex((i) => (i + 1) % variants.length);
        setAnimPhase('in');
        // repasse en idle pour stabiliser
        setTimeout(() => setAnimPhase('idle'), 250);
      }, 250);
    }, 5000);
    return () => clearInterval(interval);
  }, [variants.length]);
  const sublineJsx = communeName ? (
    <>
      Recevez 4 devis d&apos;agence immobilière proche de <span className="text-primary-500">{communeName}</span> avant de vous décider et économisez jusqu&apos;à 50%
    </>
  ) : (
    <>Recevez 4 devis d&apos;agence immobilière de votre région avant de vous décider et économisez jusqu&apos;à 50%</>
  );

  const handlePostalCodeChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newPostalCode = [...postalCode];
      newPostalCode[index] = value;
      setPostalCode(newPostalCode);
      if (value && index < 3) {
        const nextInput = document.getElementById(`postal-${index + 1}`);
        if (nextInput) nextInput.focus();
      }
      setTimeout(() => validatePostalCode(newPostalCode), 100);
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !postalCode[index] && index > 0) {
      const prevInput = document.getElementById(`postal-${index - 1}`);
      if (prevInput) {
        prevInput.focus();
        const newPostalCode = [...postalCode];
        newPostalCode[index - 1] = '';
        setPostalCode(newPostalCode);
        validatePostalCode(newPostalCode);
      }
    }
  };

  const validatePostalCode = (code: string[]) => {
    const fullCode = code.join('');
    const isComplete = code.every((digit) => digit !== '');
    if (isComplete && fullCode.length === 4) {
      const codeNum = parseInt(fullCode);
      const validRanges = [
        [1000, 1299],
        [1300, 1499],
        [1500, 1999],
        [2000, 2999],
        [3000, 3499],
        [3500, 3999],
        [4000, 4999],
        [5000, 5999],
        [6000, 6599],
        [6600, 6999],
        [7000, 7999],
        [8000, 8999],
        [9000, 9999],
      ];
      setIsPostalCodeValid(validRanges.some(([min, max]) => codeNum >= min && codeNum <= max));
    } else {
      setIsPostalCodeValid(false);
    }
  };

  const getFullPostalCode = () => postalCode.join('');

  return (
    <div className="relative w-full h-[827px] bg-cover bg-center overflow-hidden" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url("/hero2.png")', backgroundPosition: 'bottom' }}>
      <div className="absolute inset-0 bg-[#00000067]"></div>
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-10">
        <div className="text-center max-w-4xl px-4 animate-fade-in">
          <div className="mb-14">
            <h1
              className={`text-4xl md:text-6xl font-bold text-white drop-shadow-lg font-display leading-tight transform-gpu transition-all duration-250 ${
                animPhase === 'out'
                  ? '-translate-x-6 opacity-0'
                  : animPhase === 'in'
                  ? 'translate-x-6 opacity-0'
                  : 'translate-x-0 opacity-100'
              }`}
            >
              {variants[headlineIndex]}
            </h1>
            <p className="text-white text-lg font-light drop-shadow-lg">Choisissez la meilleure agence immobilière</p>
          </div>
          <div className="bg-primary-600 border-1 border-primary-400 rounded-2xl p-8 max-w-md mx-auto shadow-large animate-slide-up">
            <p className="text-white text-center mb-6 font-semibold text-lg">Entrez votre code postal ici</p>
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
                  className={`w-10 h-14 border-b-2 rounded-lg text-center text-lg text-black bg-white font-mono focus:outline-none focus:bg-gray-100 transition-all duration-200 ${postalCode[index] ? 'border-secondary-500' : 'border-primary-500'}`}
                  placeholder="_"
                />
              ))}
            </div>
            <div className="flex gap-3 justify-center mb-4">
              {[0, 1, 2, 3].map((index) => {
                let barColor = 'bg-gray-300';
                if (postalCode[index] !== '') {
                  if (isPostalCodeValid) barColor = 'bg-green-500';
                  else if (postalCode.every((d) => d !== '')) barColor = 'bg-red-500';
                  else barColor = 'bg-blue-500';
                }
                return <div key={index} className={`w-10 h-1 rounded-full transition-all duration-300 ${barColor} mt-2`} />;
              })}
            </div>
            <button
              onClick={() => isPostalCodeValid && setShowForm(true)}
              disabled={!isPostalCodeValid}
              className={`w-full py-4 px-6 rounded-xl transition-all duration-300 font-medium text-lg shadow-medium transform hover:-translate-y-1 ${isPostalCodeValid ? 'bg-primary-500 text-white hover:bg-primary-700 hover:shadow-large cursor-pointer' : 'bg-gray-400 text-gray-200 cursor-not-allowed'}`}
            >
              {isPostalCodeValid ? 'Continuer' : 'Entrez votre code postal'}
            </button>
          </div>
          <p className="text-lg text-white mt-8 drop-shadow-lg max-w-2xl mx-auto opacity-90">{sublineJsx}</p>
        </div>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-[#0000009b] backdrop-blur-xs z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[95vh] overflow-y-auto shadow-2xl animate-slide-up">
            <div className="sticky top-0 bg-white p-6 border-b border-gray-200 flex justify-between items-center rounded-t-2xl">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 font-display">Votre Projet Immobilier</h2>
                <p className="text-gray-600 mt-2">Décrivez-nous votre projet en quelques étapes</p>
              </div>
              <button onClick={() => setShowForm(false)} className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 hover:text-gray-800 transition-all duration-200 group hover:cursor-pointer">
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
    </div>
  );
}


