import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://sxryadipta.vercel.app', 
  output: 'static',
  build: {
    format: 'directory',
  },
});