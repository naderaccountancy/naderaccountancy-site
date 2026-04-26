import { Metadata } from "next";
import Link from "next/link";
import { CalendlyWidget } from "@/components";

/* ===========================================
   APPLICATION PAGE
   
   Selective application funnel for high-income
   self-employed professionals & business owners
   =========================================== */

export const metadata: Metadata = {
  title: "Apply to Work With Nader Accountancy",
  description:
    "Apply to work with Nader Accountancy. Year-round tax planning, compliance, bookkeeping, and advisory for self-employed professionals, creators, and business owners.",
  keywords: [
    "apply to work with CPA",
    "tax strategy session",
    "year-round tax planning",
    "creator CPA",
    "small business CPA",
  ],
};

const CONTACT_CONFIG = {
  email: "ben@naderaccountancy.com",
};

const goodFitItems = [
  {
    title: "Year-Round Tax Advisory",
    description:
      "Recurring monthly support: bookkeeping, annual return preparation, quarterly projections, estimated payments, entity planning, and year-end tax strategy.",
  },
  {
    title: "Tax Strategy Session",
    description:
      "A one-time paid CPA review for owners who want clarity before committing to monthly advisory.",
  },
  {
    title: "Tax Cleanup & Special Projects",
    description:
      "Multi-year filings, FTB/IRS notices, CA LLC issues, S corp elections, and bookkeeping cleanup.",
  },
];

const expectations = [
  {
    step: "1",
    title: "Your Situation",
    description:
      "Income sources, entity structure (sole prop, LLC, S corp), state(s) you operate in, and current tax pain points.",
  },
  {
    step: "2",
    title: "The Right Engagement",
    description:
      "We discuss whether monthly advisory, a strategy session, or a cleanup project is the best next step.",
  },
  {
    step: "3",
    title: "A Clear Path Forward",
    description:
      "If we\u2019re a fit, we send a scoped proposal. If not, we\u2019ll point you in the right direction.",
  },
];

export default function ContactPage() {
  return (
    <main>
      {/* ===== HERO ===== */}
      <section className="relative bg-gradient-navy pt-44 pb-20 overflow-hidden">
        <div className="absolute inset-0 pattern-bg opacity-40" />
        <div className="absolute top-10 right-1/4 w-72 h-72 bg-[var(--color-gold)]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[var(--color-gold)]/5 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-[var(--color-gold)] font-semibold text-sm uppercase tracking-wider">
              New Client Application
            </span>
            <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Apply to Work With{" "}
              <span className="text-gradient-gold">Nader Accountancy</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              This application is for business owners, creators, consultants, and self-employed professionals looking for year-round tax planning, compliance, bookkeeping, or advisory support.
            </p>
            <p className="mt-4 text-base text-gray-400 leading-relaxed max-w-2xl mx-auto">
              If it looks like we can help, we&apos;ll discuss the best next step.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SCHEDULE A STRATEGY CALL (Calendly) ===== */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div id="apply" className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100">
            <div className="text-center mb-6">
              <span className="text-[var(--color-gold)] font-semibold text-sm uppercase tracking-wider">
                Step 1
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[var(--color-navy-deep)] mb-3">
                Schedule a Strategy Call
              </h2>
              <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
                Use the calendar below to schedule a strategy call. Tell us about your income, entity, and current tax situation so we can recommend the right engagement.
              </p>
            </div>
            <CalendlyWidget />
          </div>

          {/* Direct Contact */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-2 text-sm">Prefer email?</p>
            <a
              href={`mailto:${CONTACT_CONFIG.email}`}
              className="inline-flex items-center gap-2 text-[var(--color-gold-dark)] hover:text-[var(--color-gold)] transition-colors font-medium"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {CONTACT_CONFIG.email}
            </a>
          </div>
        </div>
      </section>

      {/* ===== GOOD FIT GRID ===== */}
      <section className="py-16 sm:py-20 bg-[var(--color-gray-50)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[var(--color-gold)] font-semibold text-sm uppercase tracking-wider">
              Engagements
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-[var(--color-navy-deep)]">
              What You Can Apply For
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {goodFitItems.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-xl border border-gray-200 bg-[var(--color-gray-50)]"
              >
                <h3 className="font-semibold text-[var(--color-navy-deep)] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== APPLICATION PROCESS ===== */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[var(--color-gold)] font-semibold text-sm uppercase tracking-wider">
              What to Expect
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-[var(--color-navy-deep)]">
              The Application Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
            {expectations.map((item) => (
              <div
                key={item.step}
                className="bg-[var(--color-gray-50)] rounded-xl p-6 border border-gray-100"
              >
                <div className="w-10 h-10 rounded-full bg-[var(--color-gold)] flex items-center justify-center text-[var(--color-navy-deep)] font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-[var(--color-navy-deep)] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Strategy session anchor */}
          <div
            id="strategy-session"
            className="bg-[var(--color-navy-deep)] rounded-2xl p-8 sm:p-10 text-center"
          >
            <span className="text-[var(--color-gold)] font-semibold text-sm uppercase tracking-wider">
              Tax Strategy Session
            </span>
            <h3 className="mt-2 text-2xl sm:text-3xl font-bold text-white mb-3">
              Book a Paid Tax Strategy Session
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto mb-6 leading-relaxed">
              A one-time CPA review of your current tax situation, entity structure, estimated taxes, deductions, retirement planning options, and year-end opportunities &mdash; with a written summary of recommendations.
            </p>
            <p className="text-gray-400 text-sm max-w-2xl mx-auto mb-8 leading-relaxed">
              $750&ndash;$1,500 one-time. If you become a monthly advisory client within 30 days, the session fee may be credited toward onboarding.
            </p>
            <a
              href="#apply"
              className="btn-primary inline-flex items-center gap-2"
            >
              Schedule a Strategy Call
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ===== PHILOSOPHY ===== */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-navy-deep)] mb-5">
            Clarity, Compliance, and Proactive Decision-Making
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Nader Accountancy doesn&apos;t promise guaranteed tax savings. The goal is to build a year-round tax system so you know what you owe, when to pay, and how to make smarter tax decisions before the year is over.
          </p>
          <p className="text-gray-600 leading-relaxed mb-10">
            Results depend on your facts and circumstances. What we can promise is a real CPA, a real plan, and a real process &mdash; not last-minute filing.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[var(--color-gold-dark)] hover:text-[var(--color-gold)] transition-colors font-semibold"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
