/* empty css                                     */
import { c as createAstro, a as createComponent, m as maybeRenderHead, r as renderComponent, b as renderTemplate } from '../chunks/astro/server_B6wTgGbC.mjs';
import 'kleur/colors';
import { a as $$MainLayout, S as SITE } from '../chunks/MainLayout_DNLLKX4v.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_Bjoi-yH8.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://health-academy.ro");
const $$TeamMemberCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TeamMemberCard;
  const { name, details, image } = Astro2.props;
  const images = /* #__PURE__ */ Object.assign({"/src/images/team/mystery.jpeg": () => import('../chunks/mystery_DRVS3rce.mjs'),"/src/images/team/tabacar.jpeg": () => import('../chunks/tabacar_Cwsofs8E.mjs')

});
  if (!images[image])
    throw new Error(
      `"${image}" does not exist in glob: "src/assets/*.{jpeg,jpg,png,gif}"`
    );
  return renderTemplate`${maybeRenderHead()}<div class="dark:bg-slate-800 flex items-center justify-center gap-10"> <div class="group relative min-h-[200px] min-w-[320px] overflow-hidden rounded-xl bg-gray-100 p-5 shadow-xl hover:shadow-2xl dark:bg-neutral-700"> <div class="flex items-center gap-6"> ${renderComponent($$result, "Image", $$Image, { "src": images[image](), "alt": name, "class": "h-32 w-32 transform rounded-full object-cover object-center" })} <div class="w-fit"> <h1 class="font-bold text-gray-600 dark:text-gray-200">${name}</h1> <p class="text-gray-400">${details}</p> </div> </div> </div> </div>`;
}, "/Users/vicus/Projects/HealthAcademy/src/components/ui/blocks/TeamMemberCard.astro", void 0);

const $$TeamSection = createComponent(($$result, $$props, $$slots) => {
  const title = "Echipa noastr\u0103";
  const subTitle = "";
  const members = [
    {
      name: "Andrei Cristea",
      details: "fizio-kinetoterapeut"
    },
    {
      name: "Dr. Horatiu Badiu",
      details: "ortoped"
    },
    {
      name: "Dr. Mircea Tabacar",
      details: "ortoped",
      image: "tabacar.jpeg"
    },
    {
      name: "Dr. Vladimir Pisarenco",
      details: "ortoped"
    },
    {
      name: "Dr. Corina Goia",
      details: "ortoped pediatru"
    },
    {
      name: "Vlad Cadis",
      details: "fizio-kinetoterapeut"
    },
    {
      name: "Amalia Timis",
      details: "fizio-kineto"
    },
    {
      name: "Alyce Began",
      details: "fizio-kineto"
    },
    {
      name: "Paula Noje",
      details: "nutritionist-dietetician"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14"> <div class="mx-auto max-w-2xl lg:max-w-5xl"> <div class="text-center"> <h1 class="text-balance text-2xl font-bold tracking-tight text-neutral-800 dark:text-neutral-200 md:text-4xl md:leading-tight"> ${title} </h1> <p class="mt-1 text-pretty text-neutral-600 dark:text-neutral-400"> ${subTitle} </p> </div> <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"> ${members.map((member) => {
    const image = member.image ? member.image : "mystery.jpeg";
    return renderTemplate`${renderComponent($$result, "TeamMemberCard", $$TeamMemberCard, { "name": member.name, "details": member.details, "image": "/src/images/team/" + image })}`;
  })} </div> </div> </section>`;
}, "/Users/vicus/Projects/HealthAcademy/src/components/sections/TeamSection.astro", void 0);

const $$Team = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = `Echipa | ${SITE.title}`;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": pageTitle, "structuredData": {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://health-academy.ro/team",
    url: "https://health-academy.ro/team",
    name: "Echipa | HealthAcademy",
    description: "Echipa noastra",
    isPartOf: {
      "@type": "WebSite",
      url: "https://health-academy.ro",
      name: "HealthAcademy",
      description: "HealthAcademy ofera servicii de inalt profesionalism de recuperare fizica."
    },
    inLanguage: "ro-RO"
  } }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TeamSection", $$TeamSection, {})} ` })}`;
}, "/Users/vicus/Projects/HealthAcademy/src/pages/team.astro", void 0);

const $$file = "/Users/vicus/Projects/HealthAcademy/src/pages/team.astro";
const $$url = "/team";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Team,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
