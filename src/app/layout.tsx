import type { Metadata } from 'next'
import { cormorant, dmSans, cinzel } from '@/lib/fonts'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Nexcelia Wealth — Private Wealth & Family Office',
    template: '%s | Nexcelia Wealth',
  },
  description:
    'A private family office managing multi-generational wealth across Africa, Europe and Asia. Headquartered in Bulawayo, Zimbabwe.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://nexceliawealth.com'),
  openGraph: {
    type: 'website',
    siteName: 'Nexcelia Wealth',
    title: 'Nexcelia Wealth — Private Wealth & Family Office',
    description:
      'A private family office managing multi-generational wealth across Africa, Europe and Asia.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nexcelia Wealth',
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
      className={`${cormorant.variable} ${dmSans.variable} ${cinzel.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
