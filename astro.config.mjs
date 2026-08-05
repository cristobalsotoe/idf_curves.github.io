import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { unified } from '@astrojs/markdown-remark';
import rehypeFigureCaptions from './src/lib/rehype-figure-captions.mjs';

export default defineConfig({
  site: 'https://curvasidf.cl',
  output: 'static',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404')
    })
  ],
  markdown: {
    processor: unified({ rehypePlugins: [rehypeFigureCaptions] })
  },
  vite: {
    build: {
      cssMinify: 'lightningcss'
    }
  }
});
