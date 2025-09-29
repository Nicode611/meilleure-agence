import { MetadataRoute } from 'next'
import { getAllCommunes } from '@/lib/communes'

// Régénérer le sitemap toutes les 24h (valeur littérale requise par Vercel)
export const revalidate = 86400

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://meilleure-agence.be'
  const communes = getAllCommunes()

  const now = new Date()

  const baseEntries: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/agence`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/merci`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/mentions-legales`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: `${baseUrl}/politique-confidentialite`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: `${baseUrl}/cookies`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.1,
    },
  ]

  const communeEntries: MetadataRoute.Sitemap = communes.map((c) => {
    const imagePath = c.principaleSlug
      ? `${baseUrl}/images/${c.principaleSlug}.webp`
      : `${baseUrl}/images/${c.slug}.webp`
    return {
      url: `${baseUrl}/${c.slug}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
      images: [imagePath],
    }
  })

  return [...baseEntries, ...communeEntries]
}
