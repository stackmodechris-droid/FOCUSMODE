import { GOOGLE_REVIEW_URL } from "@/lib/site";
import { Star } from "lucide-react";

export function GoogleReviewBadge({ className = "" }: { className?: string }) {
  return (
    <a
      href={GOOGLE_REVIEW_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-full border border-yellow-200 bg-yellow-50 px-4 py-2 text-xs font-bold uppercase tracking-[1px] text-yellow-800 transition hover:border-yellow-300 hover:bg-yellow-100 ${className}`}
      aria-label="Read Focus Mode Supplements Google review"
    >
      <span className="flex" aria-hidden>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
        ))}
      </span>
      1 Google Review
    </a>
  );
}
