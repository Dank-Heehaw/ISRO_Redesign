// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Primary host is Vercel (root path). GitHub Pages project sites need a
// matching `base` of `/ISRO_Redesign` if you re-enable that workflow.
export default defineConfig({
  site: 'https://isro-redesign.vercel.app',
  base: '/',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // Lets any component write `@use "mixins" as *;` regardless of depth.
          loadPaths: ['src/styles'],
        },
      },
    },
  },
});
