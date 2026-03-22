import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nexcelia CMS',
  robots: { index: false, follow: false },
}

// Studio gets a bare layout — no site Navbar/Footer
export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
