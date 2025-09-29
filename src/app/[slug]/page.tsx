import type { Metadata } from 'next';
import HomeHero from '@/components/HomeHero';
import CommunesSection from '@/components/CommunesSection';
import MainFooter from '@/components/MainFooter';
import MainHeader from '@/components/MainHeader';
import { getCommuneBySlug } from '@/lib/communes';
import ProcessSection from '@/components/ProcessSection';

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const c = getCommuneBySlug(slug);
  if (!c) return {};
  return {
    title: c.seo.title,
    description: c.seo.description,
    alternates: { canonical: c.seo.canonical },
    keywords: c.seo.keywords,
    openGraph: {
      title: c.seo.title,
      description: c.seo.description,
      url: c.seo.canonical,
    },
  };
}

export default async function CommunePage({ params }: Params) {
  const { slug } = await params;
  const c = getCommuneBySlug(slug);
  if (!c) {
    return null;
  }
  return (
    <div className="min-h-screen bg-white">
      <MainHeader />
      <main className="relative">
        <HomeHero communeName={c.nom} />
        <ProcessSection />
        <CommunesSection />
      </main>
      <MainFooter />
    </div>
  );
}

export async function generateStaticParams() {
  // Pré-génère toutes les pages /[slug] au build pour de meilleures perfs SEO
  const { getAllCommunes } = await import('@/lib/communes');
  const communes = getAllCommunes();
  return communes.map((c) => ({ slug: c.slug }));
}


