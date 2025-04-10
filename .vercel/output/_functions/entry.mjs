import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_BmUHDAbB.mjs';
import { manifest } from './manifest_CJyXN9FT.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/afectiuni.astro.mjs');
const _page3 = () => import('./pages/contact.astro.mjs');
const _page4 = () => import('./pages/favicon.ico.astro.mjs');
const _page5 = () => import('./pages/manifest.json.astro.mjs');
const _page6 = () => import('./pages/pricing.astro.mjs');
const _page7 = () => import('./pages/robots.txt.astro.mjs');
const _page8 = () => import('./pages/services.astro.mjs');
const _page9 = () => import('./pages/team.astro.mjs');
const _page10 = () => import('./pages/technologies.astro.mjs');
const _page11 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/afectiuni.astro", _page2],
    ["src/pages/contact.astro", _page3],
    ["src/pages/favicon.ico.ts", _page4],
    ["src/pages/manifest.json.ts", _page5],
    ["src/pages/pricing.astro", _page6],
    ["src/pages/robots.txt.ts", _page7],
    ["src/pages/services.astro", _page8],
    ["src/pages/team.astro", _page9],
    ["src/pages/technologies.astro", _page10],
    ["src/pages/index.astro", _page11]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "9e2c545f-1bdb-41a6-8efa-15287652f828",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
