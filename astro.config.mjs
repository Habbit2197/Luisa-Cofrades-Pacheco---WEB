import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://luisacofrades.com',
  output: 'static',
  integrations: [
    tailwind({
      applyBaseStyles: true,
    }),
    react()
  ],
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  },
  vite: {
    ssr: {
      noExternal: ['framer-motion']
    }
  }
});
