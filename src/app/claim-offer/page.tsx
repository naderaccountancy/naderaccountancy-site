import { Metadata } from "next";
import { CalendlyWidget } from "@/components";

/* ===========================================
   CLAIM OFFER PAGE
   
   Free Tax Savings Analysis for high earners
   Premium positioning
   =========================================== */

export const metadata: Metadata = {
  title: "Free Tax Savings Analysis | Nader Accountancy",
  description: "Discover how much you could be saving as a content creator. Get a personalized analysis of your tax situation with specific opportunities identified—completely free.",
};

const includedItems = [
  {
    title: "Creator Income Review",
    description: "I'll review your current tax structure—AdSense, brand deals, affiliate income, courses, and all your revenue streams—to understand your complete picture.",
  },
  {
    title: "Opportunity Identification",
    description: "Uncover specific tax savings opportunities you may be missing: S-corp potential, deduction strategies, entity optimization, and more.",
  },
  {
    title: "Personalized Strategy Call",
    description: "A focused one-on-one session to walk through my findings, answer your questions, and discuss strategies tailored to your creator business.",
  },
  {
    title: "Written Savings Summary",
    description: "Walk away with a clear, written summary of opportunities identified and recommended next steps—yours to keep, no obligation.",
  },
];

export default function ClaimOfferPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-navy pt-44 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-[var(--color-gold)] font-semibold text-sm uppercase tracking-wider">
              Complimentary Analysis
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Free Tax Savings
              <br />
              <span className="text-gradient-gold">Analysis</span>
            </h1>
            
            {/* Gold Divider */}
            <div className="mt-8 flex justify-center">
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent" />
            </div>
            
            <p className="mt-8 text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Discover exactly how much you could be saving as a creator. I&apos;ll review your income, identify specific opportunities, and deliver a personalized savings summary—completely free, no obligation.
            </p>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-[var(--color-navy-deep)]">
              What You&apos;ll Receive
            </h2>
            <p className="mt-4 text-gray-600">
              A comprehensive analysis designed to uncover real savings opportunities
            </p>
          </div>

          <div className="space-y-8">
            {includedItems.map((item) => (
              <div 
                key={item.title}
                className="flex gap-5 sm:gap-6"
              >
                {/* Gold Diamond Icon */}
                <div className="flex-shrink-0 mt-1">
                  <div className="w-5 h-5 bg-[var(--color-gold)] rotate-45 opacity-90" />
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-[var(--color-navy-deep)] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-16 bg-[var(--color-navy-deep)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-6">
            This Analysis Is Designed For
          </h2>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {[
              "YouTubers & Video Creators",
              "Influencers & Social Creators", 
              "Streamers & Podcasters",
              "Course Creators & Coaches",
              "Online Entrepreneurs",
            ].map((item) => (
              <span
                key={item}
                className="px-4 py-2 rounded-full bg-white/10 text-gray-300 border border-white/20"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Calendly Section */}
      <section className="py-20 bg-[var(--color-gray-50)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--color-navy-deep)]">
              Request Your Free Analysis
            </h2>
            <p className="mt-4 text-gray-600">
              Select a time to schedule your complimentary tax savings analysis
            </p>
          </div>

          {/* Calendly Container */}
          <div className="bg-white rounded-2xl shadow-lg border border-[var(--color-gray-200)] overflow-hidden">
            <CalendlyWidget
              url="https://calendly.com/ben-naderaccountancy/tax-review-consultation-clone"
              height={700}
            />
          </div>
        </div>
      </section>

      {/* Trust Footer */}
      <section className="py-12 bg-white border-t border-[var(--color-gray-200)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[var(--color-gold)]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Complimentary
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[var(--color-gold)]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              No Obligation
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[var(--color-gold)]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Confidential
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
