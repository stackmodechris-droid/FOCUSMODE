import { OpenOfferButton } from "@/components/ui/limited-offer-popup";
import { LiquidGlassButton, LiquidGlassFilter } from "@/components/ui/liquid-glass-button";
import { ARTICLES, getArticle } from "@/lib/articles";
import { SITE } from "@/lib/site";
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
          url: article.image,
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
      images: [article.image],
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

      <article className="pt-16 md:pt-20">
        <div className="mx-auto max-w-3xl px-5 py-16 md:py-20 md:px-8">
          <Link href="/articles" className="inline-flex items-center gap-2 font-mono-data text-xs uppercase tracking-widest text-silver/60 transition-colors hover:text-bolt">
            <ArrowLeft className="h-4 w-4" /> All Articles
          </Link>

          <span className="mt-8 inline-block border border-bolt/40 bg-bolt/10 px-3 py-1 font-mono-data text-[11px] uppercase tracking-widest text-bolt">
            {article.category}
          </span>
          <h1 className="mt-5 font-heading text-4xl font-extrabold leading-[1.1] tracking-tight text-white md:text-5xl">
            {article.title}
          </h1>
          <p className="mt-4 font-mono-data text-xs uppercase tracking-widest text-silver/50">
            {article.readTime} min read · Focus Mode
          </p>

          <div className="relative mt-8 aspect-video w-full overflow-hidden border border-border">
            <Image src={article.image} alt={article.title} fill sizes="(max-width:768px) 100vw, 768px" className="object-cover" />
            <div className="absolute inset-0 bg-linear-to-t from-surface-dim/70 to-transparent" />
          </div>

          <p className="mt-10 text-lg font-medium leading-relaxed text-silver/85">{article.intro}</p>

          <div className="mt-10 space-y-10">
            {article.sections.map((s) => (
              <section key={s.heading}>
                <h2 className="font-heading text-2xl font-bold text-white">{s.heading}</h2>
                {s.body.map((p, i) => (
                  <p key={i} className="mt-4 leading-relaxed text-silver/70">{p}</p>
                ))}
              </section>
            ))}
          </div>

          {/* Inline CTA */}
          <div className="mt-12 border border-bolt/30 bg-surface-container-low p-8 text-center">
            <h3 className="font-heading text-2xl font-bold text-white">Ready to think faster?</h3>
            <p className="mt-3 text-silver/70">
              Shop the all-natural formula that powers elite focus. Straight from nature. No fillers.
            </p>
            <div className="mt-6 flex justify-center">
              <LiquidGlassButton href="/focus-mode">Get Focus Mode</LiquidGlassButton>
              <OpenOfferButton />
            </div>
          </div>
        </div>
      </article>

      <section className="border-t border-border bg-surface-dim">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">

        </div>
      </section>

      {/* Related */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-3xl px-5 py-16 md:px-8">
          <h2 className="font-heading text-xl font-bold text-white">Keep Reading</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {related.map((r) => (
              <Link key={r.slug} href={`/articles/${r.slug}`} className="group border border-border bg-surface-container-low p-5 transition-colors hover:border-bolt/50">
                <span className="font-mono-data text-[11px] uppercase tracking-widest text-neural">{r.category}</span>
                <h3 className="mt-2 font-heading font-bold text-white group-hover:text-bolt">{r.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
