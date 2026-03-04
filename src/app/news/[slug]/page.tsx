import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getCollectionItems, getCollectionItemWithHtml } from "@/lib/markdown";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getCollectionItems("posts");
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getCollectionItemWithHtml("posts", slug);
  return {
    title: post.data.title,
    description: post.data.excerpt,
  };
}

export default async function NewsPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getCollectionItemWithHtml("posts", slug);

  return (
    <>
      {/* Page Header */}
      <section className="relative overflow-hidden bg-dem-blue py-16 sm:py-20">
        <div className="absolute inset-0">
          <Image
            src="/images/2.jpg"
            alt="News article"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dem-blue via-dem-blue/95 to-dem-blue-dark/90" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/news"
            className="mb-4 inline-flex items-center text-sm text-white/70 hover:text-white"
          >
            &larr; Back to News
          </Link>
          <h1 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            {post.data.title}
          </h1>
          <div className="mt-4 flex flex-wrap gap-4 text-white/70">
            <time>
              {new Date(post.data.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
            {post.data.author && <span>By {post.data.author}</span>}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />

          <div className="mt-12 border-t border-dem-gray-200 pt-8">
            <Link
              href="/news"
              className="inline-flex items-center text-sm font-semibold text-dem-blue hover:text-dem-blue-light"
            >
              &larr; Back to all news
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
