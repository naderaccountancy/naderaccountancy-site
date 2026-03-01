import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tax Services & Planning | Nader Accountancy",
  description:
    "Ben Nader, CPA — tax services for business owners and self-employed professionals. Save money, stay compliant, and stop stressing about taxes.",
};

const pricingTiers = [
  {
    id: "tax-prep",
    name: "Tax Return Preparation",
    description:
      "Professional preparation and filing of your annual tax returns",
    price: "500",
    priceLabel: "starting at",
    priceSuffix: "",
    features: [
      "Federal & state tax return preparation",
      "Review of prior year returns",
      "Deduction optimization",
      "E-filing included",
      "Audit support if needed",
      "Year-round access for questions",
    ],
    cta: "Get Started",
    highlight: false,
  },
  {
    id: "tax-planning",
    name: "Year-Round Tax Planning",
    description:
      "Proactive tax strategy and ongoing advisory throughout the year",
    price: "200",
    priceLabel: "starting at",
    priceSuffix: "/month",
    features: [
      "Everything in Tax Prep, plus:",
      "Quarterly tax planning sessions",
      "Estimated tax payment calculations",
      "Entity structure optimization",
      "Real-time tax projections",
      "Proactive tax-saving strategies",
      "Unlimited email & phone support",
    ],
    cta: "Get Started",
    highlight: true,
  },
];

const clientTypes = [
  {
    title: "Small Business Owners",
    description: "Maximize deductions and structure your business for tax efficiency",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Freelancers & Independent Contractors",
    description: "Stay on top of quarterly taxes and write off what you deserve",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "1099 Workers",
    description: "Navigate self-employment taxes and reduce what you owe",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "LLC & S-Corp Owners",
    description: "Optimize your entity structure and save on self-employment tax",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
  },
  {
    title: "Self-Employed Professionals",
    description: "Year-round planning to keep more of what you earn",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
];

const steps = [
  {
    number: "1",
    title: "Book a Free Call",
    description: "Tell me about your situation and goals",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    number: "2",
    title: "Get a Custom Tax Strategy",
    description: "I\u2019ll build a plan tailored to your needs",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    number: "3",
    title: "Save Money & Stay Compliant",
    description: "Relax knowing your taxes are handled",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    quote:
      "Ben completely changed the way I think about my taxes. He found deductions I had no idea about and set me up with a strategy that saves me thousands every year. I finally feel like I have someone in my corner.",
    name: "Marcus T.",
    role: "Small Business Owner",
  },
  {
    quote:
      "I used to dread tax season. Ben made the whole process painless and actually enjoyable. He explains everything in plain English and is always available when I have questions. Highly recommend.",
    name: "Jessica R.",
    role: "Freelance Designer",
  },
  {
    quote:
      "Switching to Ben was the best financial decision I\u2019ve made. He restructured my business entity and I\u2019m saving over $15K a year in taxes. Worth every penny.",
    name: "David L.",
    role: "S-Corp Owner",
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
            {/* Headshot Placeholder */}
            <div className="flex-shrink-0 animate-fade-in-up opacity-0">
              <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full bg-[var(--color-navy-light)] border-4 border-[var(--color-gold)]/30 flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <svg
                    className="w-20 h-20 text-[var(--color-gold)]/40 mx-auto"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                  <span className="text-xs text-gray-500 mt-1 block">
                    Photo coming soon
                  </span>
                </div>
              </div>
            </div>

            {/* Hero Text */}
            <div className="text-center lg:text-left">
              <p className="animate-fade-in-up opacity-0 text-[var(--color-gold)] font-semibold text-sm sm:text-base uppercase tracking-wider mb-4">
                Ben Nader, CPA | Master&apos;s in Tax
              </p>

              <h1 className="animate-fade-in-up opacity-0 animation-delay-100 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
                Tax Services for Business Owners &{" "}
                <span className="text-gradient-gold">
                  Self-Employed Professionals
                </span>
              </h1>

              <p className="animate-fade-in-up opacity-0 animation-delay-200 text-lg sm:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Save money, stay compliant, and stop stressing about taxes.
              </p>

              <div className="animate-fade-in-up opacity-0 animation-delay-300">
                <Link
                  href="/contact"
                  className="btn-primary text-base sm:text-lg px-8 py-4 inline-flex items-center gap-2"
                >
                  Book a Free Consultation
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

      {/* ===== SECTION 2: CREDIBILITY BAR ===== */}
      <section className="bg-[var(--color-navy-deep)] border-t border-[var(--color-gold)]/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
            <div className="flex items-center gap-2.5">
              <svg
                className="w-5 h-5 text-[var(--color-gold)]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-white text-sm font-medium">
                Licensed CPA
              </span>
            </div>

            <div className="hidden sm:block w-px h-5 bg-[var(--color-gold)]/20" />

            <div className="flex items-center gap-2.5">
              <svg
                className="w-5 h-5 text-[var(--color-gold)]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
              <span className="text-white text-sm font-medium">
                Master&apos;s in Tax
              </span>
            </div>

            <div className="hidden sm:block w-px h-5 bg-[var(--color-gold)]/20" />

            <div className="flex items-center gap-2.5">
              <svg
                className="w-5 h-5 text-[var(--color-gold)]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
              <span className="text-white text-sm font-medium">
                75,000+ Social Media Community
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: WHO I HELP ===== */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[var(--color-gold)] font-semibold text-sm uppercase tracking-wider">
              Clients
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[var(--color-navy-deep)]">
              Who I Work With
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {clientTypes.map((client, index) => (
              <div
                key={client.title}
                className={`card p-8 group ${
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

      {/* ===== SECTION 4: HOW IT WORKS ===== */}
      <section className="py-20 sm:py-24 bg-[var(--color-gray-50)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[var(--color-gold)] font-semibold text-sm uppercase tracking-wider">
              Simple Process
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[var(--color-navy-deep)]">
              How It Works
            </h2>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent" />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
              {steps.map((step, index) => (
                <div key={step.number} className="relative">
                  {index < steps.length - 1 && (
                    <div
                      className="lg:hidden absolute left-6 top-16 bottom-0 w-0.5 bg-[var(--color-gold)]/30"
                      style={{ height: "calc(100% + 2rem)" }}
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

                    <div className="ml-6 lg:ml-0 lg:mt-8">
                      <h3 className="text-xl font-bold text-[var(--color-navy-deep)] mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed max-w-sm">
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

      {/* ===== SECTION 5: SERVICES & PRICING ===== */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[var(--color-gold)] font-semibold text-sm uppercase tracking-wider">
              Pricing
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[var(--color-navy-deep)]">
              Choose Your Service
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Transparent pricing with no hidden fees. Select the level of
              service that fits your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {pricingTiers.map((tier) => (
              <div
                key={tier.id}
                className={`relative bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl ${
                  tier.highlight
                    ? "ring-2 ring-[var(--color-gold)] scale-[1.02]"
                    : "border border-gray-100"
                }`}
              >
                {tier.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-gold-dark)] text-[var(--color-navy-deep)] text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-xl font-bold text-[var(--color-navy-deep)] mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-gray-500 text-sm mb-6">
                    {tier.description}
                  </p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-gray-500 text-sm">
                      {tier.priceLabel}
                    </span>
                    <span className="text-4xl font-bold text-[var(--color-navy-deep)]">
                      ${tier.price}
                    </span>
                    <span className="text-gray-500">{tier.priceSuffix}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-[var(--color-gold)] flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`block w-full text-center py-3.5 px-6 rounded-lg font-semibold transition-all duration-200 ${
                    tier.highlight
                      ? "bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-gold-dark)] text-[var(--color-navy-deep)] hover:shadow-lg hover:-translate-y-0.5"
                      : "bg-[var(--color-navy-deep)] text-white hover:bg-[var(--color-navy)] hover:shadow-lg hover:-translate-y-0.5"
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-500 text-sm mt-10 max-w-2xl mx-auto">
            Final pricing is based on complexity. Schedule a free consultation to
            discuss your specific situation.
          </p>
        </div>
      </section>

      {/* ===== SECTION 6: TESTIMONIALS ===== */}
      <section className="py-20 sm:py-24 bg-[var(--color-gray-50)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[var(--color-gold)] font-semibold text-sm uppercase tracking-wider">
              Testimonials
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[var(--color-navy-deep)]">
              What Clients Are Saying
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <svg
                  className="w-10 h-10 text-[var(--color-gold)]/30 mb-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-700 leading-relaxed mb-6 text-sm">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-navy-deep)] flex items-center justify-center text-[var(--color-gold)] font-bold text-sm">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--color-navy-deep)] text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-500 text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 7: ABOUT ME ===== */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[var(--color-gold)] font-semibold text-sm uppercase tracking-wider">
              About
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[var(--color-navy-deep)]">
              Meet Ben Nader
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-12 max-w-4xl mx-auto">
            {/* Photo Placeholder */}
            <div className="flex-shrink-0">
              <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-2xl bg-[var(--color-gray-50)] border-2 border-[var(--color-gold)]/20 flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <svg
                    className="w-16 h-16 text-gray-300 mx-auto"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                  <span className="text-xs text-gray-400 mt-2 block">
                    Photo coming soon
                  </span>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="text-center md:text-left">
              <p className="text-gray-700 text-lg leading-relaxed">
                I&apos;m a licensed CPA with a Master&apos;s in Tax. I help
                business owners and self-employed professionals keep more of what
                they earn through strategic tax planning and preparation. My goal
                is to make taxes simple, stress-free, and actually save you
                money.
              </p>
              <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <svg
                    className="w-4 h-4 text-[var(--color-gold)]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Licensed CPA
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <svg
                    className="w-4 h-4 text-[var(--color-gold)]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                  Master&apos;s in Tax
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 8: FINAL CTA ===== */}
      <section className="py-20 sm:py-24 bg-[var(--color-navy-deep)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Stop Overpaying on Taxes?
          </h2>
          <p className="text-gray-300 mb-10 max-w-xl mx-auto text-lg">
            Schedule a free consultation and let&apos;s see how much you could
            be saving.
          </p>
          <Link
            href="/contact"
            className="btn-primary text-base sm:text-lg px-8 py-4 inline-flex items-center gap-2"
          >
            Book a Free Consultation
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
      </section>
    </main>
  );
}
