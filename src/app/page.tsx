import { Metadata } from "next";
import Link from "next/link";

/* ===========================================
   HOME PAGE - PRICING FOCUSED
   
   Simple homepage with two pricing tiers
   =========================================== */

export const metadata: Metadata = {
  title: "Tax Services & Planning | Nader Accountancy",
  description: "Expert CPA services for individuals and businesses. Tax return preparation starting at $1,000 or year-round tax planning starting at $400/month.",
};

const pricingTiers = [
  {
    id: "tax-prep",
    name: "Tax Return Preparation",
    description: "Professional preparation and filing of your annual tax returns",
    price: "1,000",
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
    description: "Proactive tax strategy and ongoing advisory throughout the year",
    price: "400",
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

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-navy pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
            Expert Tax Services
            <span className="block text-[var(--color-gold)] mt-2">Tailored to You</span>
          </h1>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-[var(--color-gray-50)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[var(--color-gold)] font-semibold text-sm uppercase tracking-wider">
              Pricing
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[var(--color-navy-deep)]">
              Choose Your Service
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Transparent pricing with no hidden fees. Select the level of service that fits your needs.
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
                    <span className="text-gray-500 text-sm">{tier.priceLabel}</span>
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

          {/* Note about pricing */}
          <p className="text-center text-gray-500 text-sm mt-10 max-w-2xl mx-auto">
            Final pricing is based on complexity. Schedule a free consultation to discuss your specific situation.
          </p>
        </div>
      </section>

      {/* Simple CTA */}
      <section className="py-16 bg-[var(--color-navy-deep)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Schedule a free consultation to discuss your tax situation and find the right solution for you.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 btn-primary text-base"
          >
            Book a Free Consultation
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
