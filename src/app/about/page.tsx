import type { Metadata } from "next";
import Image from "next/image";
import { getPageContentWithHtml } from "@/lib/markdown";

export const metadata: Metadata = {
  title: "Who We Are",
  description:
    "Learn about the Mendocino County Democratic Central Committee and our mission to promote progressive values.",
};

export default async function AboutPage() {
  const { data, contentHtml } = await getPageContentWithHtml("about");

  return (
    <>
      {/* Page Header */}
      <section className="relative overflow-hidden bg-dem-blue py-16 sm:py-20">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-community.jpg"
            alt="Community gathering"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dem-blue via-dem-blue/95 to-dem-blue-dark/90" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
            {data.title}
          </h1>
          <p className="mt-4 text-xl text-white/80">{data.subtitle}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Feature image */}
          <div className="relative mb-12 h-64 overflow-hidden rounded-xl sm:h-80">
            <Image
              src="/images/redwoods.jpg"
              alt="Mendocino County redwood forests"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </div>
      </section>
    </>
  );
}
