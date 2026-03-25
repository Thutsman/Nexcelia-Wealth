'use client'

import Link from 'next/link'
import { RevealWrapper } from '@/components/ui/RevealWrapper'
import { SectionLabel } from '@/components/ui/SectionLabel'

const TEASERS = [
  {
    title: "Africa's $16.5 Billion AI Horizon",
    category: 'AI & Financial Technology',
    accent: '#4A9EBF',
    excerpt:
      "Africa's AI market is projected to expand rapidly through 2030, creating a structural opportunity across the SADC corridor.",
  },
  {
    title: "Zimbabwe's Mining Boom: A Consequential Mineral Story",
    category: 'Mining & Resources',
    accent: '#C4862E',
    excerpt:
      'Lithium output, platinum depth, and accelerating project capital are reshaping Zimbabwe into a strategic mining jurisdiction.',
  },
  {
    title: 'Tourism and Conservation as a Capital Asset Class',
    category: 'Tourism & Conservation',
    accent: '#B05E5E',
    excerpt:
      'Conservation-linked tourism and community-anchored models are driving resilient value creation across Southern Africa.',
  },
]

export function InsightsTeaser() {
  return (
    <section id="insights-teaser" className="section-padding" style={{ background: 'var(--white)', color: 'var(--navy)' }}>
      <div className="container-wide">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <div>
            <RevealWrapper delay={0.1}>
              <SectionLabel className="mb-5 inline-flex items-center gap-3 text-muted">
                <span className="gold-rule" />
                Capital Intelligence
              </SectionLabel>
            </RevealWrapper>
            <RevealWrapper delay={0.2}>
              <h2 className="text-heading heading-gap" style={{ color: 'var(--navy)' }}>
                Latest from <em className="text-gold">Insights</em>
              </h2>
            </RevealWrapper>
          </div>
          <RevealWrapper delay={0.3}>
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 px-6 py-3 label-text"
              style={{
                color: 'var(--gold)',
                border: '1px solid rgba(184, 150, 46, 0.35)',
              }}
            >
              View All Insights
              <span>→</span>
            </Link>
          </RevealWrapper>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
          {TEASERS.map((item, i) => (
            <RevealWrapper key={item.title} delay={0.15 + i * 0.1}>
              <Link
                href="/insights"
                className="block card-base p-8 h-full transition-colors duration-300"
                style={{ background: 'var(--ivory)' }}
              >
                <p className="label-text text-[0.52rem] mb-4" style={{ color: item.accent }}>
                  {item.category}
                </p>
                <h3 className="font-display text-[1.4rem] leading-[1.2] mb-4" style={{ color: 'var(--navy)' }}>
                  {item.title}
                </h3>
                <p className="text-[0.95rem] leading-[1.75]" style={{ color: '#6a645c' }}>
                  {item.excerpt}
                </p>
                <span className="label-text text-[0.52rem] mt-6 inline-block" style={{ color: 'var(--gold)' }}>
                  Read Analysis →
                </span>
              </Link>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
