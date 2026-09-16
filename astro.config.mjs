import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

// GitHub Pages: set site to https://<user>.github.io and base to '/<repo>/'.
// Vercel/Netlify: leave base as '/'.
export default defineConfig({
  site: 'https://lorenzogaviani.it',
  base: '/',
  integrations: [react(), sitemap()],
  adapter: vercel(),
  i18n: {
    locales: ['it', 'en'],
    defaultLocale: 'it',
    routing: { prefixDefaultLocale: true }
  },
  // With the Vercel adapter this becomes a real 308, not a meta-refresh page.
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
