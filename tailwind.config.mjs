/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Paleta Corporativa Luisa Cofrades
        'brand-graphite': '#374151',
        'brand-aqua': {
          DEFAULT: '#289E99',
          hover: '#238B86',
          dark: '#1C726E',
          light: '#E6F6F5',
          50: '#F0F9F9',
          100: '#D5F0EE',
          200: '#ACE1DE',
          300: '#7DC8C4',
          400: '#4EB0AC',
          500: '#289E99',
          600: '#238B86',
          700: '#1C726E',
          800: '#175956',
          900: '#12413F',
        },
        'accent-sky': '#7DD3FC',
        'accent-fuchsia': '#D946EF',
        'accent-violet': '#8B5CF6',
        'accent-mint': '#6EE7B7',
        'bg-base': '#FFFFFF',

        // Mapeos de compatibilidad con tokens del diseño
        brand: {
          DEFAULT: '#289E99',
          50: '#F0F9F9',
          100: '#E6F6F5',
          200: '#ACE1DE',
          300: '#7DC8C4',
          400: '#4EB0AC',
          500: '#289E99',
          600: '#238B86',
          700: '#1C726E',
          800: '#175956',
          900: '#12413F',
        },
        sand: {
          50: '#FFFFFF',
          100: '#F9FAFB',
          200: '#F3F4F6',
          300: '#E5E7EB',
          400: '#D1D5DB',
          500: '#9CA3AF',
          900: '#111827',
        },
        slateText: {
          base: '#374151',
          muted: '#6B7280',
          dark: '#1F2937',
        },
        calmAccent: {
          DEFAULT: '#289E99',
          hover: '#238B86',
          light: '#E6F6F5'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans Variable"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft-elevation': '0 4px 20px -2px rgba(55, 65, 81, 0.04)',
        'card-hover': '0 12px 32px -4px rgba(40, 158, 153, 0.12)',
        'card-subtle': '0 2px 10px rgba(0, 0, 0, 0.03)',
      }
    },
  },
  plugins: [],
};
