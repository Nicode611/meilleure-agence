import Link from 'next/link';
import Image from 'next/image';

export default function MainFooter() {
  return (
    <footer className="border-t border-gray-200 bg-white w-full">
      <div className="mx-auto pt-16">
        <div className="flex flex-col-reverse md:grid md:grid-cols-4 gap-8 px-4 md:px-16">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/" className="flex items-center gap-2">
                <Image src="/logo-agence.svg" alt="Logo" width={50} height={50} />
                <div className="flex flex-col">
                  <p className="text-md font-bold"><strong className="text-[#552A85]">Meilleure</strong> <strong className="text-[#A74FCB]">Agence</strong></p>
                  <p className="text-[0.5rem] font-light text-black">VOTRE COMPARATEUR D’AGENCES IMMOBILIERES</p>
                </div>
              </Link>
            </div>
            <p className="text-gray-600 text-[0.7rem] md:max-w-xs leading-relaxed">
              Recevez jusqu&apos;à 4 devis de professionnels de votre région et comparez pour faire le meilleur choix.
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-2">
            <h4 className="font-semibold text-gray-900 mb-4 text-lg">À propos de nous</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-primary-600 transition-colors duration-200">
                  Contact
                </Link>
              </li>
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
  );
}
