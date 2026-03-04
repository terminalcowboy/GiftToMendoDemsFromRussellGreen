import type { Metadata } from "next";
import Image from "next/image";
import { getCollectionItems } from "@/lib/markdown";

export const metadata: Metadata = {
  title: "Agendas & Minutes",
  description:
    "Meeting agendas and minutes from the Mendocino County Democratic Central Committee.",
};

export default function AgendasPage() {
  const documents = getCollectionItems("documents").sort(
    (a, b) =>
      new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
  );

  const agendas = documents.filter((d) => d.data.type === "agenda");
  const minutes = documents.filter((d) => d.data.type === "minutes");

  return (
    <>
      {/* Page Header */}
      <section className="relative overflow-hidden bg-dem-blue py-16 sm:py-20">
        <div className="absolute inset-0">
          <Image
            src="/images/town-hall.jpg"
            alt="Meeting documents"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dem-blue via-dem-blue/95 to-dem-blue-dark/90" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
            Agendas & Minutes
          </h1>
          <p className="mt-4 text-xl text-white/80">
            Central Committee meeting documents
          </p>
        </div>
      </section>

      {/* Documents */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Agendas */}
          <div className="mb-16">
            <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-dem-blue">
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" /></svg>
              Meeting Agendas
            </h2>
            {agendas.length > 0 ? (
              <div className="space-y-4">
                {agendas.map((doc) => (
                  <div
                    key={doc.slug}
                    className="flex items-center justify-between rounded-lg border border-dem-gray-200 bg-white p-4 shadow-sm"
                  >
                    <div>
                      <h3 className="font-semibold text-dem-gray-900">
                        {doc.data.title}
                      </h3>
                      <p className="text-sm text-dem-gray-600">
                        {new Date(doc.data.date).toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                    {doc.data.pdfLink && (
                      <a
                        href={doc.data.pdfLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded-lg bg-dem-blue px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-dem-blue-light"
                      >
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" /></svg>
                        PDF
                      </a>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p className="rounded-lg bg-dem-gray-50 p-6 text-dem-gray-600">
                No agendas available at this time.
              </p>
            )}
          </div>

          {/* Minutes */}
          <div>
            <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-dem-blue">
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>
              Meeting Minutes
            </h2>
            {minutes.length > 0 ? (
              <div className="space-y-4">
                {minutes.map((doc) => (
                  <div
                    key={doc.slug}
                    className="flex items-center justify-between rounded-lg border border-dem-gray-200 bg-white p-4 shadow-sm"
                  >
                    <div>
                      <h3 className="font-semibold text-dem-gray-900">
                        {doc.data.title}
                      </h3>
                      <p className="text-sm text-dem-gray-600">
                        {new Date(doc.data.date).toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                    {doc.data.pdfLink && (
                      <a
                        href={doc.data.pdfLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded-lg bg-dem-blue px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-dem-blue-light"
                      >
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" /></svg>
                        PDF
                      </a>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p className="rounded-lg bg-dem-gray-50 p-6 text-dem-gray-600">
                No minutes available at this time.
              </p>
            )}
          </div>

          <div className="mt-12 rounded-lg border border-dem-gray-200 bg-dem-gray-50 p-6 text-center">
            <p className="text-sm text-dem-gray-600">
              For copies of older meeting documents, please{" "}
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
