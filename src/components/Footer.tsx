"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/* ===========================================
   FOOTER COMPONENT
   
   Renders a minimal version on dedicated landing
   pages: branding, copyright, and disclaimer only,
   to keep the page focused on a single CTA.
   =========================================== */

const FOOTER_CONFIG = {
  name: "Nader Accountancy",
  email: "ben@naderaccountancy.com",
};

const MINIMAL_FOOTER_ROUTES = new Set<string>(["/creator-tax-cpa"]);

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  const isMinimal = pathname ? MINIMAL_FOOTER_ROUTES.has(pathname) : false;

  if (isMinimal) {
    return (
      <footer className="bg-[var(--color-navy-deep)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 md:gap-6">
            {/* Left: Brand + contact email */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-lg bg-gradient-gold flex items-center justify-center">
                  <span className="text-[var(--color-navy-deep)] font-bold text-lg">
                    NA
                  </span>
                </div>
                <span className="text-white font-semibold text-lg">
                  {FOOTER_CONFIG.name}, CPA
                </span>
              </div>
              <a
                href={`mailto:${FOOTER_CONFIG.email}`}
                className="text-gray-300 hover:text-[var(--color-gold)] transition-colors text-sm inline-flex items-center gap-2"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                {FOOTER_CONFIG.email}
              </a>
            </div>

            {/* Right: Social icons */}
            <div className="flex flex-col items-center md:items-end gap-3">
              <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
                Follow @NaderAccountancy
              </p>
              <div className="flex items-center gap-3">
                {/* TikTok */}
                <a
                  href="https://www.tiktok.com/@naderaccountancy"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="w-9 h-9 rounded-full bg-[var(--color-navy-light)] flex items-center justify-center text-gray-300 hover:bg-[var(--color-gold)] hover:text-[var(--color-navy-deep)] transition-all"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005.8 20.1a6.34 6.34 0 0010.86-4.43V8.6a8.16 8.16 0 005 1.7V6.85a4.79 4.79 0 01-2.07-.16z" />
                  </svg>
                </a>
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/naderaccountancy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-full bg-[var(--color-navy-light)] flex items-center justify-center text-gray-300 hover:bg-[var(--color-gold)] hover:text-[var(--color-navy-deep)] transition-all"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                {/* YouTube */}
                <a
                  href="https://www.youtube.com/@NaderAccountancy"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-9 h-9 rounded-full bg-[var(--color-navy-light)] flex items-center justify-center text-gray-300 hover:bg-[var(--color-gold)] hover:text-[var(--color-navy-deep)] transition-all"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom row: copyright + legal links */}
          <div className="mt-10 pt-6 border-t border-[var(--color-navy-light)]/30">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-gray-500">
              <p className="text-center md:text-left">
                © {currentYear} {FOOTER_CONFIG.name}, CPA. All rights reserved.
              </p>
              <div className="flex items-center justify-center md:justify-end gap-5">
                <Link
                  href="/privacy-policy"
                  className="hover:text-[var(--color-gold)] transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="hover:text-[var(--color-gold)] transition-colors"
                >
                  Terms
                </Link>
              </div>
            </div>
            <p className="mt-4 text-gray-500 text-xs max-w-3xl leading-relaxed text-center md:text-left">
              <strong>Disclaimer:</strong> Information provided is for general purposes only and does not constitute tax, legal, or financial advice.
            </p>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-[var(--color-navy-deep)] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          {/* Brand Column */}
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-gold flex items-center justify-center">
                <span className="text-[var(--color-navy-deep)] font-bold text-lg">
                  NA
                </span>
              </div>
              <span className="text-white font-semibold text-lg">
                {FOOTER_CONFIG.name}
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Year-round tax planning and advisory for high-income self-employed professionals, creators, and business owners.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-[var(--color-gold)] transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-[var(--color-gold)] transition-colors text-sm"
                >
                  Apply
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${FOOTER_CONFIG.email}`}
                  className="text-gray-400 hover:text-[var(--color-gold)] transition-colors text-sm inline-flex items-center gap-2 md:justify-end"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {FOOTER_CONFIG.email}
                </a>
              </li>
            </ul>
            {/* Social Links */}
            <div className="flex justify-center md:justify-end space-x-4 mt-6">
              {/* YouTube */}
              <a
                href="https://www.youtube.com/@NaderAccountancy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[var(--color-navy-light)] flex items-center justify-center text-gray-400 hover:bg-[var(--color-gold)] hover:text-[var(--color-navy-deep)] transition-all"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/naderaccountancy/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[var(--color-navy-light)] flex items-center justify-center text-gray-400 hover:bg-[var(--color-gold)] hover:text-[var(--color-navy-deep)] transition-all"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[var(--color-navy-light)]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {currentYear} {FOOTER_CONFIG.name}. All rights reserved.
            </p>
            
            <p className="text-gray-500 text-xs text-center md:text-right max-w-xl">
              <strong>Disclaimer:</strong> Information provided is for general purposes only and does not constitute tax, legal, or financial advice.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
