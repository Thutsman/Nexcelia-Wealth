interface OrganizationData {
  name: string
  url: string
  description: string
  address: {
    city: string
    country: string
  }
}

interface ArticleData {
  title: string
  description?: string
  url: string
  publishedAt: string
  authorName?: string
  imageUrl?: string
}

type JsonLdProps =
  | { type: 'Organization'; data: OrganizationData }
  | { type: 'Article'; data: ArticleData }

export function JsonLd(props: JsonLdProps) {
  let schema: Record<string, unknown>

  if (props.type === 'Organization') {
    schema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: props.data.name,
      url: props.data.url,
      description: props.data.description,
      address: {
        '@type': 'PostalAddress',
        addressLocality: props.data.address.city,
        addressCountry: props.data.address.country,
      },
    }
  } else {
    schema = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: props.data.title,
      description: props.data.description,
      url: props.data.url,
      datePublished: props.data.publishedAt,
      author: props.data.authorName
        ? { '@type': 'Person', name: props.data.authorName }
        : undefined,
      image: props.data.imageUrl,
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
