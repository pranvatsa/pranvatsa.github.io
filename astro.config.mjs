// @ts-check
import { defineConfig } from 'astro/config';

import vue from '@astrojs/vue';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
// https://vite.dev/config/
export default defineConfig({
  site: 'https://pranvatsa.github.io',
  integrations: [vue(), tailwind()],
  vite: {
    build: {
      minify: 'esbuild',
      target: 'esnext',
      cssCodeSplit: true,
      sourcemap: false,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return id
                .toString()
                .split('node_modules/')[1]
                .split('/')[0]
                .toString();
            }
          },
        },
      },
    },
  },
});
