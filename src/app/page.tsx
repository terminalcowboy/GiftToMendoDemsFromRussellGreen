import Link from "next/link";
import Image from "next/image";
import { getPageContent, getCollectionItems } from "@/lib/markdown";

export default function HomePage() {
  const { data } = getPageContent("home");
  const events = getCollectionItems("events")
    .sort(
      (a, b) =>
        new Date(a.data.date).getTime() - new Date(b.data.date).getTime()
    )
    .filter((e) => new Date(e.data.date) >= new Date())
    .slice(0, 3);
  const posts = getCollectionItems("posts")
    .sort(
      (a, b) =>
        new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
    )
    .slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-dem-blue">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-community.jpg"
            alt="Community gathering in Mendocino County"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-dem-blue via-dem-blue/90 to-dem-blue-dark" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {data.heroTitle}
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-white/90 sm:text-2xl">
              {data.heroSubtitle}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/get-involved"
                className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-lg font-bold text-dem-blue shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-dem-gray-100 hover:shadow-xl"
              >
                Get Involved
              </Link>
              <Link
                href="/donate"
                className="inline-flex items-center justify-center rounded-lg border-2 border-white bg-transparent px-8 py-4 text-lg font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10"
              >
                Donate Today
              </Link>
            </div>
          </div>
        </div>
        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
          >
            <path
              d="M0 80h1440V30c-240 30-480 50-720 30S240 0 0 30v50z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-dem-blue sm:text-4xl">
              {data.missionTitle}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-dem-gray-600">
              {data.missionText}
            </p>
          </div>

          {/* Value cards */}
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>
                ),
                title: "Environmental Protection",
                desc: "Fighting for clean energy and protecting Mendocino County's natural beauty for future generations.",
              },
              {
                icon: (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" /></svg>
                ),
                title: "Community First",
                desc: "Building a stronger community through civic engagement, voter outreach, and grassroots organizing.",
              },
              {
                icon: (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" /></svg>
                ),
                title: "Quality Education",
                desc: "Supporting fully funded public schools and accessible higher education for all families.",
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
                <p className="mt-3 text-dem-gray-600">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scenic break */}
      <section className="relative h-48 sm:h-64">
        <Image
          src="/images/mendocino-coast.jpg"
          alt="Mendocino County coastline"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-dem-gray-50" />
      </section>

      {/* Upcoming Events */}
      {events.length > 0 && (
        <section className="bg-dem-gray-50 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold text-dem-blue">
                Upcoming Events
              </h2>
              <Link
                href="/events"
                className="text-sm font-semibold text-dem-blue hover:text-dem-blue-light"
              >
                View All Events &rarr;
              </Link>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {events.map((event) => {
                const date = new Date(event.data.date);
                return (
                  <div
                    key={event.slug}
                    className="overflow-hidden rounded-xl bg-white shadow-sm transition-shadow duration-300 hover:shadow-md"
                  >
                    <div className="bg-dem-red p-4 text-center text-white">
                      <div className="text-3xl font-bold">
                        {date.toLocaleDateString("en-US", { day: "numeric" })}
                      </div>
                      <div className="text-sm font-medium uppercase">
                        {date.toLocaleDateString("en-US", {
                          month: "short",
                          year: "numeric",
                        })}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-dem-gray-900">
                        {event.data.title}
                      </h3>
                      <p className="mt-1 text-sm text-dem-gray-600">
                        {event.data.time} &middot; {event.data.location}
                      </p>
                      <p className="mt-3 text-sm text-dem-gray-600">
                        {event.data.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Latest News */}
      {posts.length > 0 && (
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold text-dem-blue">Latest News</h2>
              <Link
                href="/news"
                className="text-sm font-semibold text-dem-blue hover:text-dem-blue-light"
              >
                All News &rarr;
              </Link>
            </div>
            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/news/${post.slug}`}
                  className="group"
                >
                  <article className="overflow-hidden rounded-xl border border-dem-gray-200 bg-white transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">
                    <div className="p-6">
                      <time className="text-sm font-medium text-dem-blue">
                        {new Date(post.data.date).toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </time>
                      <h3 className="mt-2 text-xl font-bold text-dem-gray-900 group-hover:text-dem-blue">
                        {post.data.title}
                      </h3>
                      <p className="mt-3 text-dem-gray-600">
                        {post.data.excerpt}
                      </p>
                      <span className="mt-4 inline-block text-sm font-semibold text-dem-blue">
                        Read more &rarr;
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-dem-blue py-16 sm:py-24">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-vote.jpg"
            alt="Democracy and civic engagement"
            fill
            className="object-cover opacity-15"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            {data.ctaTitle}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-white/90">
            {data.ctaText}
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Link
              href={data.ctaButtonLink}
              className="inline-flex items-center rounded-lg bg-white px-8 py-4 text-lg font-bold text-dem-blue shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
            >
              {data.ctaButtonText}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
