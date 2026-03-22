import { PostCard } from './PostCard'
import type { SanityPost } from '@/types'

interface InsightsGridProps {
  posts: SanityPost[]
  featuredPost?: SanityPost | null
}

export function InsightsGrid({ posts, featuredPost }: InsightsGridProps) {
  const gridPosts = featuredPost
    ? posts.filter((p) => p._id !== featuredPost._id)
    : posts

  return (
    <div>
      {/* Featured */}
      {featuredPost && (
        <div className="mb-10">
          <PostCard post={featuredPost} featured />
        </div>
      )}

      {/* Grid */}
      {gridPosts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gridPosts.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center">
          <p className="text-ivory-dim text-sm font-body">No articles found in this category.</p>
        </div>
      )}
    </div>
  )
}
