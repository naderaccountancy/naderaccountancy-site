import { Metadata } from "next";
import { PricingCard, CTAStrip } from "@/components";

/* ===========================================
   SERVICES PAGE
   
   Pricing plans and FAQ section
   
   To customize pricing:
   - Update the pricingPlans array below
   - Prices are strings so you can format them as needed
   =========================================== */

export const metadata: Metadata = {
  title: "Services & Pricing | Nader Accountancy - Real Estate Tax Strategy",
  description: "Explore our real estate-focused tax planning subscription plans. From essential tax reviews to elite advisory services for high-net-worth investors.",
};

const pricingPlans = [
  {
    id: "essentials",
    name: "Essentials",
    price: "$200",
    description: "Perfect for new or early-stage investors with 1-2 properties",
    features: [
      { text: "Annual tax return preparation included", included: true },
      { text: "Annual real estate-focused tax review", included: true },
      { text: "Entity structure review & recommendations", included: true },
      { text: "Email support (48hr response)", included: true },
      { text: "Basic depreciation & expense guidance", included: true },
      { text: "Annual year-end planning call", included: true },
      { text: "Quarterly strategy sessions", included: false },
      { text: "Multi-state tax review", included: false },
    ],
    featured: false,
    ctaText: "Start with Essentials",
  },
  {
    id: "growth",
    name: "Growth",
    price: "$400",
    description: "For growing portfolios of ~5-7 properties, potentially multi-state",
    features: [
      { text: "Everything in Essentials, plus:", included: true },
      { text: "Full tax preparation included", included: true },
      { text: "Quarterly strategy sessions", included: true },
      { text: "Cost segregation analysis guidance", included: true },
      { text: "RE Pro status / STR loophole analysis", included: true },
      { text: "1031 exchange planning support", included: true },
      { text: "Multi-state tax review", included: true },
      { text: "Custom estimated tax calculations", included: true },
    ],
    featured: true,
    ctaText: "Choose Growth",
  },
  {
    id: "elite",
    name: "Elite",
    price: "$600",
    description: "For larger portfolios and high-net-worth investors",
    features: [
      { text: "Everything in Growth, plus:", included: true },
      { text: "Comprehensive tax preparation included", included: true },
      { text: "Monthly check-ins & strategy calls", included: true },
      { text: "Coordination with your advisors (CFA, attorney)", included: true },
      { text: "Advanced 1031 & passive loss planning", included: true },
      { text: "Estate & wealth considerations", included: true },
      { text: "Priority support (24hr response)", included: true },
      { text: "Annual audit-readiness review", included: true },
    ],
    featured: false,
    ctaText: "Go Elite",
  },
];

// FAQ Items
const faqItems = [
  {
    question: "Who is this service best suited for?",
    answer: "This service is designed for real estate investors (from 1 property to large portfolios), S-Corp business owners with real estate holdings, high-income W-2 professionals looking to offset income through real estate, and content creators/entrepreneurs who've invested in property. If you're serious about minimizing taxes and want year-round proactive planning, this is for you.",
  },
  {
    question: "Can I cancel or change plans?",
    answer: "Yes! You can upgrade or downgrade your plan at any time. If you need to cancel, simply provide 30 days notice. There are no long-term contracts or cancellation penalties. I want you to stay because you see value, not because you're locked in.",
  },
  {
    question: "Is tax preparation included?",
    answer: "Yes! Tax preparation is included in all subscription plans. Having your strategist also prepare your returns ensures nothing falls through the cracks and all the strategies we discuss get properly implemented on your returns.",
  },
  {
    question: "What if I have properties in multiple states?",
    answer: "Multi-state tax situations are fully supported in the Growth and Elite plans. I'll help you understand nexus requirements, state-specific deductions, and ensure you're compliant across all jurisdictions while minimizing overall tax burden.",
  },
  {
    question: "How do the strategy sessions work?",
    answer: "Strategy sessions are conducted via video call (Zoom or Google Meet) and are typically 30-60 minutes depending on your plan and needs. We'll review your portfolio, discuss any changes, analyze opportunities, and create action items. You'll receive a summary email after each call.",
  },
  {
    question: "What makes you different from other tax advisors?",
    answer: "I specialize exclusively in real estate taxation, not general tax preparation. My background in real estate means I understand the business side and can proactively identify opportunities that generalist CPAs often miss. I work year-round, not just during tax season, and focus on strategy first, preparation second.",
  },
  {
    question: "How quickly do you respond to questions?",
    answer: "Response times depend on your plan: Essentials clients receive responses within 48 hours, while Elite clients get priority support within 24 hours. Urgent tax deadline matters are handled immediately. I aim to be proactive rather than reactive with your tax strategy.",
  },
  {
    question: "What happens if my situation changes significantly?",
    answer: "Life changes happen! Whether you acquire new properties, sell assets, have a baby, get divorced, or start a business, I'll work with you to adjust your tax strategy. All plans include support for major life changes that impact your tax situation.",
  },
  {
    question: "Do you work with clients outside California?",
    answer: "Absolutely! I work with clients across the United States. Multi-state tax situations are handled in the Growth and Elite plans. While I'm based in California, modern tools and video calls make it easy to serve clients nationwide.",
  },
  {
    question: "Can I get help with property acquisitions or dispositions?",
    answer: "Yes, that's one of my specialties. I can help you structure purchases for maximum tax benefits, time 1031 exchanges properly, and ensure dispositions are tax-efficient. This is included in all plans and is particularly valuable for active investors.",
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
              Services & Pricing
            </span>
            <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-white">
              Real Estate Tax Planning Subscriptions
            </h1>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              Proactive, year-round tax strategy tailored to real estate investors. Choose the plan that matches your portfolio size and goals. All plans include dedicated support and real estate-focused expertise.
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
              All prices are monthly. Annual prepayment available with 10% discount.{" "}
              <span className="text-[var(--color-gold)] font-medium">
                Not sure which plan? Book a free consultation.
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                ),
                title: "Real Estate Focus",
                description: "Specialized in investor tax strategy",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                title: "Email Support",
                description: "Direct access for questions",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Year-Round Planning",
                description: "Proactive, not reactive",
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
        title="Ready to Get Started?"
        subtitle="Book a free consultation to discuss which plan is right for you."
        primaryButtonText="Book Consultation"
        primaryButtonHref="/contact"
        secondaryButtonText="Have Questions?"
        secondaryButtonHref="/contact"
      />
    </main>
  );
}


