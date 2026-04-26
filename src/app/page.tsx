import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tax Planning & Advisory for Self-Employed & Business Owners | Nader Accountancy",
  description:
    "Year-round tax planning, compliance, and advisory for high-income self-employed professionals, creators, consultants, LLC and S corp owners.",
};

/* ===========================================
   HOMEPAGE
   High-converting funnel for high-income
   self-employed professionals & business owners
   =========================================== */

const trustBarItems = [
  { label: "Licensed CPA" },
  { label: "Master\u2019s in Tax" },
  { label: "120k+ Social Media Community" },
  { label: "Year-Round Tax Planning" },
  { label: "Business + Individual Compliance" },
];

const problems = [
  "You made good money but have no idea what you owe.",
  "You\u2019re behind on quarterly estimated taxes.",
  "Your books are messy, incomplete, or only touched at tax time.",
  "You formed an LLC but don\u2019t know if it actually helps you.",
  "You\u2019re considering an S corp but don\u2019t understand payroll or reasonable compensation.",
  "You keep hearing tax advice online and don\u2019t know what\u2019s real.",
  "You got hit with a surprise tax bill last year.",
  "You want a CPA who helps before tax season \u2014 not after it\u2019s too late.",
];

const advisoryFeatures = [
  "Bookkeeping",
  "Annual tax return preparation included",
  "Quarterly tax projections",
  "Estimated payment planning",
  "Entity structure review",
  "Year-end tax planning",
  "Business and individual tax coordination",
  "Email and phone support with defined response times",
];

const strategySessionFeatures = [
  "Current tax situation review",
  "Entity structure discussion",
  "Estimated tax planning",
  "Deduction review",
  "Retirement plan discussion",
  "Year-end planning opportunities",
  "Written summary of recommendations",
];

const taxPrepFeatures = [
  "Federal & state tax return preparation",
  "Review of prior year returns",
  "Deduction review",
  "E-filing included",
  "Add advisory anytime",
];

const cleanupExamples = [
  "Multi-year late filings",
  "CA LLC compliance issues",
  "FTB notices and cleanup",
  "Bookkeeping cleanup",
  "Entity correction and compliance",
  "S corp election planning",
  "Estimated tax catch-up planning",
  "Creator and 1099 tax cleanup",
];

const clientTypes = [
  {
    title: "High-Income Self-Employed Professionals",
    description:
      "You earn strong income but don\u2019t have a clean quarterly tax system.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Creators, Influencers & Online Businesses",
    description:
      "1099 income, brand deals, platform income, write-off questions, and inconsistent cash flow.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "LLC & S Corp Owners",
    description:
      "Entity structure, payroll coordination, reasonable compensation, planning, and compliance.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Small Business Owners",
    description:
      "Bookkeeping, tax planning, return preparation, and year-round advisory in one place.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "People With Tax Messes",
    description:
      "Late filings, entity issues, CA LLC problems, estimated tax problems, or prior-year cleanup.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
  },
];

const processSteps = [
  {
    number: "1",
    title: "Apply",
    description:
      "Tell us about your income, business, entity, and current tax situation.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    number: "2",
    title: "Strategy",
    description:
      "We review your situation and identify the right level of support.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    number: "3",
    title: "Build the System",
    description:
      "We create a tax planning, compliance, bookkeeping, and estimated payment process around your needs.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
  },
  {
    number: "4",
    title: "Stay Ahead",
    description:
      "We monitor your tax picture throughout the year so you\u2019re not waiting until tax season to find out what happened.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

const faqs = [
  {
    q: "Do you only prepare tax returns?",
    a: "No. Tax preparation is available, but the firm is primarily focused on year-round tax planning, compliance, and advisory for business owners and self-employed professionals.",
  },
  {
    q: "Do I need bookkeeping?",
    a: "If your books are messy or incomplete, bookkeeping cleanup may be required before meaningful tax planning can be done.",
  },
  {
    q: "Do you work with creators and influencers?",
    a: "Yes. We work with creators, online businesses, consultants, and self-employed professionals with 1099 income, brand deals, platform income, and business expenses.",
  },
  {
    q: "Can you help me decide if I need an S corp?",
    a: "Yes. We can review your income, entity structure, payroll considerations, reasonable compensation, and compliance requirements.",
  },
  {
    q: "Do you offer one-time advice?",
    a: "Yes. The Tax Strategy Session is available for clients who want a one-time CPA review before committing to monthly advisory.",
  },
  {
    q: "Do you guarantee tax savings?",
    a: "No. The goal is to build a compliant, proactive tax system and identify planning opportunities where legally available. Results depend on your facts and circumstances.",
  },
];

export default function Home() {
  return (
    <main>
      {/* ===== SECTION 1: HERO ===== */}
      <section className="relative bg-gradient-navy overflow-hidden">
        <div className="absolute inset-0 pattern-bg opacity-50" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-[var(--color-gold)]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[var(--color-gold)]/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24 md:pt-44 md:pb-32">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Headshot — desktop only */}
            <div className="hidden lg:block flex-shrink-0 animate-fade-in-up opacity-0">
              <div className="w-64 h-64 rounded-full border-4 border-[var(--color-gold)]/30 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/ben-nader-headshot.png"
                  alt="Ben Nader, CPA"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Hero Text */}
            <div className="text-center lg:text-left">
              <p className="animate-fade-in-up opacity-0 text-[var(--color-gold)] font-semibold text-sm sm:text-base uppercase tracking-wider mb-4">
                Ben Nader, CPA &nbsp;|&nbsp; Master&apos;s in Tax
              </p>

              <h1 className="animate-fade-in-up opacity-0 animation-delay-100 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
                Tax Planning for High-Income Self-Employed Professionals &{" "}
                <span className="text-gradient-gold">Business Owners</span>
              </h1>

              <p className="animate-fade-in-up opacity-0 animation-delay-200 text-lg sm:text-xl text-gray-300 mb-4 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Stop guessing what you owe. Get a year-round tax system built by a CPA.
              </p>
              <p className="animate-fade-in-up opacity-0 animation-delay-200 text-base sm:text-lg text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Nader Accountancy helps consultants, LLC owners, S corp owners, small business owners, and creators stay compliant, plan quarterly taxes, understand their entity structure, and avoid surprise tax bills.
              </p>

              <div className="animate-fade-in-up opacity-0 animation-delay-300">
                <Link
                  href="/contact"
                  className="btn-primary text-base sm:text-lg px-8 py-4 inline-flex items-center gap-2"
                >
                  Apply to Work With Us
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: TRUST BAR ===== */}
      <section className="bg-[var(--color-navy-deep)] border-t border-[var(--color-gold)]/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 sm:gap-x-10">
            {trustBarItems.map((item, idx) => (
              <div key={item.label} className="flex items-center gap-3">
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)]" />
                  <span className="text-white text-sm font-medium tracking-wide">
                    {item.label}
                  </span>
                </div>
                {idx < trustBarItems.length - 1 && (
                  <span className="hidden sm:block w-px h-4 bg-[var(--color-gold)]/20" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: PROBLEMS I SOLVE ===== */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[var(--color-gold)] font-semibold text-sm uppercase tracking-wider">
              Problems We Solve
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[var(--color-navy-deep)]">
              If This Sounds Like You, We Should Talk
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {problems.map((problem) => (
              <div
                key={problem}
                className="flex items-start gap-4 p-5 rounded-xl bg-[var(--color-gray-50)] border border-gray-100"
              >
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[var(--color-navy-deep)] flex items-center justify-center mt-0.5">
                  <svg
                    className="w-4 h-4 text-[var(--color-gold)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-gray-700 leading-relaxed">{problem}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center gap-2"
            >
              Apply to Work With Us
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: SERVICES & PRICING ===== */}
      <section id="services" className="py-20 sm:py-24 bg-[var(--color-gray-50)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[var(--color-gold)] font-semibold text-sm uppercase tracking-wider">
              Services & Pricing
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[var(--color-navy-deep)]">
              Build a Year-Round Tax System
            </h2>
            <p className="mt-4 text-gray-600">
              Receive a tax plan built around your income, entity, and goals. Engagements are scoped to your situation; final pricing depends on complexity.
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
              <div className="lg:col-span-2 bg-[var(--color-navy-deep)] p-8 sm:p-10 flex flex-col justify-center">
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
                <p className="text-gray-300 leading-relaxed text-sm mb-6">
                  For high-income self-employed professionals, creators, consultants, and business owners who need proactive tax planning throughout the year.
                </p>
                <p className="text-xs text-gray-400 leading-relaxed">
                  <span className="text-[var(--color-gold)] font-semibold">Best fit:</span>{" "}
                  Clients earning $150k+ annually from self-employment, business income, creator income, consulting, or ownership activity.
                </p>
              </div>

              <div className="lg:col-span-3 p-8 sm:p-10">
                <ul className="space-y-3.5 mb-8">
                  {advisoryFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-[var(--color-gold)] flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="block w-full text-center py-3.5 px-6 rounded-lg font-semibold bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-gold-dark)] text-[var(--color-navy-deep)] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                >
                  Apply for Advisory
                </Link>
              </div>
            </div>
          </div>

          {/* Secondary offers grid: Strategy Session, Tax Prep */}
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
                  <span className="text-2xl font-bold text-[var(--color-navy-deep)]">$750–$1,500</span>
                  <span className="text-gray-500 text-sm">one-time</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  A one-time CPA strategy session for self-employed professionals and business owners who want clarity on their tax situation.
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
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <p className="text-xs text-gray-500 italic mb-5 leading-relaxed">
                If you become a monthly advisory client within 30 days, the strategy session fee may be credited toward onboarding.
              </p>

              <Link
                href="/contact#strategy-session"
                className="block w-full text-center py-3 px-5 rounded-lg font-semibold bg-[var(--color-navy-deep)] text-white hover:bg-[var(--color-navy)] hover:-translate-y-0.5 transition-all duration-200"
              >
                Book a Strategy Session
              </Link>
            </div>

            {/* Tax Return Preparation - secondary, deemphasized */}
            <div className="bg-[var(--color-gray-50)] rounded-2xl p-7 border border-gray-200 flex flex-col">
              <div className="mb-6">
                <span className="text-gray-500 font-semibold text-xs uppercase tracking-wider">
                  Compliance Only
                </span>
                <h3 className="mt-2 text-xl font-bold text-[var(--color-navy-deep)] mb-2">
                  Tax Return Preparation
                </h3>
                <div className="flex items-baseline gap-1.5 mb-3">
                  <span className="text-2xl font-bold text-[var(--color-navy-deep)]">$1,000+</span>
                  <span className="text-gray-500 text-sm">starting at</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  For clients who need professional tax return preparation but don&apos;t require year-round advisory.
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
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="block w-full text-center py-3 px-5 rounded-lg font-semibold border-2 border-[var(--color-navy-deep)] text-[var(--color-navy-deep)] hover:bg-[var(--color-navy-deep)] hover:text-white transition-all duration-200"
              >
                Inquire About Tax Prep
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 5: TAX CLEANUP & SPECIAL PROJECTS ===== */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <span className="text-[var(--color-gold)] font-semibold text-sm uppercase tracking-wider">
                Project-Based Engagements
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[var(--color-navy-deep)] mb-5">
                Tax Cleanup & Special Projects
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Not every client needs monthly advisory right away. Some need a serious tax problem cleaned up first.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Cleanup engagements are scoped after a paid Tax Strategy Session, which gives us a clear view of the work required and the right path forward.
              </p>
              <Link
                href="/contact#strategy-session"
                className="btn-primary inline-flex items-center gap-2"
              >
                Start With a Strategy Session
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="bg-[var(--color-navy-deep)] rounded-2xl p-8 sm:p-10">
              <h3 className="text-white font-semibold text-base uppercase tracking-wider text-[var(--color-gold)] mb-5">
                Examples
              </h3>
              <ul className="space-y-3.5">
                {cleanupExamples.map((example) => (
                  <li key={example} className="flex items-start gap-3 text-gray-200 leading-relaxed">
                    <svg
                      className="w-5 h-5 text-[var(--color-gold)] flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
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

      {/* ===== SECTION 6: WHO THIS IS FOR ===== */}
      <section className="py-20 sm:py-24 bg-[var(--color-gray-50)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[var(--color-gold)] font-semibold text-sm uppercase tracking-wider">
              Clients
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[var(--color-navy-deep)]">
              Who This Is For
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {clientTypes.map((client, index) => (
              <div
                key={client.title}
                className={`card p-7 group ${
                  index === clientTypes.length - 1 && clientTypes.length % 3 !== 0
                    ? "sm:col-span-2 lg:col-span-1 sm:max-w-md sm:mx-auto lg:max-w-none"
                    : ""
                }`}
              >
                <div className="w-14 h-14 rounded-xl bg-[var(--color-navy-deep)] flex items-center justify-center text-[var(--color-gold)] mb-5 group-hover:scale-110 transition-transform duration-300">
                  {client.icon}
                </div>
                <h3 className="text-lg font-bold text-[var(--color-navy-deep)] mb-2">
                  {client.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {client.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 7: HOW THE PROCESS WORKS ===== */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[var(--color-gold)] font-semibold text-sm uppercase tracking-wider">
              Process
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[var(--color-navy-deep)]">
              How It Works
            </h2>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[var(--color-gold)]/40 to-transparent" />

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-6">
              {processSteps.map((step, index) => (
                <div key={step.number} className="relative">
                  {index < processSteps.length - 1 && (
                    <div
                      className="lg:hidden absolute left-6 top-16 bottom-0 w-0.5 bg-[var(--color-gold)]/30"
                      style={{ height: "calc(100% + 1.5rem)" }}
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
                      <h3 className="text-lg font-bold text-[var(--color-navy-deep)] mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm max-w-xs">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 8: ABOUT / SOCIAL PROOF ===== */}
      <section className="py-20 sm:py-24 bg-[var(--color-gray-50)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-10 md:gap-12 items-center">
            <div className="flex-shrink-0 mx-auto md:mx-0">
              <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-2xl border-2 border-[var(--color-gold)]/20 overflow-hidden shadow-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/ben-nader-headshot.png"
                  alt="Ben Nader, CPA"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="text-center md:text-left">
              <span className="text-[var(--color-gold)] font-semibold text-sm uppercase tracking-wider">
                About
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[var(--color-navy-deep)] mb-5">
                Meet Ben Nader, CPA
              </h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
                I&apos;m a licensed CPA with a Master&apos;s in Tax. Nader Accountancy works with high-income self-employed professionals, creators, consultants, and business owners who want a real tax system &mdash; not just a return filed at the last minute.
              </p>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-8">
                The goal is simple: build a year-round tax system so you know what you owe, when to pay, and how to make smarter tax decisions before the year is over.
              </p>

              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-gray-200 text-sm text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)]" />
                  Licensed CPA
                </span>
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-gray-200 text-sm text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)]" />
                  Master&apos;s in Tax
                </span>
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-gray-200 text-sm text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)]" />
                  120k+ Community
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 9: FAQ ===== */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[var(--color-gold)] font-semibold text-sm uppercase tracking-wider">
              FAQ
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[var(--color-navy-deep)]">
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
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </summary>
                <div className="px-5 sm:px-6 pb-5 sm:pb-6 -mt-1">
                  <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 10: FINAL CTA ===== */}
      <section className="relative py-20 sm:py-24 bg-[var(--color-navy-deep)] overflow-hidden">
        <div className="absolute inset-0 pattern-bg opacity-30" />
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-[var(--color-gold)]/10 rounded-full blur-3xl" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[var(--color-gold)] font-semibold text-sm uppercase tracking-wider">
            Ready to Get Started?
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
            Stay Ahead of Compliance, Estimates, and Year-End Planning
          </h2>
          <p className="text-gray-300 mb-10 max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
            Apply to work with Nader Accountancy. We&apos;ll review your situation and recommend the right level of support.
          </p>
          <div className="flex justify-center">
            <Link
              href="/contact"
              className="btn-primary text-base sm:text-lg px-8 py-4 inline-flex items-center gap-2"
            >
              Apply to Work With Us
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
