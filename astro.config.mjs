// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages serves this project from a repository subpath, so `base` must be
// set for every generated URL and asset reference to resolve.
export default defineConfig({
  site: 'https://dank-heehaw.github.io',
  base: '/ISRO_Redesign',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
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
