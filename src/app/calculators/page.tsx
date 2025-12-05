import { Metadata } from "next";
import Link from "next/link";
import { CTAStrip } from "@/components";

/* ===========================================
   CALCULATORS LANDING PAGE
   
   List of available tax calculators
   =========================================== */

export const metadata: Metadata = {
  title: "Calculators | Nader Accountancy - Free Tax Tools",
  description: "Free tax calculators for content creators. Estimate prize winnings taxes, S-Corp savings, quarterly taxes, and more.",
};

const calculators = [
  {
    id: "prize-winnings",
    title: "Prize Winnings Calculator",
    description: "Won a contest or cash prize? Calculate how much you'll actually keep after federal and state taxes.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    href: "/calculators/prize-winnings",
    available: true,
  },
  {
    id: "scorp-savings",
    title: "S-Corp Savings Calculator",
    description: "See how much you could save on self-employment taxes by electing S-Corp status.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    href: "#",
    available: false,
  },
  {
    id: "quarterly-tax",
    title: "Quarterly Tax Estimator",
    description: "Estimate your quarterly estimated tax payments to avoid underpayment penalties.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    href: "#",
    available: false,
  },
  {
    id: "self-employment-tax",
    title: "Self-Employment Tax Calculator",
    description: "Calculate your self-employment tax (Social Security + Medicare) on your creator income.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    href: "#",
    available: false,
  },
];

export default function CalculatorsPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-navy pt-44 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-[var(--color-gold)] font-semibold text-sm uppercase tracking-wider">
              Free Tools
            </span>
            <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-white">
              Tax Calculators
            </h1>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              Quick estimates to help you understand your tax situation. 
              Use these tools to get a ballpark figure—then reach out for personalized advice.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Cards Section */}
      <section className="py-16 bg-[var(--color-gray-50)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {calculators.map((calc) => (
              <div key={calc.id} className="relative">
                {calc.available ? (
                  <Link
                    href={calc.href}
                    className="card p-6 sm:p-8 block group hover:border-[var(--color-gold)] border-2 border-transparent transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-14 h-14 bg-[var(--color-gold)]/10 rounded-xl flex items-center justify-center text-[var(--color-gold)] group-hover:bg-[var(--color-gold)] group-hover:text-[var(--color-navy-deep)] transition-all">
                        {calc.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-[var(--color-navy-deep)] group-hover:text-[var(--color-gold-dark)] transition-colors">
                          {calc.title}
                        </h3>
                        <p className="mt-2 text-gray-600">
                          {calc.description}
                        </p>
                        <span className="mt-4 inline-flex items-center text-[var(--color-gold)] font-semibold text-sm group-hover:gap-2 transition-all">
                          Use Calculator
                          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                ) : (
                  <div className="card p-6 sm:p-8 opacity-60 cursor-not-allowed">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-14 h-14 bg-[var(--color-gray-200)] rounded-xl flex items-center justify-center text-[var(--color-gray-400)]">
                        {calc.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="text-xl font-bold text-[var(--color-navy-deep)]">
                            {calc.title}
                          </h3>
                          <span className="px-2 py-0.5 bg-[var(--color-gray-200)] text-[var(--color-gray-500)] text-xs font-semibold rounded-full">
                            Coming Soon
                          </span>
                        </div>
                        <p className="mt-2 text-gray-500">
                          {calc.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Use These Calculators */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-[var(--color-navy-deep)]">
              Why Use These Calculators?
            </h2>
            <p className="mt-4 text-gray-600">
              Get quick estimates without any signup or commitment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: "Instant Results",
                description: "Get estimates in seconds—no waiting, no forms to fill out.",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                ),
                title: "100% Private",
                description: "Your data stays in your browser. Nothing is saved or tracked.",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: "CPA-Built",
                description: "Created by a licensed CPA who specializes in content creator taxes.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[var(--color-gold)]/10 text-[var(--color-gold)] mb-4">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-[var(--color-navy-deep)] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <CTAStrip
        title="Need Help With Your Actual Tax Situation?"
        subtitle="These calculators give estimates. For real strategy, let's talk."
        primaryButtonText="Book a Free Call"
        primaryButtonHref="/contact"
        secondaryButtonText="View Services"
        secondaryButtonHref="/services"
      />
    </main>
  );
}
