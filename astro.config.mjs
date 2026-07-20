import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://curvasidf.cl',
  output: 'static',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404')
    })
  ],
  vite: {
    build: {
      cssMinify: 'lightningcss'
    }
  }
});
