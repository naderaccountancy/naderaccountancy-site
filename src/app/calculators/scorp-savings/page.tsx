import { Metadata } from "next";
import Link from "next/link";
import { SCorpSavingsCalculator, CTAStrip } from "@/components";

/* ===========================================
   S-CORP SAVINGS CALCULATOR PAGE
   
   Compare sole proprietor vs S-Corp tax burden
   to show potential tax savings
   =========================================== */

export const metadata: Metadata = {
  title: "S-Corp Savings Calculator | Nader Accountancy",
  description: "See how much you could save on self-employment taxes by electing S-Corp status. Compare sole proprietor vs S-Corp tax burden side by side.",
};

export default function SCorpSavingsCalculatorPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-navy pt-44 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-6">
            <ol className="flex items-center gap-2 text-sm">
              <li>
                <Link href="/calculators" className="text-gray-400 hover:text-white transition-colors">
                  Calculators
                </Link>
              </li>
              <li className="text-gray-500">/</li>
              <li className="text-[var(--color-gold)]">S-Corp Savings</li>
            </ol>
          </nav>
          
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              S-Corp Savings Calculator
            </h1>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              Thinking about S-Corp election? See exactly how much you could save on self-employment 
              taxes by comparing your current situation to an S-Corp structure.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 bg-[var(--color-gray-50)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Calculator Component */}
          <SCorpSavingsCalculator />

          {/* Important Notes */}
          <div className="mt-10 p-5 bg-white rounded-xl border border-[var(--color-gray-200)]">
            <h3 className="text-sm font-semibold text-[var(--color-navy-deep)] mb-3 flex items-center gap-2">
              <svg className="w-4 h-4 text-[var(--color-gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Important Considerations
            </h3>
            <div className="text-sm text-gray-600 leading-relaxed space-y-2">
              <p>
                <strong>Reasonable salary requirement:</strong> The IRS requires S-Corp owners to pay themselves 
                a &quot;reasonable salary&quot; for their services. Setting it too low can trigger audits and penalties. 
                Your salary should reflect what you&apos;d pay someone else to do your job.
              </p>
              <p>
                <strong>Additional S-Corp costs:</strong> This calculator shows tax savings only. S-Corps have 
                additional costs: payroll processing ($500-2,000/year), separate tax return filing (~$500-1,500), 
                registered agent fees, and state franchise taxes in some states.
              </p>
              <p>
                <strong>When it makes sense:</strong> S-Corp election typically makes sense when net business 
                income exceeds $40,000-60,000 and the tax savings outweigh the additional costs and complexity.
              </p>
              <p>
                <strong>State considerations:</strong> Some states (like California) have minimum franchise taxes 
                ($800+) for S-Corps regardless of income. Factor this into your decision.
              </p>
              <p className="text-[var(--color-gold-dark)] font-medium">
                This is a simplified estimate. Actual savings depend on many factors. 
                Consult a CPA before making entity election decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <CTAStrip
        title="Ready to Explore S-Corp Election?"
        subtitle="I'll help you determine if S-Corp status is right for your situation and handle all the paperwork."
        primaryButtonText="Book a Free Call"
        primaryButtonHref="/contact"
        secondaryButtonText="View Services"
        secondaryButtonHref="/services"
      />
    </main>
  );
}
