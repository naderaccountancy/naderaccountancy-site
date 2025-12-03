import { Metadata } from "next";
import { CalendlyWidget } from "@/components";

/* ===========================================
   CLAIM OFFER PAGE
   
   Premium landing page for the 30-Day Tax Strategy
   Onboarding offer with Calendly booking
   =========================================== */

export const metadata: Metadata = {
  title: "Claim Your Free 30-Day Tax Strategy Onboarding | Nader Accountancy",
  description: "Start your complimentary 30-day tax strategy onboarding. Get a personalized tax assessment, strategic planning session, and ongoing support—all at no cost.",
};

const includedItems = [
  {
    title: "Comprehensive Tax Assessment",
    description: "A thorough review of your current tax situation to identify immediate opportunities and areas for optimization.",
  },
  {
    title: "Personalized Strategy Session",
    description: "One-on-one consultation to develop a customized tax plan aligned with your financial goals.",
  },
  {
    title: "30 Days of Priority Support",
    description: "Direct access to guidance and answers throughout your onboarding period—no question too small.",
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
              Limited Time Offer
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Complimentary 30-Day
              <br />
              <span className="text-gradient-gold">Tax Strategy Onboarding</span>
            </h1>
            
            {/* Gold Divider */}
            <div className="mt-8 flex justify-center">
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent" />
            </div>
            
            <p className="mt-8 text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Discover how proactive tax planning can transform your financial future. 
              Start with a complimentary onboarding—no commitment, no pressure.
            </p>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-[var(--color-navy-deep)]">
              What&apos;s Included
            </h2>
            <p className="mt-4 text-gray-600">
              Everything you need to get started on the right foot
            </p>
          </div>

          <div className="space-y-8">
            {includedItems.map((item, index) => (
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

      {/* Calendly Section */}
      <section className="py-20 bg-[var(--color-gray-50)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--color-navy-deep)]">
              Schedule Your Onboarding Call
            </h2>
            <p className="mt-4 text-gray-600">
              Select a time that works best for you
            </p>
          </div>

          {/* Premium Calendly Container */}
          <div className="bg-white rounded-2xl shadow-lg border border-[var(--color-gray-200)] overflow-hidden">
            <CalendlyWidget
              url="https://calendly.com/ben-naderaccountancy/complimentary-30-day-onboarding"
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
              No Obligation
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[var(--color-gold)]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              100% Confidential
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[var(--color-gold)]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Limited Availability
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}

