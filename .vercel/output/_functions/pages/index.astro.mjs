/* empty css                                     */
import { c as createAstro, a as createComponent, m as maybeRenderHead, d as addAttribute, b as renderTemplate, r as renderComponent, F as Fragment, u as unescapeHTML, j as renderSlot } from '../chunks/astro/server_B6wTgGbC.mjs';
import 'kleur/colors';
import { $ as $$Icon, a as $$MainLayout } from '../chunks/MainLayout_DNLLKX4v.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_Bjoi-yH8.mjs';
import { $ as $$PrimaryCTA } from '../chunks/PrimaryCTA_BSEDm9UN.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro$4 = createAstro("https://health-academy.ro");
const $$SecondaryCTA = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$SecondaryCTA;
  const { title, url } = Astro2.props;
  const baseClasses = "inline-flex items-center justify-center gap-x-2 rounded-lg px-4 py-3 text-center text-sm font-medium text-neutral-600 shadow-sm outline-none ring-zinc-500 focus-visible:ring transition duration-300";
  const borderClasses = "border border-neutral-200";
  const bgColorClasses = "bg-neutral-300";
  const hoverClasses = "hover:bg-neutral-400/50 hover:text-neutral-600 active:text-neutral-700";
  const disableClasses = "disabled:pointer-events-none disabled:opacity-50";
  const fontSizeClasses = "2xl:text-base";
  const ringClasses = "ring-zinc-500";
  const darkClasses = "dark:border-neutral-700 dark:bg-zinc-700 dark:text-neutral-300 dark:ring-zinc-200 dark:hover:bg-zinc-600 dark:focus:outline-none";
  return renderTemplate`<!-- Styled hyperlink -->${maybeRenderHead()}<a${addAttribute(`${baseClasses} ${borderClasses} ${bgColorClasses} ${hoverClasses} ${disableClasses} ${fontSizeClasses} ${ringClasses} ${darkClasses}`, "class")}${addAttribute(url, "href")}> ${title} </a>`;
}, "/Users/vicus/Projects/HealthAcademy/src/components/ui/buttons/SecondaryCTA.astro", void 0);

const $$Astro$3 = createAstro("https://health-academy.ro");
const $$HeroSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$HeroSection;
  const {
    title,
    subTitle,
    primaryBtn,
    primaryBtnURL,
    secondaryBtn,
    secondaryBtnURL,
    src,
    alt
  } = Astro2.props;
  return renderTemplate`<!-- Defining a grid container that holds all the content -->${maybeRenderHead()}<section class="mx-auto grid max-w-[85rem] gap-4 px-4 py-14 sm:px-6 md:grid-cols-2 md:items-center md:gap-8 lg:px-8 2xl:max-w-full"> <!-- Title and description --> <div> <!-- Each h1 and p tag renders a portion of the title and subTitle defined above --> <h1 class="block text-balance text-3xl font-bold tracking-tight text-neutral-800 dark:text-neutral-200 sm:text-3xl lg:text-5xl lg:leading-tight"> <!-- About Fragment: https://docs.astro.build/en/basics/astro-syntax/#fragments --> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(title)}` })} </h1> ${subTitle && renderTemplate`<p class="mt-3 text-pretty text-lg leading-relaxed text-neutral-700 dark:text-neutral-400 lg:w-4/5">${unescapeHTML(subTitle)}</p>`} <div class="mt-7 grid w-full gap-3 sm:inline-flex"> ${primaryBtn && renderTemplate`${renderComponent($$result, "PrimaryCTA", $$PrimaryCTA, { "title": primaryBtn, "url": primaryBtnURL })}`} ${secondaryBtn && renderTemplate`${renderComponent($$result, "SecondaryCTA", $$SecondaryCTA, { "title": secondaryBtn, "url": secondaryBtnURL })}`} </div> </div> <!-- Hero Image Section --> <div class="flex w-full"> <div class="top-12 overflow-hidden"> ${src && alt && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": src, "alt": alt, "class": "h-full w-full scale-100 object-cover object-center", "draggable": "false", "loading": "eager", "format": "avif" })}`} </div> </div> </section>`;
}, "/Users/vicus/Projects/HealthAcademy/src/components/sections/landing/HeroSection.astro", void 0);

const $$Astro$2 = createAstro("https://health-academy.ro");
const $$TestimonialsSectionAlt = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$TestimonialsSectionAlt;
  const { title, testimonials } = Astro2.props;
  return renderTemplate`<!-- Main div that wraps the testimonials section -->${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full" id="testimonials"> <!-- Title of the testimonials section --> <div class="mb-6 w-3/4 max-w-2xl sm:mb-10 md:mb-16 lg:w-1/2"> <h2 class="text-balance text-2xl font-bold text-neutral-800 dark:text-neutral-200 sm:text-3xl lg:text-4xl"> ${title} </h2> </div> <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"> <!-- Looping through each testimonial data and rendering it --> ${testimonials.map((testimonial) => renderTemplate`<div class="flex h-auto"> <div class="flex flex-col rounded-xl bg-neutral-50 dark:bg-neutral-700"> <div class="flex-auto p-4 md:p-6"> <!-- Testimonial content --> <p class="text-pretty text-base italic text-neutral-600 dark:text-neutral-300 md:text-lg"> ${testimonial.content} </p> </div> <div class="rounded-b-xl bg-neutral-300/30 p-4 dark:bg-neutral-900/30 md:px-7"> <div class="flex items-center"> <div class="ms-3 grow"> <p class="text-sm font-bold text-neutral-800 dark:text-neutral-200 sm:text-base"> ${testimonial.author} </p> <p class="text-xs text-neutral-600 dark:text-neutral-400"> ${testimonial.role} </p> </div> </div> </div> </div> </div>`)} </div> </section>`;
}, "/Users/vicus/Projects/HealthAcademy/src/components/sections/testimonials/TestimonialsSectionAlt.astro", void 0);

const $$ClientsSection = createComponent(($$result, $$props, $$slots) => {
  const testimonials = [
    {
      content: ' "Dup\u0103 un accident la antrenament am fost foarte \xEEngrijorat \xEEn privin\u021Ba carierie mele de fotbalist profesionist. Am g\u0103sit ni\u0219te oameni extraordinari la HealthAcademy. Nu doar c\u0103 m-am recuperat integral, dar sunt \xEEntr-o form\u0103 fizic\u0103 net superioar\u0103 celei dinainte de accident, sunt \xEEn continuare client HealthAcademy." ',
      author: "Iancu Jianu",
      role: "Fotbalist"
    },
    // Second testimonial data
    {
      content: ' "Am avut un accident la schi \xEEn februarie, ligamentul \xEEncruci\u0219at fiind grav afectat. Am primit ajutor imens de la Andrei, Amalia \u0219i dr T\u0103b\u0103car, \xEEncep\xE2nd cu partea ini\u021Bial\u0103 de recuperare, preg\u0103tire pentru opera\u021Bie, \u0219i mai ales recuperarea dup\u0103 opera\u021Bie. E greu de spus \xEEn cuvinte c\xE2t de important\u0103 este recuperarea fizic\u0103 pentru a putea iar schia, alerga sau mers cu bicicleta." ',
      author: "Pop Vasile",
      role: ""
    },
    // Third testimonial data
    {
      content: ' "Dup\u0103 o refacere a ligamentului \xEEncruci\u0219at \u0219i a meniscului, am primit ajutor profesionist din partea HealthAcademy. Recuperarea post-operatorie nu este u\u0219oar\u0103, dar profesionalismul lor, dot\u0103rile s\u0103lii, au fost salvatoare. Am continuat colaborarea cu ei, vin regulat pentru a m\u0103 preg\u0103ti pentru sezonul de schi." ',
      author: "Adi Ghetie",
      role: ""
    }
  ];
  return renderTemplate`${renderComponent($$result, "TestimonialsSectionAlt", $$TestimonialsSectionAlt, { "title": "Ce spun clien\u021Bii \u0219i partenerii no\u0219tri", ",": true, "testimonials": testimonials })}`;
}, "/Users/vicus/Projects/HealthAcademy/src/components/sections/landing/ClientsSection.astro", void 0);

const $$Astro$1 = createAstro("https://health-academy.ro");
const $$IconBlock = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$IconBlock;
  const { heading, content } = Astro2.props;
  const headingClasses = "text-balance text-lg font-bold text-neutral-800 dark:text-neutral-200";
  const contentClasses = "mt-1 text-pretty text-neutral-700 dark:text-neutral-300";
  return renderTemplate`<!-- The root container that arranges your slot and the heading/content -->${maybeRenderHead()}<div class="flex gap-x-5"> <!-- Slot to allow for extensibility of the component --> ${renderSlot($$result, $$slots["default"])} <div class="grow"> <!-- Heading of the section --> <h3${addAttribute(headingClasses, "class")}> ${heading} </h3> <!-- Content text of the section --> <p${addAttribute(contentClasses, "class")}>${content}</p> </div> </div>`;
}, "/Users/vicus/Projects/HealthAcademy/src/components/ui/blocks/IconBlock.astro", void 0);

const $$Astro = createAstro("https://health-academy.ro");
const $$FeaturesGeneral = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FeaturesGeneral;
  const { title, subTitle, features } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"> <!-- Displaying the main content consisting of title, subtitle, and several \`IconBlock\` components --> <div class="mt-5 grid gap-8 lg:mt-16 lg:grid-cols-3 lg:gap-12"> <!-- Block for title and subtitle --> <div class="lg:col-span-1"> <!-- Rendering title --> <h2 class="text-balance text-2xl font-bold text-neutral-800 dark:text-neutral-200 md:text-3xl"> ${title} </h2> <!-- Rendering subtitle --> ${subTitle && renderTemplate`<p class="mt-2 text-pretty text-neutral-600 dark:text-neutral-100 md:mt-4"> ${subTitle} </p>`} </div> <!-- Block to display the IconBlock components --> <div class="lg:col-span-2"> <div class="grid gap-8 sm:grid-cols-2 md:gap-12"> <!-- Injecting IconBlock components with different properties --> ${features && features.map((feature) => renderTemplate`${renderComponent($$result, "IconBlock", $$IconBlock, { "heading": feature.heading, "content": feature.content }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "name": feature.icon, "class": "mt-1.5 h-6 w-6 flex-shrink-0 text-red-500 dark:text-red-500" })} ` })}`)} </div> </div> </div> </section>`;
}, "/Users/vicus/Projects/HealthAcademy/src/components/sections/features/FeaturesGeneral.astro", void 0);

const heroImage = new Proxy({"src":"/_astro/hero-image.DKOlj0uu.avif","width":1792,"height":1024,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/vicus/Projects/HealthAcademy/src/images/hero-image.avif";
							}
							
							return target[name];
						}
					});

const features = [
	{
		heading: "Reabilitare bazată pe dovezi științifice",
		content: "Protocoale de recuperare de cea mai înalta calitate. Pentru a nu experimenta pe pacienții noștri și a le oferi maximul de siguranță și succes în drumul lor către recuperarea completă, aplicăm în practică principii și tehnici deja dovedite la nivel internațional ca fiind de succes.",
		icon: "ic:outline-science"
	},
	{
		heading: "Suport pentru pacienți",
		content: "Fiecare caz este tratat cu maximă importanță și suntem implicați complet în căutarea soluțiilor optime. Pacientul nu trebuie transformat într-o simplă fișă, iar recuperarea completă vine în urma unui drum complex care presupune educație, colaborare și sprijin permanent către persoana aflată în dificultate.",
		icon: "ic:sharp-self-improvement"
	},
	{
		heading: "Asistență medicală ultra-personalizată",
		content: "Fiecare caz este unic în felul său, motiv pentru care stransa colaborare cu echipa ortopedică chirurgicală este vitală pentru a garanta succesul. Suntem norocoși să avem în spate o echipa ortopedică de excelență, împreună cu care putem gestiona fiecare pacient în funcție de necesitățile sale, la cele mai înalte standarde din domeniu. În anumite cazuri, recuperarea începe chiar în sala de operație, unde doar participând atent se pot observa particularitățile cazului, pe baza cărora vor fi fundamentate măsurile ulterioare, restricțiile și structura protocolului recuperator, pentru a proteja intervenția chirurgicală și a maximiza rezultatele ei.",
		icon: "ic:baseline-accessibility-new"
	},
	{
		heading: "Criterii obiective de progresie și revenire la sport",
		content: "Medicină modernă presupune desprinderea de subiectivism, prin obiectivizarea și monitorizarea constantă a evoluției și a nivelului pacientului. Criteriile de progres între etapele de recuperare și cele de reîntoarcere la activitatea sportivă / profesională au în spate o baza științifică fermă care minimalizează riscurile complicațiilor și a recidivei, prin diverse metode precise de măsurare și testare.",
		icon: "mdi:run-fast"
	},
	{
		heading: "Echipă multidisciplinară ",
		content: "Locul în care fizio-kinetoterapia, ortopedia, imagistica, nutriția, terapia manuală și pregătirea atletică vorbesc aceeași limbă și formează o echipă unită a cărei singur scop este binele pacientului.",
		icon: "ic:outline-volunteer-activism"
	},
	{
		heading: "Educație continuă",
		content: "Evoluția continuă a medicinei ne obligă să ținem pasul cu ea, atât din punct de vedere a cunoștiințelor, cât și a infrastructurii. Rigurozitatea din rândul personalului și a colaboratorilor este extrem de ridicată, tocmai pentru a menține standardele de calitate la cel mai înalt nivel.",
		icon: "mdi:book-education-outline"
	}
];

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroSection", $$HeroSection, { "title": `Recuperare medical\u0103 cu <span
        class="text-red-500 dark:text-red-500">Health Academy</span>`, "subTitle": "Centru de excelen\u021B\u0103 \xEEn recuperare \u0219i performan\u021B\u0103 sportiv\u0103<br>Centru de excelen\u021B\u0103 \xEEn ortopedie", "primaryBtn": "Afl\u0103 mai multe", "primaryBtnURL": "/services", "secondaryBtn": "Contacteaz\u0103-ne", "secondaryBtnURL": "/contact", "withReview": false, "reviews": `From Over <span class="font-bold">12.8k</span> Reviews`, "src": heroImage, "alt": "Athlete after recovering at HealthAcademy" })} ${renderComponent($$result2, "FeaturesGeneral", $$FeaturesGeneral, { "title": "De ce sa alegi HealthAcademy?", "subTitle": "Re\xEEntoarcere eficient\u0103 \u0219i \xEEn siguran\u021B\u0103 la sport, o via\u021B\u0103 f\u0103r\u0103 dureri \u0219i cu mobilitate complet\u0103.", "features": features })} ${renderComponent($$result2, "ClientsSection", $$ClientsSection, { "title": "\xCEncredere din partea atle\u021Bilor \u0219i a tuturor celorlal\u021Bi", "subTitle": "" })} ` })}`;
}, "/Users/vicus/Projects/HealthAcademy/src/pages/index.astro", void 0);

const $$file = "/Users/vicus/Projects/HealthAcademy/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
