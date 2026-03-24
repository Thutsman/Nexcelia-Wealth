import type { ContentAuthor, ContentCategory, ContentItem } from '@/types/content'

const authors: ContentAuthor[] = [
  { id: 'author-1', name: 'Tendai Ncube', role: 'Managing Principal' },
  { id: 'author-2', name: 'Arianna Vos', role: 'Principal, Europe' },
  { id: 'author-3', name: 'Research Desk', role: 'Strategy & Allocation' },
]

const categories: ContentCategory[] = [
  { id: 'cat-1', title: 'Wealth Governance', slug: 'wealth-governance', type: 'insight' },
  { id: 'cat-2', title: 'Portfolio Strategy', slug: 'portfolio-strategy', type: 'insight' },
  { id: 'cat-3', title: 'Markets', slug: 'markets', type: 'news' },
  { id: 'cat-4', title: 'Firm Updates', slug: 'firm-updates', type: 'news' },
]

export const MOCK_CONTENT: ContentItem[] = [
  {
    id: 'insight-1',
    type: 'insight',
    status: 'published',
    title: 'Designing Family Governance for Multi-Generation Continuity',
    slug: 'family-governance-multi-generation-continuity',
    excerpt:
      'A practical framework for balancing stewardship, accountability, and decision velocity in complex family enterprises.',
    publishedAt: '2026-02-10T08:00:00.000Z',
    featured: true,
    author: authors[0],
    category: categories[0],
    body: [
      'Families that endure across generations tend to institutionalize principles before they institutionalize structures.',
      'The first governance layer is clarity of purpose: defining what capital is for, what risks are acceptable, and what legacy obligations are non-negotiable.',
      'Once purpose is explicit, councils and committees can be built to preserve both discipline and trust while avoiding bureaucratic drag.',
    ],
  },
  {
    id: 'insight-2',
    type: 'insight',
    status: 'published',
    title: 'Strategic Liquidity: Why Optionality Outperforms Certainty',
    slug: 'strategic-liquidity-optionality',
    excerpt:
      'Liquidity is not idle capital; it is strategic capacity that protects downside and funds high-conviction opportunities.',
    publishedAt: '2026-01-22T08:00:00.000Z',
    author: authors[2],
    category: categories[1],
    body: [
      'In volatile markets, optionality has measurable value. Families with deliberate liquidity bands can deploy with less emotional bias.',
      'A tiered liquidity architecture improves response time and preserves strategic freedom during dislocations.',
    ],
  },
  {
    id: 'insight-3',
    type: 'insight',
    status: 'published',
    title: 'Cross-Border Structuring in a Fragmented Regulatory Landscape',
    slug: 'cross-border-structuring-fragmented-regulatory-landscape',
    excerpt:
      'Jurisdiction selection should follow governance and operating reality, not tax headlines.',
    publishedAt: '2025-12-15T08:00:00.000Z',
    author: authors[1],
    category: categories[0],
    body: [
      'A durable structure reflects control rights, reporting obligations, and succession pathways across jurisdictions.',
      'The most resilient setups prioritize legal clarity and administrative reliability before optimization.',
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
