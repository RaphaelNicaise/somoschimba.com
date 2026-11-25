import { CASES, CONTACT, SERVICES } from "@/data/site";

export const SITE_URL = "https://somoschimba.com";
export const SITE_NAME = "Chimba";

/** Título de la home (≈52 caracteres, palabra clave al principio, marca al final). */
export const TITLE = "Agencia creativa: branding, webs y Meta Ads | Chimba";
/** Descripción para Google (≈155 caracteres). */
export const DESCRIPTION =
  "Chimba es una agencia creativa en Argentina: identidad de marca, desarrollo web, redes, Meta Ads y dirección de arte para marcas que la gente elige.";
export const SHARE_TITLE = "Chimba, agencia creativa";
export const SHARE_DESCRIPTION = "Diseñamos marcas que la gente elige: identidad, desarrollo web, redes y Meta Ads.";

/** Datos estructurados (schema.org) que Google usa para entender quién es Chimba y qué hace. */
export function structuredData() {
  const org = {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organizacion`,
    name: SITE_NAME,
    alternateName: ["Chimba Creative Agency", "Chimba Agencia Creativa", "Somos Chimba"],
    url: SITE_URL,
    logo: `${SITE_URL}/assets/Logos/chimba-creative-agency.png`,
    image: `${SITE_URL}/opengraph-image.png`,
    description: DESCRIPTION,
    slogan: "Diseñamos marcas que la gente elige.",
    email: CONTACT.email,
    telephone: `+${CONTACT.whatsapp}`,
    areaServed: { "@type": "Country", name: "Argentina" },
    knowsLanguage: "es",
    sameAs: [CONTACT.instagram],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: `+${CONTACT.whatsapp}`,
      email: CONTACT.email,
      areaServed: "AR",
      availableLanguage: "es",
    },
    knowsAbout: [
      "Agencia creativa",
      "Branding",
      "Identidad de marca",
      "Rebranding",
      "Diseño de logo",
      "Desarrollo web",
      "Diseño web",
      "Meta Ads",
      "Publicidad en Instagram y Facebook",
      "Redes sociales",
      "Dirección de arte",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de Chimba",
      itemListElement: SERVICES.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.name, description: s.tagline, provider: { "@id": `${SITE_URL}/#organizacion` } },
      })),
    },
    subjectOf: CASES.map((c) => ({
      "@type": "CreativeWork",
      name: `${c.client} ${c.rest}`.trim(),
      description: c.text,
      url: `${SITE_URL}/#caso-${c.id}`,
      image: `${SITE_URL}${c.imgs[0][0]}`,
      keywords: c.tags.join(", "),
    })),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      org,
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#sitio`,
        url: SITE_URL,
        name: SITE_NAME,
        description: DESCRIPTION,
        inLanguage: "es-AR",
        publisher: { "@id": `${SITE_URL}/#organizacion` },
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/#inicio`,
        url: SITE_URL,
        name: TITLE,
        description: DESCRIPTION,
        inLanguage: "es-AR",
        isPartOf: { "@id": `${SITE_URL}/#sitio` },
        about: { "@id": `${SITE_URL}/#organizacion` },
        primaryImageOfPage: `${SITE_URL}/opengraph-image.png`,
      },
    ],
  };
}
