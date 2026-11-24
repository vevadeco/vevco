import type { MetadataRoute } from "next";
import { caseStudyPages, publicPages, SITE_URL } from "@/lib/site";

const existingLastModified = new Date("2026-10-28T00:00:00.000Z");
const caseStudyLastModified = new Date("2026-11-24T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  const existing: { path: string; priority: number; changeFrequency: "weekly" | "monthly" }[] =
    [
      { path: "/", priority: 1, changeFrequency: "weekly" },
      ...publicPages.map((page) => ({
        path: page.href,
        priority: 0.8,
        changeFrequency: "monthly" as const,
      })),
    ];

  return [
    ...existing.map((entry) => ({
      url: entry.path === "/" ? SITE_URL : `${SITE_URL}${entry.path}`,
      lastModified: existingLastModified,
      changeFrequency: entry.changeFrequency,
      priority: entry.priority,
    })),
    ...caseStudyPages.map((page) => ({
      url: `${SITE_URL}${page.href}`,
      lastModified: caseStudyLastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
