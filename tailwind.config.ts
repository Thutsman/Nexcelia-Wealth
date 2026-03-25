import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        midnight:    'var(--midnight)',
        navy:        'var(--navy)',
        'navy-mid':  'var(--navy-mid)',
        'navy-light':'var(--navy-light)',
        gold:        'var(--gold)',
        'gold-lt':   'var(--gold-lt)',
        'gold-pale': 'var(--gold-pale)',
        ivory:       'var(--ivory)',
        'ivory-dim': 'var(--ivory-dim)',
        'off-white': 'var(--white)',
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        body:    ['var(--font-eb-garamond)', 'Georgia', 'serif'],
        accent:  ['var(--font-didact)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, var(--gold) 0%, var(--gold-lt) 100%)',
        'dark-gradient': 'linear-gradient(180deg, var(--midnight) 0%, var(--navy) 100%)',
      },
    },
  },
  plugins: [],
}

export default config
