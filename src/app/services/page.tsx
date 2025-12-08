import { Metadata } from "next";
import { PricingCard, CTAStrip } from "@/components";

/* ===========================================
   SERVICES PAGE
   
   Pricing plans for content creators
   $300/$400/$600 per month
   =========================================== */

export const metadata: Metadata = {
  title: "Pricing | Nader Accountancy - Tax Strategy for High Earners",
  description: "Clear, flat-rate pricing for high-earning professionals. Proactive tax strategy, preparation, and year-round support. $300-$600/month based on your needs.",
};

const pricingPlans = [
  {
    id: "essential",
    name: "Essential",
    price: "$300",
    description: "For professionals ready to elevate their tax strategy",
    features: [
      { text: "Federal and state tax return preparation", included: true },
      { text: "Deduction optimization", included: true },
      { text: "Income categorization (all sources)", included: true },
      { text: "Quarterly estimated tax calculations", included: true },
      { text: "Quarterly estimated tax payment reminders", included: true },
      { text: "Year-end tax planning", included: true },
      { text: "Bi-annual strategy calls (2x/year)", included: true },
      { text: "Email support (48hr response)", included: true },
      { text: "S-corp analysis", included: false },
    ],
    featured: false,
    ctaText: "Get Started",
  },
  {
    id: "advantage",
    name: "Advantage",
    price: "$400",
    description: "For high earners who need sophisticated tax planning",
    features: [
      { text: "Everything in Essential", included: true },
      { text: "Quarterly strategy calls (4x/year)", included: true },
      { text: "Quarterly P&L statements", included: true },
      { text: "Investment income coordination", included: true },
      { text: "S-corp election & setup", included: true },
      { text: "Entity structure optimization", included: true },
      { text: "Priority email support (24hr response)", included: true },
      { text: "Contractor 1099 preparation", included: true },
      { text: "Retirement planning (Solo 401k/SEP)", included: false },
    ],
    featured: true,
    ctaText: "Most Popular",
  },
  {
    id: "premier",
    name: "Premier",
    price: "$600",
    description: "For those with complex, multi-faceted tax situations",
    features: [
      { text: "Everything in Advantage", included: true },
      { text: "Monthly strategy calls (12x/year)", included: true },
      { text: "Contract & compensation review", included: true },
      { text: "Multi-entity planning & coordination", included: true },
      { text: "Retirement planning (Solo 401k/SEP)", included: true },
      { text: "Priority same-day response", included: true },
      { text: "Unlimited email support", included: true },
      { text: "Priority scheduling", included: true },
    ],
    featured: false,
    ctaText: "Go Premier",
  },
];

// FAQ Items for high-income professionals
const faqItems = [
  {
    question: "Who is this service for?",
    answer: "This service is designed for high-earning professionals and business owners—entrepreneurs, executives, investors, medical professionals, attorneys, and anyone with complex financial situations. If you have significant income and want sophisticated tax strategy (not just filing), this is for you.",
  },
  {
    question: "What's included in tax return preparation?",
    answer: "I handle your federal and state tax returns completely. This includes all income sources (W-2, business income, investments, real estate, etc.), deductions, and any necessary schedules. You don't need to figure anything out—just send me your documents and I handle the rest.",
  },
  {
    question: "What is an S-corp and do I need one?",
    answer: "An S-corp is a tax election that can save significant money on self-employment taxes—often $15,000-$40,000+ per year for high earners with business income. I'll analyze your situation and tell you honestly if it makes sense. If it does, I'll handle the setup and ongoing compliance.",
  },
  {
    question: "Can I cancel or change plans?",
    answer: "Yes! You can upgrade or downgrade your plan at any time. If you need to cancel, just give me 30 days notice. No long-term contracts or cancellation fees. I want you to stay because you see value, not because you're locked in.",
  },
  {
    question: "How do the strategy calls work?",
    answer: "Strategy calls are video calls (Zoom or Google Meet) where we review your financial situation, discuss upcoming plans, and optimize your tax position. Essential clients get 2 calls per year, Advantage clients get 4 calls per year, and Premier clients get monthly calls. You'll get a summary email after each call.",
  },
  {
    question: "What if I have multiple income streams?",
    answer: "That's exactly who I work with! Most of my clients have income from multiple sources—business income, W-2 salary, investments, rental properties, and more. I'll coordinate everything, optimize across all sources, and ensure you're capturing every legitimate savings opportunity.",
  },
  {
    question: "How quickly do you respond to questions?",
    answer: "Response times depend on your plan: Essential clients receive responses within 48 hours, Advantage clients within 24 hours, and Premier clients receive priority same-day responses. Urgent tax deadline matters are always handled immediately.",
  },
  {
    question: "What if my situation is particularly complex?",
    answer: "Complex situations are my specialty. Multi-entity structures, equity compensation, real estate portfolios, international considerations—I'm equipped to handle sophisticated tax planning. The Premier plan is designed for the most complex situations.",
  },
  {
    question: "Do you work with clients outside California?",
    answer: "Absolutely! I work with clients across the United States. All plans include federal and state tax return preparation regardless of where you're located. Video calls make it easy to work together regardless of location.",
  },
  {
    question: "What makes you different from other accountants?",
    answer: "I focus on proactive strategy, not just compliance. Most accountants file your return and move on—I plan year-round to minimize your tax burden. With an M.S. in Taxation and a focus on high-income situations, I bring sophisticated strategy that goes far beyond basic tax prep.",
  },
];

export default function ServicesPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-navy pt-44 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-[var(--color-gold)] font-semibold text-sm uppercase tracking-wider">
              Pricing
            </span>
            <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-white">
              Transparent Pricing for Sophisticated Clients
            </h1>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              No hourly billing surprises. No confusing invoices. Just flat-rate monthly pricing that includes proactive strategy and year-round support.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="py-20 bg-[var(--color-gray-50)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4 items-stretch">
            {pricingPlans.map((plan) => (
              <PricingCard
                key={plan.id}
                id={plan.id}
                name={plan.name}
                price={plan.price}
                description={plan.description}
                features={plan.features}
                featured={plan.featured}
                ctaText={plan.ctaText}
                ctaHref="/contact"
              />
            ))}
          </div>

          {/* Additional Note */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 text-sm">
              Not sure which plan is right for you?{" "}
              <span className="text-[var(--color-gold)] font-medium">
                Book a free call and I&apos;ll help you figure it out.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* What's Included Summary */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-[var(--color-navy-deep)]">
              Every Plan Includes
            </h2>
            <p className="mt-4 text-gray-600">
              Core benefits you get regardless of which plan you choose.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: "Licensed CPA",
                description: "Work with a credentialed professional",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
                title: "High-Earner Focused",
                description: "I understand complex situations",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                title: "Direct Access",
                description: "Email me anytime with questions",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Year-Round Support",
                description: "Not just during tax season",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="text-center p-6 rounded-xl bg-[var(--color-gray-50)]"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[var(--color-gold)]/10 text-[var(--color-gold)] mb-4">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-[var(--color-navy-deep)] mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-[var(--color-gray-50)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[var(--color-gold)] font-semibold text-sm uppercase tracking-wider">
              FAQ
            </span>
            <h2 className="mt-3 text-3xl font-bold text-[var(--color-navy-deep)]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <details
                key={index}
                className="group bg-white rounded-xl shadow-sm"
              >
                <summary className="flex items-center justify-between cursor-pointer p-6 text-left">
                  <span className="font-semibold text-[var(--color-navy-deep)] pr-4">
                    {item.question}
                  </span>
                  <span className="flex-shrink-0 ml-4">
                    <svg
                      className="w-5 h-5 text-[var(--color-gold)] transform group-open:rotate-180 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <CTAStrip
        title="Ready to Stop Stressing About Taxes?"
        subtitle="Book a free call and let's see if we're a good fit."
        primaryButtonText="Book a Free Call"
        primaryButtonHref="/contact"
        secondaryButtonText="Have Questions?"
        secondaryButtonHref="/contact"
      />
    </main>
  );
}
