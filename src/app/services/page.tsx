import { Metadata } from "next";
import { PricingCard, CTAStrip } from "@/components";

/* ===========================================
   SERVICES PAGE
   
   Pricing plans for content creators
   $300/$400/$600 per month
   =========================================== */

export const metadata: Metadata = {
  title: "Pricing | Nader Accountancy - Tax & Financial Services for Creators",
  description: "Clear, flat-rate pricing for content creators. Proactive tax strategy, financial clarity, and year-round guidance. $300-$600/month based on your needs.",
};

const pricingPlans = [
  {
    id: "essential",
    name: "Essential",
    price: "$300",
    description: "For creators ready to get their taxes handled right",
    features: [
      { text: "Federal and state tax return preparation", included: true },
      { text: "Creator income optimization (AdSense, sponsors, etc.)", included: true },
      { text: "Deduction maximization", included: true },
      { text: "Quarterly estimated tax calculations", included: true },
      { text: "Quarterly tax payment reminders", included: true },
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
    description: "For growing creators who want a true financial partner",
    features: [
      { text: "Everything in Essential", included: true },
      { text: "Quarterly strategy calls (4x/year)", included: true },
      { text: "Quarterly P&L statements & insights", included: true },
      { text: "Multi-platform income coordination", included: true },
      { text: "S-corp election & setup", included: true },
      { text: "Entity structure optimization", included: true },
      { text: "Priority email support (24hr response)", included: true },
      { text: "Contractor 1099 preparation (editors, VAs, etc.)", included: true },
      { text: "Retirement planning guidance", included: false },
    ],
    featured: true,
    ctaText: "Most Popular",
  },
  {
    id: "premier",
    name: "Premier",
    price: "$600",
    description: "Full financial partnership for established creators",
    features: [
      { text: "Everything in Advantage", included: true },
      { text: "Monthly strategy calls (12x/year)", included: true },
      { text: "Brand deal & contract review", included: true },
      { text: "Multi-entity planning & coordination", included: true },
      { text: "Retirement planning guidance", included: true },
      { text: "Priority same-day response", included: true },
      { text: "Unlimited email support", included: true },
      { text: "Priority scheduling", included: true },
    ],
    featured: false,
    ctaText: "Go Premier",
  },
];

// FAQ Items for content creators
const faqItems = [
  {
    question: "Who is this service for?",
    answer: "This service is designed for content creators—YouTubers, influencers, streamers, podcasters, course creators, and online entrepreneurs. If you make money from your content and want more than a tax preparer—a financial partner who actually understands the creator economy—this is for you.",
  },
  {
    question: "What do you mean by 'financial partner'?",
    answer: "I go beyond filing tax returns. I help you understand your creator income, provide clarity on what you're actually earning across platforms, coordinate your tax strategy with business decisions, and serve as a trusted advisor year-round. Tax is at the core, but I'm here for the bigger picture.",
  },
  {
    question: "Do you actually understand creator income?",
    answer: "Yes! I specialize in creators. AdSense, brand deals, affiliate income, merch, courses, Patreon, streaming donations—I've seen it all. I won't ask you to explain what a CPM is or look confused at your income sources. I speak creator.",
  },
  {
    question: "What is an S-corp and do I need one?",
    answer: "An S-corp is a tax election that can save significant money on self-employment taxes—often $10,000-$30,000+ per year for creators earning $80K+. I'll analyze your situation and tell you honestly if it makes sense. If it does, I'll handle the setup and ongoing compliance.",
  },
  {
    question: "Can I cancel or change plans?",
    answer: "Yes! You can upgrade or downgrade your plan at any time. If you need to cancel, just give me 30 days notice. No long-term contracts or cancellation fees. I want you to stay because you see value, not because you're locked in.",
  },
  {
    question: "How do the strategy calls work?",
    answer: "Strategy calls are video calls where we review your creator business, discuss upcoming opportunities (new brand deals, product launches, etc.), and optimize your tax position. We'll cover revenue, expenses, tax projections, and any questions you have. Essential clients get 2 calls per year, Advantage clients get 4, and Premier clients get monthly calls.",
  },
  {
    question: "What if I have income from multiple platforms?",
    answer: "That's most creators! YouTube, TikTok, Instagram, Twitch, brand deals, affiliate links, merch—I'll coordinate everything, give you clarity on each stream, and ensure you're optimizing across your entire creator business.",
  },
  {
    question: "How quickly do you respond to questions?",
    answer: "Response times depend on your plan: Essential clients receive responses within 48 hours, Advantage clients within 24 hours, and Premier clients receive priority same-day responses. Urgent tax deadline matters are always handled immediately.",
  },
  {
    question: "What expenses can creators deduct?",
    answer: "More than you'd think! Camera gear, computers, software subscriptions, home office, travel for content, props and sets, editing services, music licensing, and more. I'll make sure you're capturing every legitimate deduction for your creator business.",
  },
  {
    question: "Do you work with creators outside California?",
    answer: "Absolutely! I work with creators across the United States. All plans include federal and state tax return preparation regardless of where you're located. Video calls make it easy to work together from anywhere.",
  },
  {
    question: "What makes you different from other accountants?",
    answer: "I specialize in creators and I'm a financial partner, not just a tax preparer. Most accountants don't understand creator income—I do. I provide year-round guidance, help you understand your numbers, and bring proactive strategy to help you build real wealth from your content.",
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
              A CPA Who Actually Gets Creators
            </h1>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              Flat-rate monthly pricing built for content creators. Proactive tax strategy, financial clarity, and year-round guidance—no hourly surprises.
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
                description: "Credentialed professional you can trust",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                ),
                title: "Creator Specialist",
                description: "I understand how you make money",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                title: "Direct Access",
                description: "Reach me anytime with questions",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Year-Round Partnership",
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
        title="Ready for a True Financial Partner?"
        subtitle="Book a free call and let's discuss how I can help you build clarity and wealth."
        primaryButtonText="Book a Free Call"
        primaryButtonHref="/contact"
        secondaryButtonText="Have Questions?"
        secondaryButtonHref="/contact"
      />
    </main>
  );
}
