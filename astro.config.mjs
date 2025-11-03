// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'server',
  site: 'https://davinciradiance.com',
  vite: { plugins: [tailwindcss()] },
  integrations: [mdx(), sitemap()],
  adapter: vercel(),
});
