import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { fetchContentBySlug, fetchContentSlugs, fetchRelatedContent } from '@/lib/content/mock'
import { ArticleHeader } from '@/components/blog/ArticleHeader'
import { RelatedPosts } from '@/components/blog/RelatedPosts'
import { ReadingProgress } from '@/components/blog/ReadingProgress'

export const revalidate = 60

interface NewsArticlePageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = await fetchContentSlugs('news')
  return slugs.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: NewsArticlePageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await fetchContentBySlug('news', slug)
  if (!post) return { title: 'News Item Not Found' }

  const imageUrl = post.coverImageUrl

  return {
    title: post.seoTitle ?? post.title,
    description: post.seoDescription ?? post.excerpt,
    openGraph: {
      type: 'article',
      title: post.seoTitle ?? post.title,
      description: post.seoDescription ?? post.excerpt,
      publishedTime: post.publishedAt,
      authors: post.author ? [post.author.name] : undefined,
      images: imageUrl ? [{ url: imageUrl, width: 1200, height: 630 }] : undefined,
    },
  }
}

export default async function NewsArticlePage({ params }: NewsArticlePageProps) {
  const { slug } = await params
  const post = await fetchContentBySlug('news', slug)
  if (!post) notFound()

  const relatedPosts = post.category?.slug
    ? await fetchRelatedContent('news', post.category.slug, slug)
    : []

  const coverImageUrl = post.coverImageUrl ?? null

  return (
    <>
      <ReadingProgress />

      <article style={{ background: 'var(--midnight)', minHeight: '100vh' }}>
        {coverImageUrl && (
          <div
            className="relative w-full"
            style={{ aspectRatio: '21/8', background: 'var(--navy-mid)' }}
          >
            <Image
              src={coverImageUrl}
              alt={post.title}
              fill
              style={{ objectFit: 'cover' }}
              sizes="100vw"
              priority
            />
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(to bottom, transparent 40%, var(--midnight) 100%)',
              }}
            />
          </div>
        )}

        <div className="container-wide max-w-4xl mx-auto">
          <div className="pt-10 pb-6">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 font-accent text-[0.6rem] tracking-widest uppercase text-ivory-dim hover:text-gold transition-colors"
            >
              ← Back to News
            </Link>
          </div>

          <ArticleHeader post={post} />

          <div className="article-body pb-16">
            {post.body.map((paragraph, index) => (
              <p key={`${post.id}-paragraph-${index}`} className="text-body mb-6">
                {paragraph}
              </p>
            ))}
          </div>

          <RelatedPosts posts={relatedPosts} basePath="/news" title="Related News" />
        </div>
      </article>
    </>
  )
}
