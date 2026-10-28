import type { MetadataRoute } from "next";
import { publicPages, SITE_URL } from "@/lib/site";

const lastModified = new Date("2026-10-28T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: { path: string; priority: number; changeFrequency: "weekly" | "monthly" }[] =
    [
      { path: "/", priority: 1, changeFrequency: "weekly" },
      ...publicPages.map((page) => ({
        path: page.href,
        priority: 0.8,
        changeFrequency: "monthly" as const,
      })),
    ];

  return entries.map((entry) => ({
    url: entry.path === "/" ? SITE_URL : `${SITE_URL}${entry.path}`,
    lastModified,
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));
}
