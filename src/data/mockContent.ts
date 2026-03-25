import type { ContentAuthor, ContentCategory, ContentItem } from '@/types/content'

const authors: ContentAuthor[] = [
  { id: 'author-1', name: 'Tendai Ncube', role: 'Managing Principal' },
  { id: 'author-2', name: 'Arianna Vos', role: 'Principal, Europe' },
  { id: 'author-3', name: 'Research Desk', role: 'Strategy & Allocation' },
]

const categories: ContentCategory[] = [
  { id: 'cat-1', title: 'AI & Financial Technology', slug: 'ai-financial-technology', type: 'insight' },
  { id: 'cat-2', title: 'Mining & Resources', slug: 'mining-resources', type: 'insight' },
  { id: 'cat-5', title: 'Tourism & Conservation', slug: 'tourism-conservation', type: 'insight' },
  { id: 'cat-3', title: 'Markets', slug: 'markets', type: 'news' },
  { id: 'cat-4', title: 'Firm Updates', slug: 'firm-updates', type: 'news' },
]

export const MOCK_CONTENT: ContentItem[] = [
  {
    id: 'insight-1',
    type: 'insight',
    status: 'published',
    title: "Africa's $16.5 Billion AI Horizon",
    slug: 'africa-ai-horizon-2030',
    excerpt:
      'Africa is projected to sustain one of the fastest AI growth trajectories globally through 2030, with meaningful momentum in the SADC corridor.',
    publishedAt: '2026-02-10T08:00:00.000Z',
    featured: true,
    author: authors[0],
    category: categories[2],
    body: [
      'AI deployment in African markets is increasingly shifting from pilot projects to infrastructure-grade systems.',
      'Use cases in language processing, agritech optimisation, and financial services automation are proving commercially viable.',
      'For capital allocators, the differentiator is local deployment context, not generic global AI narratives.',
    ],
  },
  {
    id: 'insight-2',
    type: 'insight',
    status: 'published',
    title: "Zimbabwe's Mining Boom: The Mineral Story Reshaping Regional Capital",
    slug: 'zimbabwe-mining-boom-mineral-story',
    excerpt:
      'Critical minerals and accelerating project finance are repositioning Zimbabwe in global transition supply chains.',
    publishedAt: '2026-01-22T08:00:00.000Z',
    author: authors[2],
    category: categories[1],
    body: [
      'Lithium, platinum, and associated infrastructure investment are compounding into a multi-year industrial cycle.',
      'Investor edge increasingly depends on permitting intelligence, logistics realism, and ESG execution quality.',
    ],
  },
  {
    id: 'insight-3',
    type: 'insight',
    status: 'published',
    title: 'Tourism and Conservation Capital in Southern Africa',
    slug: 'tourism-conservation-capital-southern-africa',
    excerpt:
      'Conservation-linked tourism is emerging as a defensible, hard-asset adjacency with durable foreign-currency demand.',
    publishedAt: '2025-12-15T08:00:00.000Z',
    author: authors[1],
    category: categories[0],
    body: [
      'Destination quality and conservation stewardship are becoming core price drivers in regional tourism economics.',
      'Well-governed projects can align community outcomes with institutional return requirements.',
    ],
  },
  {
    id: 'news-1',
    type: 'news',
    status: 'published',
    title: 'Nexcelia Opens Advisory Operations in The Hague',
    slug: 'nexcelia-opens-advisory-operations-the-hague',
    excerpt:
      'The new office expands our cross-border structuring and governance support for internationally active families.',
    publishedAt: '2026-03-02T08:00:00.000Z',
    featured: true,
    author: authors[1],
    category: categories[3],
    body: [
      'Nexcelia Wealth has expanded its European presence with advisory operations in The Hague.',
      'The office will support governance advisory, structuring strategy, and client coordination across EU jurisdictions.',
    ],
  },
  {
    id: 'news-2',
    type: 'news',
    status: 'published',
    title: 'Quarterly Market Bulletin: Global Risk Regimes Remain Elevated',
    slug: 'quarterly-market-bulletin-global-risk-regimes-elevated',
    excerpt:
      'Our latest bulletin highlights rates volatility, energy transitions, and private market repricing dynamics.',
    publishedAt: '2026-02-26T08:00:00.000Z',
    author: authors[2],
    category: categories[2],
    body: [
      'Macro dispersion remains wide, requiring tighter scenario design and disciplined rebalancing thresholds.',
      'In this cycle, governance quality in portfolio decision-making is a larger differentiator than tactical prediction.',
    ],
  },
  {
    id: 'news-3',
    type: 'news',
    status: 'published',
    title: 'Conservation Finance Program Expands Across Southern Africa',
    slug: 'conservation-finance-program-expands-southern-africa',
    excerpt:
      'The initiative adds two new projects aligned with long-horizon stewardship and measurable ecological outcomes.',
    publishedAt: '2026-01-30T08:00:00.000Z',
    author: authors[0],
    category: categories[3],
    body: [
      'Nexcelia has expanded its conservation finance participation through partnerships in two additional territories.',
      'The program combines investment discipline with transparent impact reporting for participating families.',
    ],
  },
]
