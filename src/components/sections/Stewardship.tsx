import { RevealWrapper } from '@/components/ui/RevealWrapper'
import { SectionLabel } from '@/components/ui/SectionLabel'

export function Stewardship() {
  return (
    <section
      id="stewardship"
      className="section-padding relative overflow-hidden"
      style={{ background: 'var(--midnight)' }}
    >
      {/* Green radial gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 70% at 50% 50%, rgba(62,140,90,0.07) 0%, transparent 70%)',
        }}
      />

      {/* Subtle geometric SVG background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hex" width="60" height="52" patternUnits="userSpaceOnUse">
              <polygon
                points="30,2 58,17 58,47 30,62 2,47 2,17"
                fill="none"
                stroke="var(--gold)"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hex)" />
        </svg>
      </div>

      <div className="container-wide relative z-10 text-center">
        <RevealWrapper delay={0.1}>
          <SectionLabel className="mb-6 inline-flex items-center gap-3">
            <span className="gold-rule" />
            Responsible Stewardship
            <span className="gold-rule" style={{ transform: 'rotate(180deg)' }} />
          </SectionLabel>
        </RevealWrapper>

        <RevealWrapper delay={0.2}>
          <h2 className="text-heading text-ivory heading-gap max-w-3xl mx-auto">
            Capital with <em className="text-gold">conscience</em> — investing{' '}
            in a sustainable future
          </h2>
        </RevealWrapper>

        <RevealWrapper delay={0.3}>
          <p className="text-subhead max-w-2xl mx-auto section-gap">
            We believe that the families who have been most successful in creating wealth
            also bear the greatest obligation to deploy it responsibly. Our conservation
            portfolio is not separate from our financial mandate — it is central to it.
          </p>
        </RevealWrapper>

        {/* Stats */}
        <RevealWrapper delay={0.4}>
          <div className="inline-grid grid-cols-1 sm:grid-cols-3 gap-0 border border-[var(--border)]">
            {[
              { value: '480,000', label: 'Hectares Under Conservation Advisory' },
              { value: '12+', label: 'Conservation Projects Supported' },
              { value: '3', label: 'African Countries Covered' },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className="px-10 py-8 text-center card-base"
                style={{
                  background: 'var(--navy-mid)',
                  borderRight: i < 2 ? '1px solid var(--border)' : 'none',
                }}
              >
                <span
                  className="block font-display text-4xl font-medium mb-2"
                  style={{ color: 'rgba(62,140,90,0.85)' }}
                >
                  {stat.value}
                </span>
                <span className="label-text text-[0.58rem] text-ivory-dim">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}
