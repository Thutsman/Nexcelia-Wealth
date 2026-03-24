import Image from 'next/image'
import { RevealWrapper } from '@/components/ui/RevealWrapper'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { GoldDivider } from '@/components/ui/GoldDivider'
import { PRINCIPALS } from '@/data/homepage'

export function Principals() {
  return (
    <section
      id="principals"
      className="section-padding"
      style={{ background: 'var(--navy)' }}
    >
      <div className="container-wide">

        {/* Centred section header */}
        <RevealWrapper delay={0.1}>
          <div className="text-center mb-16">
            <SectionLabel className="mb-6 inline-flex items-center gap-3">
              <span className="gold-rule" />
              The Principals
              <span className="gold-rule" style={{ transform: 'rotate(180deg)' }} />
            </SectionLabel>
            <h2
              className="font-display text-ivory mb-6"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 52px)', fontWeight: 600, lineHeight: 1.2 }}
            >
              Grounded in <em className="text-gold">experience</em>. Guided by values.
            </h2>
            <p
              className="text-body mx-auto"
              style={{ maxWidth: '36rem' }}
            >
              Nexcelia Wealth is directed by two principals whose backgrounds are distinct but
              complementary — one rooted in academic economics and international financial
              regulation, the other in technology markets and global commercial practice.
            </p>
          </div>
        </RevealWrapper>

        {/* Principal cards — side by side */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-0"
          style={{ border: '1px solid var(--border)' }}
        >
          {PRINCIPALS.map((principal, i) => (
            <RevealWrapper key={principal.name} delay={0.2 + i * 0.15}>
              <div
                className="card-base flex flex-col gap-7 p-10 lg:p-12 h-full"
                style={{
                  background: i === 0 ? 'var(--navy-mid)' : 'var(--navy-light)',
                  borderRight: i === 0 ? '1px solid var(--border)' : 'none',
                }}
              >
                {/* Portrait photo */}
                {principal.image && (
                  <div
                    className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0"
                    style={{ border: '1px solid var(--border-bright)' }}
                  >
                    <Image
                      src={principal.image}
                      alt={principal.name}
                      fill
                      style={{ objectFit: 'cover', objectPosition: 'center top' }}
                      sizes="80px"
                    />
                  </div>
                )}

                {/* Role label */}
                <p className="label-text text-[0.58rem] tracking-[0.2em]">{principal.role}</p>

                {/* Name */}
                <h3
                  className="font-display text-ivory font-medium leading-tight"
                  style={{ fontSize: 'clamp(1.6rem, 3vw, 36px)', lineHeight: 1.3 }}
                >
                  {principal.name}
                </h3>

                {/* Subtitle — italic gold */}
                <p
                  className="font-display text-gold"
                  style={{ fontSize: '22px', fontStyle: 'italic', lineHeight: 1.4 }}
                >
                  {principal.subtitle}
                </p>

                {/* Bio paragraphs */}
                <div className="flex flex-col gap-5">
                  <p className="text-body">
                    {principal.bio1}
                  </p>
                  <p className="text-body">
                    {principal.bio2}
                  </p>
                </div>

                {/* Divider */}
                <GoldDivider width="full" className="opacity-20" />

                {/* Credentials */}
                <ul className="flex flex-col gap-4">
                  {principal.credentials.map((cred, ci) => (
                    <li key={ci} className="flex items-start gap-3">
                      <span
                        className="flex-shrink-0 mt-[5px] w-1.5 h-1.5 rounded-full"
                        style={{ background: 'var(--gold)', opacity: 0.7 }}
                      />
                      <span className="text-body">
                        {cred.bold && (
                          <strong className="text-ivory font-medium">{cred.bold}</strong>
                        )}
                        {cred.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Geography tags */}
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-auto pt-2">
                  {principal.geographyTags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-2 font-accent text-[0.58rem] tracking-[0.16em] uppercase text-ivory-dim"
                    >
                      <span
                        className="inline-block w-1 h-1 rounded-full flex-shrink-0"
                        style={{ background: 'var(--gold)' }}
                      />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>

      </div>
    </section>
  )
}
