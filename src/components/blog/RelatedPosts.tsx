import Link from 'next/link'
import { PostCard } from './PostCard'
import type { ContentItem } from '@/types/content'

interface RelatedPostsProps {
  posts: ContentItem[]
  basePath: '/insights' | '/news'
  title?: string
}

export function RelatedPosts({ posts, basePath, title = 'Related Insights' }: RelatedPostsProps) {
  if (!posts.length) return null

  return (
    <section
      className="mt-20 pt-16"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      <div className="mb-8">
        <span className="label-text text-[0.6rem]">Continue Reading</span>
        <h2 className="font-display text-[36px] leading-[1.3] text-ivory mt-3">{title}</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} basePath={basePath} />
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link
          href={basePath}
          className="inline-flex items-center gap-2 px-7 py-3 font-body text-xs font-medium tracking-[0.08em] uppercase text-gold"
          style={{ border: '1px solid var(--border-bright)' }}
        >
          {basePath === '/news' ? 'All News →' : 'All Insights →'}
        </Link>
      </div>
    </section>
  )
}
