import { formatDate } from '@/lib/utils'
import type { SanityPost } from '@/types'

interface ArticleHeaderProps {
  post: SanityPost
}

export function ArticleHeader({ post }: ArticleHeaderProps) {
  return (
    <header className="mb-10">
      {post.category && (
        <span
          className="inline-block mb-5 px-3 py-1 font-accent text-[0.58rem] tracking-widest uppercase text-gold"
          style={{ border: '1px solid var(--border-bright)' }}
        >
          {post.category.title}
        </span>
      )}
      <h1 className="text-display text-ivory heading-gap max-w-3xl">
        {post.title}
      </h1>
      {post.excerpt && (
        <p className="text-body max-w-2xl section-gap">
          {post.excerpt}
        </p>
      )}
      <div
        className="flex flex-wrap items-center gap-4 pb-8 text-sm font-body text-ivory-dim"
        style={{ borderBottom: '1px solid var(--border)' }}
      >
        {post.author && (
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center font-accent text-xs text-gold flex-shrink-0"
              style={{ border: '1px solid var(--border-bright)', background: 'var(--navy-light)' }}
            >
              {post.author.name.split(' ').map((n: string) => n[0]).join('')}
            </div>
            <div>
              <p className="text-ivory text-xs">{post.author.name}</p>
              {post.author.role && (
                <p className="text-[0.65rem] text-ivory-dim">{post.author.role}</p>
              )}
            </div>
          </div>
        )}
        <span className="text-[var(--border-bright)]">·</span>
        <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
      </div>
    </header>
  )
}
