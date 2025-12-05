import { Metadata } from "next";
import Link from "next/link";
import { SelfEmploymentTaxCalculator, CTAStrip } from "@/components";

/* ===========================================
   SELF-EMPLOYMENT TAX CALCULATOR PAGE
   
   Calculate SE tax (Social Security + Medicare)
   on self-employment income
   =========================================== */

export const metadata: Metadata = {
  title: "Self-Employment Tax Calculator | Nader Accountancy",
  description: "Calculate your self-employment tax (Social Security + Medicare) on freelance and business income. See your SE tax breakdown and total tax obligation.",
};

export default function SelfEmploymentTaxCalculatorPage() {
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
              <li className="text-[var(--color-gold)]">Self-Employment Tax</li>
            </ol>
          </nav>
          
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              Self-Employment Tax Calculator
            </h1>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              Freelancers, gig workers, and business owners owe self-employment tax (15.3%) on top of 
              regular income tax. Use this calculator to see your SE tax breakdown.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 bg-[var(--color-gray-50)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Calculator Component */}
          <SelfEmploymentTaxCalculator />

          {/* Tax Assumptions Note */}
          <div className="mt-10 p-5 bg-white rounded-xl border border-[var(--color-gray-200)]">
            <h3 className="text-sm font-semibold text-[var(--color-navy-deep)] mb-3 flex items-center gap-2">
              <svg className="w-4 h-4 text-[var(--color-gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              How Self-Employment Tax Works
            </h3>
            <div className="text-sm text-gray-600 leading-relaxed space-y-2">
              <p>
                <strong>What is SE tax?</strong> Self-employment tax covers Social Security (12.4%) and Medicare (2.9%) 
                for self-employed individuals. W-2 employees split this 15.3% with their employer, but self-employed 
                individuals pay both portions.
              </p>
              <p>
                <strong>92.35% rule:</strong> Only 92.35% of your net self-employment income is subject to SE tax. 
                This approximates the employer portion that W-2 employees don&apos;t pay tax on.
              </p>
              <p>
                <strong>Social Security cap:</strong> The Social Security portion (12.4%) only applies up to 
                ${new Intl.NumberFormat().format(168600)} of combined wages and SE income (2024). There&apos;s no cap on the Medicare portion.
              </p>
              <p>
                <strong>SE deduction:</strong> You can deduct half of your self-employment tax from your adjusted gross 
                income, which reduces your federal income tax.
              </p>
              <p className="text-[var(--color-gold-dark)] font-medium">
                This is an estimate for educational purposes only and is not tax advice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <CTAStrip
        title="Want to Reduce Your Self-Employment Tax?"
        subtitle="S-Corp election could save you thousands. Let's talk strategy."
        primaryButtonText="Book a Free Call"
        primaryButtonHref="/contact"
        secondaryButtonText="S-Corp Calculator"
        secondaryButtonHref="/calculators/scorp-savings"
      />
    </main>
  );
}
