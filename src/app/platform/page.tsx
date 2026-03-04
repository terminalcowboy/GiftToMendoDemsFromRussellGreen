import type { Metadata } from "next";
import Image from "next/image";
import { getPageContentWithHtml } from "@/lib/markdown";

export const metadata: Metadata = {
  title: "What We Stand For",
  description:
    "The platform and progressive values of the Mendocino County Democratic Party.",
};

export default async function PlatformPage() {
  const { data, contentHtml } = await getPageContentWithHtml("platform");

  return (
    <>
      {/* Page Header */}
      <section className="relative overflow-hidden bg-dem-blue py-16 sm:py-20">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-vote.jpg"
            alt="Democracy and civic engagement"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dem-blue via-dem-blue/95 to-dem-blue-dark/90" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl text-center">
            {data.title}
          </h1>
          <p className="mt-4 text-xl text-white/80 text-center">{data.subtitle}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </div>
      </section>
    </>
  );
}
