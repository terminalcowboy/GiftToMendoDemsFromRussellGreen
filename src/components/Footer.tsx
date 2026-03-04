import Link from 'next/link';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/platform', label: 'What We Stand For' },
  { href: '/officials', label: 'Officials' },
  { href: '/events', label: 'Events' },
  { href: '/news', label: 'News' },
];

const actionLinks = [
  { href: '/get-involved', label: 'Get Involved' },
  { href: '/donate', label: 'Donate' },
  { href: '/clubs', label: 'Find a Club' },
  { href: '/contact', label: 'Contact Us' },
  { href: 'https://registertovote.ca.gov/', label: 'Register to Vote', external: true },
];

export default function Footer() {
  return (
    <footer className="bg-dem-blue-dark text-white">
      {/* Main footer content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Organization info */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold text-white">
              Mendocino County Democratic Central Committee
            </h2>
            <address className="mt-4 not-italic leading-relaxed text-white/70">
              <p>PO Box 28</p>
              <p>Ukiah, CA 95482</p>
            </address>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://www.facebook.com/Mendodems/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-full bg-white/10 p-2.5 text-white transition-colors duration-200 hover:bg-white/20"
                aria-label="Follow us on Facebook"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a
                href="https://cadem.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-white/70 underline decoration-white/30 underline-offset-4 transition-colors duration-200 hover:text-white hover:decoration-white/60"
              >
                California Democratic Party
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Take action */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">
              Take Action
            </h3>
            <ul className="mt-4 space-y-2">
              {actionLinks.map((link) => (
                <li key={link.href}>
                  {'external' in link && link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-white/60 transition-colors duration-200 hover:text-white"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 transition-colors duration-200 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-4 text-center text-xs text-white/50 md:flex-row md:justify-between md:text-left">
            <div className="space-y-1">
              <p>
                &copy; {new Date().getFullYear()} Democratic Party of Mendocino County. All
                rights reserved.
              </p>
              <p>
                FPPC# 822680 &middot; FEC# C00404145
              </p>
            </div>
            <p className="max-w-md text-xs leading-relaxed text-white/40">
              Not Authorized by Any Candidates or Committees. Paid for by the
              Democratic Party of Mendocino County.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
