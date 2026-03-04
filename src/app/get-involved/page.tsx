import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getPageContentWithHtml } from "@/lib/markdown";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Find ways to get involved with the Mendocino County Democratic Party — volunteer, attend meetings, run for office.",
};

export default async function GetInvolvedPage() {
  const { data, contentHtml } = await getPageContentWithHtml("get-involved");

  return (
    <>
      {/* Page Header */}
      <section className="relative overflow-hidden bg-dem-blue py-16 sm:py-20">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-community.jpg"
            alt="Community involvement"
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

      {/* Action Cards */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Volunteer",
                description:
                  "Help with voter registration, phone banking, canvassing, and events.",
                icon: (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>
                ),
                link: "/contact",
                linkText: "Sign Up",
              },
              {
                title: "Attend Meetings",
                description:
                  "Join our monthly Central Committee meetings at the Ukiah Valley Conference Center.",
                icon: (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" /></svg>
                ),
                link: "/events",
                linkText: "View Events",
              },
              {
                title: "Join a Club",
                description:
                  "Connect with Democrats in your area through one of our chartered clubs.",
                icon: (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" /></svg>
                ),
                link: "/clubs",
                linkText: "Find a Club",
              },
              {
                title: "Donate",
                description:
                  "Support our efforts to register voters and elect Democrats in Mendocino County.",
                icon: (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>
                ),
                link: "/donate",
                linkText: "Donate Now",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="group rounded-xl border border-dem-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 inline-flex rounded-lg bg-dem-blue/10 p-3 text-dem-blue">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-dem-gray-900">
                  {card.title}
                </h3>
                <p className="mt-3 text-dem-gray-600">{card.description}</p>
                <Link
                  href={card.link}
                  className="mt-6 inline-flex items-center text-sm font-semibold text-dem-blue hover:text-dem-blue-light"
                >
                  {card.linkText} &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mendocino scenery break */}
      <section className="relative h-64 sm:h-80">
        <Image
          src="/images/redwoods.jpg"
          alt="Mendocino County redwood forests"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dem-gray-50 to-transparent" />
      </section>

      {/* Full Content */}
      <section className="bg-dem-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </div>
      </section>

      {/* Register to Vote CTA */}
      <section className="relative overflow-hidden bg-dem-red py-16">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-vote.jpg"
            alt="Voting"
            fill
            className="object-cover opacity-15"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white">
            Are You Registered to Vote?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Make sure your voter registration is up to date. It only takes a few
            minutes.
          </p>
          <a
            href="https://registertovote.ca.gov/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center rounded-lg bg-white px-8 py-4 text-lg font-bold text-dem-red shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
          >
            Register to Vote
          </a>
        </div>
      </section>
    </>
  );
}
