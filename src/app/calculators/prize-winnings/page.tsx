import { Metadata } from "next";
import Link from "next/link";
import { PrizeTaxCalculator, CTAStrip } from "@/components";

/* ===========================================
   PRIZE WINNINGS CALCULATOR PAGE
   
   Calculate after-tax prize winnings
   =========================================== */

export const metadata: Metadata = {
  title: "Prize Winnings Calculator | Nader Accountancy",
  description: "Calculate how much you'll actually keep after federal and state taxes when you win a prize, contest, or promotion.",
};

export default function PrizeWinningsCalculatorPage() {
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
              <li className="text-[var(--color-gold)]">Prize Winnings</li>
            </ol>
          </nav>
          
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              Prize Winnings Calculator
            </h1>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              Won a contest? Hit a half-court shot for $1,000,000? Use this calculator to estimate 
              how much you&apos;ll actually keep after federal and state taxes.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 bg-[var(--color-gray-50)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Calculator Component */}
          <PrizeTaxCalculator />

          {/* Tax Assumptions Note */}
          <div className="mt-10 p-5 bg-white rounded-xl border border-[var(--color-gray-200)]">
            <h3 className="text-sm font-semibold text-[var(--color-navy-deep)] mb-2 flex items-center gap-2">
              <svg className="w-4 h-4 text-[var(--color-gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Tax Assumptions
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              <strong>Assumptions:</strong> Prize is treated as ordinary income under federal law (e.g., contest/promotional prize, not lottery winnings). 
              Uses 2024 IRS marginal federal tax brackets based on your filing status and total income. 
              State taxes use a simplified single marginal rate. 
              Does not account for local/city taxes, AMT, NIIT, self-employment tax, or income phaseouts. 
              <span className="text-[var(--color-gold-dark)] font-medium">This is an estimate for educational purposes only and is not tax advice.</span>
            </p>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <CTAStrip
        title="Need Help With Your Actual Tax Situation?"
        subtitle="This calculator gives estimates. For real strategy, let's talk."
        primaryButtonText="Book a Free Call"
        primaryButtonHref="/contact"
        secondaryButtonText="View Services"
        secondaryButtonHref="/services"
      />
    </main>
  );
}

