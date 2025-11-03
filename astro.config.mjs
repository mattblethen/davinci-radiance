// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
  // Needed so /api/* routes run on Vercel
  output: 'server',

  // Required by @astrojs/sitemap for absolute URLs
  site: 'https://davinciradiance.com',

  vite: { plugins: [tailwindcss()] },
  integrations: [mdx(), sitemap()],
  adapter: vercel(), // v9 is correct for Astro v5
});
