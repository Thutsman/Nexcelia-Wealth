import Link from 'next/link'
import Image from 'next/image'
import { formatDate } from '@/lib/utils'
import { urlForImage } from '@/lib/sanity/image'
import type { SanityPost, SanityImage } from '@/types'

interface PostCardProps {
  post: SanityPost
  featured?: boolean
}

export function PostCard({ post, featured = false }: PostCardProps) {
  const href = `/insights/${post.slug.current}`
  const imageUrl = post.coverImage
    ? urlForImage(post.coverImage as SanityImage, featured ? 1200 : 600, featured ? 630 : 400)
    : null

  if (featured) {
    return (
      <Link href={href} className="group block">
        <div
          className="relative overflow-hidden"
          style={{ aspectRatio: '16/7', background: 'var(--navy-mid)' }}
        >
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={post.title}
              fill
              style={{ objectFit: 'cover', transition: 'transform 0.6s ease' }}
              className="group-hover:scale-105"
              sizes="100vw"
              priority
            />
          ) : (
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{ background: 'var(--navy-light)' }}
            >
              <span className="font-display text-4xl text-gold opacity-20">N</span>
            </div>
          )}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to top, rgba(7,11,18,0.85) 0%, rgba(7,11,18,0.2) 60%, transparent 100%)',
            }}
          />
          <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
            {post.category && (
              <span
                className="inline-block mb-4 px-3 py-1 font-accent text-[0.58rem] tracking-widest uppercase text-gold"
                style={{ border: '1px solid var(--border-bright)' }}
              >
                {post.category.title}
              </span>
            )}
            <h2 className="font-display text-3xl lg:text-4xl text-ivory mb-3 max-w-2xl group-hover:text-gold-lt transition-colors">
              {post.title}
            </h2>
            {post.excerpt && (
              <p className="text-ivory-dim text-sm font-body leading-relaxed max-w-xl mb-4 hidden lg:block">
                {post.excerpt}
              </p>
            )}
            <div className="flex items-center gap-4 text-ivory-dim text-xs font-body">
              {post.author && <span>{post.author.name}</span>}
              {post.author && <span>·</span>}
              <span>{formatDate(post.publishedAt)}</span>
              <span className="ml-auto text-gold group-hover:translate-x-1 transition-transform inline-block">
                Read →
              </span>
            </div>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link href={href} className="group block h-full">
      <div
        className="h-full flex flex-col"
        style={{ border: '1px solid var(--border)', background: 'var(--navy-mid)', transition: 'border-color 0.3s' }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-bright)' }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)' }}
      >
        {/* Image */}
        <div className="relative overflow-hidden" style={{ aspectRatio: '3/2', background: 'var(--navy-light)' }}>
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={post.title}
              fill
              style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
              className="group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-display text-4xl text-gold opacity-10">N</span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-6 gap-3">
          {post.category && (
            <span className="label-text text-[0.55rem]">{post.category.title}</span>
          )}
          <h3 className="font-display text-xl text-ivory group-hover:text-gold-lt transition-colors leading-snug">
            {post.title}
          </h3>
          {post.excerpt && (
            <p className="text-ivory-dim text-xs leading-relaxed font-body flex-1 line-clamp-3">
              {post.excerpt}
            </p>
          )}
          <div className="flex items-center justify-between mt-auto pt-4" style={{ borderTop: '1px solid var(--border)' }}>
            <span className="text-ivory-dim text-xs font-body">{formatDate(post.publishedAt)}</span>
            <span className="text-gold text-xs group-hover:translate-x-1 transition-transform inline-block">→</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
