/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Tono principal: Salvia terapéutico (equilibrio, sosiego, regeneración cognitiva)
        brand: {
          50: '#F4F7F5',
          100: '#E6EFEA',
          200: '#C8DDD0',
          300: '#A4C6B1',
          400: '#7FA88F',
          500: '#5F8E72',
          600: '#48715A',
          700: '#355443',
          800: '#23392E',
          900: '#14221B',
        },
        // Tono arena/lino: calidez humana y cercanía empática
        sand: {
          50: '#FAF8F5',
          100: '#F3EEE5',
          200: '#E7DDCB',
          300: '#D6C5AA',
          400: '#C0A987',
          500: '#A48B66',
          900: '#3D352A',
        },
        // Textos y contrastes clínicos de alta legibilidad
        slateText: {
          base: '#2D3748',
          muted: '#64748B',
          dark: '#1A202C',
        },
        // Acento terracota suave (vitalidad, calidez emocional para CTAs secundarios)
        calmAccent: {
          DEFAULT: '#C97A63',
          hover: '#B56751',
          light: '#F8ECE8'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans Variable"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft-elevation': '0 10px 30px -10px rgba(45, 55, 72, 0.07)',
        'card-hover': '0 20px 40px -15px rgba(95, 142, 114, 0.15)',
        'card-subtle': '0 4px 20px -2px rgba(0, 0, 0, 0.04)',
      }
    },
  },
  plugins: [],
};

