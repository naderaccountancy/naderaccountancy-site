import { Metadata } from "next";
import Image from "next/image";
import { CTAStrip } from "@/components";

/* ===========================================
   ABOUT PAGE
   
   Personal bio and credentials
   
   To customize:
   - Update the bio text and credentials below
   - Replace placeholder headshot with actual image
   =========================================== */

export const metadata: Metadata = {
  title: "About | Nader Accountancy - Real Estate Tax Strategist",
  description: "Learn about Ben Nader, CPA - a licensed CPA with a Master's in Taxation specializing in real estate tax strategy for investors and high-income professionals.",
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
              About Your Real Estate Tax Strategist
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
                    alt="Ben Nader, CPA - Real Estate Tax Strategist"
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
                  B.A. Business Economics – UC Irvine
                </span>
              </div>

              <div className="space-y-5 text-gray-600 leading-relaxed">
                <p>
                  I&apos;m a licensed CPA with a <strong className="text-[var(--color-navy-deep)]">Master&apos;s in Taxation from Loyola Marymount University</strong> and a <strong className="text-[var(--color-navy-deep)]">B.A. in Business Economics from UC Irvine</strong>. For the past 5+ years, I&apos;ve focused exclusively on real estate taxation, helping investors and high-income professionals keep more of what they earn.
                </p>
                <p>
                  My approach is different from traditional CPAs. Instead of being reactive—scrambling at tax time to find deductions—I work with clients <strong className="text-[var(--color-navy-deep)]">year-round</strong> to plan strategically. This means we make decisions <em>before</em> they become missed opportunities.
                </p>
                <p>
                  I leverage modern tools and automation to monitor tax law changes and track your portfolio moves in real-time. When something changes that affects you, you&apos;ll hear from me proactively—not six months later when it&apos;s too late to act.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Real Estate Section */}
      <section className="py-20 bg-[var(--color-gray-50)] pattern-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--color-navy-deep)]">
              Why I Specialize in Real Estate
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="leading-relaxed mb-6">
                Real estate is one of the most tax-advantaged asset classes available—but only if you know how to leverage it properly. Most accountants treat rental properties like any other investment. They miss the nuances of cost segregation, the RE Pro status rules, the 1031 exchange timing requirements, and dozens of other opportunities.
              </p>
              <p className="leading-relaxed mb-6">
                I saw too many investors leaving money on the table simply because their accountant didn&apos;t understand real estate. That&apos;s why I decided to specialize. Every client I work with benefits from strategies that generalist CPAs often overlook.
              </p>
              <p className="leading-relaxed">
                Whether you&apos;re buying your first rental or building a portfolio across multiple states, I&apos;m here to ensure you&apos;re optimizing every aspect of your tax position.
              </p>
            </div>

              {/* Quote */}
            <blockquote className="mt-10 pt-10 border-t border-gray-200">
              <p className="text-xl font-medium text-[var(--color-navy-deep)] italic">
                &ldquo;Every dollar saved in taxes is a dollar that can be reinvested. My job is to find those dollars.&rdquo;
              </p>
              <footer className="mt-4 text-[var(--color-gold)] font-semibold">
                — Ben Nader, CPA
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Credentials Detail Section */}
      <section className="py-20 bg-white">
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
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                  </svg>
                ),
                title: "5+ Years Specialized Experience",
                subtitle: "Real Estate Taxation",
                detail: "Dedicated focus on investor tax strategy",
              },
            ].map((credential) => (
              <div
                key={credential.title}
                className="text-center p-6 rounded-xl bg-[var(--color-gray-50)] hover:shadow-lg transition-shadow"
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
        subtitle="Ready to optimize your real estate tax strategy? Book a free consultation."
        primaryButtonText="Book Your Consultation"
        primaryButtonHref="/contact"
        secondaryButtonText="View Services"
        secondaryButtonHref="/services"
      />
    </main>
  );
}

