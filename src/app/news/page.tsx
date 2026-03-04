import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getCollectionItems } from "@/lib/markdown";

export const metadata: Metadata = {
  title: "News",
  description:
    "Latest news and updates from the Mendocino County Democratic Central Committee.",
};

export default function NewsPage() {
  const posts = getCollectionItems("posts").sort(
    (a, b) =>
      new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
  );

  return (
    <>
      {/* Page Header */}
      <section className="relative overflow-hidden bg-dem-blue py-16 sm:py-20">
        <div className="absolute inset-0">
          <Image
            src="/images/2.jpg"
            alt="News and updates"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dem-blue via-dem-blue/95 to-dem-blue-dark/90" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
            News & Updates
          </h1>
          <p className="mt-4 text-xl text-white/80">
            Stay informed about Democratic activities in Mendocino County
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {posts.length > 0 ? (
            <div className="space-y-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/news/${post.slug}`}
                  className="group block"
                >
                  <article className="overflow-hidden rounded-xl border border-dem-gray-200 bg-white p-8 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">
                    <time className="text-sm font-medium text-dem-blue">
                      {new Date(post.data.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </time>
                    <h2 className="mt-2 text-2xl font-bold text-dem-gray-900 group-hover:text-dem-blue">
                      {post.data.title}
                    </h2>
                    {post.data.author && (
                      <p className="mt-1 text-sm text-dem-gray-600">
                        By {post.data.author}
                      </p>
                    )}
                    <p className="mt-4 text-dem-gray-600">
                      {post.data.excerpt}
                    </p>
                    <span className="mt-4 inline-block text-sm font-semibold text-dem-blue">
                      Read full article &rarr;
                    </span>
                  </article>
                </Link>
              ))}
            </div>
          ) : (
            <p className="rounded-lg bg-dem-gray-50 p-8 text-center text-dem-gray-600">
              No news posts yet. Check back soon!
            </p>
          )}
        </div>
      </section>
    </>
  );
}
