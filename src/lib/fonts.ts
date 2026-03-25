import { Playfair_Display, Didact_Gothic, EB_Garamond } from 'next/font/google'

export const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
})

export const didactGothic = Didact_Gothic({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-didact',
  display: 'swap',
})

export const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-eb-garamond',
  display: 'swap',
})
