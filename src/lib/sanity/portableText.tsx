import type { PortableTextComponents } from '@portabletext/react'
import Image from 'next/image'
import { urlForImage } from './image'
import type { SanityImage } from '@/types'

export const portableTextComponents: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2
        className="text-heading text-gold"
        style={{ marginTop: '2.75rem', marginBottom: '1.25rem', lineHeight: 1.15 }}
      >
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-card-heading text-ivory" style={{ marginTop: '2.25rem', marginBottom: '1rem' }}>
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p
        className="text-body"
        style={{ marginBottom: '1.4rem' }}
      >
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote
        style={{
          borderLeft: '2px solid var(--gold)',
          paddingLeft: '1.5rem',
          margin: '2rem 0',
          fontFamily: 'var(--font-playfair)',
          fontStyle: 'italic',
          fontSize: '22px',
          color: 'var(--ivory)',
          lineHeight: 1.7,
        }}
      >
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong style={{ color: 'var(--ivory)', fontWeight: 600 }}>{children}</strong>
    ),
    em: ({ children }) => (
      <em style={{ color: 'var(--gold-lt)', fontStyle: 'normal', fontWeight: 500 }}>{children}</em>
    ),
    link: ({ children, value }) => (
      <a
        href={value?.href}
        target={value?.blank ? '_blank' : undefined}
        rel={value?.blank ? 'noopener noreferrer' : undefined}
        style={{
          color: 'var(--gold)',
          textDecoration: 'underline',
          textDecorationColor: 'var(--border-bright)',
          transition: 'color 0.2s',
        }}
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }: { value: SanityImage & { alt?: string; caption?: string } }) => {
      if (!value?.asset) return null
      return (
        <figure style={{ margin: '2.5rem 0' }}>
          <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9' }}>
            <Image
              src={urlForImage(value, 1200, 675)}
              alt={value.alt ?? 'Article image'}
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, 900px"
            />
          </div>
          {value.caption && (
            <figcaption
              style={{
                marginTop: '0.75rem',
                fontFamily: 'var(--font-eb-garamond)',
                fontSize: '0.8rem',
                color: 'var(--ivory-dim)',
                textAlign: 'center',
                fontStyle: 'normal',
              }}
            >
              {value.caption}
            </figcaption>
          )}
        </figure>
      )
    },
  },
  list: {
    bullet: ({ children }) => (
      <ul
        style={{
          listStyle: 'none',
          padding: 0,
          margin: '1rem 0 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
        }}
      >
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol
        style={{
          listStyle: 'decimal',
          paddingLeft: '1.5rem',
          margin: '1rem 0 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
        }}
      >
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li
        style={{
          fontFamily: 'var(--font-eb-garamond)',
          fontSize: '18px',
          color: 'var(--ivory-dim)',
          lineHeight: 1.8,
          display: 'flex',
          gap: '0.75rem',
          alignItems: 'flex-start',
        }}
      >
        <span style={{ color: 'var(--gold)', marginTop: '0.35rem', flexShrink: 0 }}>·</span>
        {children}
      </li>
    ),
  },
}
