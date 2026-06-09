import { TrackableLink } from "@/components/ui/trackable-link";
import { SITE } from "@/lib/site";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found | Focus Mode",
  description: "The page you're looking for doesn't exist. Explore Focus Mode supplements or return home.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center bg-white px-5 py-20 text-center text-gray-900">
      <h1 className="font-heading text-6xl font-extrabold tracking-[-3px] text-gray-900 md:text-8xl">
        404
      </h1>
      <p className="mt-4 text-lg text-gray-500">
        This page doesn&apos;t exist. Let&apos;s get you back on track.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link href="/" className="premium-cta px-8">
          Go Home
        </Link>
        <TrackableLink href="/shop" price={SITE.price} className="premium-cta-secondary px-8">
          Shop Now
        </TrackableLink>
      </div>
      <p className="mt-6 text-sm text-gray-400">
        Need help? Email us at{" "}
        <a href={`mailto:${SITE.email}`} className="text-blue-600 hover:underline">
          {SITE.email}
        </a>
      </p>
    </section>
  );
}
