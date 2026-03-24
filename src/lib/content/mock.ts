import { MOCK_CONTENT } from '@/data/mockContent'
import type { ContentCategory, ContentItem, ContentType } from '@/types/content'

function byDateDesc(a: ContentItem, b: ContentItem) {
  return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
}

export async function fetchContent(type: ContentType): Promise<ContentItem[]> {
  return MOCK_CONTENT.filter((item) => item.type === type && item.status === 'published').sort(byDateDesc)
}

export async function fetchContentBySlug(type: ContentType, slug: string): Promise<ContentItem | null> {
  return (
    MOCK_CONTENT.find((item) => item.type === type && item.slug === slug && item.status === 'published') ?? null
  )
}

export async function fetchRelatedContent(
  type: ContentType,
  categorySlug: string | undefined,
  slug: string
): Promise<ContentItem[]> {
  if (!categorySlug) return []
  return MOCK_CONTENT.filter(
    (item) =>
      item.type === type &&
      item.status === 'published' &&
      item.slug !== slug &&
      item.category?.slug === categorySlug
  )
    .sort(byDateDesc)
    .slice(0, 3)
}

export async function fetchContentSlugs(type: ContentType): Promise<{ slug: string }[]> {
  return MOCK_CONTENT.filter((item) => item.type === type && item.status === 'published').map((item) => ({
    slug: item.slug,
  }))
}

export async function fetchContentCategories(type: ContentType): Promise<ContentCategory[]> {
  const categoryMap = new Map<string, ContentCategory>()

  for (const item of MOCK_CONTENT) {
    if (item.type !== type || item.status !== 'published' || !item.category) continue
    categoryMap.set(item.category.slug, item.category)
  }

  return Array.from(categoryMap.values()).sort((a, b) => a.title.localeCompare(b.title))
}
