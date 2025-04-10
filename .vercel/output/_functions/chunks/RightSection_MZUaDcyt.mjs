import { c as createAstro, a as createComponent, m as maybeRenderHead, r as renderComponent, b as renderTemplate } from './astro/server_B6wTgGbC.mjs';
import 'kleur/colors';
import { $ as $$PrimaryCTA } from './PrimaryCTA_BSEDm9UN.mjs';
import { $ as $$Image } from './_astro_assets_Bjoi-yH8.mjs';

const $$Astro$1 = createAstro("https://health-academy.ro");
const $$MainSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MainSection;
  const { title, subTitle, btnExists, btnTitle, btnURL } = Astro2.props;
  return renderTemplate`<!-- Root section of the component -->${maybeRenderHead()}<section class="mx-auto mt-10 max-w-[85rem] px-4 py-6 sm:px-6 sm:py-16 lg:px-8 lg:py-10 2xl:max-w-full"> <div class="max-w-screen-md"> <!-- Section title --> <h1 class="mb-4 text-balance text-4xl font-extrabold tracking-tight text-neutral-800 dark:text-neutral-200"> ${title} </h1> <!-- Section subtitle --> <p class="mb-8 max-w-prose text-pretty font-light text-neutral-600 dark:text-neutral-400 sm:text-xl"> ${subTitle} </p> <!-- Conditional rendering of PrimaryCTA component if 'btnExists' property is truthy --> ${btnExists ? renderTemplate`<div class="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"> ${renderComponent($$result, "PrimaryCTA", $$PrimaryCTA, { "title": btnTitle, "url": btnURL })} </div>` : null} </div> </section>`;
}, "/Users/vicus/Projects/HealthAcademy/src/components/ui/blocks/MainSection.astro", void 0);

const $$Astro = createAstro("https://health-academy.ro");
const $$RightSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$RightSection;
  const {
    title,
    subTitle,
    btnExists,
    btnTitle,
    btnURL,
    single,
    imgOne,
    imgOneAlt,
    imgTwo,
    imgTwoAlt
  } = Astro2.props;
  return renderTemplate`<!-- Root section of the component -->${maybeRenderHead()}<section class="mx-auto max-w-[85rem] items-center gap-16 px-4 py-6 sm:px-6 lg:grid lg:grid-cols-2 lg:px-8 lg:py-10 2xl:max-w-full"> <div> <!-- Title of the section --> <h2 class="mb-4 text-balance text-3xl font-extrabold tracking-tight text-neutral-800 dark:text-neutral-200"> ${title} </h2> <!-- Subtitle of the section --> <p class="mb-4 max-w-prose text-pretty font-light text-neutral-600 dark:text-neutral-100 sm:text-lg"> ${subTitle} </p> <!-- Conditional rendering of the Primary Call-To-Action button if 'btnExists' is true --> ${btnExists ? renderTemplate`${renderComponent($$result, "PrimaryCTA", $$PrimaryCTA, { "title": btnTitle, "url": btnURL })}` : null} </div> <!-- Conditionally render one or two images based on 'single' property --> ${single ? renderTemplate`<div class="mt-2"> <!-- Single image --> ${imgOne ? renderTemplate`${renderComponent($$result, "Image", $$Image, { "class": "w-full rounded-lg", "src": imgOne, "alt": imgOneAlt, "format": "avif" })}` : ""} </div>` : renderTemplate`<div class="mt-2 grid grid-cols-2 gap-4"> <!-- First image in a two-image layout --> ${renderComponent($$result, "Image", $$Image, { "class": "w-full rounded-xl", "src": imgOne, "alt": imgOneAlt, "draggable": "false", "format": "avif" })} <!-- Second image in a two-image layout --> ${renderComponent($$result, "Image", $$Image, { "class": "mt-4 w-full rounded-xl lg:mt-10", "src": imgTwo, "alt": imgTwoAlt, "draggable": "false", "format": "avif" })} </div>`} </section>`;
}, "/Users/vicus/Projects/HealthAcademy/src/components/ui/blocks/RightSection.astro", void 0);

export { $$MainSection as $, $$RightSection as a };
