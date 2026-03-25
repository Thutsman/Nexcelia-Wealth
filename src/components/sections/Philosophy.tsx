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
                Our Mandate
              </SectionLabel>
            </RevealWrapper>

            <RevealWrapper delay={0.2}>
              <h2 className="text-heading text-ivory section-gap">
                Southern Africa stands at the apex of an{' '}
                <em className="text-gold" style={{ color: 'var(--gold-lt)' }}>epochal transformation</em>
              </h2>
            </RevealWrapper>

            <RevealWrapper delay={0.3}>
              <blockquote
                className="pl-6 section-gap italic font-display text-[22px] text-ivory leading-[1.7]"
                style={{ borderLeft: '2px solid var(--gold)' }}
              >
                &ldquo;Capital deployed with conviction, guided by knowledge, anchored in place.&rdquo;
              </blockquote>
            </RevealWrapper>

            <RevealWrapper delay={0.4}>
              <p className="text-body max-w-xl">
                Vacherot is a principal-led wealth office deploying capital across Southern
                Africa&apos;s most transformative sectors. We are not passive allocators:
                we are active architects of growth, combining regional market intelligence
                with global institutional standards.
              </p>
            </RevealWrapper>
          </div>

          {/* Right — values grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PHILOSOPHY_VALUES.map((value, i) => (
              <RevealWrapper key={value.title} delay={0.2 + i * 0.1}>
                <div
                  className="card-base p-7 group relative overflow-hidden"
                  style={{ background: 'var(--navy-light)' }}
                >
                  {/* Gold top border reveal */}
                  <div
                    className="absolute top-0 left-0 right-0 h-px origin-left transition-all duration-500 scale-x-0 group-hover:scale-x-100"
                    style={{ background: 'var(--gold)' }}
                  />
                  <h3 className="text-card-heading text-ivory mb-4">
                    {value.title}
                  </h3>
                  <p className="text-body">
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
