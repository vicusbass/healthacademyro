import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import compressor from 'astro-compressor';
import icon from 'astro-icon';
import vercel from '@astrojs/vercel';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  // https://docs.astro.build/en/guides/images/#authorizing-remote-images
  site: 'https://health-academy.ro',
  image: {
    domains: ['images.unsplash.com'],
  },
  prefetch: true,
  integrations: [tailwind(), sitemap(), compressor({
    gzip: false,
    brotli: true,
  }), icon(), mdx()],
  output: 'server',
  adapter: vercel(),
  // experimental: {
  //   clientPrerender: true,
  //   directRenderScript: true,
  // },
});