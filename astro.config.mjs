import { defineConfig } from 'astro/config';

export default defineConfig({
  // Add any necessary Astro configurations here
  vite: {
    ssr: {
      noExternal: ['@astrojs/dev-toolbar'],
    },
  },
});
