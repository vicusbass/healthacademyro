# Health Academy

Website for [Health Academy](https://www.health-academy.ro), a medical recovery, physiotherapy and orthopedics clinic in Cluj-Napoca. Content is in Romanian.

## Stack

- [Astro](https://astro.build) (static output), Tailwind CSS 4 + daisyUI, Alpine.js
- `@astrojs/sitemap`, Astro Fonts API (self-hosted Inter/Lexend), `astro-icon`
- Hosted on Vercel (`vercel.json`, Vercel Analytics)

## Development

```sh
npm install
npm run dev       # local dev server
npm run build     # build to dist/
npm run preview   # build and serve dist/
```

## Structure

- `src/pages/` — one file per route (`/servicii/`, `/afectiuni/`, `/tehnologii/`, `/contact/`, …)
- `src/components/` — page sections; `StructuredData.astro` holds the JSON-LD
- `src/layouts/Layout.astro` — shared `<head>` (meta tags, fonts, canonical)
- `src/data/` — content for the conditions and technologies pages
- `public/` — static files (favicons, OG image, `robots.txt`)

## Credits

Based on the Astro Sassify template by yujian (larry) xue, MIT licensed — see [LICENSE](LICENSE).
