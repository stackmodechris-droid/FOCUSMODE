import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { ARTICLES } from "@/lib/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = ["", "/learn-more", "/our-story", "/articles", "/faq", "/terms", "/privacy"].map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1.0 : path === "/learn-more" || path === "/our-story" ? 0.85 : 0.7,
  }));

  const articleRoutes = ARTICLES.map((a) => ({
    url: `${SITE.url}/articles/${a.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...articleRoutes];
}
