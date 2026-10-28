export const SITE_URL = "https://www.vevade.com";
export const SITE_NAME = "Vevade";
export const CONTACT_EMAIL = "sales@vevade.com";
export const CONTACT_PHONE_DISPLAY = "289-855-0968";
export const CONTACT_PHONE_SCHEMA = "+1-289-855-0968";
export const CONTACT_PHONE_TEL = "+1-289-855-0968";

export const HOME_TITLE =
  "Web Design & Shopify Development in Hamilton | Vevade";
export const HOME_DESCRIPTION =
  "Since 2012, Vevade builds websites, web apps, and Shopify stores for Hamilton, Burlington, Oakville, St. Catharines, and Niagara. Projects from $1,999.";

export const publicPages = [
  {
    href: "/web-design-hamilton",
    label: "Hamilton web design",
    summary: "Custom websites and Shopify stores for Hamilton businesses.",
  },
  {
    href: "/web-design-burlington",
    label: "Burlington and Oakville web design",
    summary: "Websites and online stores for Burlington and Oakville companies.",
  },
  {
    href: "/web-design-st-catharines",
    label: "St. Catharines and Niagara web design",
    summary: "Web design for St. Catharines and the Niagara region.",
  },
  {
    href: "/shopify-development",
    label: "Shopify development",
    summary: "Shopify setup, themes, migrations, and e-commerce apps.",
  },
] as const;

type Faq = {
  question: string;
  answer: string;
};

function inOntario(type: "City" | "AdministrativeArea", name: string) {
  return {
    "@type": type,
    name,
    containedInPlace: {
      "@type": "AdministrativeArea",
      name: "Ontario",
      containedInPlace: {
        "@type": "Country",
        name: "Canada",
      },
    },
  };
}

export const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["ProfessionalService", "LocalBusiness"],
  name: SITE_NAME,
  url: SITE_URL,
  email: CONTACT_EMAIL,
  telephone: CONTACT_PHONE_SCHEMA,
  foundingDate: "2012",
  priceRange: "Starting at $1,999",
  description:
    "Hamilton, Ontario web design, web development, and Shopify e-commerce studio founded in 2012.",
  areaServed: [
    inOntario("City", "Hamilton"),
    inOntario("City", "Burlington"),
    inOntario("City", "Oakville"),
    inOntario("City", "St. Catharines"),
    inOntario("AdministrativeArea", "Niagara Region"),
  ],
  serviceType: [
    "Web Development",
    "Web Design",
    "Shopify Development",
    "E-commerce Development",
  ],
  sameAs: ["https://www.manta.com/c/m1hld5g"],
};

export function faqPageJsonLd(faqs: readonly Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
