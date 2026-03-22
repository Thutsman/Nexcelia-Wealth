import { Hero } from '@/components/sections/Hero'
import { Philosophy } from '@/components/sections/Philosophy'
import { FocusAreas } from '@/components/sections/FocusAreas'
import { Principals } from '@/components/sections/Principals'
import { Heritage } from '@/components/sections/Heritage'
import { GlobalPresence } from '@/components/sections/GlobalPresence'
import { InvestmentApproach } from '@/components/sections/InvestmentApproach'
import { Stewardship } from '@/components/sections/Stewardship'
import { ContactSection } from '@/components/sections/ContactSection'
import { JsonLd } from '@/components/seo/JsonLd'

export default function HomePage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://nexceliawealth.com'
  return (
    <>
      <JsonLd
        type="Organization"
        data={{
          name: 'Nexcelia Wealth',
          url: siteUrl,
          description: 'A private family office managing multi-generational wealth across Africa, Europe and Asia.',
          address: { city: 'Bulawayo', country: 'ZW' },
        }}
      />
      <Hero />
      <Philosophy />
      <FocusAreas />
      <Principals />
      <Heritage />
      <GlobalPresence />
      <InvestmentApproach />
      <Stewardship />
      <ContactSection />
    </>
  )
}
