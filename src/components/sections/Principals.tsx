import Image from 'next/image'
import { RevealWrapper } from '@/components/ui/RevealWrapper'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { GoldDivider } from '@/components/ui/GoldDivider'
import { PRINCIPALS } from '@/data/homepage'

function getInitials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('')
}

export function Principals() {
  return (
    <section
      id="principals"
      className="section-padding"
      style={{ background: 'var(--ivory)' }}
    >
      <div className="container-wide">

        {/* Centred section header */}
        <RevealWrapper delay={0.1}>
          <div className="text-center mb-16">
            <SectionLabel className="mb-6 inline-flex items-center gap-3">
              <span className="gold-rule" />
              Leadership
              <span className="gold-rule" style={{ transform: 'rotate(180deg)' }} />
            </SectionLabel>
            <h2
              className="font-display mb-6"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 52px)', fontWeight: 600, lineHeight: 1.2, color: 'var(--navy)' }}
            >
              The Principals of <em className="text-gold">Vacherot</em>
            </h2>
            <p
              className="mx-auto"
              style={{ maxWidth: '36rem', color: '#7A736A' }}
            >
              Three principals. Three continents of operating context. One singular focus on
              Southern Africa&apos;s structural transformation.
            </p>
          </div>
        </RevealWrapper>

        {/* Principal cards — side by side */}
        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-0"
          style={{ border: '1px solid var(--border)' }}
        >
          {PRINCIPALS.map((principal, i) => (
            <RevealWrapper key={principal.name} delay={0.2 + i * 0.15}>
              <div
                className="card-base flex flex-col gap-7 p-10 lg:p-12 h-full"
                style={{
                  background: 'var(--white)',
                  borderRight: i < PRINCIPALS.length - 1 ? '1px solid var(--border)' : 'none',
                }}
              >
                {/* Portrait photo / initials fallback */}
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
                {!principal.image && (
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0 font-display italic text-[1.3rem]"
                    style={{
                      background: '#0F2B1A',
                      color: 'var(--gold-lt)',
                      border: '1px solid var(--border-bright)',
                    }}
                  >
                    {getInitials(principal.name)}
                  </div>
                )}

                {/* Role label */}
                <p className="label-text text-[0.58rem] tracking-[0.2em]">{principal.role}</p>

                {/* Name */}
                <h3
                  className="font-display font-medium leading-tight"
                  style={{ fontSize: 'clamp(1.6rem, 3vw, 36px)', lineHeight: 1.3, color: 'var(--navy)' }}
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
                  <p className="text-body" style={{ color: '#6A645C' }}>
                    {principal.bio1}
                  </p>
                  <p className="text-body" style={{ color: '#6A645C' }}>
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
                      <span className="text-body" style={{ color: '#6A645C' }}>
                        {cred.bold && (
                          <strong style={{ color: 'var(--navy)' }} className="font-medium">{cred.bold}</strong>
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
                      className="inline-flex items-center gap-2 font-accent text-[0.58rem] tracking-[0.16em] uppercase"
                      style={{ color: '#6A645C' }}
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
