// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  // 👇 enable functions for endpoints like /api/reviews.json
  output: 'server', // or 'server'

  vite: { plugins: [tailwindcss()] },
  integrations: [mdx(), sitemap()],
  adapter: vercel(), // v9 is fine
});