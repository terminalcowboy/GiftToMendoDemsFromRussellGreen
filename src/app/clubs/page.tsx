import type { Metadata } from "next";
import Image from "next/image";
import { getCollectionItemsWithHtml } from "@/lib/markdown";

export const metadata: Metadata = {
  title: "Chartered Democratic Clubs",
  description:
    "Chartered Democratic clubs in Mendocino County — get connected with Democrats in your area.",
};

export default async function ClubsPage() {
  const clubs = (await getCollectionItemsWithHtml("clubs")).sort(
    (a, b) => (a.data.order || 99) - (b.data.order || 99)
  );

  return (
    <>
      {/* Page Header */}
      <section className="relative overflow-hidden bg-dem-blue py-16 sm:py-20">
        <div className="absolute inset-0">
          <Image
            src="/images/mendocino-coast.jpg"
            alt="Mendocino coastline"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dem-blue via-dem-blue/95 to-dem-blue-dark/90" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
            Chartered Clubs
          </h1>
          <p className="mt-4 text-xl text-white/80">
            Democratic clubs serving communities across Mendocino County
          </p>
        </div>
      </section>

      {/* Clubs */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-12 max-w-3xl text-lg text-dem-gray-600">
            Mendocino County is home to several chartered Democratic clubs, each
            serving different regions of our county. Clubs are a great way to
            meet fellow Democrats, stay informed on local issues, and get
            involved in your community.
          </p>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {clubs.map((club) => (
              <div
                key={club.slug}
                className="overflow-hidden rounded-xl border border-dem-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {club.data.image && (
                  <div className="flex h-40 w-full items-center justify-center bg-white px-8 py-6">
                    <Image
                      src={club.data.image}
                      alt={club.data.title}
                      width={280}
                      height={120}
                      className="h-auto max-h-28 w-auto max-w-full object-contain"
                    />
                  </div>
                )}
                <div className="border-b border-dem-gray-200 bg-dem-gray-50 p-6">
                  <h2 className="text-xl font-bold text-dem-gray-900">
                    {club.data.title}
                  </h2>
                  <p className="mt-1 text-sm font-medium text-dem-blue">
                    {club.data.area}
                  </p>
                </div>
                <div className="p-6">
                  <div
                    className="prose prose-sm max-w-none"
                    dangerouslySetInnerHTML={{ __html: club.contentHtml }}
                  />
                  {club.data.meetingSchedule && (
                    <p className="mt-4 text-sm text-dem-gray-600">
                      <span className="font-semibold">Meetings:</span>{" "}
                      {club.data.meetingSchedule}
                    </p>
                  )}
                  {club.data.website && (
                    <a
                      href={club.data.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-dem-blue hover:text-dem-blue-light"
                    >
                      Visit Website
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" /></svg>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-xl bg-dem-blue/5 p-8 text-center">
            <h3 className="text-xl font-bold text-dem-blue">
              Interested in Starting a Club?
            </h3>
            <p className="mt-3 text-dem-gray-600">
              If there isn&apos;t a Democratic club in your area and you&apos;d
              like to start one, contact the Central Committee for information
              about the chartering process.
            </p>
            <a
              href="/contact"
              className="mt-6 inline-flex items-center rounded-lg bg-dem-blue px-6 py-3 font-semibold text-white transition-colors hover:bg-dem-blue-light"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
