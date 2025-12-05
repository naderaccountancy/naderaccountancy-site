import { Metadata } from "next";
import Link from "next/link";
import { QuarterlyTaxCalculator, CTAStrip } from "@/components";

/* ===========================================
   QUARTERLY TAX ESTIMATOR PAGE
   
   Estimate quarterly estimated tax payments
   based on expected annual income
   =========================================== */

export const metadata: Metadata = {
  title: "Quarterly Tax Estimator | Nader Accountancy",
  description: "Estimate your quarterly estimated tax payments to avoid IRS underpayment penalties. Calculate federal and state quarterly taxes for self-employed income.",
};

export default function QuarterlyTaxEstimatorPage() {
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
              <li className="text-[var(--color-gold)]">Quarterly Tax Estimator</li>
            </ol>
          </nav>
          
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              Quarterly Tax Estimator
            </h1>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              Self-employed? You need to pay estimated taxes quarterly. Use this calculator to 
              figure out how much to send the IRS each quarter to avoid underpayment penalties.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 bg-[var(--color-gray-50)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Calculator Component */}
          <QuarterlyTaxCalculator />

          {/* Tax Assumptions Note */}
          <div className="mt-10 p-5 bg-white rounded-xl border border-[var(--color-gray-200)]">
            <h3 className="text-sm font-semibold text-[var(--color-navy-deep)] mb-3 flex items-center gap-2">
              <svg className="w-4 h-4 text-[var(--color-gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              About Quarterly Estimated Taxes
            </h3>
            <div className="text-sm text-gray-600 leading-relaxed space-y-2">
              <p>
                <strong>Who needs to pay:</strong> Generally, you must make estimated tax payments if you 
                expect to owe at least $1,000 in tax after subtracting withholding and credits, and your 
                withholding will be less than 90% of current year taxes or 100% of prior year taxes (110% 
                if AGI was over $150,000).
              </p>
              <p>
                <strong>Safe harbor rules:</strong> You can avoid underpayment penalties by paying either 
                90% of current year taxes OR 100% of prior year taxes (110% if prior year AGI exceeded $150,000), 
                whichever is less.
              </p>
              <p>
                <strong>State quarterlies:</strong> Many states also require quarterly estimated payments. 
                Due dates and rules vary by state. This calculator includes state taxes in your estimate, 
                but check your state&apos;s requirements for specific rules.
              </p>
              <p>
                <strong>Underpayment penalties:</strong> If you don&apos;t pay enough by each quarterly deadline, 
                the IRS charges interest on the underpayment. Making equal quarterly payments helps avoid this.
              </p>
              <p className="text-[var(--color-gold-dark)] font-medium">
                This is an estimate for educational purposes only and is not tax advice. 
                Your actual quarterly payments may differ based on deductions, credits, and other factors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <CTAStrip
        title="Need Help With Quarterly Taxes?"
        subtitle="I'll help you calculate accurate quarterly payments and set up a system so you never miss a deadline."
        primaryButtonText="Book a Free Call"
        primaryButtonHref="/contact"
        secondaryButtonText="View Services"
        secondaryButtonHref="/services"
      />
    </main>
  );
}
