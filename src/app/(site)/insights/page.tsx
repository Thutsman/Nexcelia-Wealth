import type { Metadata } from 'next'
import { fetchPosts, fetchCategories } from '@/lib/sanity/fetch'
import { InsightsGrid } from '@/components/blog/InsightsGrid'
import type { SanityPost } from '@/types'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Insights & Perspectives',
  description:
    'Investment outlooks, market analysis, and perspectives on wealth preservation from the Nexcelia principals.',
}

interface InsightsPageProps {
  searchParams: { category?: string }
}

export default async function InsightsPage({ searchParams }: InsightsPageProps) {
  const [posts, categories] = await Promise.all([fetchPosts(), fetchCategories()])

  const activeCategory = searchParams.category ?? 'All'
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
          background: 'linear-gradient(180deg, var(--navy-mid) 0%, var(--midnight) 100%)',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div className="container-wide">
          <span className="label-text text-[0.6rem] inline-flex items-center gap-3 mb-5">
            <span className="gold-rule" />
            From the Principals
          </span>
          <h1 className="font-display text-5xl lg:text-6xl text-ivory mb-4 font-light">
            Insights &amp; <em className="text-gold">Perspectives</em>
          </h1>
          <p className="text-ivory-dim text-base font-body max-w-xl">
            Investment outlooks, market analysis, and perspectives on wealth preservation,
            conservation, and the evolving landscape of African and global capital markets.
          </p>
        </div>
      </div>

      {/* Category filters */}
      <div
        className="sticky top-[60px] z-30 py-4"
        style={{ background: 'var(--navy)', borderBottom: '1px solid var(--border)' }}
      >
        <div className="container-wide flex items-center gap-3 overflow-x-auto scrollbar-hide">
          {['All', ...categories.map((c) => c.title)].map((cat) => (
            <a
              key={cat}
              href={cat === 'All' ? '/insights' : `/insights?category=${encodeURIComponent(cat)}`}
              className="flex-shrink-0 px-4 py-1.5 font-accent text-[0.6rem] tracking-widest uppercase transition-all duration-200"
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
            <p className="font-display text-2xl text-ivory-dim mb-4">No articles yet</p>
            <p className="text-ivory-dim text-sm font-body">
              Check back soon — our principals are working on new perspectives.
            </p>
          </div>
        ) : (
          <InsightsGrid posts={filteredPosts} featuredPost={featuredPost} />
        )}
      </div>
    </div>
  )
}
