 

import Image from 'next/image';
import Link from 'next/link';
import CookieBanner from '@/components/CookieBanner';
import CookieManager from '@/components/CookieManager';
import MainFooter from '@/components/MainFooter';
import HomeHero from '@/components/HomeHero';
import CommunesSection from '@/components/CommunesSection';
import ProcessSection from '@/components/ProcessSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="w-full  h-[73px] border-b border-primary-400 bg-primary-600">
        <div className="h-full flex items-center justify-between px-4">
          <div className="w-[311px] h-6 flex items-center gap-2">
            {/* Logo placeholder - vous pouvez remplacer par votre logo */}
            <div>
              <Image src="/logo-agence.svg" alt="Logo" width={50} height={50} />
            </div>
            <Link href="/">
              <p className="text-md"><strong className="text-white">Meilleure</strong> <strong className="text-white">Agence</strong></p>
              <p className="text-[0.5rem] font-light text-white">VOTRE COMPARATEUR D’AGENCES IMMOBILIERES</p>
            </Link>
            
          </div>
          
          {/* Navigation links */}
          <div className="flex items-center space-x-6">
            <Link 
              href="/agence" 
              className="inline-flex items-center px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all duration-300 font-medium border border-white/20 hover:border-white/30 hover:scale-105 transform"
            >
              Agences
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative">
        <HomeHero />

        {/* Process Section */}
        <ProcessSection />
        <CommunesSection />
      </main>

      {/* Footer */}
      <MainFooter />

      {/* Modal géré dans HomeHero */}
      
      {/* Bannière de consentement aux cookies */}
      <CookieBanner />
      
      {/* Gestionnaire de cookies flottant */}
      <CookieManager />
    </div>
  );
}
