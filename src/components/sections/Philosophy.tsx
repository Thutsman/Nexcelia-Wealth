import { RevealWrapper } from '@/components/ui/RevealWrapper'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { GoldDivider } from '@/components/ui/GoldDivider'
import { PHILOSOPHY_VALUES } from '@/data/homepage'

export function Philosophy() {
  return (
    <section
      id="philosophy"
      className="section-padding"
      style={{ background: 'var(--navy-mid)' }}
    >
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — text */}
          <div>
            <RevealWrapper delay={0.1}>
              <SectionLabel className="mb-5 inline-flex items-center gap-3">
                <span className="gold-rule" />
                Our Philosophy
              </SectionLabel>
            </RevealWrapper>

            <RevealWrapper delay={0.2}>
              <h2 className="text-heading text-ivory mb-8">
                Wealth is a responsibility,{' '}
                <em className="text-gold">not merely a reward</em>
              </h2>
            </RevealWrapper>

            <RevealWrapper delay={0.3}>
              <blockquote
                className="pl-6 mb-8 italic font-display text-xl text-ivory-dim leading-relaxed"
                style={{ borderLeft: '2px solid var(--gold)' }}
              >
                &ldquo;We build relationships measured in generations, not reporting periods.
                True stewardship means protecting what was entrusted to us and growing
                what will be passed on.&rdquo;
              </blockquote>
            </RevealWrapper>

            <RevealWrapper delay={0.4}>
              <p className="text-ivory-dim text-sm leading-relaxed font-body">
                Nexcelia operates as a principal-led advisory, which means our incentives are
                genuinely aligned with your family&rsquo;s long-term interests. We do not
                manage funds, charge basis points on AUM, or receive third-party commissions.
                Our counsel is independent, confidential, and structured around your family&rsquo;s
                unique goals and governance needs.
              </p>
            </RevealWrapper>
          </div>

          {/* Right — values grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PHILOSOPHY_VALUES.map((value, i) => (
              <RevealWrapper key={value.title} delay={0.2 + i * 0.1}>
                <div
                  className="card-base p-6 group relative overflow-hidden"
                  style={{ background: 'var(--navy-light)' }}
                >
                  {/* Gold top border reveal */}
                  <div
                    className="absolute top-0 left-0 right-0 h-px origin-left transition-all duration-500 scale-x-0 group-hover:scale-x-100"
                    style={{ background: 'var(--gold)' }}
                  />
                  <h3 className="font-display text-lg text-ivory mb-3 font-medium">
                    {value.title}
                  </h3>
                  <p className="text-ivory-dim text-sm leading-relaxed font-body">
                    {value.body}
                  </p>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
