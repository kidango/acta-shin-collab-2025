// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://actnix.com',
  vite: {
    plugins: [tailwindcss()]
  },
  output: 'static',
  build: {
    assets: '_assets',
  },
});