/* ===========================================
   THREE PILLARS COMPONENT
   
   Section showcasing the core value propositions
   High-income professional focused
   =========================================== */

const pillars = [
  {
    number: "01",
    title: "Proactive Tax Strategy",
    description: "Creator income is unpredictable—your tax strategy shouldn't be. With year-round planning and quarterly check-ins, you'll never be surprised by a tax bill again.",
    features: [
      "Quarterly estimated tax planning",
      "Brand deal & sponsorship optimization",
      "S-corp analysis & implementation",
      "Year-end tax optimization",
    ],
  },
  {
    number: "02",
    title: "Financial Clarity",
    description: "Know your numbers, grow your business. I help you understand your revenue streams, track profitability, and make confident decisions about your creator business.",
    features: [
      "Revenue stream analysis",
      "Profit & loss insights",
      "Cash flow forecasting",
      "Decision support for big moves",
    ],
  },
  {
    number: "03",
    title: "Wealth Building Guidance",
    description: "You're building more than a following—you're building wealth. I help you think beyond this year's taxes to long-term financial security.",
    features: [
      "Retirement planning guidance",
      "Investment tax coordination",
      "Building wealth from creator income",
      "Long-term financial strategy",
    ],
  },
];

export default function ThreePillars() {
  return (
    <section className="py-24 bg-[var(--color-gray-50)] pattern-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[var(--color-gold)] font-semibold text-sm uppercase tracking-wider">
            Why Creators Choose Me
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[var(--color-navy-deep)]">
            More Than a CPA—Your Financial Partner
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            I understand the creator economy. From AdSense to brand deals to merch, I help you optimize your taxes, understand your numbers, and build real wealth.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.number}
              className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Number Badge */}
              <div className="absolute -top-4 left-8">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-gold text-[var(--color-navy-deep)] font-bold text-lg shadow-lg">
                  {pillar.number}
                </span>
              </div>

              {/* Content */}
              <div className="mt-6">
                <h3 className="text-xl font-bold text-[var(--color-navy-deep)] mb-4">
                  {pillar.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {pillar.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3">
                  {pillar.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[var(--color-gold)]/20 flex items-center justify-center">
                        <svg className="w-3 h-3 text-[var(--color-gold-dark)]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Decorative Line */}
              {index < pillars.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 border-t-2 border-dashed border-[var(--color-gold)]/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
