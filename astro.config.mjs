import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { unified } from '@astrojs/markdown-remark';
import rehypeFigureCaptions from './src/lib/rehype-figure-captions.mjs';
import { noteLastmodByUrl } from './src/lib/note-dates.mjs';

// `lastmod` le indica a Google cuándo cambió cada nota; sin él, el sitemap no
// aporta señal de frescura y las actualizaciones tardan más en recogerse.
const notesLastmod = await noteLastmodByUrl(new URL('./src/content/notes/', import.meta.url));

export default defineConfig({
  site: 'https://curvasidf.cl',
  output: 'static',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      serialize: (item) => {
        const lastmod = notesLastmod.get(item.url);
        return lastmod ? { ...item, lastmod } : item;
      }
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
