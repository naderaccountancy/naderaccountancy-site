import { Metadata } from "next";
import { CalendlyWidget } from "@/components";

/* ===========================================
   CLAIM OFFER PAGE
   
   Free discovery call landing page for creators
   =========================================== */

export const metadata: Metadata = {
  title: "Book Your Free Discovery Call | Nader Accountancy",
  description: "Book a free 15-minute call. Let's talk about your creator business and see if we're a good fit. No pressure, no obligation.",
};

const includedItems = [
  {
    title: "Understand Your Situation",
    description: "We'll talk through your content business, your income streams, and your current tax setup.",
  },
  {
    title: "Identify Quick Wins",
    description: "I'll share initial thoughts on opportunities you might be missing—deductions, S-corp potential, quarterly planning.",
  },
  {
    title: "See If We're a Fit",
    description: "If it makes sense, I'll explain how we'd work together. If not, no worries—at least you'll have some clarity.",
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
              Free Discovery Call
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Let&apos;s Talk About
              <br />
              <span className="text-gradient-gold">Your Creator Taxes</span>
            </h1>
            
            {/* Gold Divider */}
            <div className="mt-8 flex justify-center">
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent" />
            </div>
            
            <p className="mt-8 text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Not sure if you need a CPA? Curious about S-corps? Stressed about quarterly taxes? 
              Let&apos;s chat—no pressure, no obligation, just a helpful conversation.
            </p>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-[var(--color-navy-deep)]">
              What We&apos;ll Cover
            </h2>
            <p className="mt-4 text-gray-600">
              A quick 15-minute call to see how I can help
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

      {/* Calendly Section */}
      <section className="py-20 bg-[var(--color-gray-50)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--color-navy-deep)]">
              Pick a Time That Works
            </h2>
            <p className="mt-4 text-gray-600">
              Select a slot and I&apos;ll send you a confirmation
            </p>
          </div>

          {/* Calendly Container */}
          <div className="bg-white rounded-2xl shadow-lg border border-[var(--color-gray-200)] overflow-hidden">
            <CalendlyWidget
              url="https://calendly.com/ben-naderaccountancy/discovery-call"
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
              100% Free
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[var(--color-gold)]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Zero Pressure
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
