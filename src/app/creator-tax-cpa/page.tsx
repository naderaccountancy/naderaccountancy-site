import { Metadata } from "next";
import { CalendlyWidget } from "@/components";

/* ===========================================
   CREATOR LANDING PAGE  /creator-tax-cpa

   Hidden landing page for paid traffic
   (Google Ads, social ad links, etc.)
   - Not linked from navbar, footer, homepage, or sitemap
   - noindex, nofollow at the page level
   =========================================== */

export const metadata: Metadata = {
  title: "CPA Tax Help for Creators With Platform Income | Nader Accountancy",
  description:
    "Tax planning, bookkeeping, quarterly estimates, entity structure, and tax return support for creators earning through platforms, subscriptions, brand deals, and 1099 income.",
  alternates: { canonical: undefined },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      "max-snippet": -1,
      "max-image-preview": "none",
      "max-video-preview": -1,
    },
  },
};

const trustBarItems = [
  "Licensed CPA",
  "Master\u2019s in Tax",
  "Year-Round Tax Planning",
  "Bookkeeping + Tax Compliance",
  "Entity & S Corp Guidance",
];

const audienceCards = [
  {
    title: "OnlyFans & Fansly Creators",
    description:
      "Platform income, subscription revenue, 1099s, business expenses, and quarterly tax planning.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Influencers & Digital Creators",
    description:
      "Brand deals, affiliate income, sponsorships, content expenses, and inconsistent cash flow.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "High-Income 1099 Earners",
    description:
      "Self-employed professionals who need more than basic tax filing.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "LLC & S Corp Owners",
    description:
      "Creators and business owners who need help understanding entity structure, payroll, and compliance.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
];

const problems = [
  "You made good money but have no idea what you owe.",
  "You\u2019re not sure how much to set aside for taxes.",
  "You\u2019re behind on quarterly estimated payments.",
  "Your books are messy or nonexistent.",
  "You formed an LLC but don\u2019t know if it actually helps you.",
  "You\u2019re wondering whether an S corp makes sense.",
  "You\u2019re not sure what expenses are actually deductible.",
  "You want a CPA who understands creator income before tax season \u2014 not after it\u2019s too late.",
];

const services = [
  {
    title: "Tax Planning",
    description:
      "Plan ahead before the year is over so you\u2019re not surprised at filing time.",
  },
  {
    title: "Quarterly Estimated Taxes",
    description:
      "Calculate and manage federal and state estimated payments throughout the year.",
  },
  {
    title: "Bookkeeping Setup & Cleanup",
    description:
      "Organize income, expenses, accounts, and records so tax planning is actually possible.",
  },
  {
    title: "Tax Return Preparation",
    description:
      "Prepare and file individual and business tax returns based on your facts and records.",
  },
  {
    title: "LLC & S Corp Analysis",
    description:
      "Review whether your entity setup makes sense and what compliance comes with it.",
  },
  {
    title: "Prior-Year Cleanup",
    description:
      "Help creators who are behind, disorganized, or need to clean up older tax years.",
  },
];

const whyBullets = [
  "Direct CPA communication",
  "Professional, judgment-free support",
  "Experience with 1099 and platform income",
  "Year-round planning, not just tax prep",
  "Bookkeeping and tax compliance in one place",
  "Guidance around LLCs, S corps, and quarterly estimates",
];

const processSteps = [
  {
    number: "1",
    title: "Book a Call",
    description:
      "Schedule a complimentary tax planning call and answer a few quick questions before the meeting.",
  },
  {
    number: "2",
    title: "Review Your Situation",
    description:
      "We discuss your income, entity, bookkeeping, estimated taxes, prior returns, and current concerns.",
  },
  {
    number: "3",
    title: "Choose the Right Support",
    description:
      "If we\u2019re a fit, we recommend the right next step: tax planning, bookkeeping, cleanup, tax prep, or ongoing advisory.",
  },
  {
    number: "4",
    title: "Build the System",
    description:
      "Once engaged, we help organize your tax process so you\u2019re not waiting until tax season to find out what happened.",
  },
];

export default function CreatorTaxCpaLanding() {
  return (
    <main>
      {/* ===== HERO ===== */}
      <section className="relative bg-gradient-navy overflow-hidden">
        <div className="absolute inset-0 pattern-bg opacity-50" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-[var(--color-gold)]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[var(--color-gold)]/5 rounded-full blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-20 md:pt-44 md:pb-28">
          <div className="text-center">
            <p className="animate-fade-in-up opacity-0 text-[var(--color-gold)] font-semibold text-sm sm:text-base uppercase tracking-wider mb-4">
              Nader Accountancy &nbsp;|&nbsp; CPA Tax Help for Online Creators
            </p>

            <h1 className="animate-fade-in-up opacity-0 animation-delay-100 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
              Making Money Online?{" "}
              <span className="text-gradient-gold">Let&apos;s Get Your Taxes Handled.</span>
            </h1>

            <p className="animate-fade-in-up opacity-0 animation-delay-200 text-lg sm:text-xl text-gray-300 mb-4 leading-relaxed max-w-3xl mx-auto">
              CPA help for OnlyFans, Fansly, influencers, and online creators who need tax planning, bookkeeping, quarterly tax estimates, and tax return support.
            </p>
            <p className="animate-fade-in-up opacity-0 animation-delay-200 text-base sm:text-lg text-gray-400 mb-10 leading-relaxed max-w-3xl mx-auto">
              If you earn money from subscriptions, tips, brand deals, or platform payouts, taxes can get messy fast. Nader Accountancy helps you understand what you owe, what to set aside, and what steps to take before tax season.
            </p>

            <div className="animate-fade-in-up opacity-0 animation-delay-300 flex flex-col items-center gap-3">
              <a
                href="#book-call"
                data-gtm="creator-landing-primary-cta"
                className="creator-landing-primary-cta btn-primary text-base sm:text-lg px-8 py-4 inline-flex items-center justify-center gap-2"
              >
                Book a Complimentary Tax Planning Call
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <p className="text-sm text-gray-400 mt-2">
                CPA-led tax support for creators, influencers, and self-employed online earners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TRUST BAR ===== */}
      <section className="bg-[var(--color-navy-deep)] border-t border-[var(--color-gold)]/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 sm:gap-x-10">
            {trustBarItems.map((item, idx) => (
              <div key={item} className="flex items-center gap-3">
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)]" />
                  <span className="text-white text-sm font-medium tracking-wide">
                    {item}
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

      {/* ===== WHO THIS IS FOR ===== */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[var(--color-gold)] font-semibold text-sm uppercase tracking-wider">
              Who This Is For
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[var(--color-navy-deep)]">
              Built for Creators and Self-Employed Earners
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {audienceCards.map((card) => (
              <div key={card.title} className="card p-7 group">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-navy-deep)] flex items-center justify-center text-[var(--color-gold)] mb-5 group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold text-[var(--color-navy-deep)] mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROBLEMS WE HELP SOLVE ===== */}
      <section className="py-20 sm:py-24 bg-[var(--color-gray-50)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[var(--color-gold)] font-semibold text-sm uppercase tracking-wider">
              Problems We Help Solve
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[var(--color-navy-deep)]">
              If This Sounds Like You, We Should Talk
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {problems.map((problem) => (
              <div
                key={problem}
                className="flex items-start gap-4 p-5 rounded-xl bg-white border border-gray-100 shadow-sm"
              >
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[var(--color-navy-deep)] flex items-center justify-center mt-0.5">
                  <svg className="w-4 h-4 text-[var(--color-gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700 leading-relaxed">{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHAT WE HELP WITH ===== */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[var(--color-gold)] font-semibold text-sm uppercase tracking-wider">
              Services
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[var(--color-navy-deep)]">
              Creator Tax Support That Goes Beyond Filing
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="p-6 rounded-xl bg-[var(--color-gray-50)] border border-gray-100 hover:border-[var(--color-gold)]/40 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-gold)]" />
                  <h3 className="font-bold text-[var(--color-navy-deep)]">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY NADER ACCOUNTANCY ===== */}
      <section className="py-20 sm:py-24 bg-[var(--color-navy-deep)] relative overflow-hidden">
        <div className="absolute inset-0 pattern-bg opacity-30" />
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-[var(--color-gold)]/5 rounded-full blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[var(--color-gold)] font-semibold text-sm uppercase tracking-wider">
              Why Nader Accountancy
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">
              A CPA Firm That Understands Creator Income
            </h2>
            <p className="mt-5 text-gray-300 leading-relaxed">
              Creator income is still business income. The problem is that many creators don&apos;t have a system for taxes, bookkeeping, estimated payments, deductions, and entity planning. Nader Accountancy helps turn that chaos into a year-round tax process.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl mx-auto">
            {whyBullets.map((bullet) => (
              <div
                key={bullet}
                className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/10"
              >
                <svg className="w-5 h-5 text-[var(--color-gold)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-200 leading-relaxed">{bullet}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
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
                      <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-[var(--color-navy-deep)] flex items-center justify-center text-[var(--color-gold)] shadow-lg font-bold text-xl">
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

      {/* ===== CALL CLARIFICATION ===== */}
      <section className="py-16 sm:py-20 bg-[var(--color-gray-50)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-gray-100">
            <span className="text-[var(--color-gold)] font-semibold text-sm uppercase tracking-wider">
              Before You Book
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-[var(--color-navy-deep)] mb-4">
              What the Initial Call Is For
            </h2>
            <p className="text-gray-700 leading-relaxed mb-5">
              The initial call is used to understand your situation and determine what level of support you may need. If we&apos;re a good fit, we&apos;ll recommend the appropriate next step.
            </p>
            <div className="border-l-4 border-[var(--color-gold)] bg-[var(--color-gray-50)] p-4 rounded-r-lg">
              <p className="text-gray-700 text-sm leading-relaxed">
                <span className="font-semibold text-[var(--color-navy-deep)]">Note:</span>{" "}
                This is not a full tax planning engagement, tax projection, return review, or implementation session. Specific tax advice and implementation are provided after engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CALENDLY EMBED ===== */}
      <section id="book-call" className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-[var(--color-gold)] font-semibold text-sm uppercase tracking-wider">
              Schedule
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[var(--color-navy-deep)]">
              Book a Complimentary Tax Planning Call
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Pick a time that works for you. Tell us about your income, entity, and current tax situation so we can recommend the right level of support.
            </p>
          </div>

          <div
            data-gtm="creator-calendly-click"
            className="creator-calendly-click bg-white rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100"
          >
            <CalendlyWidget />
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="relative py-20 sm:py-24 bg-[var(--color-navy-deep)] overflow-hidden">
        <div className="absolute inset-0 pattern-bg opacity-30" />
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-[var(--color-gold)]/10 rounded-full blur-3xl" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[var(--color-gold)] font-semibold text-sm uppercase tracking-wider">
            Final Step
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
            Ready to Stop Guessing on Taxes?
          </h2>
          <p className="text-gray-300 mb-10 max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
            If you earn income through platforms, subscriptions, brand deals, or 1099 work, your tax situation needs a system. Book a complimentary call and see what level of support makes sense.
          </p>
          <a
            href="#book-call"
            data-gtm="creator-landing-final-cta"
            className="creator-landing-final-cta btn-primary text-base sm:text-lg px-8 py-4 inline-flex items-center justify-center gap-2"
          >
            Book a Complimentary Tax Planning Call
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
          <p className="mt-6 text-gray-400 text-sm max-w-2xl mx-auto leading-relaxed">
            For creators, self-employed professionals, and business owners looking for tax planning, bookkeeping, compliance, cleanup, or advisory support.
          </p>
        </div>
      </section>
    </main>
  );
}
