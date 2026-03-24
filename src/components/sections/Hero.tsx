import { GlobeAnimation } from '@/components/ui/GlobeAnimation'
import { RevealWrapper } from '@/components/ui/RevealWrapper'
import { Button } from '@/components/ui/Button'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { GoldDivider } from '@/components/ui/GoldDivider'
import { HERO_STATS } from '@/data/homepage'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: 'linear-gradient(160deg, var(--midnight) 0%, var(--navy-mid) 100%)' }}
    >
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(var(--border-bright) 1px, transparent 1px), linear-gradient(90deg, var(--border-bright) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container-wide relative z-10 pt-28 lg:pt-32 pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left — copy */}
          <div>
            <RevealWrapper delay={0.2}>
              <SectionLabel className="mb-6 inline-flex items-center gap-3">
                <span className="gold-rule inline-block" />
                Private Family Office · Est. 2006
              </SectionLabel>
            </RevealWrapper>

            <RevealWrapper delay={0.35}>
              <h1 className="text-display text-ivory heading-gap">
                Preserving &amp;{' '}
                <em className="text-gold not-italic">Growing</em> Wealth{' '}
                <br className="hidden sm:block" />
                Across Generations
              </h1>
            </RevealWrapper>

            <RevealWrapper delay={0.5}>
              <p className="text-subhead section-gap max-w-lg">
                Nexcelia Wealth is a private family office headquartered in Bulawayo, Zimbabwe —
                combining deep African market insight with global capital markets expertise to
                protect and compound multi-generational wealth.
              </p>
            </RevealWrapper>

            <RevealWrapper delay={0.65}>
              <div className="flex flex-wrap gap-4">
                <Button href="#philosophy" variant="primary">
                  Our Purpose
                </Button>
                <Button href="#principals" variant="ghost">
                  The Principals →
                </Button>
              </div>
            </RevealWrapper>
          </div>

          {/* Right — globe */}
          <RevealWrapper delay={0.4} direction="left" className="flex justify-center lg:justify-end">
            <GlobeAnimation />
          </RevealWrapper>
        </div>

        {/* Stats bar */}
        <RevealWrapper delay={0.9}>
          <div
            className="mt-16 lg:mt-20 grid grid-cols-2 lg:grid-cols-4 border-t border-[var(--border)]"
          >
            {HERO_STATS.map((stat, i) => (
              <div
                key={stat.label}
                className="py-7 px-5 lg:px-8 flex flex-col gap-2 border-r border-[var(--border)] last:border-r-0 odd:border-r"
                style={{ borderRight: i < HERO_STATS.length - 1 ? '1px solid var(--border)' : 'none' }}
              >
                <span className="font-display text-3xl lg:text-4xl font-medium text-gold">
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
