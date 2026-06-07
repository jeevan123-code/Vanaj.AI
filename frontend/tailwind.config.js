/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        // Display: warm optical serif — botanical, editorial, premium.
        display: ['Fraunces', 'Georgia', 'serif'],
        // Body / UI: clean humanist grotesque.
        sans: ['"Hanken Grotesk"', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Warm paper backgrounds
        paper: '#FBFAF6',
        cloud: '#F3F1EA',
        // Ink / text
        ink: '#1A2620',
        slate: '#52605A',
        // Brand greens
        forest: {
          DEFAULT: '#27513B',
          deep: '#1C3B2B',
          soft: '#3C6B4F',
        },
        sage: '#8AA593',
        // Harvest accent
        gold: {
          DEFAULT: '#C28E2C',
          soft: '#E3C77E',
        },
        clay: '#A65A3A',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(26,38,32,0.04), 0 8px 24px -12px rgba(26,38,32,0.12)',
        lift: '0 4px 12px rgba(26,38,32,0.06), 0 24px 48px -20px rgba(26,38,32,0.22)',
        ring: '0 0 0 1px rgba(26,38,32,0.06)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.75rem',
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.9s cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-in': 'fade-in 1.2s ease both',
      },
    },
  },
  plugins: [],
}
