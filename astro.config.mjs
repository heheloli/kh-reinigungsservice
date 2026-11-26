import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  redirects: {
    "/about": "/ueber-uns",
    "/services": "/leistungen",
    "/contact": "/kontakt",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});