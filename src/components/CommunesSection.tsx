import Link from 'next/link';
import Image from 'next/image';
import { getAllCommunes, groupCommunesByPrincipale, getPrincipaleNames } from '@/lib/communes';

export default function CommunesSection() {
  const communes = getAllCommunes();
  const grouped = groupCommunesByPrincipale(communes);
  const principaleNames = getPrincipaleNames(communes);
  const principales = Object.keys(grouped)
    .sort((a, b) => (principaleNames[a] || a).localeCompare(principaleNames[b] || b));

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50 border-t">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 font-display">Communes couvertes</h2>
          <p className="text-gray-600 mt-2">Trouvez la meilleure agence près de chez vous</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {principales.map((principaleSlug) => (
            <div key={principaleSlug} className="rounded-xl border border-gray-200 bg-white shadow-soft overflow-hidden">
              <Link href={`/${principaleSlug}`} className="block">
                <div className="relative h-32 w-full bg-gray-100">
                  <Image
                    src={`/images/${principaleSlug}.webp`}
                    alt={principaleNames[principaleSlug] || principaleSlug}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <h3 className="absolute bottom-2 left-3 text-white text-lg font-semibold drop-shadow-sm">{principaleNames[principaleSlug] || principaleSlug}</h3>
                </div>
              </Link>
              <div className="p-5 flex flex-wrap gap-2">
                {grouped[principaleSlug].map((c) => (
                  <Link
                    key={c.slug}
                    href={`/${c.slug}`}
                    className="px-3 py-1 rounded-full border border-primary-200 bg-primary-50 text-primary-700 text-sm hover:bg-primary-100 transition-colors"
                  >
                    {c.nom}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


