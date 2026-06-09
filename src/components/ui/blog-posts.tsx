import { ARTICLES } from "@/lib/articles";
import { GREENS, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Clock, MoveRight, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { TrackableLink } from "./trackable-link";

export function ArticlesGrid({
  limit,
  className,
  variant = "dark",
}: {
  limit?: number;
  className?: string;
  variant?: "light" | "dark";
}) {
  const posts = limit ? ARTICLES.slice(0, limit) : ARTICLES;
  const isDark = variant === "dark";

  return (
    <div className={cn("grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {posts.map((post, index) => {
        const isGreens =
          post.category === "Health & Nutrition" ||
          post.slug.includes("greens") ||
          post.slug.includes("gut") ||
          post.slug.includes("sleep") ||
          post.slug.includes("natural-energy") ||
          post.slug.includes("adaptogens") ||
          post.slug.includes("pre-workout") ||
          post.slug.includes("plant-energy");
        const accentColor = isGreens ? "#16a34a" : "#1e90ff";
        const accentText = isGreens ? (isDark ? "text-[#7ee6a0]" : "text-[#16a34a]") : (isDark ? "text-[#7ec4ff]" : "text-[#1e90ff]");

        return (
          <div
            key={post.slug}
            className={cn(
              "group flex flex-col overflow-hidden rounded-2xl border transition-all duration-300",
              isDark
                ? "border-white/10 bg-[#111414] hover:border-white/25 hover:shadow-[0_16px_48px_-12px_rgba(0,0,0,0.5)]"
                : "border-gray-200 bg-white hover:shadow-[0_16px_48px_-12px_rgba(0,0,0,0.12)]",
              index === 0 && "sm:col-span-2 lg:col-span-1"
            )}
          >
            {/* Top accent bar */}
            <div className="h-[3px] w-full shrink-0" style={{ background: accentColor }} />

            {/* Image */}
            <Link href={`/articles/${post.slug}`} className="block">
              <div className={cn("relative h-[175px] w-full overflow-hidden", isDark ? "bg-gray-900" : "bg-gray-100")}>
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority={index < 3}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />
                {/* Category badge over image */}
                <span
                  className="absolute bottom-3 left-3 rounded px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[1px] text-white"
                  style={{ background: accentColor }}
                >
                  {post.category}
                </span>
              </div>
            </Link>

            {/* Content */}
            <div className="flex flex-1 flex-col p-4 sm:p-5">
              {/* Read time */}
              <div className={cn("mb-2 flex items-center gap-1.5 text-[11px]", isDark ? "text-white/40" : "text-gray-400")}>
                <Clock className="h-3 w-3 shrink-0" />
                {post.readTime} min read
              </div>

              {/* Title */}
              <Link href={`/articles/${post.slug}`} className="block">
                <h3
                  className={cn(
                    "font-heading text-[15px] font-bold leading-snug tracking-[-0.2px] transition-colors",
                    isDark
                      ? "text-white group-hover:text-white/90"
                      : "text-gray-900 group-hover:text-gray-700"
                  )}
                >
                  {post.title}
                </h3>
              </Link>

              {/* Excerpt */}
              <p className={cn("mt-2 text-[12.5px] leading-relaxed line-clamp-2", isDark ? "text-white/55" : "text-gray-500")}>
                {post.excerpt}
              </p>

              {/* Read link */}
              <Link
                href={`/articles/${post.slug}`}
                className={cn("mt-3 inline-flex items-center gap-1.5 text-[12px] font-semibold transition-colors", accentText)}
              >
                Read article
                <MoveRight className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2} />
              </Link>

              {/* Buy buttons — both products */}
              <div className="mt-4 flex flex-wrap gap-2 border-t pt-4" style={{ borderColor: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)" }}>
                <TrackableLink
                  href="/focus-mode"
                  price={SITE.price}
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-lg border border-[#1e90ff]/30 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.8px] transition-colors",
                    isDark ? "bg-[#1e90ff]/15 text-[#7ec4ff] hover:bg-[#1e90ff]/25" : "bg-[#1e90ff]/10 text-[#1e90ff] hover:bg-[#1e90ff]/15"
                  )}
                >
                  <ShoppingCart className="h-3 w-3 shrink-0" />
                  Focus Mode
                </TrackableLink>
                <TrackableLink
                  href="/green-energy"
                  price={GREENS.price}
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-lg border border-[#16a34a]/30 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.8px] transition-colors",
                    isDark ? "bg-[#16a34a]/15 text-[#7ee6a0] hover:bg-[#16a34a]/25" : "bg-[#16a34a]/10 text-[#16a34a] hover:bg-[#16a34a]/15"
                  )}
                >
                  <ShoppingCart className="h-3 w-3 shrink-0" />
                  Super Energy
                </TrackableLink>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
