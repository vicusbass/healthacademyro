/* empty css                                     */
import { c as createAstro, a as createComponent, m as maybeRenderHead, j as renderSlot, b as renderTemplate, d as addAttribute, r as renderComponent, F as Fragment, u as unescapeHTML } from '../chunks/astro/server_B6wTgGbC.mjs';
import 'kleur/colors';
import { $ as $$Icon, a as $$MainLayout, S as SITE } from '../chunks/MainLayout_DNLLKX4v.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://health-academy.ro");
const $$ContactIconBlock = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ContactIconBlock;
  const {
    heading,
    content,
    isAddressVisible,
    addressContent,
    isLinkVisible,
    linkTitle,
    linkURL,
    isArrowVisible
  } = Astro2.props;
  const arrowSVG = `<svg
class="h-4 w-4 flex-shrink-0 transition ease-in-out group-hover:translate-x-1"
fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /> </svg>`;
  return renderTemplate`<!-- Root container, which arranges the heading and content -->${maybeRenderHead()}<div class="flex gap-x-7 py-6"> <!-- Slot to allow for extensibility of the component --> ${renderSlot($$result, $$slots["default"])} <div class="grow"> <!-- Heading of the section --> <h3 class="font-bold text-neutral-700 dark:text-neutral-200"> ${heading} </h3> <!-- Content of the section --> <p class="mt-1 text-sm text-neutral-600 dark:text-neutral-200">${content}</p> <!-- Conditional rendering of address content if isAddressVisible is true --> ${isAddressVisible ? renderTemplate`<p class="mt-1 text-sm italic text-neutral-200">${addressContent}</p>` : null} <!-- Conditional rendering of a link if isLinkVisible is true.
         The link also conditionally includes an arrow SVG if isArrowVisible is true --> ${isLinkVisible ? renderTemplate`<a class="group mt-2 inline-flex items-center gap-x-2 rounded-lg text-sm font-medium text-zinc-600 outline-none ring-zinc-500 transition duration-300 hover:text-zinc-800 focus-visible:ring dark:text-zinc-400 dark:ring-zinc-200 dark:hover:text-zinc-200 dark:focus:outline-none dark:focus:ring-1 "${addAttribute(linkURL, "href")}> ${linkTitle} ${isArrowVisible ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(arrowSVG)}` })}` : null} </a>` : null} </div> </div>`;
}, "/Users/vicus/Projects/HealthAcademy/src/components/ui/blocks/ContactIconBlock.astro", void 0);

const $$ContactSection = createComponent(($$result, $$props, $$slots) => {
  const title = "Contacteaz\u0103-ne";
  const subTitle = "Ai \xEEntreb\u0103ri despre cum te putem ajuta? Contacteaz\u0103-ne \u0219i vom \xEEncerca s\u0103 \xEE\u021Bi r\u0103spundem \xEEn cel mai scurt timp";
  return renderTemplate`<!-- Contact Us -->${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14"> <div class="mx-auto max-w-2xl lg:max-w-5xl"> <div class="text-center"> <h1 class="text-balance text-2xl font-bold tracking-tight text-neutral-800 dark:text-neutral-200 md:text-4xl md:leading-tight"> ${title} </h1> <p class="mt-1 text-pretty text-neutral-600 dark:text-neutral-200"> ${subTitle} </p> </div> <div class="mt-12 divide-y divide-neutral-300 dark:divide-neutral-700"> ${renderComponent($$result, "ContactIconBlock", $$ContactIconBlock, { "heading": "Telefon/WhatsApp", "content": "Ne po\u021Bi suna sau contacta pe WhatsApp", "isLinkVisible": true, "linkTitle": "+40725215136", "linkURL": "https://wa.me/40725215136", "isArrowVisible": true }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": "mdi:chat-outline", "class": "mt-1.5 h-6 w-6 flex-shrink-0 text-red-500 dark:text-red-500" })} ` })} ${renderComponent($$result, "ContactIconBlock", $$ContactIconBlock, { "heading": "Viziteaz\u0103-ne", "content": "Health Academy", "isAddressVisible": true, "addressContent": "Piata Cipariu 11, Cluj-Napoca (intrarea se face prin spatele cl\u0103dirii de pe strada Voltaire)" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": "ic:outline-add-location-alt", "class": "mt-1.5 h-6 w-6 flex-shrink-0 text-red-500 dark:text-red-500" })} ` })} ${renderComponent($$result, "ContactIconBlock", $$ContactIconBlock, { "heading": "Email", "content": "Prefera\u021Bi s\u0103 ne scrie\u021Bi?", "isLinkVisible": true, "linkTitle": "healthacademy.cluj@gmail.com", "linkURL": "#" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": "ic:outline-email", "class": "mt-1.5 h-6 w-6 flex-shrink-0 text-red-500 dark:text-red-500" })} ` })} </div> </div> </section>`;
}, "/Users/vicus/Projects/HealthAcademy/src/components/sections/ContactSection.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = `Contact | ${SITE.title}`;
  return renderTemplate`<!--Utilizing MainLayout for the outer layout of the page, and defining meta for SEO purposes-->${renderComponent($$result, "MainLayout", $$MainLayout, { "title": pageTitle, "structuredData": {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://health-academy.ro/contact",
    url: "https://health-academy.ro/contact",
    name: "Contacteaza-ne | HealthAcademy",
    description: "Ai intrebari despre serviciile noastre? Vrei sa stii cum te putem ajuta pentru o recuperare rapida?",
    isPartOf: {
      "@type": "WebSite",
      url: "https://health-academy.ro",
      name: "HealthAcademy",
      description: "HealthAcademy ofera servicii de inalt profesionalism de recuperare fizica."
    },
    inLanguage: "ro-RO"
  } }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ContactSection", $$ContactSection, {})} ` })}`;
}, "/Users/vicus/Projects/HealthAcademy/src/pages/contact.astro", void 0);

const $$file = "/Users/vicus/Projects/HealthAcademy/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
