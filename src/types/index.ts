export interface NavItem {
  label: string
  href: string
}

export interface Stat {
  value: string
  label: string
}

export interface PhilosophyValue {
  title: string
  body: string
}

export interface FocusArea {
  label: string
  number: string
  icon: string
  body: string
  tag: string
  accentColor: string
  borderColor: string
}

export interface Credential {
  bold?: string
  text: string
}

export interface Principal {
  name: string
  role: string
  subtitle: string
  image?: string
  bio1: string
  bio2: string
  credentials: Credential[]
  geographyTags: string[]
}

export interface OfficeLocation {
  city: string
  country: string
  role: string
  isHQ?: boolean
}

export interface InvestmentPrinciple {
  number: string
  title: string
  body: string
}

export interface ContactFormData {
  firstName: string
  lastName: string
  organisation: string
  email: string
  enquiryType: string
  message: string
}

export interface SanityImage {
  asset: {
    _ref: string
    _type: string
  }
  alt?: string
  hotspot?: {
    x: number
    y: number
  }
}

export interface SanityAuthor {
  name: string
  role: string
  bio?: string
  photo?: SanityImage
}

export interface SanityCategory {
  title: string
  slug?: { current: string }
}

export interface SanityPost {
  _id: string
  title: string
  slug: { current: string }
  excerpt: string
  publishedAt: string
  featured?: boolean
  coverImage?: SanityImage
  author?: SanityAuthor
  category?: SanityCategory
  body?: unknown[]
  seoTitle?: string
  seoDescription?: string
}
