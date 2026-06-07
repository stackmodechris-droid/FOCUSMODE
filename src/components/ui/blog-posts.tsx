import { ARTICLES } from "@/lib/articles";
import { cn } from "@/lib/utils";
import { MoveRight, Star } from "lucide-react";
import Link from "next/link";

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
            className={cn(
              "group relative row-span-1 flex size-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12)] max-md:h-[300px]",
              isPrimary && "md:col-span-2 md:row-span-2 lg:col-span-1"
            )}
          >
            {/* Image */}
            <div
              className="relative h-[180px] w-full shrink-0 overflow-hidden bg-gray-100 sm:h-[200px]"
              style={{ backgroundImage: `url(${post.image})`, backgroundSize: "cover", backgroundPosition: "center" }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            {/* Content */}
            <article className="flex flex-1 flex-col justify-between p-5 sm:p-6">
              <div className="flex flex-col gap-3">
                <span className="w-fit rounded bg-bolt/90 px-2.5 py-px text-[10px] font-semibold tracking-[1px] text-black">
                  {post.category}
                </span>
                <h3 className={cn("font-heading font-bold leading-tight text-gray-900", isPrimary ? "text-2xl sm:text-3xl" : "text-xl")}>
                  {post.title}
                </h3>
                <div className="flex items-center gap-2 text-gray-500">
                  <span className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-bolt text-bolt" />
                    ))}
                  </span>
                  <span className="text-xs tracking-wider text-gray-400">{post.readTime} min read</span>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 text-sm font-medium text-neural">
                Read article
                <MoveRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2} />
              </div>
            </article>
          </Link>
        );
      })}
    </div>
  );
}
