import type { MetadataRoute } from 'next'
import { fetchContentSlugs } from '@/lib/content/mock'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://nexceliawealth.com'

  const [insightSlugs, newsSlugs] = await Promise.all([
    fetchContentSlugs('insight'),
    fetchContentSlugs('news'),
  ])

  const insightUrls: MetadataRoute.Sitemap = insightSlugs.map(({ slug }) => ({
    url: `${baseUrl}/insights/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const newsUrls: MetadataRoute.Sitemap = newsSlugs.map(({ slug }) => ({
    url: `${baseUrl}/news/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/insights`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/news`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...insightUrls,
    ...newsUrls,
  ]
}
