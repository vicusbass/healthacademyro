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
  prefetch: true,
  integrations: [tailwind(), sitemap(), compressor({
    gzip: false,
    brotli: true,
  }), icon(), mdx()],
  output: 'static',
  adapter: vercel({
    imageService: true,
    devImageService: 'sharp',
    imagesConfig: {
      domains: ['images.unsplash.com'],
      sizes: [320, 640, 1280],
    },
  }),
  // experimental: {
  //   clientPrerender: true,
  //   directRenderScript: true,
  // },
});