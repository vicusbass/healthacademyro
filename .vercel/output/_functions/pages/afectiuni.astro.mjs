/* empty css                                     */
import { a as createComponent, r as renderComponent, b as renderTemplate } from '../chunks/astro/server_B6wTgGbC.mjs';
import 'kleur/colors';
import { a as $$MainLayout, S as SITE } from '../chunks/MainLayout_DNLLKX4v.mjs';
import { $ as $$MainSection, a as $$RightSection } from '../chunks/RightSection_MZUaDcyt.mjs';
export { renderers } from '../renderers.mjs';

const data = [
	{
		name: "Afectiuni si traumatisme ale genunchiului",
		details: "leziuni si reconstructii ligamentare (LIA, LIP, LCM, LCL), leziuni si reparatii meniscale, leziuni si reconstructii osteo-condrale, sindrom dureros patelo-femural, luxatii si malpozitionare patelofemurala"
	},
	{
		name: "Artrofibroza"
	},
	{
		name: "Afectiuni si traumatisme ale umarului",
		details: "leziuni ale coafei rotatorilor, leziuni de labrum, luxatii, impingement"
	},
	{
		name: "Entorse de glezna si antepicior"
	},
	{
		name: "Entorse de pumn"
	},
	{
		name: "Afectiuni ale cotului",
		details: "entorse, bursita, epicondilita mediala / laterala"
	},
	{
		name: "Afectiuni ale soldului",
		details: "necroze, impingement intern / extern"
	},
	{
		name: "Afectiuni degenerative",
		details: "protezari, gonartroza, coxatroza, artroza umarului"
	},
	{
		name: "Fracturi si traumatisme",
		details: "tratament conservator sau stabilizate chirurgical. Fracturi tibio-peroniere / bimaleolare / trimaleolare, fracturi de femur / cap femural, fracturi de cap humeral, fracturi de platou tibial, fracturi ale antepiciorului, fracturi ale pumnului si mainii, fracturi de bazin si vertebrale"
	},
	{
		name: "Contuzii osoase si de tesuturi moi"
	},
	{
		name: "Tendinopatie Achiliana"
	},
	{
		name: "Tendinopatie patelara"
	},
	{
		name: "Tendinopatie cvadricipitala"
	},
	{
		name: "Tendinopatie a ischiogambierilor"
	},
	{
		name: "Tendinopatie a adductorilor"
	},
	{
		name: "Tendinopatie a supraspinosului / infraspinosului / subscapularului"
	},
	{
		name: "Fasciita plantara"
	},
	{
		name: "Leziuni musculare ale dreptului femural"
	},
	{
		name: "Leziuni musculare ale adductorilor",
		details: "lung si scurt"
	},
	{
		name: "Leziuni musculare ale ischiogambierilor"
	},
	{
		name: "Leziuni musculare ale iliopsoasului"
	},
	{
		name: "Leziuni musculare ale gambei",
		details: "gastrocnemieni, solear"
	},
	{
		name: "Fibroze si cicatrici cronice ale tesuturilor moi"
	},
	{
		name: "Disfunctii fasciale"
	},
	{
		name: "Sindroame de compartiment"
	},
	{
		name: "Dureri de spate"
	},
	{
		name: "Tulburari de statica vertebrala / tulburari posturale",
		details: "hiperlordoze, cifoze, scolioze, asimetrii ale bazinului, platfus"
	},
	{
		name: "Dureri si afectiuni cranio-cervicale"
	},
	{
		name: "Dureri de cap, faciale",
		details: "temporo-mandibulare"
	},
	{
		name: "Discopatii",
		details: "hernii de disc lombare, cervicale, stenoze"
	},
	{
		name: "Sindroame miofasciale dureroase",
		details: "reprezita peste 90% din durerile resimtite pe parcursul vietii fiind adesea mis-diagnosticate. Resimtite ca pattern-uri tipice de durere care pot replica dureri articulare, musculare, neurologice."
	},
	{
		name: "Contracturi musculare / hipertonicitate, suprasolicitare"
	},
	{
		name: "Disfunctii si asimetrii biomecanice",
		details: "de forta, stabilitate si mobilitate, tulburari ale lantului kinetic"
	}
];

const $$Afectiuni = createComponent(($$result, $$props, $$slots) => {
  const afflictions = data;
  const pageTitle = `Afec\u021Biuni | ${SITE.title}`;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": pageTitle, "structuredData": {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://health-academy.ro/afectiuni",
    url: "https://health-academy.ro/afectiuni",
    name: "Afec\u021Biuni / Ce trat\u0103m? | HealthAcademy",
    description: "O lista a c\xE2torva dintre afec\u021Biunile pe care le trat\u0103m.",
    isPartOf: {
      "@type": "WebSite",
      url: "https://health-academy.ro",
      name: "HealthAcademy",
      description: "Servicii profesioniste de recuperare medicala."
    },
    inLanguage: "ro-RO"
  } }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "MainSection", $$MainSection, { "title": "Afec\u021Biuni / Ce trat\u0103m?", "subTitle": "O lista a c\xE2torva dintre afec\u021Biunile pe care le trat\u0103m.", "btnExists": true, "btnTitle": "Contacteaza-ne", "btnURL": "/contact" })} ${afflictions.map((item) => renderTemplate`${renderComponent($$result2, "RightSection", $$RightSection, { "title": item.name, "subTitle": item.details, "single": true })}`)}` })}`;
}, "/Users/vicus/Projects/HealthAcademy/src/pages/afectiuni.astro", void 0);

const $$file = "/Users/vicus/Projects/HealthAcademy/src/pages/afectiuni.astro";
const $$url = "/afectiuni";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Afectiuni,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
