/* empty css                                     */
import { c as createAstro, a as createComponent, m as maybeRenderHead, b as renderTemplate, r as renderComponent, F as Fragment } from '../chunks/astro/server_B6wTgGbC.mjs';
import 'kleur/colors';
import 'clsx';
import { a as $$MainLayout, S as SITE } from '../chunks/MainLayout_DNLLKX4v.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro("https://health-academy.ro");
const $$PricingItemBlock = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PricingItemBlock;
  const { item } = Astro2.props;
  const parts = item.split("*");
  return renderTemplate`${maybeRenderHead()}<li class="mb-2"> ${parts[0]} ${parts[1] && renderTemplate`<span class="italic">*${parts[1]}</span>`} </li>`;
}, "/Users/vicus/Projects/HealthAcademy/src/components/ui/blocks/PricingItemBlock.astro", void 0);

const $$Astro$1 = createAstro("https://health-academy.ro");
const $$PricingSubcategoryBlock = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PricingSubcategoryBlock;
  const { subcategory } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="p-2"> <h3 class="text-lg font-bold text-neutral-700 dark:text-neutral-300"> ${subcategory.subcategory} </h3> <ul class="mt-2 list-disc dark:text-neutral-100"> ${subcategory.items.map((item) => renderTemplate`${renderComponent($$result, "PricingItemBlock", $$PricingItemBlock, { "item": item })}`)} ${subcategory.packages && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <p class="mb-2 mt-3 font-bold underline">Pachete:</p> ${subcategory.packages.map((item) => renderTemplate`${renderComponent($$result2, "PricingItemBlock", $$PricingItemBlock, { "item": item })}`)}` })}`} </ul> ${subcategory.notes && renderTemplate`<ul class="mt-3 italic dark:text-neutral-100"> ${subcategory.notes.map((note) => renderTemplate`<li>*${note}</li>`)} </ul>`} </div>`;
}, "/Users/vicus/Projects/HealthAcademy/src/components/ui/blocks/PricingSubcategoryBlock.astro", void 0);

const $$Astro = createAstro("https://health-academy.ro");
const $$PricingSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PricingSection;
  const { pricing } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14"> <div class="mx-auto max-w-2xl lg:max-w-5xl"> ${pricing.map((category) => renderTemplate`<div class="mt-4 divide-y divide-neutral-300 dark:divide-neutral-700"> <div class="flex gap-x-7 py-6 shadow-lg"> <div class="grow"> <h2 class="text-xl font-bold text-neutral-700 underline dark:text-neutral-200"> ${category.category} </h2> <div> ${category.subcategories.map((subcategory) => renderTemplate`${renderComponent($$result, "PricingSubcategoryBlock", $$PricingSubcategoryBlock, { "subcategory": subcategory })}`)} </div> </div> </div> </div>`)} <p class="mt-2 font-bold italic dark:text-red-400">
* toate pachetele includ: evaluare a compoziției corporale, evaluare a
      statusului nutrițional și metabolic, măsuratori, plan alimentar
      personalizat, actualizare dietă / meniu, 2 monitorizări lunare, suport
      online, materiale cu informații, evaluare analize medicale și
      nutriționale, analize periodice progres;
</p> </div> </section>`;
}, "/Users/vicus/Projects/HealthAcademy/src/components/sections/PricingSection.astro", void 0);

const pricing = [
	{
		category: "I. Servicii de pregătire fizică",
		subcategories: [
			{
				subcategory: "Pregătire sportivă de performanță",
				alias: "Performance Lab",
				items: [
					"ședintă unică: 120 lei",
					"abonament 10 ședințe: 1000 lei; *valabilitate maxim 45 zile"
				],
				notes: [
					"serviciul include pregătire sportivă personalizată și computerizată, antrenament neurocognitiv, antrenament reactivitate, antrenament BFR (blood flow restriction), SGA (stretching global activ), măsurarea / monitorizarea forțelor musculare și a biomecanicii, generare de vaste tipuri de contracții musculare și sarcini mecanice (contracții izometrice, izotonice cu/fără inerție, concentrice, excentrice, izokinetice, rezistență diferențială variabilă, izoinerțială, elastică, vascoasă), refacere post-efort (presoterapie, crioterapie, electrostimulare, masaj mecanizat prin percuție și vibrație), profilaxie primară / prevenție și identificarea asimetriilor / factorilor de risc, ghidaj nutrițional"
				]
			}
		]
	},
	{
		category: "I. Servicii de recuperare medicală",
		subcategories: [
			{
				alias: "Physio Lab",
				subcategory: "Fizio-kinetoterapie",
				items: [
					"ședință unică: 180 lei",
					"abonament 10 ședințe: 1600 lei; *valabilitate maxim 30 zile",
					"abonament 20 ședințe: 2800 lei; *valabilitate maxim 60 zile"
				],
				notes: [
					"serviciul include kinetoterapie personalizată și computerizată, generare de date precise obiective și feedback (placă de simetrie / echilibru, evaluare și pliometrii, dinamometrie / măsurarea forțelor musculare, măsurarea amplitudinii de mișcare articulare), generare de vaste tipuri de contracții musculare și sarcini mecanice (contracții izometrice, izotonice cu / fără inerție, concentrice, excentrice, izokinetice, rezistență diferențială variabilă, izoinerțială, elastică, vascoasă), antrenament BFR (blood flow restriction), reabilitare neruro-cognitivă, RPG (reeducare posturală globală) și SGA (stretching global activ), mobilizări articulare și de țesuturi moi (tehnici manuale, tehnica Mulligan), mobilizări de țesuturi moi asistate instrumental / mobilizare fascială (blades, decompresie miofascială / cupping, flossing, masaj mecanizat prin percuție și vibrație), fizioterapie (TECAR, electroterapie, ultrasunete, crioterapie, drenaj veno-limfatic / presoterapie), taping kinesiologic și dynamic",
					"fără limită de timp sau de servicii, in funcție de necesitățile pacientului conform planului de tratament"
				]
			},
			{
				subcategory: "Terapii complementare",
				alias: "Therapy Lab",
				items: [
					"evaluare ecografică musculoscheletală și clinică: 250 lei",
					"reevalare ecografică / monitorizare: 150 lei",
					"evaluare funcțională / biomecanică (testări izokinetice, măsurarea forțelor musculare, depistarea disfuncțiilor, asimetriilor și dezechilibrelor, testare return to run / return to train / return to sport): 350 lei",
					"EPI (eletroliză percutanată intratisulară): 250 lei",
					"Electro-DryNeedling: 220 lei",
					"DryNeedling: 200 lei",
					"terapie manuală miofascială (masaj medical, chiropractică / manipulări osteoarticulare, terapia punctelor trigger, IASTM, cupping, flossing, masaj mecanizat prin percuție și vibrație): 250 lei; *max 60 min"
				],
				packages: [
					"Pachet evaluare ecografică / clinică + 1 serviciu dintre EPI / DryNeedling / Electro-DryNeedling / terapie manuală: 350 lei",
					"Pachet 4 ședințe EPI: 900 lei",
					"Pachet 4 ședințe terapie manuală: 900 lei"
				]
			}
		]
	},
	{
		category: "III. Servicii singulare",
		subcategories: [
			{
				items: [
					"Kinetoterapie personalizată 60 min: 130 lei",
					"Mobilizări manuale articulare și de țesuturi moi: 50 lei; *15 min",
					"Mobilizări țesuturi moi asistate instrumental / terapie fascială: 50 lei; *1regiune / 15 min",
					"Chiropractică / manipulări osteoarticulare: 120 lei",
					"Masaj terapeutic / sportiv / relaxare: 120 lei; *1 regiune (membre inferioare / membre superioare / spate) / 25 min",
					"TECAR: 80 lei",
					"Ultrasunete: 60 lei",
					"Electroterapie: 60 lei",
					"Crio-Compresie: 80 lei; *20 min",
					"Drenaj veno-limfatic / presoterapie: 60 lei; *20 min",
					"Taping (kinesiologic, dynamic, rigid, elastic): 50 lei; *1 regiune"
				],
				packages: [
					"Pachet 4 masaje: 400 lei"
				]
			}
		]
	},
	{
		category: "IV. Servicii medicale",
		subcategories: [
			{
				items: [
					"Consultație ortopedie: 300 lei",
					"Consultație neurologie: 300 lei",
					"Control ortopedie: 150 lei",
					"Control neurologie: 150 lei",
					"Ablație fire: 100 lei",
					"Pansament steril: 50 lei",
					"Ecografie părți moi: 250 lei",
					"Puncție: 250 lei",
					"Infiltrație antiinflamator: 300 lei",
					"Infiltrație soluție vascoelastică: 1000 lei",
					"Infiltrație PRP: 1200 lei"
				],
				packages: [
					"Pachet 3 infiltrații PRP: 3000 lei"
				]
			}
		]
	},
	{
		category: "V. Telemedicină",
		subcategories: [
			{
				items: [
					"Consultație și elaborare plan terapeutic Sebastiano Nutarelli (Sports Rehab Swiss) + implementare plan tratament Andrei Cristea: 1000 lei"
				]
			}
		]
	},
	{
		category: "VI. Servicii nutriționale - dietoterapie",
		subcategories: [
			{
				items: [
					"Consultație inițială și analiză corporală (45-60 min): 200 lei",
					"Plan alimentar personalizat: 500 lei",
					"Plan vitaminizare / suplimentație sportivi: gratis",
					"Prelungire pachet dietoterapie: 400 lei",
					"Meniu standard 7 zile: 350 lei"
				],
				packages: [
					"Pachet 1 lună: 700 lei",
					"Pachet 3 luni: 1300 lei",
					"Prelungire pachet lunar: 300 lei",
					"Pachet dietoterapie – probleme medicale: 1000-1500 lei"
				]
			}
		]
	}
];

const $$Pricing = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = `Pre\u021Buri | ${SITE.title}`;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": pageTitle, "structuredData": {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://health-academy.ro/pricing",
    url: "https://health-academy.ro/pricing",
    name: "Pre\u021Buri | HealthAcademy",
    description: "Pre\u021Burile serviciilor noastra",
    isPartOf: {
      "@type": "WebSite",
      url: "https://health-academy.ro",
      name: "HealthAcademy",
      description: "Pre\u021Burile serviciilor HealthAcademy."
    },
    inLanguage: "ro-RO"
  } }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PricingSection", $$PricingSection, { "pricing": pricing })} ` })}`;
}, "/Users/vicus/Projects/HealthAcademy/src/pages/pricing.astro", void 0);

const $$file = "/Users/vicus/Projects/HealthAcademy/src/pages/pricing.astro";
const $$url = "/pricing";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Pricing,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
