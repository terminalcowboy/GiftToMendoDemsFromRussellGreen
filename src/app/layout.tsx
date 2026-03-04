import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Mendocino County Democrats | Democratic Central Committee",
    template: "%s | Mendocino County Democrats",
  },
  description:
    "The Mendocino County Democratic Central Committee — committed to progressive action, dedicated to California interests, and fighting for our community.",
  keywords: [
    "Mendocino County",
    "Democrats",
    "Democratic Party",
    "California",
    "progressive",
    "MCDP",
  ],
  openGraph: {
    title: "Mendocino County Democrats",
    description:
      "The Mendocino County Democratic Central Committee — committed to progressive action.",
    url: "https://mendodems.org",
    siteName: "Mendocino County Democrats",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.png" />
      </head>
      <body className="flex min-h-screen flex-col bg-white text-dem-gray-900 antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
