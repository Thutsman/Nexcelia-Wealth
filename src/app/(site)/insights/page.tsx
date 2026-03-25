import type { Metadata } from 'next'
import { fetchContent, fetchContentCategories } from '@/lib/content/mock'
import { InsightsGrid } from '@/components/blog/InsightsGrid'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Vacherot Insights',
  description:
    'Capital intelligence, sector analysis, and market perspectives from the Vacherot principals.',
}

interface InsightsPageProps {
  searchParams: Promise<{ category?: string }>
}

export default async function InsightsPage({ searchParams }: InsightsPageProps) {
  const [{ category }, posts, categories] = await Promise.all([
    searchParams,
    fetchContent('insight'),
    fetchContentCategories('insight'),
  ])

  const activeCategory = category ?? 'All'
  const filteredPosts =
    activeCategory === 'All'
      ? posts
      : posts.filter((p) => p.category?.title === activeCategory)

  const featuredPost = filteredPosts.find((p) => p.featured) ?? filteredPosts[0] ?? null

  return (
    <div style={{ background: 'var(--midnight)', minHeight: '100vh' }}>
      {/* Hero header */}
      <div
        className="pt-32 pb-16 section-padding"
        style={{
          background: 'linear-gradient(180deg, var(--navy) 0%, var(--midnight) 100%)',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div className="container-wide">
          <span className="label-text text-[0.6rem] inline-flex items-center gap-3 mb-5">
            <span className="gold-rule" />
            Capital Intelligence
          </span>
          <h1 className="text-display text-ivory heading-gap">
            Vacherot <em className="text-gold">Insights</em>
          </h1>
          <p className="text-body max-w-xl">
            Structural analysis across AI, fintech, resources, real estate, and infrastructure
            in Southern Africa, with institutional context for long-duration capital.
          </p>
        </div>
      </div>

      {/* Category filters */}
      <div
        className="sticky top-[60px] z-30 py-4"
        style={{ background: 'var(--navy-mid)', borderBottom: '1px solid var(--border)' }}
      >
        <div className="container-wide flex items-center gap-3 overflow-x-auto scrollbar-hide">
          {['All', ...categories.map((c) => c.title)].map((cat) => (
            <a
              key={cat}
              href={cat === 'All' ? '/insights' : `/insights?category=${encodeURIComponent(cat)}`}
              className="flex-shrink-0 px-4 py-1.5 font-body text-[12px] font-medium tracking-[0.08em] uppercase transition-all duration-200"
              style={{
                border: `1px solid ${activeCategory === cat ? 'var(--border-bright)' : 'var(--border)'}`,
                color: activeCategory === cat ? 'var(--gold)' : 'var(--ivory-dim)',
                background: activeCategory === cat ? 'rgba(184,150,90,0.06)' : 'transparent',
              }}
            >
              {cat}
            </a>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="container-wide section-padding">
        {filteredPosts.length === 0 ? (
          <div className="py-24 text-center">
            <p className="font-display text-[22px] leading-[1.4] text-ivory mb-4">No articles yet</p>
            <p className="text-body">
              Check back soon - new analysis is currently in production.
            </p>
          </div>
        ) : (
          <InsightsGrid posts={filteredPosts} featuredPost={featuredPost} basePath="/insights" />
        )}
      </div>
    </div>
  )
}
