import Link from 'next/link';

export default function SimpleFooter() {
  return (
    <div className="border-t border-gray-200 bg-white py-8 mt-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between md:gap-4 items-center">
          <div className="text-gray-600 mb-4 md:mb-0 text-center">
            <p className='text-nowrap'>© 2025 meilleure.agence.be</p>
            <p className="text-gray-600 text-[0.7rem]">Tous droits réservés.</p>
          </div>
          <div className="flex space-x-4 justify-center">
            <Link href="/" className="text-primary-600 hover:text-primary-700 transition-colors duration-200 text-center">
              Accueil
            </Link>
            <Link href="/politique-confidentialite" className="text-primary-600 hover:text-primary-700 transition-colors duration-200 text-center">
              Politique de Confidentialité
            </Link>
            <Link href="/mentions-legales" className="text-primary-600 hover:text-primary-700 transition-colors duration-200 text-center">
              Mentions Légales
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
