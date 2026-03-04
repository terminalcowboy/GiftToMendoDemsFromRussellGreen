import type { Metadata } from "next";
import Image from "next/image";
import { getCollectionItems } from "@/lib/markdown";

export const metadata: Metadata = {
  title: "Elected Officials",
  description:
    "Democratic elected officials representing Mendocino County at the federal, state, county, and local level.",
};

interface Official {
  slug: string;
  data: {
    name: string;
    title: string;
    party: string;
    level: string;
    order: number;
    image: string;
    website: string;
  };
  content: string;
}

export default function OfficialsPage() {
  const officials = getCollectionItems("officials").sort(
    (a, b) => (a.data.order || 99) - (b.data.order || 99)
  ) as unknown as Official[];

  const federal = officials.filter((o) => o.data.level === "federal");
  const state = officials.filter((o) => o.data.level === "state");
  const county = officials.filter((o) => o.data.level === "county");
  const local = officials.filter((o) => o.data.level === "local");

  const renderOfficialCard = (official: Official) => (
    <div
      key={official.slug}
      className="overflow-hidden rounded-xl border border-dem-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      {official.data.image && (
        <div className="flex items-center justify-center bg-dem-gray-100 p-4">
          <Image
            src={official.data.image}
            alt={official.data.name}
            width={120}
            height={120}
            className="h-28 w-28 rounded-full object-cover"
          />
        </div>
      )}
      <div className="bg-gradient-to-r from-dem-blue to-dem-blue-light p-4">
        <h3 className="text-lg font-bold text-white">{official.data.name}</h3>
        <p className="text-sm text-white/80">{official.data.title}</p>
      </div>
      <div className="p-6">
        <p className="text-sm text-dem-gray-600">{official.content}</p>
        {official.data.website && (
          <a
            href={official.data.website}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-dem-blue hover:text-dem-blue-light"
          >
            Official Website
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
          </a>
        )}
      </div>
    </div>
  );

  const renderVacantCard = (official: Official) => (
    <div
      key={official.slug}
      className="overflow-hidden rounded-xl border-2 border-dashed border-dem-gray-300 bg-dem-gray-50 shadow-sm"
    >
      {official.data.image && (
        <div className="flex items-center justify-center bg-dem-gray-100 p-4">
          <Image
            src={official.data.image}
            alt={official.data.name}
            width={120}
            height={120}
            className="h-28 w-28 rounded-full object-cover"
          />
        </div>
      )}
      <div className="bg-gradient-to-r from-dem-gray-600 to-dem-gray-700 p-4">
        <h3 className="text-lg font-bold text-white">{official.data.name}</h3>
        <p className="text-sm text-white/80">{official.data.title}</p>
      </div>
      <div className="p-6">
        <p className="text-sm text-dem-gray-600">{official.content}</p>
      </div>
    </div>
  );

  return (
    <>
      {/* Page Header */}
      <section className="relative overflow-hidden bg-dem-blue py-16 sm:py-20">
        <div className="absolute inset-0">
          <Image
            src="/images/town-hall.jpg"
            alt="Town hall meeting"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dem-blue via-dem-blue/95 to-dem-blue-dark/90" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
            Elected Officials
          </h1>
          <p className="mt-4 text-xl text-white/80">
            Democratic officials representing Mendocino County
          </p>
        </div>
      </section>

      {/* Officials */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Federal */}
          {federal.length > 0 && (
            <div className="mb-16">
              <h2 className="mb-8 flex items-center gap-3 text-2xl font-bold text-dem-blue">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-dem-blue/10 text-lg">
                  <svg className="h-5 w-5 text-dem-blue" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" /></svg>
                </span>
                Federal Officials
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {federal.map(renderOfficialCard)}
              </div>
            </div>
          )}

          {/* State */}
          {state.length > 0 && (
            <div className="mb-16">
              <h2 className="mb-8 flex items-center gap-3 text-2xl font-bold text-dem-blue">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-dem-blue/10 text-lg">
                  <svg className="h-5 w-5 text-dem-blue" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" /></svg>
                </span>
                State Officials
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {state.map(renderOfficialCard)}
              </div>
            </div>
          )}

          {/* County Supervisors */}
          {county.length > 0 && (
            <div className="mb-16">
              <h2 className="mb-8 flex items-center gap-3 text-2xl font-bold text-dem-blue">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-dem-blue/10 text-lg">
                  <svg className="h-5 w-5 text-dem-blue" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                </span>
                Mendocino County Board of Supervisors
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {county.map((official) =>
                  official.data.name === "VACANT"
                    ? renderVacantCard(official)
                    : renderOfficialCard(official)
                )}
              </div>
            </div>
          )}

          {/* Local */}
          {local.length > 0 && (
            <div className="mb-16">
              <h2 className="mb-8 flex items-center gap-3 text-2xl font-bold text-dem-blue">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-dem-blue/10 text-lg">
                  <svg className="h-5 w-5 text-dem-blue" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" /></svg>
                </span>
                Local Officials
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {local.map(renderOfficialCard)}
              </div>
            </div>
          )}

          <div className="mt-8 rounded-lg border border-dem-gray-200 bg-dem-gray-50 p-6 text-center">
            <p className="text-sm text-dem-gray-600">
              This page is maintained by the Mendocino County Democratic Central
              Committee. If you notice any outdated information, please{" "}
              <a href="/contact" className="font-medium text-dem-blue underline">
                contact us
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
