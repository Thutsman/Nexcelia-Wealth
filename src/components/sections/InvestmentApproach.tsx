import { RevealWrapper } from '@/components/ui/RevealWrapper'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { INVESTMENT_PRINCIPLES } from '@/data/homepage'

export function InvestmentApproach() {
  return (
    <section
      id="approach"
      className="section-padding"
      style={{ background: 'var(--navy)' }}
    >
      <div className="container-wide">
        <RevealWrapper delay={0.1}>
          <div className="mb-14">
            <SectionLabel className="mb-5 inline-flex items-center gap-3">
              <span className="gold-rule" />
              Investment Approach
            </SectionLabel>
            <h2 className="text-heading text-ivory max-w-xl">
              Principles that guide{' '}
              <em className="text-gold">every allocation</em>
            </h2>
          </div>
        </RevealWrapper>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border border-[var(--border)]">
          {INVESTMENT_PRINCIPLES.map((principle, i) => (
            <RevealWrapper key={principle.number} delay={0.1 + i * 0.1}>
              <div
                className="group relative p-8 lg:p-10 flex flex-col gap-4 transition-all duration-300"
                style={{
                  borderRight: i % 2 === 0 ? '1px solid var(--border)' : 'none',
                  borderBottom: i < 2 ? '1px solid var(--border)' : 'none',
                }}
              >
                {/* Gold top border hover reveal */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 origin-left transition-transform duration-500 scale-x-0 group-hover:scale-x-100"
                  style={{ background: 'var(--gold)' }}
                />

                <span
                  className="font-accent text-5xl font-light leading-none"
                  style={{ color: 'var(--gold)', opacity: 0.12 }}
                >
                  {principle.number}
                </span>
                <h3 className="font-display text-xl text-ivory font-medium">
                  {principle.title}
                </h3>
                <p className="text-ivory-dim text-sm leading-relaxed font-body">
                  {principle.body}
                </p>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
