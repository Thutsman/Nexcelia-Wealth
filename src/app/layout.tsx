import type { Metadata } from 'next'
import { playfairDisplay, didactGothic, ebGaramond } from '@/lib/fonts'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Vacherot — Capital Strategy · Southern Africa',
    template: '%s | Vacherot',
  },
  description:
    'A principal-led wealth office deploying capital across Southern Africa with global institutional discipline.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://nexceliawealth.com'),
  openGraph: {
    type: 'website',
    siteName: 'Vacherot',
    title: 'Vacherot — Capital Strategy · Southern Africa',
    description:
      'A principal-led wealth office deploying capital across Southern Africa with global institutional discipline.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vacherot',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${didactGothic.variable} ${ebGaramond.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
