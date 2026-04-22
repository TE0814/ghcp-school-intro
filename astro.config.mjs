import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://te0814.github.io',
  base: '/ghcp-school-intro/',
  integrations: [
    sitemap(),
    tailwind({ applyBaseStyles: false })
  ]
});