// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'server',                  // ✅ needed for API routes
  site: 'https://davinci-radiance.vercel.app',
  vite: { plugins: [tailwindcss()] },
  integrations: [mdx(), sitemap()],
  adapter: vercel(),                 // ✅ v9 adapter
});
