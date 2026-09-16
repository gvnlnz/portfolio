import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// GitHub Pages: set site to https://<user>.github.io and base to '/<repo>/'.
// Vercel/Netlify: leave base as '/'.
export default defineConfig({
  site: 'https://lorenzogaviani.it',
  base: '/',
  integrations: [react(), sitemap()],
  i18n: {
    locales: ['it', 'en'],
    defaultLocale: 'it',
    routing: { prefixDefaultLocale: true }
  },
  // Emits a meta-refresh page at / for static hosts; on Vercel it becomes a
  // real 301.
  redirects: { '/': '/it/' },
  build: { inlineStylesheets: 'auto' },
  // Astro islands load the React renderer by direct URL, which Vite's
  // dependency scanner never crawls — without this hint it serves
  // react-dom/client's raw CJS instead of a pre-bundled ESM version,
  // breaking hydration with "does not provide an export named 'createRoot'".
  vite: {
    optimizeDeps: {
      include: ['react-dom/client']
    }
  }
});
