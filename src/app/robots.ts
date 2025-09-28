import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://meilleure-agence.be'
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/test/', '/api/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
