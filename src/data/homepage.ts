import type { Stat, PhilosophyValue, FocusArea, Principal, OfficeLocation, InvestmentPrinciple } from '@/types'

export const HERO_STATS: Stat[] = [
  { value: '7', label: 'Focus Sectors' },
  { value: '3', label: 'Global Offices' },
  { value: '10+', label: 'Years Experience' },
  { value: 'SADC', label: 'Regional Coverage' },
]

export const PHILOSOPHY_VALUES: PhilosophyValue[] = [
  {
    title: 'Presence Over Distance',
    body: 'On-the-ground intelligence across Southern Africa provides insight no remote investor can replicate. We invest where we are present.',
  },
  {
    title: 'Institutional Architecture',
    body: 'Our methods are shaped by central banking and global capital market training, then adapted to frontier-market execution.',
  },
  {
    title: 'Long-Duration Conviction',
    body: 'We take positions with structural patience. Southern Africa is a decade-scale thesis and we size and pace capital accordingly.',
  },
  {
    title: 'ESG as Architecture',
    body: 'Environmental and governance factors are embedded at underwriting stage, not layered on later for compliance optics.',
  },
]

export const FOCUS_AREAS: FocusArea[] = [
  {
    label: 'Artificial Intelligence',
    number: '01',
    icon: 'cpu',
    body: 'Applied AI for African markets: agriculture optimisation, language intelligence, and infrastructure automation.',
    tag: 'AI Systems',
    accentColor: '#4A9EBF',
    borderColor: 'rgba(74,158,191,0.65)',
  },
  {
    label: 'Financial Technology',
    number: '02',
    icon: 'zap',
    body: 'Cross-border payments, regtech, open-banking rails, and digital money infrastructure across SADC.',
    tag: 'Fintech',
    accentColor: '#B8962E',
    borderColor: 'rgba(184,150,46,0.65)',
  },
  {
    label: 'Mining & Resources',
    number: '03',
    icon: 'building',
    body: 'Lithium, platinum, cobalt, and critical minerals aligned to industrial demand and energy transition.',
    tag: 'Resources',
    accentColor: '#C4862E',
    borderColor: 'rgba(196,134,46,0.65)',
  },
  {
    label: 'Real Estate',
    number: '04',
    icon: 'building',
    body: 'Commercial, mixed-use, and logistics-linked assets in high-growth Southern African corridors.',
    tag: 'Built Assets',
    accentColor: '#9A9A9A',
    borderColor: 'rgba(154,154,154,0.55)',
  },
  {
    label: 'Digital Infrastructure',
    number: '05',
    icon: 'cpu',
    body: 'Data centres, fibre corridors, and cloud infrastructure enabling durable digital growth.',
    tag: 'Infrastructure',
    accentColor: '#7C8BBA',
    borderColor: 'rgba(124,139,186,0.6)',
  },
  {
    label: 'Energy Transition',
    number: '06',
    icon: 'leaf',
    body: 'Solar, hydro, and transition technologies serving security-of-supply and decarbonisation goals.',
    tag: 'Energy',
    accentColor: '#7DA46F',
    borderColor: 'rgba(125,164,111,0.6)',
  },
  {
    label: 'Tourism & Conservation',
    number: '07',
    icon: 'star',
    body: 'High-value eco-tourism and conservation finance models built for local resilience and global demand.',
    tag: 'Conservation',
    accentColor: '#B05E5E',
    borderColor: 'rgba(176,94,94,0.6)',
  },
]

export const PRINCIPALS: Principal[] = [
  {
    name: 'Dr. Tadiwanashe Muganyi',
    role: 'Managing Principal · Founder',
    subtitle: 'MSc Global Central Banking & Financial Regulation - Warwick Business School in collaboration with Bank of England · PhD FinTech',
    image: '/images/Tadiwanashe.jpeg',
    bio1:
      "Over a decade of experience spanning Shanghai, The Hague, and Southern Africa. Dr. Muganyi architects the firm's investment strategy at the intersection of central banking theory and emerging market practice.",
    bio2:
      "His approach blends institutional rigor with regional context, applying global financial architecture to opportunities shaping Southern Africa's next chapter.",
    credentials: [
      { text: 'MSc Global Central Banking & Financial Regulation' },
      { text: 'Warwick Business School in collaboration with Bank of England' },
      { text: 'PhD FinTech' },
    ],
    geographyTags: ['Harare', 'Shanghai', 'The Hague'],
  },
  {
    name: 'Jamila van Kooij',
    role: 'Technology Principal',
    subtitle: 'Technology Strategy · Digital Systems Architecture · China & Netherlands Markets',
    image: '/images/Jamila.jpeg',
    bio1:
      "Jamila van Kooij's expertise is rooted in the technology corridors of Shanghai and Amsterdam. Her mandate spans AI, fintech, and digital infrastructure.",
    bio2:
      'She applies rigorous technical due diligence to opportunities others lack the capability to evaluate, combining Dutch institutional precision with Chinese innovation dynamism.',
    credentials: [
      { text: 'Technology strategy and systems architecture' },
      { text: 'AI, fintech, and digital infrastructure due diligence' },
      { text: 'China and Netherlands market execution context' },
    ],
    geographyTags: ['Amsterdam', 'Shanghai', 'Harare'],
  },
  {
    name: 'Thulani Dube',
    role: 'Infrastructure & Real Estate Principal',
    subtitle: 'Engineering · Real Estate Development · Infrastructure Technology · Software Systems',
    bio1:
      "Thulani Dube's engineering foundation gives the office a discipline pure finance rarely commands: the ability to look beyond the pro forma to physical delivery reality.",
    bio2:
      'He brings deep experience in real estate development, infrastructure execution, and software systems across Southern Africa.',
    credentials: [
      { text: 'Engineering and build-delivery lens for capital decisions' },
      { text: 'Real estate development and infrastructure execution' },
      { text: 'Software systems and implementation discipline' },
    ],
    geographyTags: ['Southern Africa', 'SADC'],
  },
]

export const OFFICE_LOCATIONS: OfficeLocation[] = [
  { city: 'Harare', country: 'Zimbabwe', role: 'Principal Office (HQ)', isHQ: true },
  { city: 'Shanghai', country: 'China', role: 'Asia Operations' },
  { city: 'The Hague', country: 'Netherlands', role: 'Europe Operations' },
]

export const INVESTMENT_PRINCIPLES: InvestmentPrinciple[] = [
  {
    number: '01',
    title: 'Presence Over Distance',
    body: 'Our principals operate in the markets we underwrite, reducing informational lag and improving execution quality.',
  },
  {
    number: '02',
    title: 'Institutional Architecture',
    body: 'We apply global frameworks from central banking and institutional finance to real-world frontier market opportunities.',
  },
  {
    number: '03',
    title: 'Long Duration Conviction',
    body: 'Capital is deployed with structural patience and disciplined reserve policy to withstand macro volatility.',
  },
  {
    number: '04',
    title: 'ESG as Architecture',
    body: 'Environmental and governance frameworks are embedded in origination, diligence, and post-investment oversight.',
  },
]
