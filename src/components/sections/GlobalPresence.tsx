'use client'

import { RevealWrapper } from '@/components/ui/RevealWrapper'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { GoldDivider } from '@/components/ui/GoldDivider'
import { OFFICE_LOCATIONS } from '@/data/homepage'

export function GlobalPresence() {
  return (
    <section
      id="presence"
      className="section-padding"
      style={{ background: 'var(--midnight)' }}
    >
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — intro */}
          <div>
            <RevealWrapper delay={0.1}>
              <SectionLabel className="mb-5 inline-flex items-center gap-3">
                <span className="gold-rule" />
                Global Presence
              </SectionLabel>
            </RevealWrapper>
            <RevealWrapper delay={0.2}>
              <h2 className="text-heading text-ivory heading-gap">
                Where we <em className="text-gold">operate</em>
              </h2>
            </RevealWrapper>
            <RevealWrapper delay={0.3}>
              <p className="text-body section-gap max-w-md">
                Our multi-jurisdiction footprint gives us the ability to structure wealth
                solutions that span multiple regulatory environments, tax treaties, and
                financial markets — a critical advantage for globally-oriented African families.
              </p>
            </RevealWrapper>
            <RevealWrapper delay={0.4}>
              <div
                className="card-base p-8 flex flex-col gap-5"
                style={{ background: 'var(--navy-mid)', border: '1px solid var(--border)' }}
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🌿</span>
                  <div>
                    <p className="font-display text-[22px] leading-[1.4] text-ivory mb-3">
                      Research & Conservation Foundation
                    </p>
                    <p className="text-body">
                      Our affiliated research foundation supports conservation science, land tenure
                      reform advocacy, and nature-based carbon market development across Southern Africa.
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Conservation', 'Research', 'Policy', 'Africa'].map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[0.55rem] font-accent tracking-widest uppercase text-ivory-dim"
                      style={{ border: '1px solid var(--border)' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </RevealWrapper>
          </div>

          {/* Right — locations */}
          <div className="flex flex-col gap-3">
            {OFFICE_LOCATIONS.map((loc, i) => (
              <RevealWrapper key={loc.city} delay={0.15 + i * 0.1}>
                <div
                  className="group card-base flex items-center gap-5 p-6 transition-all duration-200 cursor-default"
                  style={{
                    border: '1px solid var(--border)',
                    background: 'var(--navy-mid)',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget
                    el.style.borderColor = 'var(--border-bright)'
                    el.style.paddingLeft = '30px'
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget
                    el.style.borderColor = 'var(--border)'
                    el.style.paddingLeft = '24px'
                  }}
                >
                  <div
                    className="flex-shrink-0 w-2 h-2 rounded-full"
                    style={{ background: loc.isHQ ? 'var(--gold)' : 'var(--border-bright)' }}
                  />
                  <div className="flex-1">
                    <div className="flex items-baseline gap-3">
                      <span className="font-display text-[22px] leading-[1.4] text-ivory">{loc.city}</span>
                      <span className="text-muted text-[15px] font-body">— {loc.country}</span>
                    </div>
                    <p className="label-text text-[0.58rem] text-ivory-dim mt-0.5">{loc.role}</p>
                  </div>
                  {loc.isHQ && (
                    <span
                      className="flex-shrink-0 px-2 py-0.5 text-[0.55rem] font-accent tracking-widest uppercase text-gold"
                      style={{ border: '1px solid var(--border-bright)' }}
                    >
                      HQ
                    </span>
                  )}
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
