import { Metadata } from "next";
import { CalendlyWidget } from "@/components";

/* ===========================================
   CREATOR LANDING PAGE  /creator-tax-cpa

   Hidden landing page for paid traffic
   (Google Ads, social ad links, etc.)
   - Not linked from navbar, footer, homepage, or sitemap
   - noindex, nofollow at the page level
   - Mobile: skip the embed and link straight to
     Calendly's full booking page to avoid the
     nested-scroll issue on small screens.
   =========================================== */

const CALENDLY_URL = "https://calendly.com/ben-naderaccountancy/new-meeting";

export const metadata: Metadata = {
  title:
    "Creator Tax CPA & 1099 Tax Help | Tax Help for Creators | Nader Accountancy",
  description:
    "CPA-led tax help for creators, influencers, and 1099 earners: platform payouts, brand deals, subscriptions, quarterly taxes, and LLC or S-Corp questions. OnlyFans tax help, Fansly tax help, and organized planning year-round.",
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
  "CPA-Led Support",
  "1099 & Platform Income",
  "Planning & Compliance",
  "Year-Round Guidance",
];

const audienceCards = [
  {
    title: "Digital Creators & Influencers",
    description:
      "UGC, YouTube, TikTok, Instagram, and other channels where income mixes ad revenue, affiliates, and sponsorships.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "OnlyFans & Fansly Creators",
    description:
      "Subscription and tip income, platform payouts, 1099s, and expense tracking under the same creator tax umbrella.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "High-Income 1099 Earners",
    description:
      "Self-employment with multiple payors, uneven cash flow, and estimated taxes that need a clear plan.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "LLC & S-Corp Owners",
    description:
      "Entity choice, owner pay, reasonable compensation, and filing obligations explained in plain language.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
];

const problems = [
  "Your income shows up as platform payouts, 1099s, and deposits\u2014but your records don\u2019t match.",
  "You\u2019re not sure how much to reserve for federal and state taxes as income changes month to month.",
  "Brand deals, sponsorships, and subscriptions sit in different accounts with different tax forms.",
  "Quarterly estimated taxes feel guessy, or you\u2019ve missed payment deadlines.",
  "You need business expense tracking that holds up if questions arise\u2014not a shoebox of screenshots.",
  "You have an LLC or are considering an S corporation and want compliance and structure explained clearly.",
  "You want tax help for creators that fits OnlyFans, Fansly, social platforms, and 1099 work\u2014not a one-size filing shop.",
  "You want a creator tax CPA who plans with you during the year, not only when returns are due.",
];

const services = [
  {
    title: "CPA-Led Tax Planning",
    description:
      "Clarity on what to set aside, what to pay, and what to track before year-end\u2014aligned to your actual income streams.",
  },
  {
    title: "1099 & Platform Payouts",
    description:
      "Sort multiple 1099s, platform statements, and deposits so reporting matches how you really earn.",
  },
  {
    title: "Brand Deals & Sponsorships",
    description:
      "Support for contracted revenue, deliverables, and how those payments flow into your tax picture.",
  },
  {
    title: "Subscriptions & Tips",
    description:
      "Help organizing recurring fan revenue, tips, and payout timing alongside other creator income.",
  },
  {
    title: "Business Expense Tracking",
    description:
      "Structure for documenting ordinary and necessary expenses tied to your content and business activity.",
  },
  {
    title: "Quarterly Tax Planning",
    description:
      "Estimated payment planning and timing so you can approach federal and state obligations with a plan.",
  },
  {
    title: "LLC & S-Corp Guidance",
    description:
      "Plain-language guidance on entity tradeoffs, payroll considerations, and ongoing compliance expectations.",
  },
  {
    title: "Tax Return Preparation",
    description:
      "Preparation and filing for individuals and businesses based on complete, organized records.",
  },
  {
    title: "Bookkeeping & Year-Round Support",
    description:
      "Setup, cleanup, and ongoing rhythm so tax season reflects a year of organized books\u2014not a rescue mission.",
  },
];

const whyBullets = [
  "CPA-led support with direct communication and clear expectations",
  "Built for messy creator income: platforms, 1099s, and multiple payors",
  "OnlyFans tax help and Fansly tax help sit alongside YouTube, TikTok, brand deals, and other streams",
  "1099 tax help focused on organization, compliance, and planning—not vague promises",
  "Year-round tax support so filing reflects how you actually operated",
  "LLC and S-Corp questions answered with your real numbers in view",
];

const processSteps = [
  {
    number: "1",
    title: "Book a Call",
    description:
      "Book a free creator tax call and answer a few quick questions before the meeting.",
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
              Nader Accountancy &nbsp;|&nbsp; Creator Tax CPA
            </p>

            <h1 className="animate-fade-in-up opacity-0 animation-delay-100 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
              Tax Help for Creators, Influencers{" "}
              <span className="text-gradient-gold block mt-2">&amp; 1099 Earners</span>
            </h1>

            <p className="animate-fade-in-up opacity-0 animation-delay-200 text-lg sm:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
              Creator income is rarely one tidy paycheck. Nader Accountancy helps you know what to save, what to pay, what to deduct, and how to stay organized—before tax season catches you off guard. Real tax help for creators with platform payouts, 1099s, and business expenses.
            </p>

            <div className="animate-fade-in-up opacity-0 animation-delay-300 flex flex-col items-center gap-3">
              {/* Desktop: smooth-scroll to inline embed */}
              <a
                href="#book-call"
                data-gtm="creator-landing-primary-cta"
                className="creator-landing-primary-cta btn-primary text-base sm:text-lg px-8 py-4 hidden md:inline-flex items-center justify-center gap-2"
              >
                Book a Free Creator Tax Call
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              {/* Mobile: open Calendly directly to avoid nested scrolling */}
              <a
                href={CALENDLY_URL}
                data-gtm="creator-landing-primary-cta"
                className="creator-landing-primary-cta btn-primary text-base sm:text-lg px-8 py-4 inline-flex md:hidden items-center justify-center gap-2"
              >
                Book a Free Creator Tax Call
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <p className="text-sm text-gray-400 mt-2">
                CPA-led planning, compliance, and organization year-round.
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
              Creators, Influencers &amp; Independent Earners
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              From UGC and sponsorships to OnlyFans, Fansly, and high-income 1099 work—if your income is fragmented, you deserve a creator tax CPA who speaks your language.
            </p>
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
              If This Sounds Familiar, Let&apos;s Talk
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
              What We Help With
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Tax help for creators means aligning platform payouts, 1099 tax help, brand and subscription revenue, quarterly planning, and entity questions into one coherent approach.
            </p>
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
              A CPA Firm That Understands How Creators Actually Earn
            </h2>
            <p className="mt-5 text-gray-300 leading-relaxed">
              Your income may be business income, but the sources are rarely simple: platforms, sponsors, fans, affiliates, and 1099s arriving on different schedules. Nader Accountancy focuses on clarity and compliance—organized records, realistic quarterly planning, and entity guidance tied to your facts. That is the difference between basic filing and creator tax CPA support built for messy, real-world income.
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
            <p className="text-gray-700 leading-relaxed">
              The call is to understand your income streams, entity status, and priorities—and to see whether our CPA-led support is a fit. Detailed tax advice, projections, return reviews, and implementation are provided after engagement.
            </p>
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
              Book a Free Creator Tax Call
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Pick a time that works for you. Share how you earn—platforms, 1099s, OnlyFans or Fansly, brand deals, or business income—so we can recommend appropriate planning, bookkeeping, or prep.
            </p>
          </div>

          {/* Desktop / tablet (>=768px): inline Calendly embed */}
          <div
            data-gtm="creator-calendly-click"
            className="creator-calendly-click hidden md:block bg-white rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100"
          >
            <CalendlyWidget height={780} />
          </div>

          {/* Mobile (<768px): direct link avoids nested-scroll inside the iframe */}
          <div className="md:hidden text-center">
            <a
              href={CALENDLY_URL}
              data-gtm="creator-calendly-click"
              className="creator-calendly-click btn-primary text-base px-8 py-4 inline-flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              Continue to Booking
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <p className="text-gray-500 text-sm mt-4 max-w-xs mx-auto leading-relaxed">
              Opens our scheduling page so you can pick a time without scrolling inside the form.
            </p>
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
            Move From Scattered Income to a Clear Plan
          </h2>
          <p className="text-gray-300 mb-10 max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
            Whether you need OnlyFans tax help, Fansly tax help, or support across social platforms and 1099s, the goal is the same: organized records, compliant reporting, and planning you can follow. Book a free creator tax call to discuss your situation.
          </p>
          {/* Desktop: smooth-scroll to inline embed */}
          <a
            href="#book-call"
            data-gtm="creator-landing-final-cta"
            className="creator-landing-final-cta btn-primary text-base sm:text-lg px-8 py-4 hidden md:inline-flex items-center justify-center gap-2"
          >
            Book a Free Creator Tax Call
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
          {/* Mobile: open Calendly directly to avoid nested scrolling */}
          <a
            href={CALENDLY_URL}
            data-gtm="creator-landing-final-cta"
            className="creator-landing-final-cta btn-primary text-base sm:text-lg px-8 py-4 inline-flex md:hidden items-center justify-center gap-2"
          >
            Book a Free Creator Tax Call
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
          <p className="mt-6 text-gray-400 text-sm max-w-2xl mx-auto leading-relaxed">
            For influencers, digital creators, subscription platforms, and high-income 1099 earners who want CPA-led tax help—not a rushed seasonal filing.
          </p>
        </div>
      </section>
    </main>
  );
}
