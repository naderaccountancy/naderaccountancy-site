import { Metadata } from "next";
import Image from "next/image";
import { CTAStrip } from "@/components";

/* ===========================================
   ABOUT PAGE
   
   Personal bio for high-income focused CPA
   =========================================== */

export const metadata: Metadata = {
  title: "About | Nader Accountancy - Tax Strategy for High Earners",
  description: "Meet Ben Nader, CPA - a licensed accountant with an M.S. in Taxation, specializing in sophisticated tax strategy for high-earning professionals and business owners.",
};

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-navy pt-44 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-[var(--color-gold)] font-semibold text-sm uppercase tracking-wider">
              About
            </span>
            <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-white">
              Your Strategic Tax Partner
            </h1>
          </div>
        </div>
      </section>

      {/* Main About Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image Column */}
            <div className="order-2 lg:order-1">
              {/* Ben Nader Headshot */}
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl bg-[var(--color-gray-100)] overflow-hidden shadow-xl">
                  <Image
                    src="/headshot.jpg"
                    alt="Ben Nader, CPA - Tax Strategy for Content Creators"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[var(--color-gold)]/10 rounded-2xl -z-10" />
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-[var(--color-navy-deep)]/5 rounded-2xl -z-10" />
              </div>
            </div>

            {/* Content Column */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-navy-deep)] mb-6">
                Hi, I&apos;m Ben Nader
              </h2>

              {/* Credentials Summary */}
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-[var(--color-gold)]/10 text-[var(--color-gold-dark)] text-sm font-medium">
                  Certified Public Accountant
                </span>
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-[var(--color-navy-deep)]/5 text-[var(--color-navy-deep)] text-sm font-medium">
                  M.S. Taxation – LMU
                </span>
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-[var(--color-navy-deep)]/5 text-[var(--color-navy-deep)] text-sm font-medium">
                  High-Earner Focused Practice
                </span>
              </div>

              <div className="space-y-5 text-gray-600 leading-relaxed">
                <p>
                  I&apos;m a licensed CPA with a <strong className="text-[var(--color-navy-deep)]">Master&apos;s in Taxation from Loyola Marymount University</strong>. But here&apos;s what really matters: I specialize in sophisticated tax strategy for high-earning professionals and business owners.
                </p>
                <p>
                  I understand complex financial situations—multi-entity structures, investment portfolios, equity compensation, real estate holdings. I won&apos;t ask you to explain your business model or look confused by your income streams.
                </p>
                <p>
                  Most accountants treat high earners like any other client—and miss significant opportunities as a result. I built my practice specifically to provide the proactive, strategic planning that successful people deserve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why High Earners Section */}
      <section className="py-20 bg-[var(--color-gray-50)] pattern-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--color-navy-deep)]">
              Why I Work With High Earners
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="leading-relaxed mb-6">
                High-earning professionals and business owners have unique tax situations that most accountants don&apos;t adequately address. You have multiple income streams, complex entity structures, significant investments—and April shouldn&apos;t feel like a nightmare.
              </p>
              <p className="leading-relaxed mb-6">
                I saw too many successful people overpaying on taxes, missing optimization opportunities, or getting hit with surprise bills because their accountant wasn&apos;t being proactive. That&apos;s why I decided to specialize.
              </p>
              <p className="leading-relaxed">
                When you work with me, you get a strategic partner who understands sophisticated financial situations. No explaining your business structure. No blank stares when discussing equity compensation. Just clear, proactive tax strategy that preserves more of what you&apos;ve built.
              </p>
            </div>

            {/* Quote */}
            <blockquote className="mt-10 pt-10 border-t border-gray-200">
              <p className="text-xl font-medium text-[var(--color-navy-deep)] italic">
                &ldquo;Every dollar you save on taxes is a dollar you can reinvest in your business, your portfolio, or your future. My job is to find those dollars.&rdquo;
              </p>
              <footer className="mt-4 text-[var(--color-gold)] font-semibold">
                — Ben Nader, CPA
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* What I Understand Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[var(--color-gold)] font-semibold text-sm uppercase tracking-wider">
              Areas of Expertise
            </span>
            <h2 className="mt-3 text-3xl font-bold text-[var(--color-navy-deep)]">
              Complex Situations I Handle
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              "Business Income",
              "Investment Portfolios",
              "Real Estate Holdings",
              "Equity Compensation",
              "Multi-Entity Structures",
              "S-Corp Optimization",
              "Rental Properties",
              "Capital Gains Strategy",
              "Retirement Planning",
              "Executive Compensation",
              "Self-Employment",
              "Trust & Estate",
            ].map((income) => (
              <div
                key={income}
                className="text-center p-4 rounded-xl bg-[var(--color-gray-50)] hover:bg-[var(--color-gold)]/10 transition-colors"
              >
                <p className="text-sm font-medium text-[var(--color-navy-deep)]">
                  {income}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials Detail Section */}
      <section className="py-20 bg-[var(--color-gray-50)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[var(--color-gold)] font-semibold text-sm uppercase tracking-wider">
              Credentials
            </span>
            <h2 className="mt-3 text-3xl font-bold text-[var(--color-navy-deep)]">
              Education & Qualifications
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                ),
                title: "Certified Public Accountant",
                subtitle: "Active License",
                detail: "Meets continuing education requirements annually",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />
                  </svg>
                ),
                title: "Master of Science in Taxation",
                subtitle: "Loyola Marymount University",
                detail: "Advanced coursework in tax planning and strategy",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
                  </svg>
                ),
                title: "B.A. in Business Economics",
                subtitle: "UC Irvine",
                detail: "Strong foundation in economic principles",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
                title: "High-Earner Focused Practice",
                subtitle: "Specialized Expertise",
                detail: "Serving high-income professionals & business owners",
              },
            ].map((credential) => (
              <div
                key={credential.title}
                className="text-center p-6 rounded-xl bg-white hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-gold)]/10 text-[var(--color-gold)] mb-4">
                  {credential.icon}
                </div>
                <h3 className="font-semibold text-[var(--color-navy-deep)] mb-1">
                  {credential.title}
                </h3>
                <p className="text-[var(--color-gold)] text-sm font-medium mb-2">
                  {credential.subtitle}
                </p>
                <p className="text-gray-500 text-xs">{credential.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <CTAStrip
        title="Let's Work Together"
        subtitle="Book a free call and let's see if we're a good fit."
        primaryButtonText="Book a Free Call"
        primaryButtonHref="/contact"
        secondaryButtonText="View Pricing"
        secondaryButtonHref="/services"
      />
    </main>
  );
}
