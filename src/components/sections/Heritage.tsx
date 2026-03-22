import { RevealWrapper } from '@/components/ui/RevealWrapper'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { GoldDivider } from '@/components/ui/GoldDivider'

export function Heritage() {
  return (
    <section
      id="heritage"
      className="section-padding"
      style={{ background: 'var(--navy-mid)' }}
    >
      <div className="container-wide">
        <RevealWrapper delay={0.1}>
          <div className="text-center mb-14">
            <SectionLabel className="mb-5 inline-flex items-center gap-3">
              <span className="gold-rule" />
              Our Heritage
              <span className="gold-rule" style={{ transform: 'rotate(180deg)' }} />
            </SectionLabel>
            <h2 className="text-heading text-ivory">
              Rooted in Africa, <em className="text-gold">present in Europe</em>
            </h2>
          </div>
        </RevealWrapper>

        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Zimbabwe block */}
          <RevealWrapper delay={0.2}>
            <div
              className="p-10 lg:p-14 flex flex-col gap-6"
              style={{ background: 'var(--navy-light)', borderRight: '1px solid var(--border)' }}
            >
              <div className="flex items-center gap-4">
                <span className="text-4xl">🇿🇼</span>
                <div>
                  <p className="label-text text-[0.6rem]">Southern Africa</p>
                  <h3 className="font-display text-2xl text-ivory">Zimbabwe</h3>
                </div>
              </div>
              <GoldDivider />
              <h4 className="font-display text-xl text-gold font-light">
                Where the journey began
              </h4>
              <p className="text-ivory-dim text-sm leading-relaxed font-body">
                Founded in Bulawayo — Zimbabwe&rsquo;s second city and industrial heartland — Nexcelia
                emerged from a deep understanding of African capital markets, frontier-economy
                dynamics, and the unique governance challenges facing family enterprises on the
                continent.
              </p>
              <p className="text-ivory-dim text-sm leading-relaxed font-body">
                Our principals have structured transactions across the SADC region, navigated
                multiple currency crises, and built enduring client relationships rooted in trust
                earned over decades of shared experience.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {['Bulawayo HQ', 'SADC Region', 'Pan-African'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-[0.58rem] font-accent tracking-widest uppercase text-gold"
                    style={{ border: '1px solid var(--border-bright)' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </RevealWrapper>

          {/* Netherlands block */}
          <RevealWrapper delay={0.35}>
            <div
              className="p-10 lg:p-14 flex flex-col gap-6"
              style={{ background: 'var(--navy)' }}
            >
              <div className="flex items-center gap-4">
                <span className="text-4xl">🇳🇱</span>
                <div>
                  <p className="label-text text-[0.6rem]">Northern Europe</p>
                  <h3 className="font-display text-2xl text-ivory">Netherlands</h3>
                </div>
              </div>
              <GoldDivider />
              <h4 className="font-display text-xl text-gold font-light">
                Our European anchor
              </h4>
              <p className="text-ivory-dim text-sm leading-relaxed font-body">
                The Hague office serves as our European hub — providing access to international
                capital markets, Dutch corporate governance infrastructure, and a jurisdiction
                widely regarded for its legal clarity and treaty network.
              </p>
              <p className="text-ivory-dim text-sm leading-relaxed font-body">
                The Netherlands&rsquo; central position within European financial markets, combined
                with its robust framework for holding structures and foundations, makes it an ideal
                base for our international operations and cross-border family wealth planning.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {['The Hague', 'EU Jurisdiction', 'International'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-[0.58rem] font-accent tracking-widest uppercase text-gold"
                    style={{ border: '1px solid var(--border-bright)' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}
