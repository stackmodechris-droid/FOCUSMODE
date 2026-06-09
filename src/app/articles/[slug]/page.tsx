import { OpenOfferButton } from "@/components/ui/limited-offer-popup";
import { LiquidGlassFilter } from "@/components/ui/liquid-glass-button";
import { TrackableLink } from "@/components/ui/trackable-link";
import { ARTICLES, getArticle } from "@/lib/articles";
import { GREENS, SITE } from "@/lib/site";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";


export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: article.metaTitle,
    description: article.metaDescription,
    keywords: article.keywords,
    alternates: { canonical: `/articles/${article.slug}` },
    openGraph: {
      type: "article",
      title: article.metaTitle,
      description: article.metaDescription,
      url: `${SITE.url}/articles/${article.slug}`,
      images: [
        {
          url: "/og/Front.png",
          width: 1200,
          height: 800,
          alt: `Focus Mode — ${article.title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.metaTitle,
      description: article.metaDescription,
      images: ["/og/Front.png"],
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription,
    image: article.image,
    datePublished: "2025-01-15",
    dateModified: "2025-06-01",
    author: { "@type": "Organization", name: SITE.legalName },
    publisher: {
      "@type": "Organization",
      name: SITE.legalName,
      logo: { "@type": "ImageObject", url: `${SITE.url}/logo.png` },
    },
    mainEntityOfPage: `${SITE.url}/articles/${article.slug}`,
  };

  const related = ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 2);

  return (
    <>
      <LiquidGlassFilter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <article className="bg-white pt-16 md:pt-20">
        <div className="mx-auto max-w-3xl px-5 py-16 md:py-20 md:px-8">
          <Link href="/articles" className="inline-flex items-center gap-2 font-mono-data text-xs uppercase tracking-widest text-gray-500 transition-colors hover:text-[#1e90ff]">
            <ArrowLeft className="h-4 w-4" /> All Articles
          </Link>

          <span className="mt-8 inline-block rounded-full border border-[#1e90ff]/20 bg-[#1e90ff]/10 px-3 py-1 font-mono-data text-[11px] uppercase tracking-widest text-[#1e90ff]">
            {article.category}
          </span>
          <h1 className="mt-5 font-heading text-4xl font-extrabold leading-[1.1] tracking-tight text-gray-900 md:text-5xl">
            {article.title}
          </h1>
          <p className="mt-4 font-mono-data text-xs uppercase tracking-widest text-gray-500">
            {article.readTime} min read · Focus Mode
          </p>

          <div className="relative mt-8 aspect-video w-full overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 shadow-sm">
            <Image src={article.image} alt={article.title} fill sizes="(max-width:768px) 100vw, 768px" className="object-cover" />
            <div className="absolute inset-0 bg-linear-to-t from-white/20 to-transparent" />
          </div>

          <p className="mt-10 text-lg font-medium leading-relaxed text-gray-700">{article.intro}</p>

          <div className="mt-10 space-y-10">
            {article.sections.map((s) => (
              <section key={s.heading}>
                <h2 className="font-heading text-2xl font-bold text-gray-900">{s.heading}</h2>
                {s.body.map((p, i) => (
                  <p key={i} className="mt-4 leading-relaxed text-gray-600">{p}</p>
                ))}
              </section>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm sm:p-8">
            <div className="text-center mb-6">
              <span className="inline-block rounded-full border border-[#1e90ff]/20 bg-[#1e90ff]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[1.5px] text-[#1e90ff]">
                Get the Edge
              </span>
              <h3 className="mt-3 font-heading text-2xl font-bold text-gray-900">
                Ready to think faster and perform better?
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Two products. One complete stack. Clinical focus + whole-plant energy.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col rounded-xl border border-[#1e90ff]/20 bg-white p-5 shadow-sm">
                <div className="text-[10px] font-bold uppercase tracking-[1.5px] text-[#7ec4ff] mb-1">Brain + Focus</div>
                <div className="font-heading text-lg font-bold text-gray-900">Focus Mode</div>
                <p className="mt-1.5 text-[12.5px] text-gray-600 leading-relaxed">
                  Ginkgo + Ginseng. 6+ hours crash-free focus. Zero caffeine. Zero fillers.
                </p>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="font-heading text-2xl font-bold text-gray-900">$39.99</span>
                  <span className="text-xs text-gray-400 line-through">$100</span>
                  <span className="rounded bg-bolt px-1.5 py-0.5 text-[10px] font-bold text-black">60% OFF</span>
                </div>
                <TrackableLink
                  href="/focus-mode"
                  price={SITE.price}
                  className="mt-4 inline-flex items-center justify-center rounded-xl bg-[#1e90ff] px-5 py-2.5 text-[13px] font-bold uppercase tracking-[1px] text-white hover:bg-[#1e90ff]/90 transition-colors"
                >
                  Get Focus Mode →
                </TrackableLink>
              </div>

              <div className="flex flex-col rounded-xl border border-[#16a34a]/20 bg-white p-5 shadow-sm">
                <div className="text-[10px] font-bold uppercase tracking-[1.5px] text-[#16a34a] mb-1">Whole-Plant Energy</div>
                <div className="font-heading text-lg font-bold text-gray-900">Super Energy Blend</div>
                <p className="mt-1.5 text-[12.5px] text-gray-600 leading-relaxed">
                  20+ plants, adaptogens &amp; superfoods. Clean all-day energy. 30 servings.
                </p>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="font-heading text-2xl font-bold text-gray-900">${GREENS.price}</span>
                  <span className="text-xs text-gray-400">30 servings</span>
                </div>
                <TrackableLink
                  href="/green-energy"
                  price={GREENS.price}
                  className="mt-4 inline-flex items-center justify-center rounded-xl bg-[#16a34a] px-5 py-2.5 text-[13px] font-bold uppercase tracking-[1px] text-white hover:bg-[#16a34a]/90 transition-colors"
                >
                  Get Super Energy Blend →
                </TrackableLink>
              </div>
            </div>

            <div className="mt-5 flex flex-col items-center gap-2">
              <OpenOfferButton />
              <p className="text-[10px] text-gray-500">Or open the popup — answer 1 question, get your personal reason to buy now.</p>
            </div>
          </div>
        </div>
      </article>

      <section className="border-t border-gray-100 bg-white">
        <div className="mx-auto max-w-3xl px-5 py-16 md:px-8">
          <h2 className="font-heading text-xl font-bold text-gray-900">Keep Reading</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {related.map((r) => (
              <Link key={r.slug} href={`/articles/${r.slug}`} className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-colors hover:border-[#1e90ff]/40">
                <span className="font-mono-data text-[11px] uppercase tracking-widest text-neural">{r.category}</span>
                <h3 className="mt-2 font-heading font-bold text-gray-900 group-hover:text-[#1e90ff]">{r.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
