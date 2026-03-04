import type { Metadata } from "next";
import Image from "next/image";
import { getCollectionItemsWithHtml } from "@/lib/markdown";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Upcoming events, meetings, and activities from the Mendocino County Democratic Central Committee.",
};

export default async function EventsPage() {
  const allEvents = await getCollectionItemsWithHtml("events");
  const now = new Date();
  const upcoming = allEvents
    .filter((e) => new Date(e.data.date) >= now)
    .sort(
      (a, b) =>
        new Date(a.data.date).getTime() - new Date(b.data.date).getTime()
    );
  const past = allEvents
    .filter((e) => new Date(e.data.date) < now)
    .sort(
      (a, b) =>
        new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
    );

  return (
    <>
      {/* Page Header */}
      <section className="relative overflow-hidden bg-dem-blue py-16 sm:py-20">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-community.jpg"
            alt="Community events"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dem-blue via-dem-blue/95 to-dem-blue-dark/90" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
            Events
          </h1>
          <p className="mt-4 text-xl text-white/80">
            Meetings, volunteer opportunities, and community events
          </p>
        </div>
      </section>

      {/* Events */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Upcoming */}
          <h2 className="mb-8 text-2xl font-bold text-dem-blue">
            Upcoming Events
          </h2>
          {upcoming.length > 0 ? (
            <div className="space-y-6">
              {upcoming.map((event) => {
                const date = new Date(event.data.date);
                return (
                  <div
                    key={event.slug}
                    className="overflow-hidden rounded-xl border border-dem-gray-200 bg-white shadow-sm"
                  >
                    <div className="flex flex-col sm:flex-row">
                      <div className="flex shrink-0 flex-col items-center justify-center bg-dem-red p-6 text-white sm:w-32">
                        <span className="text-3xl font-bold">
                          {date.toLocaleDateString("en-US", {
                            day: "numeric",
                          })}
                        </span>
                        <span className="text-sm font-medium uppercase">
                          {date.toLocaleDateString("en-US", {
                            month: "short",
                          })}
                        </span>
                        <span className="text-sm">
                          {date.toLocaleDateString("en-US", {
                            year: "numeric",
                          })}
                        </span>
                      </div>
                      <div className="flex-1 p-6">
                        <h3 className="text-xl font-bold text-dem-gray-900">
                          {event.data.title}
                        </h3>
                        <div className="mt-2 flex flex-wrap gap-4 text-sm text-dem-gray-600">
                          <span className="flex items-center gap-1">
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            {event.data.time}
                          </span>
                          <span className="flex items-center gap-1">
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                            {event.data.location}
                          </span>
                        </div>
                        <div
                          className="prose prose-sm mt-4 max-w-none"
                          dangerouslySetInnerHTML={{
                            __html: event.contentHtml,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="rounded-lg bg-dem-gray-50 p-8 text-center text-dem-gray-600">
              No upcoming events at this time. Check back soon or follow us on{" "}
              <a
                href="https://www.facebook.com/Mendodems/"
                className="font-medium text-dem-blue underline"
              >
                Facebook
              </a>{" "}
              for updates.
            </p>
          )}

          {/* Past events */}
          {past.length > 0 && (
            <div className="mt-16">
              <h2 className="mb-8 text-2xl font-bold text-dem-gray-600">
                Past Events
              </h2>
              <div className="space-y-4">
                {past.map((event) => {
                  const date = new Date(event.data.date);
                  return (
                    <div
                      key={event.slug}
                      className="rounded-lg border border-dem-gray-200 bg-dem-gray-50 p-4"
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-sm font-medium text-dem-gray-600">
                          {date.toLocaleDateString("en-US", {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                        <span className="text-dem-gray-900">
                          {event.data.title}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
