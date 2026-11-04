import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// Dominio provisional Cloudflare Workers (fácilmente sustituible por el dominio final)
export const SITE_URL = 'https://luisa-cofrades-pacheco---web.javier-barmont97.workers.dev';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
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
