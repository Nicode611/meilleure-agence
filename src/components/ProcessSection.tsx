import Image from 'next/image';

export default function ProcessSection() {
  return (
    <div className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-display">Comment ça marche ?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Comparez les agences immobilières en 3 étapes simples et économisez jusqu&apos;à 50 % !</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center group">
            <div className="relative">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:cursor-pointer group-hover:scale-110 duration-300 shadow-soft">
                <Image src="/pen.svg" alt="Step 1" width={48} height={48} />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">Demandez vos devis gratuits</h3>
            <p className="text-gray-600 leading-relaxed">Remplissez notre formulaire en quelques minutes, sans frais.</p>
          </div>
          <div className="text-center group">
            <div className="relative">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:cursor-pointer group-hover:scale-110 duration-300 shadow-soft">
                <Image src="/doc.svg" alt="Step 2" width={48} height={48} />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">Recevez jusqu&apos;à 4 devis gratuits</h3>
            <p className="text-gray-600 leading-relaxed">Comparez les offres d&apos;agences fiables adaptées à vos besoins.</p>
          </div>
          <div className="text-center group">
            <div className="relative">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:cursor-pointer group-hover:scale-110 duration-300 shadow-soft">
                <Image src="/user.svg" alt="Step 3" width={48} height={48} />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">Choisissez et économisez</h3>
            <p className="text-gray-600 leading-relaxed">Sélectionnez la meilleure offre et réalisez des économies jusqu&apos;à 50 %.</p>
          </div>
        </div>
      </div>
    </div>
  );
}


