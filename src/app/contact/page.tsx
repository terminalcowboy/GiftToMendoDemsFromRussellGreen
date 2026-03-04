"use client";

import { useState } from "react";
import Image from "next/image";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, connect to a form service like Formspree, Netlify Forms, etc.
    setSubmitted(true);
  };

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
            Contact Us
          </h1>
          <p className="mt-4 text-xl text-white/80">
            Get in touch with Mendocino County Democrats
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-dem-gray-900">
                Send Us a Message
              </h2>
              <p className="mt-3 text-dem-gray-600">
                Have a question or want to get involved? We&apos;d love to hear
                from you.
              </p>

              {submitted ? (
                <div className="mt-8 rounded-xl bg-green-50 border border-green-200 p-8 text-center">
                  <svg className="mx-auto h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <h3 className="mt-4 text-lg font-bold text-green-800">
                    Message Sent!
                  </h3>
                  <p className="mt-2 text-green-700">
                    Thank you for reaching out. We&apos;ll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-dem-gray-700"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="mt-1 block w-full rounded-lg border border-dem-gray-300 px-4 py-3 text-dem-gray-900 shadow-sm focus:border-dem-blue focus:ring-2 focus:ring-dem-blue/20 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-dem-gray-700"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="mt-1 block w-full rounded-lg border border-dem-gray-300 px-4 py-3 text-dem-gray-900 shadow-sm focus:border-dem-blue focus:ring-2 focus:ring-dem-blue/20 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-dem-gray-700"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="mt-1 block w-full rounded-lg border border-dem-gray-300 px-4 py-3 text-dem-gray-900 shadow-sm focus:border-dem-blue focus:ring-2 focus:ring-dem-blue/20 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-dem-gray-700"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="mt-1 block w-full rounded-lg border border-dem-gray-300 px-4 py-3 text-dem-gray-900 shadow-sm focus:border-dem-blue focus:ring-2 focus:ring-dem-blue/20 focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-dem-blue px-8 py-4 text-lg font-bold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-dem-blue-light hover:shadow-lg"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-dem-gray-900">
                Contact Information
              </h2>

              <div className="mt-8 space-y-8">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-dem-blue/10">
                    <svg className="h-6 w-6 text-dem-blue" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-dem-gray-900">
                      Mailing Address
                    </h3>
                    <p className="mt-1 text-dem-gray-600">
                      PO Box 28
                      <br />
                      Ukiah, CA 95482
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-dem-blue/10">
                    <svg className="h-6 w-6 text-dem-blue" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-dem-gray-900">
                      Facebook
                    </h3>
                    <a
                      href="https://www.facebook.com/Mendodems/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 text-dem-blue hover:text-dem-blue-light"
                    >
                      facebook.com/Mendodems
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-dem-blue/10">
                    <svg className="h-6 w-6 text-dem-blue" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" /></svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-dem-gray-900">
                      California Democratic Party
                    </h3>
                    <a
                      href="https://cadem.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 text-dem-blue hover:text-dem-blue-light"
                    >
                      cadem.org
                    </a>
                  </div>
                </div>
              </div>

              {/* Monthly meetings */}
              <div className="mt-12 overflow-hidden rounded-xl">
                <div className="relative h-32">
                  <Image
                    src="/images/town-hall.jpg"
                    alt="Meeting venue"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-dem-blue/70" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-lg font-bold text-white">
                      Monthly Meetings
                    </h3>
                  </div>
                </div>
                <div className="bg-dem-gray-50 p-6">
                  <p className="text-dem-gray-600">
                    Our Central Committee meets monthly at the Ukiah Valley
                    Conference Center. Meetings are open to all registered
                    Democrats. Check our{" "}
                    <a
                      href="/events"
                      className="font-medium text-dem-blue underline"
                    >
                      Events page
                    </a>{" "}
                    for the next meeting date.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
