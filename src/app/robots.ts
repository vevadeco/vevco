import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

const publicRules = {
  allow: "/",
  disallow: ["/admin", "/api/"],
};

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", ...publicRules },
      { userAgent: "OAI-SearchBot", ...publicRules },
      { userAgent: "GPTBot", ...publicRules },
      { userAgent: "ChatGPT-User", ...publicRules },
      { userAgent: "Bingbot", ...publicRules },
      { userAgent: "Googlebot", ...publicRules },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
