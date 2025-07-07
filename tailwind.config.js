/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#0f0f0f',
        cyan: {
          400: '#00ffff',
        },
        magenta: {
          400: '#ff00ff',
        },
        lime: {
          400: '#39ff14',
        },
        purple: {
          400: '#9400d3',
        },
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'Space Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};