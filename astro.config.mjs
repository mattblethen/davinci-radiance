// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import icon from 'astro-icon';

export default defineConfig({
  // Needed so /api/* routes run on Vercel
  output: 'server',

  // Canonical URL (update to your final custom domain when ready)
  site: 'https://davinci-radiance.vercel.app',

  // ✅ Astro v5 image service config (use entrypoint string)
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  },

  vite: {
    plugins: [tailwindcss()]
  },

  // Just use the icon integration with default options
  integrations: [mdx(), sitemap(), icon()],

  // Vercel adapter v9 for Astro v5
  adapter: vercel()
});
