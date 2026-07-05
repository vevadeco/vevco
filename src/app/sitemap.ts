const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://vevadeco.com";

export default function sitemap() {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
  ];
}
