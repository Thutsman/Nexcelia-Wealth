'use client'

import { motion } from 'framer-motion'
import { RevealWrapper } from '@/components/ui/RevealWrapper'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { FOCUS_AREAS } from '@/data/homepage'
import { icons } from '@/data/icons'

export function FocusAreas() {
  return (
    <section
      id="focus"
      className="section-padding"
      style={{ background: 'var(--midnight)' }}
    >
      <div className="container-wide">
        {/* Header */}
        <RevealWrapper delay={0.1}>
          <div className="text-center mb-14">
            <SectionLabel className="mb-5 inline-flex items-center gap-3">
              <span className="gold-rule" />
              Investment Mandate
              <span className="gold-rule" style={{ transform: 'rotate(180deg)' }} />
            </SectionLabel>
            <h2 className="text-heading text-ivory">
              Seven Sectors. <em className="text-gold">One Continent.</em>
            </h2>
          </div>
        </RevealWrapper>

        {/* Pills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {FOCUS_AREAS.map((area, i) => (
            <RevealWrapper key={area.label} delay={0.15 + i * 0.1}>
              <motion.div
                className="group card-base relative p-7 flex flex-col gap-4 cursor-default overflow-hidden"
                style={{ background: 'var(--navy-mid)', minHeight: '280px' }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                {/* Coloured top border — revealed on hover */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                  style={{ background: area.accentColor }}
                />

                {/* Number */}
                <span
                  className="font-accent text-4xl font-light"
                  style={{ color: area.accentColor, opacity: 0.25 }}
                >
                  {area.number}
                </span>

                {/* Icon */}
                <div style={{ color: area.accentColor }}>{icons[area.icon]}</div>

                {/* Title */}
                <h3 className="text-card-heading text-ivory">{area.label}</h3>

                {/* Body */}
                <p className="text-body flex-1">
                  {area.body}
                </p>

                {/* Tag */}
                <span
                  className="inline-block self-start px-3 py-1 text-[0.58rem] font-accent tracking-widest uppercase rounded-full"
                  style={{
                    border: `1px solid ${area.borderColor}`,
                    color: area.accentColor,
                  }}
                >
                  {area.tag}
                </span>
              </motion.div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
