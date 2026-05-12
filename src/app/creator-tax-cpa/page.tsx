import type { Metadata } from "next";
import Image from "next/image";
import { CreatorTaxFAQ, CreatorCalendlyEmbed } from "@/components";

/* ===========================================
   CREATOR LANDING PAGE  /creator-tax-cpa

   Public landing page for content creators and
   influencers searching for a CPA who specializes
   in creator income. Builds the page in one
   server component, with two client subcomponents
   for the FAQ accordion and the Calendly inline
   widget.
   =========================================== */

const CALENDLY_URL =
  "https://calendly.com/ben-naderaccountancy/tax-planning-advisory-call-clone ";

const PAGE_TITLE =
  "Creator Tax CPA | Tax Help for Content Creators & Influencers | Nader Accountancy";
const PAGE_DESCRIPTION =
  "A CPA who actually gets creator income. Tax planning, bookkeeping, and entity strategy for content creators and influencers. Work directly with Ben Nader, CPA.";
const OG_IMAGE = "/images/ben-headshot-v2.jpg";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: "/creator-tax-cpa" },
  openGraph: {
    type: "website",
    url: "https://naderaccountancy.com/creator-tax-cpa",
    siteName: "Nader Accountancy",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Ben Nader, CPA. Nader Accountancy.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [OG_IMAGE],
  },
};

/* ===========================================
   STATIC CONTENT
   =========================================== */

const audienceCards: ReadonlyArray<{
  title: string;
  body: string;
  icon: React.ReactNode;
}> = [
  {
    title: "Digital Creators & Influencers",
    body: "YouTube, TikTok, Instagram, Twitch. Ad revenue, sponsorships, affiliates, and fan support, coordinated into one clean tax picture.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.75}
          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "Content Creators & Subscription Platforms",
    body: "Subscription income, tips, platform payouts, and 1099s. No judgment, no awkwardness, just clean books and a real plan.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.75}
          d="M17 9V7a5 5 0 00-10 0v2a2 2 0 00-2 2v7a2 2 0 002 2h10a2 2 0 002-2v-7a2 2 0 00-2-2zM9 7a3 3 0 116 0v2H9V7z"
        />
      </svg>
    ),
  },
  {
    title: "UGC & Brand Deal Creators",
    body: "Multiple brand contracts, 1099s arriving from everywhere, and uneven cash flow. We make it make sense.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.75}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
  {
    title: "High Income 1099 Creators",
    body: "Once you cross six figures, tax planning is not optional. Quarterly projections, S-corp analysis, and year-end strategy.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.75}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

const soundFamiliarItems: ReadonlyArray<string> = [
  "Your income shows up as platform payouts, 1099s, and deposits, but your records do not match.",
  "You do not know how much to set aside for taxes each month.",
  "Brand deals, sponsorships, and subscriptions sit in different accounts on different schedules.",
  "Quarterly estimated taxes feel like guesswork, or you have missed deadlines.",
  "Your bookkeeping is a Notes app and a folder of screenshots.",
  "You have an LLC, or are wondering if you need an S-corp, and no one has given you a straight answer.",
  "You want a CPA who actually understands how creators earn, not a generic filing shop.",
  "You want someone who plans with you year-round, not someone you only see in April.",
];

const services: ReadonlyArray<{
  title: string;
  body: string;
  icon: React.ReactNode;
}> = [
  {
    title: "CPA Led Tax Planning",
    body: "Know what to set aside, what to pay, and what to track before year-end.",
    icon: <ServiceIcon path="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />,
  },
  {
    title: "Quarterly Tax Projections",
    body: "Estimated payments planned and timed so April never blindsides you.",
    icon: (
      <ServiceIcon path="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    ),
  },
  {
    title: "Bookkeeping",
    body: "Monthly books that reflect how you actually earn, not a tax season rescue mission.",
    icon: (
      <ServiceIcon path="M4 7h16M4 12h16M4 17h10" />
    ),
  },
  {
    title: "1099 & Platform Payout Reconciliation",
    body: "Sort multiple 1099s, platform statements, and deposits cleanly.",
    icon: (
      <ServiceIcon path="M3 10h18M5 6h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z" />
    ),
  },
  {
    title: "Tax Return Preparation",
    body: "Personal and business returns filed on accurate, organized books.",
    icon: (
      <ServiceIcon path="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    ),
  },
  {
    title: "Entity Structure Review",
    body: "LLC, S-corp, sole prop. Clear guidance based on your actual numbers.",
    icon: (
      <ServiceIcon path="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    ),
  },
  {
    title: "Year End Tax Strategy",
    body: "Proactive moves before December 31 to lower next year's bill.",
    icon: (
      <ServiceIcon path="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    ),
  },
  {
    title: "Direct CPA Support",
    body: "Email and phone access with defined response times. You will not be ghosted.",
    icon: (
      <ServiceIcon path="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    ),
  },
];

const creatorPlanFeatures: ReadonlyArray<string> = [
  "Monthly bookkeeping",
  "Annual personal tax return preparation",
  "Quarterly tax projections",
  "Estimated payment planning",
  "Entity structure review",
  "Year end tax planning",
  "Email and phone support with defined response times",
];

const sCorpPlanFeatures: ReadonlyArray<string> = [
  "S-corp business tax return (Form 1120-S)",
  "Reasonable compensation analysis",
  "Business and individual tax coordination",
  "Owner pay & distribution planning",
  "Priority response times",
];

const processSteps: ReadonlyArray<{
  number: string;
  title: string;
  body: string;
}> = [
  {
    number: "1",
    title: "Book a Free Call",
    body: "A 30 minute call to talk through your income, entity, and current setup. No prep needed.",
  },
  {
    number: "2",
    title: "Get a Clear Recommendation",
    body: "If we are a fit, I will recommend the right plan and walk you through what onboarding looks like.",
  },
  {
    number: "3",
    title: "We Build Your System",
    body: "Books cleaned up, accounts connected, prior returns reviewed, quarterly plan drafted. You stop guessing.",
  },
  {
    number: "4",
    title: "You Get Back to Creating",
    body: "Ongoing bookkeeping, quarterly check-ins, year-end planning, and tax prep. Handled.",
  },
];

const faqItems: ReadonlyArray<{ question: string; answer: string }> = [
  {
    question: "Do you work with adult content creators?",
    answer:
      "Yes, fully and without judgment. Subscription and tip income gets reported and planned for the same way any other 1099 income does. Your business is your business.",
  },
  {
    question:
      "I am behind on taxes, or have not filed in years. Can you help?",
    answer:
      "Yes. Cleanup is one of the most common situations new clients come to me with. We will get prior years filed and put a forward plan in place. No lectures.",
  },
  {
    question: "Do you work with creators in every state?",
    answer:
      "Yes, I work with creators nationwide. Everything is remote.",
  },
  {
    question: "How much income do I need to make to be a fit?",
    answer:
      "Most clients are earning $75K+ in creator income, but the better question is whether you are treating it like a business. If you are past the hobby stage and ready for real structure, we are likely a fit.",
  },
  {
    question: "Will I work with you directly, or with an associate?",
    answer:
      "You work with me. I am a solo CPA practice by design, so when you reach out, you get the CPA, not a hand off.",
  },
  {
    question: "Do I need an LLC or S-corp to work with you?",
    answer:
      "No. Part of what we figure out on the first call is whether your current entity structure makes sense or needs to change.",
  },
  {
    question: "What software do you use for bookkeeping?",
    answer:
      "We use modern cloud accounting tools, primarily QuickBooks Online. If you are already on something, we will evaluate it during onboarding.",
  },
  {
    question: "How fast do you respond?",
    answer:
      "Email responses within 1 business day for Creator clients, same day for Creator + S-Corp clients during business hours.",
  },
  {
    question: "Are engagements month to month?",
    answer:
      "Yes. No annual contracts, no lock in. Cancel any time.",
  },
  {
    question: "What if I do not have clean books yet?",
    answer:
      "That is the most common starting point. Bookkeeping cleanup is part of onboarding. We will get you to a clean baseline before moving forward.",
  },
];

/* ===========================================
   SHARED SUB-COMPONENTS
   =========================================== */

function ServiceIcon({ path }: { path: string }) {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.75}
        d={path}
      />
    </svg>
  );
}

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`w-5 h-5 ${className}`}
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
  );
}

function TikTokIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005.8 20.1a6.34 6.34 0 0010.86-4.43V8.6a8.16 8.16 0 005 1.7V6.85a4.79 4.79 0 01-2.07-.16z" />
    </svg>
  );
}

function InstagramIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function YouTubeIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function XIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.244 2H21.5l-7.5 8.57L23 22h-6.844l-5.36-7.012L4.6 22H1.34l8.02-9.166L1 2h7.02l4.84 6.4L18.244 2zm-2.4 18h1.866L7.27 4H5.27l10.574 16z" />
    </svg>
  );
}

const SOCIAL_LINKS: ReadonlyArray<{
  name: string;
  url: string;
  Icon: (props: { className?: string }) => React.JSX.Element;
}> = [
  { name: "TikTok", url: "https://www.tiktok.com/@naderaccountancy", Icon: TikTokIcon },
  { name: "Instagram", url: "https://www.instagram.com/naderaccountancy/", Icon: InstagramIcon },
  { name: "YouTube", url: "https://www.youtube.com/@NaderAccountancy", Icon: YouTubeIcon },
  { name: "X", url: "https://x.com/naderaccountancy", Icon: XIcon },
];

/* ===========================================
   PAGE
   =========================================== */

export default function CreatorTaxCpaLanding() {
  return (
    <main>
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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left column */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <p className="animate-fade-in-up opacity-0 text-[var(--color-gold)] font-semibold text-xs sm:text-sm uppercase tracking-wider mb-4">
                Nader Accountancy &nbsp;|&nbsp; Creator Tax CPA
              </p>

              <h1 className="animate-fade-in-up opacity-0 animation-delay-100 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
                A CPA Who Actually{" "}
                <span className="text-gradient-gold">Gets Creator Income.</span>
              </h1>

              <p className="animate-fade-in-up opacity-0 animation-delay-200 text-base sm:text-lg lg:text-xl text-gray-300 mb-6 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Tax planning, bookkeeping, and entity strategy for content
                creators and influencers. You work directly with me, Ben Nader,
                CPA, not handed to a junior associate. No judgment, no jargon,
                no surprise tax bills.
              </p>

              <p className="animate-fade-in-up opacity-0 animation-delay-300 text-xs sm:text-sm text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0">
                CPA · Master&apos;s in Taxation · @NaderAccountancy · 150K+ followers
              </p>

              <div className="animate-fade-in-up opacity-0 animation-delay-400 flex flex-col items-center lg:items-start gap-3">
                <a
                  href="#book"
                  data-gtm="creator-landing-hero-cta"
                  className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-4 inline-flex items-center justify-center gap-2 w-full sm:w-auto max-w-full"
                >
                  Book a Free Creator Tax Call
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
                </a>
                <p className="text-xs sm:text-sm text-gray-400 max-w-md mx-auto lg:mx-0">
                  30 minute call. No prep needed. We will figure out if we are a fit.
                </p>
              </div>
            </div>

            {/* Right column */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="animate-fade-in-up opacity-0 animation-delay-200 relative w-full max-w-sm sm:max-w-md lg:max-w-none">
                <div
                  className="absolute inset-0 bg-gradient-to-tr from-[var(--color-gold)]/30 via-transparent to-[var(--color-gold)]/10 rounded-3xl blur-2xl"
                  aria-hidden="true"
                />
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-[var(--color-gold)]/30 shadow-2xl bg-[var(--color-navy)]">
                  <Image
                    src="/images/ben-headshot-v2.jpg"
                    alt="Ben Nader, CPA, founder of Nader Accountancy and creator tax specialist."
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 480px"
                    priority
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: SOCIAL PROOF BAR ===== */}
      <section className="bg-[var(--color-navy-deep)] border-t border-[var(--color-gold)]/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <div className="text-center">
            <p className="text-xs sm:text-sm uppercase tracking-wider text-gray-400 font-medium">
              Trusted creator tax content seen across
            </p>
            <div className="mt-5 flex items-center justify-center gap-6 sm:gap-10 text-gray-400">
              {SOCIAL_LINKS.map(({ name, Icon }) => (
                <span key={name} className="opacity-80 hover:opacity-100 transition-opacity">
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8" />
                  <span className="sr-only">{name}</span>
                </span>
              ))}
            </div>
            <p className="mt-5 text-sm sm:text-base text-gray-300">
              150,000+ creators follow{" "}
              <span className="text-[var(--color-gold)] font-semibold">
                @NaderAccountancy
              </span>{" "}
              for tax guidance.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: WHO THIS IS FOR ===== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <span className="text-[var(--color-gold)] font-semibold text-xs sm:text-sm uppercase tracking-wider">
              Who This Is For
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-navy-deep)]">
              Built for Creators Who Treat This Like a Business
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
              If your income is fragmented across platforms, 1099s, and brand
              deals, and you are ready to stop guessing on taxes, this is for you.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
            {audienceCards.map((card) => (
              <div key={card.title} className="card p-6 sm:p-7 group">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-navy-deep)] flex items-center justify-center text-[var(--color-gold)] mb-5 group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[var(--color-navy-deep)] mb-2">
                  {card.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: SOUND FAMILIAR ===== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[var(--color-gray-50)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <span className="text-[var(--color-gold)] font-semibold text-xs sm:text-sm uppercase tracking-wider">
              Sound Familiar?
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-navy-deep)]">
              Sound Familiar?
            </h2>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            {soundFamiliarItems.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl bg-white border border-gray-100 shadow-sm"
              >
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-green-50 text-green-600 flex items-center justify-center mt-0.5">
                  <CheckIcon className="w-4 h-4" />
                </span>
                <span className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <p className="mt-10 sm:mt-12 text-center text-base sm:text-lg lg:text-xl font-semibold text-[var(--color-navy-deep)] max-w-3xl mx-auto leading-relaxed">
            You do not need another generic accountant. You need a CPA who has
            spent years inside creator finances.
          </p>
        </div>
      </section>

      {/* ===== SECTION 5: MEET BEN ===== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-5 flex justify-center lg:justify-start">
              <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-none">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-[var(--color-gold)]/20 to-transparent rounded-3xl blur-2xl"
                  aria-hidden="true"
                />
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border border-gray-100 bg-[var(--color-gray-50)]">
                  <Image
                    src="/images/ben-about-v2.jpg"
                    alt="Ben Nader, CPA, founder of Nader Accountancy."
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 480px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <span className="text-[var(--color-gold)] font-semibold text-xs sm:text-sm uppercase tracking-wider">
                Meet Your CPA
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-navy-deep)] mb-6">
                Meet Ben Nader, CPA
              </h2>

              <div className="space-y-5 text-base sm:text-lg text-gray-700 leading-relaxed">
                <p>
                  I am Ben, a Certified Public Accountant with a Master&apos;s
                  in Taxation. I built Nader Accountancy specifically for
                  creators because I saw the same thing over and over: smart,
                  six-figure creators stuck with accountants who did not
                  understand their income, did not return calls, and treated
                  their business like a side hobby.
                </p>
                <p>
                  I run{" "}
                  <span className="font-semibold text-[var(--color-navy-deep)]">
                    @NaderAccountancy
                  </span>{" "}
                  across TikTok, Instagram, and YouTube, where 150,000+ creators
                  follow along for plain-language tax guidance. That same
                  direct, no-jargon approach is how I run engagements.
                </p>
                <p className="font-semibold text-[var(--color-navy-deep)]">
                  When you work with Nader Accountancy, you work with me. Not a
                  rotating cast of associates. Not a chatbot. Not a junior
                  bookkeeper. The CPA.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm sm:text-base text-gray-700">
                <span className="inline-flex items-center gap-2">
                  <span aria-hidden="true">🎓</span> Master&apos;s in Taxation
                </span>
                <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-gray-300" />
                <span className="inline-flex items-center gap-2">
                  <span aria-hidden="true">📜</span> Certified Public Accountant
                </span>
                <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-gray-300" />
                <span className="inline-flex items-center gap-2">
                  <span aria-hidden="true">📱</span> @NaderAccountancy
                </span>
              </div>

              <div className="mt-8">
                <a
                  href="#book"
                  data-gtm="creator-landing-meet-cta"
                  className="btn-primary text-base px-6 sm:px-8 py-3.5 inline-flex items-center justify-center gap-2"
                >
                  Book a Free Call
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
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 6: WHAT WE HELP WITH ===== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[var(--color-gray-50)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <span className="text-[var(--color-gold)] font-semibold text-xs sm:text-sm uppercase tracking-wider">
              Services
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-navy-deep)]">
              What You Get When We Work Together
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="p-6 rounded-xl bg-white border border-gray-100 shadow-sm hover:border-[var(--color-gold)]/40 hover:shadow-md transition-all"
              >
                <div className="w-11 h-11 rounded-lg bg-[var(--color-navy-deep)] flex items-center justify-center text-[var(--color-gold)] mb-4">
                  {service.icon}
                </div>
                <h3 className="font-bold text-[var(--color-navy-deep)] mb-2 text-base">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {service.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 7: PRICING ===== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <span className="text-[var(--color-gold)] font-semibold text-xs sm:text-sm uppercase tracking-wider">
              Pricing
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-navy-deep)]">
              Simple Monthly Pricing. No Long Term Contracts.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
              Two plans built for serious creators. Pick the one that fits how
              your business is structured.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto items-stretch">
            {/* CREATOR */}
            <div className="relative bg-white rounded-2xl p-7 sm:p-8 flex flex-col shadow-lg hover:shadow-xl border border-gray-100 transition-all duration-300">
              <div className="mb-5">
                <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-gold)]">
                  Creator
                </p>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-4xl sm:text-5xl font-bold text-[var(--color-navy-deep)]">
                    $400
                  </span>
                  <span className="text-lg sm:text-xl font-semibold text-gray-500">
                    / month
                  </span>
                </div>
                <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
                  For creators operating as sole proprietors or single member
                  LLCs.
                </p>
              </div>

              <hr className="border-gray-100 my-2" />

              <ul className="mt-5 space-y-3 mb-8 flex-grow">
                {creatorPlanFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckIcon className="text-[var(--color-gold)] flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-gray-700">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#book"
                data-gtm="creator-landing-pricing-creator-cta"
                className="block w-full text-center py-3.5 rounded-lg font-semibold transition-all bg-[var(--color-navy-deep)] text-white hover:bg-[var(--color-navy-light)]"
              >
                Book a Call
              </a>
            </div>

            {/* CREATOR + S-CORP */}
            <div className="pricing-featured relative bg-white rounded-2xl p-7 sm:p-8 flex flex-col shadow-2xl lg:scale-[1.02] transition-all duration-300">
              <div className="mb-5 mt-2">
                <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-gold)]">
                  Creator + S-Corp
                </p>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-4xl sm:text-5xl font-bold text-[var(--color-navy-deep)]">
                    $600
                  </span>
                  <span className="text-lg sm:text-xl font-semibold text-gray-500">
                    / month
                  </span>
                </div>
                <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
                  For creators with S-corp elections, or ready to make one,
                  earning $100K+.
                </p>
              </div>

              <hr className="border-gray-100 my-2" />

              <p className="mt-4 text-sm font-semibold text-[var(--color-navy-deep)]">
                Everything in Creator, plus:
              </p>

              <ul className="mt-3 space-y-3 mb-8 flex-grow">
                {sCorpPlanFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckIcon className="text-[var(--color-gold)] flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-gray-700">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#book"
                data-gtm="creator-landing-pricing-scorp-cta"
                className="btn-primary block w-full text-center py-3.5"
              >
                Book a Call
              </a>
            </div>
          </div>

          <p className="mt-10 text-center text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Not sure which fits? Book a free call and we will figure it out
            together. Engagements are month to month with no long term
            commitment.
          </p>
        </div>
      </section>

      {/* ===== SECTION 8: HOW IT WORKS ===== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[var(--color-navy-deep)] relative overflow-hidden">
        <div className="absolute inset-0 pattern-bg opacity-30" aria-hidden="true" />
        <div
          className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-[var(--color-gold)]/5 rounded-full blur-3xl"
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-[var(--color-gold)] font-semibold text-xs sm:text-sm uppercase tracking-wider">
              Process
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              How It Works
            </h2>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <div
              className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[var(--color-gold)]/40 to-transparent"
              aria-hidden="true"
            />

            <ol className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6">
              {processSteps.map((step) => (
                <li
                  key={step.number}
                  className="relative flex lg:flex-col items-start lg:items-center text-left lg:text-center gap-5 lg:gap-0"
                >
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-white flex items-center justify-center text-[var(--color-navy-deep)] shadow-lg font-bold text-xl border-2 border-[var(--color-gold)]">
                      {step.number}
                    </div>
                  </div>

                  <div className="lg:mt-6 flex-1">
                    <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed lg:max-w-xs lg:mx-auto">
                      {step.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ===== SECTION 9: FAQ ===== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[var(--color-gray-50)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <span className="text-[var(--color-gold)] font-semibold text-xs sm:text-sm uppercase tracking-wider">
              FAQ
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-navy-deep)]">
              Common Questions From Creators
            </h2>
          </div>

          <CreatorTaxFAQ items={faqItems as unknown as { question: string; answer: string }[]} />
        </div>
      </section>

      {/* ===== SECTION 10: FINAL CTA + CALENDLY ===== */}
      <section id="book" className="py-16 sm:py-20 lg:py-24 bg-white scroll-mt-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <span className="text-[var(--color-gold)] font-semibold text-xs sm:text-sm uppercase tracking-wider">
              Book Your Call
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-navy-deep)]">
              Ready to Stop Guessing?
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
              Whether you are earning your first $100K from content or already
              running a creator business doing seven figures, the next step is
              the same. Book a free call. We will figure out if we are a fit.
            </p>
            <p className="mt-3 text-xs sm:text-sm text-gray-500 leading-relaxed">
              30 minutes. No sales pressure. You will leave the call with a
              clearer picture of where you stand, even if we do not work
              together.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-3 sm:p-4 lg:p-6">
            <CreatorCalendlyEmbed url={CALENDLY_URL} height={700} />
          </div>
        </div>
      </section>
    </main>
  );
}
