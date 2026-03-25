import { Hero } from '@/components/sections/Hero'
import { Philosophy } from '@/components/sections/Philosophy'
import { FocusAreas } from '@/components/sections/FocusAreas'
import { Principals } from '@/components/sections/Principals'
import { GlobalPresence } from '@/components/sections/GlobalPresence'
import { InvestmentApproach } from '@/components/sections/InvestmentApproach'
import { InsightsTeaser } from '@/components/sections/InsightsTeaser'
import { ContactSection } from '@/components/sections/ContactSection'
import { JsonLd } from '@/components/seo/JsonLd'

export default function HomePage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://nexceliawealth.com'
  return (
    <>
      <JsonLd
        type="Organization"
        data={{
          name: 'Vacherot Capital Strategy',
          url: siteUrl,
          description: 'A principal-led wealth office deploying capital across Southern Africa with global institutional discipline.',
          address: { city: 'Harare', country: 'ZW' },
        }}
      />
      <Hero />
      <Philosophy />
      <FocusAreas />
      <InvestmentApproach />
      <Principals />
      <GlobalPresence />
      <InsightsTeaser />
      <ContactSection />
    </>
  )
}
