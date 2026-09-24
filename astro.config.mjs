// @ts-check
import { execFileSync } from 'node:child_process';
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import alpinejs from '@astrojs/alpinejs';

import icon from 'astro-icon';

import sitemap from '@astrojs/sitemap';

const site = 'https://www.health-academy.ro';

// Pages that currently only redirect to the homepage; keep them out of the sitemap.
const disabledPages = ['/echipa/', '/preturi/'];

// Files whose content is rendered on a page, besides the page file itself.
const pageDependencies = {
  '/': ['src/components/Hero.astro', 'src/components/Features.astro', 'src/components/Testimonials.astro'],
  '/afectiuni/': ['src/data/afflictions.json'],
  '/contact/': ['src/components/Contact.astro'],
  '/tehnologii/': ['src/data/tech.json'],
};

const buildDate = new Date();

// Last git commit date touching the page (or its content files); build date if git history is unavailable.
function lastModified(pathname) {
  const pageFile = pathname === '/' ? 'src/pages/index.astro' : `src/pages${pathname.replace(/\/$/, '')}.astro`;
  const files = [pageFile, ...(pageDependencies[pathname] ?? [])];
  try {
    const date = execFileSync('git', ['log', '-1', '--format=%cI', '--', ...files], { encoding: 'utf8' }).trim();
    return date ? new Date(date) : buildDate;
  } catch {
    return buildDate;
  }
}

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    alpinejs(),
    icon(),
    sitemap({
      filter: (page) => !disabledPages.includes(new URL(page).pathname),
      serialize: (item) => ({ ...item, lastmod: lastModified(new URL(item.url).pathname).toISOString() }),
    }),
  ],
  fonts: [
    {
      name: 'Inter',
      cssVariable: '--font-inter',
      provider: fontProviders.google(),
      weights: [300, 400, 500, 600, 700],
      styles: ['normal'],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
    {
      name: 'Lexend',
      cssVariable: '--font-lexend',
      provider: fontProviders.google(),
      weights: [400, 500, 600, 700],
      styles: ['normal'],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
  ],
  site,
  trailingSlash: 'always',
});
