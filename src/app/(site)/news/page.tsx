import type { Metadata } from 'next'
import { fetchContent, fetchContentCategories } from '@/lib/content/mock'
import { InsightsGrid } from '@/components/blog/InsightsGrid'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'News & Announcements',
  description:
    'Latest firm announcements, market briefings, and updates from Nexcelia Wealth.',
}

interface NewsPageProps {
  searchParams: Promise<{ category?: string }>
}

export default async function NewsPage({ searchParams }: NewsPageProps) {
  const [{ category }, posts, categories] = await Promise.all([
    searchParams,
    fetchContent('news'),
    fetchContentCategories('news'),
  ])

  const activeCategory = category ?? 'All'
  const filteredPosts =
    activeCategory === 'All'
      ? posts
      : posts.filter((p) => p.category?.title === activeCategory)

  const featuredPost = filteredPosts.find((p) => p.featured) ?? filteredPosts[0] ?? null

  return (
    <div style={{ background: 'var(--midnight)', minHeight: '100vh' }}>
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
            Briefings & Firm Updates
          </span>
          <h1 className="text-display text-ivory heading-gap">
            News &amp; <em className="text-gold">Announcements</em>
          </h1>
          <p className="text-body max-w-xl">
            Timely updates from our principals, including market bulletins, office developments,
            and strategic announcements.
          </p>
        </div>
      </div>

      <div
        className="sticky top-[60px] z-30 py-4"
        style={{ background: 'var(--navy)', borderBottom: '1px solid var(--border)' }}
      >
        <div className="container-wide flex items-center gap-3 overflow-x-auto scrollbar-hide">
          {['All', ...categories.map((c) => c.title)].map((cat) => (
            <a
              key={cat}
              href={cat === 'All' ? '/news' : `/news?category=${encodeURIComponent(cat)}`}
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

      <div className="container-wide section-padding">
        {filteredPosts.length === 0 ? (
          <div className="py-24 text-center">
            <p className="font-display text-[22px] leading-[1.4] text-ivory mb-4">No news items yet</p>
            <p className="text-body">Check back soon for the latest announcements and briefings.</p>
          </div>
        ) : (
          <InsightsGrid
            posts={filteredPosts}
            featuredPost={featuredPost}
            basePath="/news"
            emptyMessage="No news items found in this category."
          />
        )}
      </div>
    </div>
  )
}
