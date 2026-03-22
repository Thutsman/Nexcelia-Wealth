import { client } from './client'
import {
  ALL_POSTS_QUERY,
  POST_BY_SLUG_QUERY,
  ALL_SLUGS_QUERY,
  RELATED_POSTS_QUERY,
  ALL_CATEGORIES_QUERY,
} from './queries'
import type { SanityPost } from '@/types'

export async function fetchPosts(): Promise<SanityPost[]> {
  try {
    return await client.fetch(ALL_POSTS_QUERY)
  } catch {
    return []
  }
}

export async function fetchPostBySlug(slug: string): Promise<SanityPost | null> {
  try {
    return await client.fetch(POST_BY_SLUG_QUERY, { slug })
  } catch {
    return null
  }
}

export async function fetchAllSlugs(): Promise<{ slug: string }[]> {
  try {
    return await client.fetch(ALL_SLUGS_QUERY)
  } catch {
    return []
  }
}

export async function fetchRelatedPosts(category: string, slug: string): Promise<SanityPost[]> {
  try {
    return await client.fetch(RELATED_POSTS_QUERY, { category, slug })
  } catch {
    return []
  }
}

export async function fetchCategories(): Promise<{ _id: string; title: string; slug: string }[]> {
  try {
    return await client.fetch(ALL_CATEGORIES_QUERY)
  } catch {
    return []
  }
}
