import type { Config } from 'tailwindcss';

export default {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './data/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Courier New"', 'monospace'],
      },
      colors: {
        accent: '#8ecbfd',
        'accent-hover': '#8dc8f5',
        'photo-glow': '#8eccff',
        border: '#e5e5e5',
        muted: '#444444',
        'bg-about': '#f0f2f6',
      },
      maxWidth: {
        site: '1440px',
      },
      screens: {
        // Match existing 800px breakpoint
        md: '800px',
      },
    },
  },
  plugins: [],
} satisfies Config;
