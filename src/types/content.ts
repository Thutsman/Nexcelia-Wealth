export type ContentType = 'insight' | 'news'

export type ContentStatus = 'draft' | 'published'

export interface ContentAuthor {
  id: string
  name: string
  role?: string
}

export interface ContentCategory {
  id: string
  title: string
  slug: string
  type: ContentType
}

export interface ContentItem {
  id: string
  type: ContentType
  status: ContentStatus
  title: string
  slug: string
  excerpt: string
  publishedAt: string
  featured?: boolean
  coverImageUrl?: string
  author?: ContentAuthor
  category?: ContentCategory
  body: string[]
  seoTitle?: string
  seoDescription?: string
}
