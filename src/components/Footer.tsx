import Link from "next/link";

/* ===========================================
   FOOTER COMPONENT
   
   To customize:
   - Change "Your Name, CPA" to your actual name
   - Update contact email below
   - Modify disclaimer text as needed
   =========================================== */

const FOOTER_CONFIG = {
  name: "Nader Accountancy",
  email: "ben@naderaccountancy.com",
  phone: "(310) 879-3663",
};

const footerLinks = {
  services: [
    { href: "/services#essentials", label: "Essentials Plan" },
    { href: "/services#growth", label: "Growth Plan" },
    { href: "/services#elite", label: "Elite Plan" },
    { href: "/services#faq", label: "FAQ" },
  ],
  company: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/educational-resources", label: "Resources" },
    { href: "/contact", label: "Contact" },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-navy-deep)] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-gold flex items-center justify-center">
                <span className="text-[var(--color-navy-deep)] font-bold text-lg">
                  NA
                </span>
              </div>
              <span className="text-white font-semibold text-lg">
                {FOOTER_CONFIG.name}
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Real estate tax strategy and proactive planning for investors and high-income professionals.
            </p>
            <div className="flex space-x-4">
              {/* LinkedIn - CHANGE THIS: Update href with your LinkedIn */}
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[var(--color-navy-light)] flex items-center justify-center text-gray-400 hover:bg-[var(--color-gold)] hover:text-[var(--color-navy-deep)] transition-all"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[var(--color-gold)] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[var(--color-gold)] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${FOOTER_CONFIG.email}`}
                  className="text-gray-400 hover:text-[var(--color-gold)] transition-colors text-sm flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {FOOTER_CONFIG.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${FOOTER_CONFIG.phone.replace(/[^0-9]/g, '')}`}
                  className="text-gray-400 hover:text-[var(--color-gold)] transition-colors text-sm flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {FOOTER_CONFIG.phone}
                </a>
              </li>
              <li className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center text-[var(--color-gold)] hover:text-[var(--color-gold-light)] transition-colors text-sm font-medium"
                >
                  Book a Consultation
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </li>
            </ul>
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
            
            {/* DISCLAIMER PLACEHOLDER - CHANGE THIS */}
            <p className="text-gray-500 text-xs text-center md:text-right max-w-2xl">
              <strong>Disclaimer:</strong> The information provided on this website is for general informational purposes only and does not constitute tax, legal, or financial advice. Please consult with a qualified professional regarding your specific situation.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}


