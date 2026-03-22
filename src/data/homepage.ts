import type { Stat, PhilosophyValue, FocusArea, Principal, OfficeLocation, InvestmentPrinciple } from '@/types'

export const HERO_STATS: Stat[] = [
  { value: '3', label: 'Continents' },
  { value: '18+', label: 'Years in Practice' },
  { value: '5', label: 'Focus Pillars' },
  { value: '100%', label: 'Independent' },
]

export const PHILOSOPHY_VALUES: PhilosophyValue[] = [
  {
    title: 'Generational Perspective',
    body: 'We think in decades, not quarters. Every allocation decision is evaluated against its impact on the next generation of family stakeholders.',
  },
  {
    title: 'Contextual Integrity',
    body: 'African markets reward those who understand local context. Our advisory is grounded in deep regional knowledge and lived experience.',
  },
  {
    title: 'Analytical Discipline',
    body: 'Rigorous quantitative and qualitative frameworks underpin every recommendation. We follow evidence, not sentiment or fashion.',
  },
  {
    title: 'Responsible Stewardship',
    body: 'Capital carries obligation. We integrate ESG considerations not as compliance but as genuine fiduciary responsibility.',
  },
]

export const FOCUS_AREAS: FocusArea[] = [
  {
    label: 'Real Estate',
    number: '01',
    icon: 'building',
    body: 'Strategic acquisition and development of prime commercial and residential assets across sub-Saharan Africa and select European markets.',
    tag: 'Real Assets',
    accentColor: '#B8965A',
    borderColor: 'rgba(184,150,90,0.7)',
  },
  {
    label: 'Hospitality',
    number: '02',
    icon: 'star',
    body: 'Investment in boutique lodge, hotel, and experiential hospitality ventures that capitalise on Africa\'s growing tourism sector.',
    tag: 'Lifestyle Assets',
    accentColor: '#C06B4A',
    borderColor: 'rgba(192,107,74,0.7)',
  },
  {
    label: 'Fintech',
    number: '03',
    icon: 'zap',
    body: 'Equity participation in emerging fintech platforms addressing financial inclusion and cross-border payment infrastructure across Africa.',
    tag: 'Digital Finance',
    accentColor: '#6B5DC4',
    borderColor: 'rgba(107,93,196,0.7)',
  },
  {
    label: 'AI & Technology',
    number: '04',
    icon: 'cpu',
    body: 'Selective venture-stage exposure to artificial intelligence infrastructure and applied machine learning platforms in healthcare and logistics.',
    tag: 'Deep Tech',
    accentColor: '#2CBFBF',
    borderColor: 'rgba(44,191,191,0.7)',
  },
  {
    label: 'Conservation',
    number: '05',
    icon: 'leaf',
    body: 'Capital allocation to land conservation, wildlife corridors, and nature-based carbon credit projects in Southern and East Africa.',
    tag: 'Impact',
    accentColor: '#3E8C5A',
    borderColor: 'rgba(62,140,90,0.7)',
  },
]

export const PRINCIPALS: Principal[] = [
  {
    name: 'Dr. Tadiwanashe Muganyi',
    role: 'Office Principal & Chief Investment Officer',
    subtitle: 'Economist · Financial Regulation · Global Central Banking',
    image: '/images/Tadiwanashe.jpeg',
    bio1:
      'Dr. Tadiwanashe Muganyi is the founding principal of Nexcelia Wealth. His academic formation was undertaken at the University of Warwick, in a programme conducted in collaboration with the Bank of England, focused on global central banking and financial regulation — a discipline that examines how monetary systems function across jurisdictions and how regulatory frameworks shape the behaviour of capital markets.',
    bio2:
      'His professional career has included periods in The Hague, where he engaged with European multilateral institutions, and in Shanghai, where he was directly exposed to the financial innovation and technology ecosystem that has reshaped global commerce. Dr. Muganyi has also published research in fintech, examining how digital financial infrastructure interacts with regulatory environments in emerging markets. He returned to Zimbabwe with the intention of applying this background to the stewardship of the family\'s long-term capital interests.',
    credentials: [
      { bold: 'University of Warwick / Bank of England', text: ' — Global Central Banking and Financial Regulation' },
      { bold: 'Research specialisation in fintech regulatory frameworks', text: ', monetary policy transmission, and digital financial infrastructure' },
      { bold: 'The Hague, Netherlands', text: ' — International institutional experience in European multilateral policy environments' },
      { bold: 'Shanghai, China', text: ' — Direct exposure to Asia\'s frontier technology and capital markets ecosystem' },
      { bold: 'Published researcher in fintech, digital assets, and African financial regulation', text: '' },
    ],
    geographyTags: ['Bulawayo, Zimbabwe', 'The Hague, NL', 'Shanghai, CN', 'Warwick, UK'],
  },
  {
    name: 'Jamila Van Kooij',
    role: 'Co-Principal & Technology Investment Director',
    subtitle: 'Technology Markets · Shanghai · Van Kooij Heritage',
    image: '/images/Jamila.jpeg',
    bio1:
      'Jamila Van Kooij is Co-Principal of Nexcelia Wealth and directs the office\'s engagement with technology investment, with particular responsibility for its artificial intelligence mandate. Her professional background was shaped by years of direct engagement with Shanghai\'s technology sector — an environment characterised by rapid iteration, significant capital flows, and the emergence of companies that have since become consequential at a global scale.',
    bio2:
      'This experience informs a measured view of what AI and technology investment means in an emerging market context: where the opportunity lies, where the risk is underappreciated, and where Western technology frameworks do not straightforwardly apply. As a member of the Van Kooij family, she also maintains the office\'s connection to the Dutch institutional tradition — relevant both as a point of cultural reference and as a practical matter of European network and structure.',
    credentials: [
      { bold: 'Shanghai, China', text: ' — Professional formation in one of the world\'s most active technology and venture capital markets' },
      { bold: 'Operational familiarity with AI and technology company dynamics', text: ', from early-stage development through scaling and market entry' },
      { bold: 'Van Kooij family', text: ' — Dutch institutional heritage; ongoing European network and structural relationships' },
      { bold: 'Investment focus: AI applications in emerging markets', text: ', technology infrastructure, and cross-border capital flows between Asia and Africa' },
    ],
    geographyTags: ['Bulawayo, Zimbabwe', 'Shanghai, CN', 'Netherlands'],
  },
]

export const OFFICE_LOCATIONS: OfficeLocation[] = [
  { city: 'Bulawayo', country: 'Zimbabwe', role: 'Principal Office (HQ)', isHQ: true },
  { city: 'The Hague', country: 'Netherlands', role: 'European Operations' },
  { city: 'Shanghai', country: "People's Republic of China", role: 'Asia-Pacific Desk' },
  { city: 'Johannesburg', country: 'South Africa', role: 'Regional Advisory' },
  { city: 'London / Warwick', country: 'United Kingdom', role: 'Research & Liaison' },
]

export const INVESTMENT_PRINCIPLES: InvestmentPrinciple[] = [
  {
    number: '01',
    title: 'Capital Preservation First',
    body: 'Protecting wealth across generations requires prioritising the avoidance of permanent capital loss above all return considerations. We construct portfolios with asymmetric downside protection.',
  },
  {
    number: '02',
    title: 'Asymmetric Return Capture',
    body: 'We seek positions where the potential upside substantially outweighs measured downside. This requires patience, contrarian thinking, and willingness to act when others are paralysed by uncertainty.',
  },
  {
    number: '03',
    title: 'Concentrated Conviction',
    body: 'Diversification is the appropriate response to ignorance. Where we have deep insight and strong conviction, we build meaningful positions rather than diluting returns through excessive diversification.',
  },
  {
    number: '04',
    title: 'Long Horizon Advantage',
    body: 'Our family office structure confers the most valuable edge in investing: the ability to hold through cycles, provide patient capital to illiquid opportunities, and compound without forced liquidity events.',
  },
]
