/* ===========================================
   THREE PILLARS COMPONENT
   
   Section showcasing the core value propositions
   =========================================== */

const pillars = [
  {
    number: "01",
    title: "Maximize Cash Flow Through Tax Optimization",
    description: "Every dollar saved in taxes is a dollar that can be reinvested. I identify every legal deduction, credit, and strategy to put more money back in your pocket.",
    features: [
      "Cost segregation analysis",
      "Depreciation optimization",
      "Entity structure planning",
      "Passive loss strategies",
    ],
  },
  {
    number: "02",
    title: "Proactive Year-Round Planning",
    description: "Tax planning shouldn't happen once a year in April. I work with you throughout the year to make strategic decisions before they become missed opportunities.",
    features: [
      "Quarterly strategy reviews",
      "Real-time law monitoring",
      "Estimated tax planning",
      "Purchase timing optimization",
    ],
  },
  {
    number: "03",
    title: "Audit-Ready Documentation",
    description: "Sleep soundly knowing your tax positions are defensible. I ensure every strategy is properly documented and compliant with current regulations.",
    features: [
      "Detailed record keeping",
      "IRS-compliant documentation",
      "Contemporaneous substantiation",
      "Audit defense preparation",
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
            My Approach
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[var(--color-navy-deep)]">
            The Three Pillars of Smart Tax Strategy
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            A comprehensive approach that goes beyond basic tax preparation to deliver real, measurable results.
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


