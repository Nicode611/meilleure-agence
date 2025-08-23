import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hoogstoel - Votre Projet Immobilier',
  description: 'Trouvez le spécialiste de votre région et comparez les devis avant de vous décider. Économisez jusqu\'à 40% sur votre projet immobilier.',
  keywords: 'immobilier, projet immobilier, devis, spécialiste, région, économies',
  authors: [{ name: 'Hoogstoel' }],
  metadataBase: new URL('https://hoogstoel.com'),
  openGraph: {
    title: 'Hoogstoel - Votre Projet Immobilier',
    description: 'Trouvez le spécialiste de votre région et comparez les devis avant de vous décider.',
    type: 'website',
    locale: 'fr_FR',
    url: 'https://hoogstoel.com',
    siteName: 'Hoogstoel',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hoogstoel - Votre Projet Immobilier',
    description: 'Trouvez le spécialiste de votre région et comparez les devis avant de vous décider.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
