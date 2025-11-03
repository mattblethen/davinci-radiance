// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

// If you have `sharp` installed and want to force it for images, uncomment below:
// import sharp from 'astro/assets/services/sharp';

// https://astro.build/config
export default defineConfig({
  // Needed so /api/reviews.json runs as a serverless function on Vercel
  output: 'server', // or 'hybrid' if you prefer some pages pre-rendered

  // Set your canonical production URL so @astrojs/sitemap can build absolute links
  site: 'https://davinciradiance.com',

  // (Optional) If you want to use sharp explicitly for astro:assets
  // image: { service: sharp() },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    mdx(),
    sitemap(),
    // If you installed these earlier and want them enabled, uncomment:
    // robotsTxt(), // from 'astro-robots-txt'
    // compress(),  // from 'astro-compress'
  ],

  adapter: vercel(), // v9 works with Astro v5
});
