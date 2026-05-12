import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

/* ===========================================
   HOMEPAGE  /

   Main marketing page for Nader Accountancy.
   Targets high-income self-employed professionals
   and business owners. The creator funnel lives at
   /creator-tax-cpa and is not changed by this page.
   =========================================== */

const PAGE_TITLE =
  "Tax CPA for Self-Employed and Business Owners | Nader Accountancy";
const PAGE_DESCRIPTION =
  "Year-round tax planning, bookkeeping, and advisory for high-income self-employed professionals, creators, and business owners. Real CPA, real planning, no surprises.";
const CALENDLY_URL = "https://calendly.com/ben-naderaccountancy/new-meeting";

export const metadata: Metadata = {
  title: {
    absolute: PAGE_TITLE,
  },
  description: PAGE_DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://naderaccountancy.com",
    siteName: "Nader Accountancy",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nader Accountancy, Tax Planning and Advisory.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ["/og-image.jpg"],
  },
};

/* ===========================================
   STATIC CONTENT
   =========================================== */

const painPoints: ReadonlyArray<string> = [
  "You made strong money this year and have no real idea what you owe.",
  "You are behind on quarterly taxes, or you have never paid them at all.",
  "Your books are messy or only get touched at tax time.",
  "You formed an LLC but you are not sure it is actually doing anything for you.",
  "You are wondering if you should be an S corp but the payroll stuff feels overwhelming.",
  "You are tired of getting tax advice from social media and do not know what is real.",
  "You got hit with a surprise tax bill last year and never want that again.",
  "You want a CPA who works with you year round, not someone you only hear from in April.",
];

const advisoryFeatures: ReadonlyArray<string> = [
  "Bookkeeping",
  "Annual tax return",
  "Quarterly tax projections",
  "Estimated payment planning",
  "Entity structure review",
  "Year-end planning",
  "Business and personal tax coordination",
  "Direct email and phone access",
];

const strategySessionFeatures: ReadonlyArray<string> = [
  "Full review of your current tax setup",
  "Entity structure conversation",
  "Estimated tax planning",
  "Deduction review",
  "Retirement plan discussion",
  "Year-end planning ideas",
  "Written summary of recommendations",
];

const taxPrepFeatures: ReadonlyArray<string> = [
  "Federal and state return prep",
  "Prior year return review",
  "Deduction review",
  "E-filing",
  "Option to add advisory later",
];

const cleanupExamples: ReadonlyArray<string> = [
  "Multi-year late filings",
  "CA LLC compliance issues",
  "FTB notices and resolution",
  "Bookkeeping cleanup",
  "Entity correction",
  "S corp election cleanup",
  "Estimated tax catch-up",
  "Creator and 1099 income cleanup",
];

const clientTypes: ReadonlyArray<{
  title: string;
  description: string;
  icon: React.ReactNode;
}> = [
  {
    title: "High-Income Self-Employed Professionals",
    description:
      "You earn strong income but do not have a real quarterly tax system or year-round plan.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Creators, Influencers, and Online Businesses",
    description:
      "1099 income, brand deals, platform payouts, write-off questions, inconsistent cash flow.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "LLC and S Corp Owners",
    description:
      "Entity structure, payroll, reasonable compensation, compliance, and planning all under one roof.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Small Business Owners",
    description:
      "Bookkeeping, tax planning, returns, and year-round advice in one place.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "People With Tax Messes",
    description:
      "Late filings, CA LLC problems, entity issues, prior year cleanup, or estimated tax catch-up.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
  },
];

const processSteps: ReadonlyArray<{
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}> = [
  {
    number: "1",
    title: "Book a Call",
    description:
      "Tell me about your income, business, and where you are at with taxes today.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    number: "2",
    title: "Get a Plan",
    description:
      "I review your situation and recommend the right level of support.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    number: "3",
    title: "Build the System",
    description:
      "We set up tax planning, compliance, bookkeeping, and estimated payments around your business.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
  },
  {
    number: "4",
    title: "Stay Ahead",
    description:
      "I monitor your tax picture year round so April is never a surprise.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

const faqs: ReadonlyArray<{ q: string; a: string }> = [
  {
    q: "Do you only prepare tax returns?",
    a: "No. Tax prep is available, but most of what I do is year-round tax planning, compliance, and advisory for self-employed people and business owners.",
  },
  {
    q: "Do I need bookkeeping?",
    a: "If your books are a mess or barely exist, bookkeeping cleanup usually has to happen first. Real tax planning is impossible without real numbers.",
  },
  {
    q: "Do you work with creators and influencers?",
    a: "Yes. I work with 1099 creators, online businesses, OnlyFans creators, streamers, YouTubers, and consultants. I have a dedicated creator page with more detail.",
  },
  {
    q: "Can you help me decide if I need an S corp?",
    a: "Yes. We will review your income, entity, payroll considerations, and reasonable compensation to see if it actually makes sense for you.",
  },
  {
    q: "Do you offer one-time advice?",
    a: "Yes. The Tax Strategy Session is a paid one-time review that gives you a clear written plan, with no obligation to become a monthly client.",
  },
  {
    q: "Do you guarantee tax savings?",
    a: "No. I build compliant, proactive tax systems and identify planning opportunities where they legally exist. Results depend on your specific situation.",
  },
  {
    q: "Are you fully remote?",
    a: "Yes. I work with clients across the US through video calls, secure portal, and direct email and phone access.",
  },
  {
    q: "How fast do you respond to clients?",
    a: "Monthly advisory clients get direct email and phone access with defined response times. You will not be ghosted between January and March.",
  },
];

/* ===========================================
   STRUCTURED DATA (JSON-LD)
   =========================================== */

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Nader Accountancy",
  url: "https://naderaccountancy.com",
  image: "https://naderaccountancy.com/images/ben-headshot-v2.jpg",
  description: PAGE_DESCRIPTION,
  founder: {
    "@type": "Person",
    name: "Ben Nader",
    jobTitle: "Certified Public Accountant",
    sameAs: [
      "https://www.youtube.com/@NaderAccountancy",
      "https://www.instagram.com/naderaccountancy/",
    ],
  },
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  potentialAction: {
    "@type": "ReserveAction",
    name: "Book a free consult",
    target: CALENDLY_URL,
  },
};

/* ===========================================
   PAGE
   =========================================== */

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ===== SECTION 1: HERO ===== */}
      <section className="relative bg-gradient-navy overflow-hidden">
        <div className="absolute inset-0 pattern-bg opacity-50" aria-hidden="true" />
        <div
          className="absolute top-20 right-10 w-72 h-72 bg-[var(--color-gold)]/10 rounded-full blur-3xl"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-20 left-10 w-96 h-96 bg-[var(--color-gold)]/5 rounded-full blur-3xl"
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left column: copy */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <p className="animate-fade-in-up opacity-0 text-[var(--color-gold)] font-semibold text-xs sm:text-sm uppercase tracking-wider mb-4">
                Ben Nader, CPA &nbsp;|&nbsp; Master&apos;s in Taxation
              </p>

              <h1 className="animate-fade-in-up opacity-0 animation-delay-100 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
                A CPA Built for High-Income{" "}
                <span className="text-gradient-gold">
                  Self-Employed Professionals and Business Owners
                </span>
              </h1>

              <p className="animate-fade-in-up opacity-0 animation-delay-200 text-base sm:text-lg lg:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Stop guessing what you owe, scrambling at tax time, or wondering
                if your entity is set up right. Work with a CPA who runs a real
                year-round tax system, so you know what to pay, when to pay it,
                and how to plan ahead.
              </p>

              <div className="animate-fade-in-up opacity-0 animation-delay-300 flex flex-col items-center lg:items-start gap-3">
                <Link
                  href="/contact"
                  data-gtm="home-hero-cta"
                  className="btn-primary text-base sm:text-lg px-8 py-4 inline-flex items-center justify-center gap-2 w-full sm:w-auto min-h-[56px]"
                >
                  Book a Free Consult
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
                <p className="text-sm text-gray-400 max-w-md text-center lg:text-left">
                  30 minute call. No pressure. We&apos;ll see if it&apos;s a fit.
                </p>

                {/* Trust strip */}
                <div className="mt-4 flex flex-wrap items-center justify-center lg:justify-start gap-x-3 gap-y-2 text-xs sm:text-sm text-gray-400">
                  <span>Licensed CPA</span>
                  <span aria-hidden="true" className="w-1 h-1 rounded-full bg-[var(--color-gold)]/60" />
                  <span>Master&apos;s in Taxation</span>
                  <span aria-hidden="true" className="w-1 h-1 rounded-full bg-[var(--color-gold)]/60" />
                  <span>150k+ Online Community</span>
                </div>
              </div>
            </div>

            {/* Right column: photo */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="animate-fade-in-up opacity-0 animation-delay-200 relative w-full mx-auto max-w-[260px] sm:max-w-[320px] lg:max-w-none">
                <div
                  className="absolute inset-0 bg-gradient-to-tr from-[var(--color-gold)]/30 via-transparent to-[var(--color-gold)]/10 rounded-3xl blur-2xl"
                  aria-hidden="true"
                />
                <div className="relative aspect-square rounded-3xl overflow-hidden border border-[var(--color-gold)]/30 shadow-2xl bg-[var(--color-navy)]">
                  <Image
                    src="/images/ben-headshot-v2.jpg"
                    alt="Ben Nader, CPA, founder of Nader Accountancy."
                    fill
                    sizes="(max-width: 1024px) 60vw, 420px"
                    priority
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: PAIN POINTS ===== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <span className="text-[var(--color-gold)] font-semibold text-xs sm:text-sm uppercase tracking-wider">
              Sound Familiar?
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-navy-deep)]">
              You Probably Fit Here
            </h2>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {painPoints.map((problem) => (
              <li
                key={problem}
                className="flex items-start gap-4 p-5 rounded-xl bg-[var(--color-gray-50)] border border-gray-100"
              >
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[var(--color-navy-deep)] flex items-center justify-center mt-0.5">
                  <svg
                    className="w-4 h-4 text-[var(--color-gold)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {problem}
                </p>
              </li>
            ))}
          </ul>

          <div className="text-center mt-12">
            <Link
              href="/contact"
              data-gtm="home-pain-cta"
              className="btn-primary inline-flex items-center justify-center gap-2 w-full sm:w-auto min-h-[56px]"
            >
              Book a Free Consult
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: SERVICES & PRICING ===== */}
      <section id="services" className="py-16 sm:py-20 lg:py-24 bg-[var(--color-gray-50)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <span className="text-[var(--color-gold)] font-semibold text-xs sm:text-sm uppercase tracking-wider">
              Services and Pricing
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-navy-deep)]">
              Three Ways to Work With Me
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
              Final pricing depends on your situation. The numbers below are
              starting points.
            </p>
          </div>

          {/* Featured: Year-Round Tax Advisory */}
          <div className="relative pt-4 mb-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
              <span className="inline-block bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-gold-dark)] text-[var(--color-navy-deep)] text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-lg whitespace-nowrap">
                Most Clients Start Here
              </span>
            </div>

            <div className="bg-white rounded-2xl shadow-xl ring-2 ring-[var(--color-gold)] overflow-hidden grid grid-cols-1 lg:grid-cols-5 gap-0">
              <div className="lg:col-span-2 bg-[var(--color-navy-deep)] p-7 sm:p-10 flex flex-col justify-center">
                <span className="text-[var(--color-gold)] font-semibold text-xs uppercase tracking-wider mb-3">
                  Main Offer
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  Year-Round Tax Advisory
                </h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-gray-400 text-sm">starting at</span>
                  <span className="text-4xl font-bold text-white">$600</span>
                  <span className="text-gray-400">/month</span>
                </div>
                <p className="text-gray-300 leading-relaxed text-sm mb-5">
                  For self-employed, creators, and business owners earning
                  $150k+ who want a CPA running their tax system all year.
                </p>
              </div>

              <div className="lg:col-span-3 p-7 sm:p-10">
                <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-gold)] mb-4">
                  What&apos;s Included
                </p>
                <ul className="space-y-3 mb-8">
                  {advisoryFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-[var(--color-gold)] flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 leading-relaxed text-sm sm:text-base">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  data-gtm="home-pricing-advisory-cta"
                  className="block w-full text-center py-4 px-6 rounded-lg font-semibold bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-gold-dark)] text-[var(--color-navy-deep)] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 min-h-[56px]"
                >
                  Book a Free Consult
                </Link>
              </div>
            </div>
          </div>

          {/* Secondary offers: Strategy Session, Tax Prep */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Tax Strategy Session */}
            <div
              id="strategy-session"
              className="bg-white rounded-2xl p-7 shadow-md border border-gray-100 flex flex-col"
            >
              <div className="mb-6">
                <span className="text-[var(--color-gold)] font-semibold text-xs uppercase tracking-wider">
                  One-Time Engagement
                </span>
                <h3 className="mt-2 text-xl font-bold text-[var(--color-navy-deep)] mb-2">
                  Tax Strategy Session
                </h3>
                <div className="flex items-baseline gap-1.5 mb-3">
                  <span className="text-2xl font-bold text-[var(--color-navy-deep)]">
                    $750 to $1,500
                  </span>
                  <span className="text-gray-500 text-sm">one-time</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Self-employed professionals or business owners who want a CPA
                  to review their situation once and give clear next steps.
                </p>
              </div>

              <ul className="space-y-2.5 mb-6 flex-grow">
                {strategySessionFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <svg
                      className="w-4 h-4 text-[var(--color-gold)] flex-shrink-0 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact#strategy-session"
                data-gtm="home-pricing-strategy-cta"
                className="block w-full text-center py-4 px-5 rounded-lg font-semibold bg-[var(--color-navy-deep)] text-white hover:bg-[var(--color-navy)] hover:-translate-y-0.5 transition-all duration-200 min-h-[56px]"
              >
                Book a Strategy Session
              </Link>
            </div>

            {/* Tax Return Preparation */}
            <div className="bg-[var(--color-gray-50)] rounded-2xl p-7 border border-gray-200 flex flex-col">
              <div className="mb-6">
                <span className="text-gray-500 font-semibold text-xs uppercase tracking-wider">
                  Compliance Only
                </span>
                <h3 className="mt-2 text-xl font-bold text-[var(--color-navy-deep)] mb-2">
                  Tax Return Preparation
                </h3>
                <div className="flex items-baseline gap-1.5 mb-3">
                  <span className="text-2xl font-bold text-[var(--color-navy-deep)]">
                    Starting at $1,000
                  </span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Clients who need a return filed right but do not need
                  year-round advisory yet.
                </p>
              </div>

              <ul className="space-y-2.5 mb-6 flex-grow">
                {taxPrepFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <svg
                      className="w-4 h-4 text-gray-500 flex-shrink-0 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                data-gtm="home-pricing-prep-cta"
                className="block w-full text-center py-4 px-5 rounded-lg font-semibold border-2 border-[var(--color-navy-deep)] text-[var(--color-navy-deep)] hover:bg-[var(--color-navy-deep)] hover:text-white transition-all duration-200 min-h-[56px]"
              >
                Book a Free Consult
              </Link>
            </div>
          </div>

          <p className="mt-10 text-center text-sm text-gray-500 italic max-w-2xl mx-auto leading-relaxed">
            If you become a monthly advisory client within 30 days of your
            strategy session, the session fee is credited toward your
            onboarding.
          </p>
        </div>
      </section>

      {/* ===== SECTION 4: TAX CLEANUP ===== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <span className="text-[var(--color-gold)] font-semibold text-xs sm:text-sm uppercase tracking-wider">
                Project-Based Engagements
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-navy-deep)] mb-5">
                Got a Tax Mess? Start With Cleanup.
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                Some clients are not ready for monthly advisory yet. They have
                multi-year filings, FTB notices, entity issues, or bookkeeping
                that has not been touched in years. Cleanup work gets scoped
                after a paid Tax Strategy Session so we both know exactly what
                we are walking into.
              </p>
              <Link
                href="/contact#strategy-session"
                data-gtm="home-cleanup-cta"
                className="btn-primary inline-flex items-center justify-center gap-2 w-full sm:w-auto min-h-[56px]"
              >
                Book a Strategy Session
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="bg-[var(--color-navy-deep)] rounded-2xl p-7 sm:p-10">
              <h3 className="text-[var(--color-gold)] font-semibold text-sm uppercase tracking-wider mb-5">
                Examples
              </h3>
              <ul className="space-y-3.5">
                {cleanupExamples.map((example) => (
                  <li key={example} className="flex items-start gap-3 text-gray-200 leading-relaxed text-sm sm:text-base">
                    <svg
                      className="w-5 h-5 text-[var(--color-gold)] flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {example}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 5: WHO I WORK WITH ===== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[var(--color-gray-50)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <span className="text-[var(--color-gold)] font-semibold text-xs sm:text-sm uppercase tracking-wider">
              Clients
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-navy-deep)]">
              Who I Work With
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {clientTypes.map((client, index) => (
              <div
                key={client.title}
                className={`card p-6 sm:p-7 group ${
                  index === clientTypes.length - 1 && clientTypes.length % 3 !== 0
                    ? "sm:col-span-2 lg:col-span-1 sm:max-w-md sm:mx-auto lg:max-w-none"
                    : ""
                }`}
              >
                <div className="w-14 h-14 rounded-xl bg-[var(--color-navy-deep)] flex items-center justify-center text-[var(--color-gold)] mb-5 group-hover:scale-110 transition-transform duration-300">
                  {client.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[var(--color-navy-deep)] mb-2">
                  {client.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {client.description}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-sm sm:text-base text-gray-600">
            Creator?{" "}
            <Link
              href="/creator-tax-cpa"
              className="font-semibold text-[var(--color-navy-deep)] underline decoration-[var(--color-gold)] decoration-2 underline-offset-4 hover:text-[var(--color-gold-dark)] transition-colors"
            >
              I have a dedicated page for you. See creator services.
            </Link>
          </p>
        </div>
      </section>

      {/* ===== SECTION 6: PROCESS ===== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <span className="text-[var(--color-gold)] font-semibold text-xs sm:text-sm uppercase tracking-wider">
              Process
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-navy-deep)]">
              How It Works
            </h2>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div
              className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[var(--color-gold)]/40 to-transparent"
              aria-hidden="true"
            />

            <ol className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-6">
              {processSteps.map((step, index) => (
                <li key={step.number} className="relative">
                  {index < processSteps.length - 1 && (
                    <div
                      className="lg:hidden absolute left-6 top-16 w-0.5 bg-[var(--color-gold)]/30"
                      style={{ height: "calc(100% + 1.5rem)" }}
                      aria-hidden="true"
                    />
                  )}

                  <div className="flex lg:flex-col items-start lg:items-center text-left lg:text-center">
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-[var(--color-navy-deep)] flex items-center justify-center text-white shadow-lg">
                        {step.icon}
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-[var(--color-gold)] flex items-center justify-center text-[var(--color-navy-deep)] text-xs font-bold shadow">
                        {step.number}
                      </div>
                    </div>

                    <div className="ml-6 lg:ml-0 lg:mt-6">
                      <h3 className="text-base sm:text-lg font-bold text-[var(--color-navy-deep)] mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-xs">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ===== SECTION 7: ABOUT / MEET BEN ===== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[var(--color-gray-50)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-10 md:gap-12 items-center">
            <div className="flex-shrink-0 mx-auto md:mx-0">
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-2xl border-2 border-[var(--color-gold)]/20 overflow-hidden shadow-lg bg-[var(--color-navy)]">
                <Image
                  src="/images/ben-headshot-v2.jpg"
                  alt="Ben Nader, CPA, founder of Nader Accountancy."
                  fill
                  sizes="(max-width: 768px) 220px, 256px"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="text-center md:text-left">
              <span className="text-[var(--color-gold)] font-semibold text-xs sm:text-sm uppercase tracking-wider">
                About
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-navy-deep)] mb-5">
                Meet Ben Nader, CPA
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                I&apos;m a licensed CPA with a Master&apos;s in Taxation. I run
                Nader Accountancy out of California and work with self-employed
                professionals, business owners, and creators across the country
                who want a real tax system, not just a return filed at the last
                minute.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8">
                The goal is simple: build a year-round plan so you know what you
                owe, when to pay it, and how to make smart tax moves before the
                year ends. No surprises, no scrambling, no generic advice.
              </p>

              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-gray-200 text-sm text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)]" />
                  Licensed CPA in California
                </span>
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-gray-200 text-sm text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)]" />
                  Master&apos;s in Taxation
                </span>
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-gray-200 text-sm text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)]" />
                  150k+ online community
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 8: FAQ ===== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-14">
            <span className="text-[var(--color-gold)] font-semibold text-xs sm:text-sm uppercase tracking-wider">
              FAQ
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-navy-deep)]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-xl border border-gray-200 bg-white overflow-hidden open:shadow-md transition-shadow"
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none p-5 sm:p-6 font-semibold text-[var(--color-navy-deep)] hover:bg-[var(--color-gray-50)] transition-colors">
                  <span className="text-base sm:text-lg leading-snug">{faq.q}</span>
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-gray-50)] group-open:bg-[var(--color-gold)] flex items-center justify-center transition-colors">
                    <svg
                      className="w-4 h-4 text-[var(--color-navy-deep)] transition-transform duration-200 group-open:rotate-45"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </summary>
                <div className="px-5 sm:px-6 pb-5 sm:pb-6 -mt-1">
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 9: FINAL CTA ===== */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-[var(--color-navy-deep)] overflow-hidden">
        <div className="absolute inset-0 pattern-bg opacity-30" aria-hidden="true" />
        <div
          className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-[var(--color-gold)]/10 rounded-full blur-3xl"
          aria-hidden="true"
        />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[var(--color-gold)] font-semibold text-xs sm:text-sm uppercase tracking-wider">
            Ready to Get Started?
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-5 leading-tight">
            Stop Guessing. Start Planning.
          </h2>
          <p className="text-base sm:text-lg text-gray-300 mb-10 max-w-xl mx-auto leading-relaxed">
            Book a free 30 minute call. We&apos;ll look at where you&apos;re at,
            what you need, and whether working together makes sense.
          </p>
          <div className="flex flex-col items-center gap-3">
            <Link
              href="/contact"
              data-gtm="home-final-cta"
              className="btn-primary text-base sm:text-lg px-8 py-4 inline-flex items-center justify-center gap-2 w-full sm:w-auto min-h-[56px]"
            >
              Book a Free Consult
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <p className="text-sm text-gray-400">
              No pressure. No sales pitch. Just a real CPA conversation.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
