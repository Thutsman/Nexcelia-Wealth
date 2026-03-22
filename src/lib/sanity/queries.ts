export const ALL_POSTS_QUERY = `
  *[_type == "post" && !(_id in path("drafts.**"))] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    featured,
    "coverImage": coverImage,
    "author": author->{ name, role, "photo": photo },
    "category": category->{ title, "slug": slug.current },
    seoTitle,
    seoDescription
  }
`

export const FEATURED_POST_QUERY = `
  *[_type == "post" && featured == true && !(_id in path("drafts.**"))] | order(publishedAt desc)[0] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    "coverImage": coverImage,
    "author": author->{ name, role },
    "category": category->{ title }
  }
`

export const POST_BY_SLUG_QUERY = `
  *[_type == "post" && slug.current == $slug && !(_id in path("drafts.**"))][0] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    body,
    featured,
    "coverImage": coverImage,
    "author": author->{ name, role, bio, "photo": photo },
    "category": category->{ title, "slug": slug.current },
    seoTitle,
    seoDescription
  }
`

export const ALL_SLUGS_QUERY = `
  *[_type == "post" && !(_id in path("drafts.**"))]{ "slug": slug.current }
`

export const POSTS_BY_CATEGORY_QUERY = `
  *[_type == "post" && category->title == $category && !(_id in path("drafts.**"))] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    "coverImage": coverImage,
    "author": author->{ name, role },
    "category": category->{ title }
  }
`

export const RELATED_POSTS_QUERY = `
  *[_type == "post" && category->title == $category && slug.current != $slug && !(_id in path("drafts.**"))] | order(publishedAt desc)[0...3] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    "coverImage": coverImage,
    "author": author->{ name },
    "category": category->{ title }
  }
`

export const ALL_CATEGORIES_QUERY = `
  *[_type == "category"] | order(title asc) { _id, title, "slug": slug.current }
`
