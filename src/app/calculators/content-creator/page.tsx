import { Metadata } from "next";
import Link from "next/link";
import { ContentCreatorCalculator, CTAStrip } from "@/components";

/* ===========================================
   CONTENT CREATOR TAX CALCULATOR PAGE
   
   Calculate after-tax earnings for content creators
   Accounts for platform fees + federal/state taxes
   =========================================== */

export const metadata: Metadata = {
  title: "Content Creator Tax Calculator | Nader Accountancy",
  description: "Calculate your after-tax earnings as a content creator. Estimate taxes on YouTube, Twitch, TikTok, Patreon, and OnlyFans income after platform fees.",
};

export default function ContentCreatorCalculatorPage() {
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
              <li className="text-[var(--color-gold)]">Content Creator</li>
            </ol>
          </nav>
          
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              Content Creator Tax Calculator
            </h1>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              Earning from YouTube, Twitch, TikTok, Patreon, or OnlyFans? Use this calculator to see 
              how much you&apos;ll actually keep after platform fees and taxes.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 bg-[var(--color-gray-50)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Calculator Component */}
          <ContentCreatorCalculator />

          {/* Tax Assumptions Note */}
          <div className="mt-10 p-5 bg-white rounded-xl border border-[var(--color-gray-200)]">
            <h3 className="text-sm font-semibold text-[var(--color-navy-deep)] mb-3 flex items-center gap-2">
              <svg className="w-4 h-4 text-[var(--color-gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Assumptions &amp; Limitations
            </h3>
            <div className="text-sm text-gray-600 leading-relaxed space-y-2">
              <p>
                <strong>Platform fees:</strong> Default fees are industry averages. Actual fees may vary based on 
                your contract, partner level, revenue source (ads vs subs vs tips), and payment method.
              </p>
              <p>
                <strong>Federal tax:</strong> Uses 2024 IRS ordinary income brackets. Tax is calculated incrementally 
                based on how your creator income stacks on top of other income.
              </p>
              <p>
                <strong>State tax:</strong> Uses simplified marginal rates. Most states have progressive brackets 
                similar to federal taxes.
              </p>
              <p>
                <strong>Not included:</strong> Self-employment tax (15.3%), local/city taxes, AMT, NIIT, 
                quarterly estimated payments, business deductions, retirement contributions, or health insurance deductions.
              </p>
              <p className="text-[var(--color-gold-dark)] font-medium">
                This is an estimate for educational purposes only and is not tax advice. 
                Actual taxes may be higher due to self-employment tax and other factors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <CTAStrip
        title="Ready to Optimize Your Creator Taxes?"
        subtitle="This calculator gives estimates. For real tax savings strategies—like S-Corp election—let's talk."
        primaryButtonText="Book a Free Call"
        primaryButtonHref="/contact"
        secondaryButtonText="View Services"
        secondaryButtonHref="/services"
      />
    </main>
  );
}

