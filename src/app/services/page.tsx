import { Metadata } from "next";
import Link from "next/link";
import { CTAStrip } from "@/components";

/* ===========================================
   SERVICES PAGE
   
   Pricing and services for content creators
   =========================================== */

export const metadata: Metadata = {
  title: "Pricing | Nader Accountancy - Tax & Financial Services for Creators",
  description: "Simple, month-to-month pricing for content creators. Essential plan at $300/mo, Premier with S-corp at $400/mo. No long-term contracts.",
};

// FAQ Items for content creators
const faqItems = [
  {
    question: "Who is this service for?",
    answer: "This service is designed for content creators—YouTubers, influencers, streamers, podcasters, course creators, and online entrepreneurs. If you make money from your content and want more than a tax preparer—a financial partner who actually understands the creator economy—this is for you.",
  },
  {
    question: "What do you mean by 'financial partner'?",
    answer: "I go beyond filing tax returns. I help you understand your creator income, provide clarity on what you're actually earning across platforms, coordinate your tax strategy with business decisions, and serve as a trusted advisor year-round. Tax is at the core, but I'm here for the bigger picture.",
  },
  {
    question: "Do you actually understand creator income?",
    answer: "Yes! I specialize in creators. AdSense, brand deals, affiliate income, merch, courses, Patreon, streaming donations—I've seen it all. I won't ask you to explain what a CPM is or look confused at your income sources. I speak creator.",
  },
  {
    question: "What is an S-corp and do I need one?",
    answer: "An S-corp is a tax election that can save significant money on self-employment taxes—often $10,000-$30,000+ per year for creators earning $80K+. I'll analyze your situation and tell you honestly if it makes sense. If it does, I'll handle the setup and ongoing compliance.",
  },
  {
    question: "Can I cancel or change plans?",
    answer: "Yes! You can upgrade or downgrade your plan at any time. If you need to cancel, just give me 30 days notice. No long-term contracts or cancellation fees. I want you to stay because you see value, not because you're locked in.",
  },
  {
    question: "How do the strategy calls work?",
    answer: "Strategy calls are video calls where we review your creator business, discuss upcoming opportunities (new brand deals, product launches, etc.), and optimize your tax position. We'll cover revenue, expenses, tax projections, and any questions you have. Essential clients get 2 calls per year, and Premier clients get quarterly calls (4x/year).",
  },
  {
    question: "What if I have income from multiple platforms?",
    answer: "That's most creators! YouTube, TikTok, Instagram, Twitch, brand deals, affiliate links, merch—I'll coordinate everything, give you clarity on each stream, and ensure you're optimizing across your entire creator business.",
  },
  {
    question: "How quickly do you respond to questions?",
    answer: "Response times depend on your plan: Essential clients receive responses within 48 hours, and Premier clients receive priority 24-hour responses. Urgent tax deadline matters are always handled immediately for all clients.",
  },
  {
    question: "What expenses can creators deduct?",
    answer: "More than you'd think! Camera gear, computers, software subscriptions, home office, travel for content, props and sets, editing services, music licensing, and more. I'll make sure you're capturing every legitimate deduction for your creator business.",
  },
  {
    question: "Do you work with creators outside California?",
    answer: "Absolutely! I work with creators across the United States. All plans include federal and state tax return preparation regardless of where you're located. Video calls make it easy to work together from anywhere.",
  },
  {
    question: "What makes you different from other accountants?",
    answer: "I specialize in creators and I'm a financial partner, not just a tax preparer. Most accountants don't understand creator income—I do. I provide year-round guidance, help you understand your numbers, and bring proactive strategy to help you build real wealth from your content.",
  },
];

// Why creators love working with us
const benefits = [
  "Direct access to a CPA who specializes in creator finances",
  "Personal attention – no hand-offs to junior staff or outsourcing",
  "Flexible month-to-month billing with zero long-term lock-ins",
  "Proactive tax planning – not just filing when deadlines hit",
  "Clear communication without the accounting jargon",
];

// Comparison table data
const comparisonData = [
  {
    feature: "Creator expertise",
    us: "I know AdSense, sponsorships, affiliate revenue, and platform payouts inside out.",
    them: "You'll be teaching them what a brand deal is.",
  },
  {
    feature: "Accessibility",
    us: "Reach me directly via call, text, or email. Questions are welcome.",
    them: "Good luck getting past the receptionist.",
  },
  {
    feature: "Continuity",
    us: "Same CPA every time – I know your story and your goals.",
    them: "New face every year. Start from scratch.",
  },
  {
    feature: "Pricing clarity",
    us: "One monthly fee covers everything. No surprise invoices.",
    them: "Base fee + filing fee + call fee + question fee...",
  },
  {
    feature: "Proactive guidance",
    us: "Regular check-ins to optimize your tax position throughout the year.",
    them: "Radio silence until April.",
  },
  {
    feature: "Deadline reliability",
    us: "Clear timelines and proactive communication – no last-minute surprises.",
    them: "Left guessing where things stand until you chase them down.",
  },
];

export default function ServicesPage() {
  return (
    <main>
      {/* Hero Section - Large headline with CTA */}
      <section className="bg-gradient-navy pt-44 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Keep more of what you earn &{" "}
            <span className="text-gradient-gold">grow with confidence.</span>
          </h1>
          <div className="mt-10">
            <Link href="/contact" className="btn-primary text-lg px-8 py-4 inline-block">
              Book a Call
            </Link>
          </div>
        </div>
      </section>

      {/* Focus on Your Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-navy-deep)] mb-6">
              Focus on Your Content, Not Your Taxes
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              You built your audience by creating great content – not by stressing over quarterly estimates 
              and Schedule C forms. I handle the tax strategy and financial complexity so you can 
              focus on what you do best. Real expertise. Real conversations. Real results.
            </p>
          </div>
        </div>
      </section>

      {/* Why Creators Choose Me */}
      <section className="py-20 bg-[var(--color-gray-50)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--color-navy-deep)]">
              Why Creators Choose Me
            </h2>
          </div>
          <ul className="space-y-4 max-w-2xl mx-auto">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--color-gold)] flex items-center justify-center mt-0.5">
                  <svg className="w-4 h-4 text-[var(--color-navy-deep)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-lg text-gray-700">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Simple Pricing Section - Spacious Design */}
      <section className="relative py-24 bg-[var(--color-gray-50)] overflow-hidden">
        {/* Decorative Blob Shapes */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-[var(--color-navy-deep)]/5 rounded-full -translate-x-1/2 -translate-y-1/4" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--color-navy-deep)]/5 rounded-full translate-x-1/3 translate-y-1/4" />
        <div className="absolute top-1/2 right-10 w-32 h-32 bg-[var(--color-gold)]/10 rounded-full" />
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-6">
            <h2 className="text-4xl sm:text-5xl font-bold text-[var(--color-navy-deep)]">
              Straightforward <span className="text-[var(--color-gold)]">Pricing</span>
            </h2>
          </div>
          <p className="text-center text-gray-600 mb-16 max-w-xl mx-auto text-lg">
            No hidden fees. No long-term contracts. Just honest pricing that scales with your creator business.
          </p>

          {/* Pricing Cards - Large & Spacious */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {/* Essential Plan */}
            <div className="bg-white rounded-2xl shadow-lg p-10 text-center hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-[var(--color-gold)] font-bold text-lg uppercase tracking-wide mb-6">
                Essential
              </h3>
              <div className="mb-6">
                <span className="text-5xl sm:text-6xl font-bold text-[var(--color-navy-deep)]">$300</span>
                <span className="text-2xl text-[var(--color-navy-light)] font-medium"> / mo</span>
              </div>
              {/* Decorative Line */}
              <div className="w-20 h-1 bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-gold-light)] mx-auto mb-8 rounded-full" />
              <p className="text-gray-600 leading-relaxed mb-10 min-h-[100px]">
                Built for creators earning under ~$100k/yr. Monthly bookkeeping, complete tax preparation, quarterly estimates, deduction optimization, and two strategy sessions per year.
              </p>
              <Link 
                href="/services#essential" 
                className="block w-full py-4 px-6 bg-[var(--color-gold)] text-[var(--color-navy-deep)] font-semibold rounded-full hover:bg-[var(--color-gold-light)] transition-colors duration-300"
              >
                Learn More
              </Link>
            </div>

            {/* Premier Plan */}
            <div className="bg-white rounded-2xl shadow-lg p-10 text-center hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-[var(--color-gold)] font-bold text-lg uppercase tracking-wide mb-6">
                Premier
              </h3>
              <div className="mb-6">
                <span className="text-5xl sm:text-6xl font-bold text-[var(--color-navy-deep)]">$400</span>
                <span className="text-2xl text-[var(--color-navy-light)] font-medium"> / mo</span>
              </div>
              {/* Decorative Line */}
              <div className="w-20 h-1 bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-gold-light)] mx-auto mb-8 rounded-full" />
              <p className="text-gray-600 leading-relaxed mb-10 min-h-[100px]">
                Maximize your tax savings when earning ~$100k+/yr. Everything in Essential plus S-Corp election, payroll management, and quarterly strategy sessions to optimize year-round.
              </p>
              <Link 
                href="/services#premier" 
                className="block w-full py-4 px-6 bg-[var(--color-gold)] text-[var(--color-navy-deep)] font-semibold rounded-full hover:bg-[var(--color-gold-light)] transition-colors duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Additional Note */}
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-gray-700 mb-3">
              Every plan includes <strong className="text-[var(--color-navy-deep)]">LLC formation guidance and a complimentary strategy session</strong> to make sure we&apos;re the right fit – <strong className="text-[var(--color-gold)]">no strings attached.</strong>
            </p>
            <p className="text-gray-600 italic">
              Your success is my success. That&apos;s how I approach every client relationship.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-20 bg-[var(--color-gray-50)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-navy-deep)] mb-4">
              Built for the Creator Economy
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Most accountants treat creator income like a puzzle they&apos;ve never seen before. I work with creators every day – your income streams are my specialty.
            </p>
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-hidden rounded-2xl shadow-lg bg-white">
            <table className="w-full">
              <thead>
                <tr className="bg-[var(--color-navy-deep)]">
                  <th className="px-6 py-4 text-left text-white font-semibold"></th>
                  <th className="px-6 py-4 text-left">
                    <span className="text-[var(--color-gold)] font-bold text-lg">Nader Accountancy</span>
                  </th>
                  <th className="px-6 py-4 text-left text-white/70 font-semibold">Traditional Firms</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-[var(--color-gray-50)]"}>
                    <td className="px-6 py-5 font-semibold text-[var(--color-navy-deep)] border-r border-gray-100">
                      {row.feature}
                    </td>
                    <td className="px-6 py-5 text-gray-700 border-r border-gray-100">
                      <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-[var(--color-gold)] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{row.us}</span>
                      </div>
                    </td>
                    <td className="px-6 py-5 text-gray-500">
                      {row.them}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            {comparisonData.map((row, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="bg-[var(--color-navy-deep)] px-4 py-3">
                  <h4 className="font-semibold text-white">{row.feature}</h4>
                </div>
                <div className="p-4 space-y-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <svg className="w-4 h-4 text-[var(--color-gold)]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm font-semibold text-[var(--color-gold)]">Nader Accountancy</span>
                    </div>
                    <p className="text-sm text-gray-700 pl-6">{row.us}</p>
                  </div>
                  <div className="border-t pt-3">
                    <div className="text-sm font-semibold text-gray-400 mb-1">Traditional Firms</div>
                    <p className="text-sm text-gray-500">{row.them}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom note */}
          <p className="text-center text-gray-600 mt-10 max-w-2xl mx-auto">
            The creator economy doesn&apos;t fit into traditional accounting boxes. 
            You need an accountant who gets that – and who&apos;s ready to help you build real wealth from your work.
          </p>
        </div>
      </section>

      {/* Savings CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-navy-deep)] mb-6">
            Ready to see what&apos;s possible?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Most creators overpay on taxes simply because their accountant doesn&apos;t understand 
            how they earn money. Let&apos;s change that. Book a call and I&apos;ll show you 
            exactly where the opportunities are.
          </p>
          <Link href="/contact" className="btn-primary text-lg px-8 py-4 inline-block">
            Book a Call
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-[var(--color-gray-50)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[var(--color-gold)] font-semibold text-sm uppercase tracking-wider">
              FAQ
            </span>
            <h2 className="mt-3 text-3xl font-bold text-[var(--color-navy-deep)]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <details
                key={index}
                className="group bg-white rounded-xl shadow-sm"
              >
                <summary className="flex items-center justify-between cursor-pointer p-6 text-left">
                  <span className="font-semibold text-[var(--color-navy-deep)] pr-4">
                    {item.question}
                  </span>
                  <span className="flex-shrink-0 ml-4">
                    <svg
                      className="w-5 h-5 text-[var(--color-gold)] transform group-open:rotate-180 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <CTAStrip
        title="Let's Build Your Tax Strategy Together"
        subtitle="Book a free call and let's talk about your creator business – no pressure, just real answers."
        primaryButtonText="Book a Free Call"
        primaryButtonHref="/contact"
        secondaryButtonText="View Resources"
        secondaryButtonHref="/educational-resources"
      />
    </main>
  );
}
