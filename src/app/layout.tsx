import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Meilleure Agence',
  description: 'Choisissez la meilleure agence immobilière',
  keywords: 'immobilier, projet immobilier, devis, spécialiste, région, économies',
  authors: [{ name: 'Hoogstoel' }],
  metadataBase: new URL('https://www.meilleure-agence.be/'),
  openGraph: {
    title: 'Meilleure Agence',
    description: 'Choisissez la meilleure agence immobilière',
    type: 'website',
    locale: 'fr_FR',
    url: 'https://www.meilleure-agence.be/',
    siteName: 'Meilleure Agence',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meilleure Agence',
    description: 'Choisissez la meilleure agence immobilière',
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
