/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FFFEFA',
          100: '#FFFDF5',
          200: '#FDF7EB',
          300: '#FBF0DD',
          400: '#F5E4C4',
        },
        maroon: {
          50: '#FAF0F1',
          100: '#F5DEE1',
          200: '#EABEC3',
          300: '#D7949C',
          400: '#BF5E6B',
          500: '#9B1B2A',
          600: '#800000', // Traditional Primary Maroon
          700: '#6B0000',
          800: '#520000',
          900: '#3D0000',
          950: '#260000',
        },
        gold: {
          50: '#FCF9ED',
          100: '#F8F1D2',
          200: '#F0DF9F',
          300: '#E7CC6C',
          400: '#DCB841',
          500: '#D4AF37', // Royal Gold
          600: '#BA9422',
          700: '#947217',
          800: '#755815',
          900: '#5C4413',
        },
        darkgreen: {
          50: '#F0F7F4',
          100: '#DBEDE3',
          200: '#B6DCC7',
          300: '#8AC3A4',
          400: '#58A37E',
          500: '#2E8058',
          600: '#1F6744',
          700: '#1B4D3E', // Traditional Temple Dark Green
          800: '#143C30',
          900: '#0E2C23',
        },
        darkbrown: {
          50: '#F7F4F2',
          100: '#ECE4E0',
          200: '#DAC6BF',
          300: '#C2A298',
          400: '#A47B70',
          500: '#855B50',
          600: '#6A443B',
          700: '#54342C',
          800: '#3D221B', // Dark Brown Text
          900: '#2A1611',
          950: '#1D0D09',
        }
      },
      fontFamily: {
        serif: ['Cinzel', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'gold-sm': '0 2px 10px rgba(212, 175, 55, 0.15)',
        'gold-md': '0 4px 20px rgba(212, 175, 55, 0.25)',
        'gold-lg': '0 8px 30px rgba(212, 175, 55, 0.35)',
        'maroon-sm': '0 2px 10px rgba(128, 0, 0, 0.15)',
        'maroon-md': '0 4px 20px rgba(128, 0, 0, 0.22)',
      }
    },
  },
  plugins: [],
};

