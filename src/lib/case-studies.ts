import { CONTACT_EMAIL, SITE_URL } from "@/lib/site";

export const CASE_STUDY_DATE = "2026-11-24";

export const EARL_PATH = "/work/earls-landscaping-lead-engine";
export const FLOOR_PATH = "/work/floorbase";

export const EARL_DIR = "/images/work/earls-landscaping-lead-engine";
export const FLOOR_DIR = "/images/work/floorbase";

export const EARL_SIZE = { width: 1920, height: 1071 } as const;
export const FLOOR_SIZE = { width: 1920, height: 1080 } as const;
export const FLOOR_INVOICE_SIZE = { width: 1920, height: 570 } as const;

export const SAMPLE_CAPTION = "Screenshots use sample data.";
export const DEMO_CAPTION = "Screenshots use demo data.";

export function imageSrc(dir: string, file: string) {
  return `${dir}/${file}`;
}

export function vevadePublisher() {
  return {
    "@type": "Organization" as const,
    name: "Vevade",
    url: SITE_URL,
    email: CONTACT_EMAIL,
  };
}

export function breadcrumbJsonLd(items: readonly { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function articleJsonLd({
  headline,
  description,
  path,
  images,
  about,
}: {
  headline: string;
  description: string;
  path: string;
  images: readonly string[];
  about: object;
}) {
  const publisher = vevadePublisher();
  const url = `${SITE_URL}${path}`;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    datePublished: CASE_STUDY_DATE,
    dateModified: CASE_STUDY_DATE,
    image: images.map((src) => `${SITE_URL}${src}`),
    author: publisher,
    publisher,
    about,
    mainEntityOfPage: url,
    url,
  };
}

export function videoObjectJsonLd(video: {
  name: string;
  description: string;
  embedUrl: string;
  thumbnailUrl: string;
  uploadDate: string;
  duration: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: video.name,
    description: video.description,
    embedUrl: video.embedUrl,
    thumbnailUrl: video.thumbnailUrl,
    uploadDate: video.uploadDate,
    duration: video.duration,
  };
}
