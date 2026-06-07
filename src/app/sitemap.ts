import { ARTICLES } from "@/lib/articles";
import { SITE } from "@/lib/site";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = ["", "/shop", "/focus-mode", "/green-energy", "/learn-more", "/our-story", "/articles", "/faq", "/terms", "/privacy"].map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority:
      path === "" ? 1.0 :
      path === "/shop" || path === "/focus-mode" || path === "/green-energy" ? 0.95 :
      path === "/learn-more" || path === "/our-story" ? 0.85 :
      0.7,
  }));

  const articleRoutes = ARTICLES.map((a) => ({
    url: `${SITE.url}/articles/${a.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...articleRoutes];
}
