import Link from "next/link";
import { cn } from "@/lib/utils";
import { MoveRight, Star } from "lucide-react";
import { ARTICLES } from "@/lib/articles";

export function ArticlesGrid({ limit, className }: { limit?: number; className?: string }) {
  const posts = limit ? ARTICLES.slice(0, limit) : ARTICLES;

  return (
    <div
      className={cn(
        "grid h-auto grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-[1fr_0.6fr] lg:auto-rows-[minmax(220px,1fr)]",
        className
      )}
    >
      {posts.map((post, index) => {
        const isPrimary = index === 0;
        return (
          <Link
            key={post.slug}
            href={`/articles/${post.slug}`}
            style={{ backgroundImage: `url(${post.image})` }}
            className={cn(
              "group relative row-span-1 flex size-full flex-col justify-end overflow-hidden rounded-2xl bg-cover bg-center bg-no-repeat p-7 text-white transition-all duration-300 hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.6)] max-md:h-[300px]",
              isPrimary && "md:col-span-2 md:row-span-2 lg:col-span-1"
            )}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-surface-dim via-surface-dim/60 to-transparent transition-all duration-500 group-hover:from-surface-dim" />
            <article className="relative z-10 flex items-end">
              <div className="flex flex-1 flex-col gap-3">
                <span className="w-fit rounded bg-bolt/90 px-2.5 py-px text-[10px] font-semibold tracking-[1px] text-black">
                  {post.category}
                </span>
                <h3 className={cn("font-heading font-bold leading-tight", isPrimary ? "text-3xl" : "text-xl")}>
                  {post.title}
                </h3>
                <div className="flex items-center gap-2 text-silver/70">
                  <span className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-bolt text-bolt" />
                    ))}
                  </span>
                  <span className="text-xs tracking-wider text-white/60">{post.readTime} min read</span>
                </div>
              </div>
              <MoveRight className="h-8 w-8 shrink-0 text-bolt transition-transform duration-300 group-hover:translate-x-2" strokeWidth={1.5} />
            </article>
          </Link>
        );
      })}
    </div>
  );
}
