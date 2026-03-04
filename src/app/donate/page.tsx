import type { Metadata } from "next";
import Image from "next/image";
import { getPageContentWithHtml } from "@/lib/markdown";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support the Mendocino County Democratic Central Committee with your contribution.",
};

export default async function DonatePage() {
  const { data, contentHtml } = await getPageContentWithHtml("donate");

  return (
    <>
      {/* Page Header */}
      <section className="relative overflow-hidden bg-dem-blue py-16 sm:py-20">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-vote.jpg"
            alt="Democracy and voting"
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

      {/* Donate Content */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="mb-12 text-center text-lg text-dem-gray-600">{data.introText}</p>

          {/* Donation Options */}
          <div className="grid gap-8 sm:grid-cols-3">
            {/* PayPal */}
            <div className="rounded-xl border-2 border-dem-gray-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-dem-blue hover:shadow-lg">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-dem-blue/10">
                <svg className="h-8 w-8 text-dem-blue" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-dem-gray-900">PayPal</h3>
              <p className="mt-3 text-sm text-dem-gray-600">
                Quick and secure online donations
              </p>
              <a
                href={data.paypalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-dem-blue px-6 py-3 font-semibold text-white transition-colors hover:bg-dem-blue-light"
              >
                Donate via PayPal
              </a>
            </div>

            {/* ActBlue */}
            <div className="rounded-xl border-2 border-dem-gray-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-dem-blue hover:shadow-lg">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-dem-blue/10">
                <svg className="h-8 w-8 text-dem-blue" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" /></svg>
              </div>
              <h3 className="text-xl font-bold text-dem-gray-900">ActBlue</h3>
              <p className="mt-3 text-sm text-dem-gray-600">
                The trusted Democratic donation platform
              </p>
              <a
                href={data.actblueLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-dem-blue px-6 py-3 font-semibold text-white transition-colors hover:bg-dem-blue-light"
              >
                Donate via ActBlue
              </a>
            </div>

            {/* By Check */}
            <div className="rounded-xl border-2 border-dem-gray-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-dem-blue hover:shadow-lg">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-dem-blue/10">
                <svg className="h-8 w-8 text-dem-blue" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
              </div>
              <h3 className="text-xl font-bold text-dem-gray-900">By Check</h3>
              <p className="mt-3 text-sm text-dem-gray-600">
                Make payable to:
                <br />
                <strong>{data.checkPayableTo}</strong>
              </p>
              <p className="mt-3 text-sm text-dem-gray-600">
                Mail to:
                <br />
                <strong>{data.checkMailTo}</strong>
              </p>
            </div>
          </div>

          {/* Impact section */}
          <div className="relative mt-16 overflow-hidden rounded-xl">
            <Image
              src="/images/3.jpg"
              alt="Community event"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-dem-blue/85" />
            <div className="relative px-8 py-12 text-center text-white">
              <h3 className="text-2xl font-bold">Your Donation Makes a Difference</h3>
              <p className="mx-auto mt-4 max-w-2xl text-white/90">
                Every dollar supports voter registration drives, candidate training,
                community outreach, and the fight for Democratic values in Mendocino County.
              </p>
            </div>
          </div>

          {/* Additional content */}
          <div className="mt-16">
            <div
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
