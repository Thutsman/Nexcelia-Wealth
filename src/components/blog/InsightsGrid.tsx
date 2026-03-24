import { PostCard } from './PostCard'
import type { ContentItem } from '@/types/content'

interface InsightsGridProps {
  posts: ContentItem[]
  featuredPost?: ContentItem | null
  basePath: '/insights' | '/news'
  emptyMessage?: string
}

export function InsightsGrid({
  posts,
  featuredPost,
  basePath,
  emptyMessage = 'No articles found in this category.',
}: InsightsGridProps) {
  const gridPosts = featuredPost
    ? posts.filter((p) => p.id !== featuredPost.id)
    : posts

  return (
    <div>
      {/* Featured */}
      {featuredPost && (
        <div className="mb-10">
          <PostCard post={featuredPost} basePath={basePath} featured />
        </div>
      )}

      {/* Grid */}
      {gridPosts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gridPosts.map((post) => (
            <PostCard key={post.id} post={post} basePath={basePath} />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center">
          <p className="text-ivory-dim text-sm font-body">{emptyMessage}</p>
        </div>
      )}
    </div>
  )
}
