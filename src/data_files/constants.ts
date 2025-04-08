import ogImageSrc from '@images/social.png';

export const SITE = {
  title: 'HealthAcademy',
  tagline: 'Profesionalism, Pasiune și Respect',
  description: 'Servicii de recuperare medicală și pregătire sportivă',
  description_short: 'Centru de excelență în recuperare și performanță sportivă, Centru de excelență în ortopedie',
  url: 'https://health-academy.ro',
  author: 'Vasile Pop',
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    inLanguage: 'ro-RO',
    '@id': SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      '@type': 'WebSite',
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: 'ro_RO',
  type: 'website',
  url: SITE.url,
  title: `${SITE.title}: Servicii de recuperare medicală și pregătire sportivă`,
  description: 'Centru de excelență în recuperare și performanță sportivă, Centru de excelență în ortopedie',
  image: ogImageSrc,
};
