import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { PortableText } from '@portabletext/react'
import { fetchPostBySlug, fetchAllSlugs, fetchRelatedPosts } from '@/lib/sanity/fetch'
import { portableTextComponents } from '@/lib/sanity/portableText'
import { urlForImage } from '@/lib/sanity/image'
import { ArticleHeader } from '@/components/blog/ArticleHeader'
import { RelatedPosts } from '@/components/blog/RelatedPosts'
import { ReadingProgress } from '@/components/blog/ReadingProgress'
import type { SanityImage } from '@/types'

export const revalidate = 60

interface ArticlePageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = await fetchAllSlugs()
  return slugs.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await fetchPostBySlug(slug)
  if (!post) return { title: 'Article Not Found' }

  const imageUrl = post.coverImage
    ? urlForImage(post.coverImage as SanityImage, 1200, 630)
    : undefined

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

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params
  const post = await fetchPostBySlug(slug)
  if (!post) notFound()

  const relatedPosts = post.category?.title
    ? await fetchRelatedPosts(post.category.title, slug)
    : []

  const coverImageUrl = post.coverImage
    ? urlForImage(post.coverImage as SanityImage, 1440, 600)
    : null

  return (
    <>
      <ReadingProgress />

      <article style={{ background: 'var(--midnight)', minHeight: '100vh' }}>
        {/* Cover image hero */}
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
          {/* Back link */}
          <div className="pt-10 pb-6">
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 font-accent text-[0.6rem] tracking-widest uppercase text-ivory-dim hover:text-gold transition-colors"
            >
              ← Back to Insights
            </Link>
          </div>

          {/* Article header */}
          <ArticleHeader post={post} />

          {/* Article body */}
          <div className="article-body pb-16">
            {post.body && (
              <PortableText value={post.body as Parameters<typeof PortableText>[0]['value']} components={portableTextComponents} />
            )}
          </div>

          {/* Related posts */}
          <RelatedPosts posts={relatedPosts} />
        </div>
      </article>
    </>
  )
}
