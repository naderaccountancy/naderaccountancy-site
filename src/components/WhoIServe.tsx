/* ===========================================
   WHO I SERVE COMPONENT
   
   Section showcasing target high-income client personas
   =========================================== */

const clientTypes = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Business Owners & Entrepreneurs",
    subtitle: "Multiple entities, complex structures",
    description: "From single-member LLCs to multi-entity structures, I help optimize your business taxes, manage S-corp elections, and coordinate personal and business planning for maximum savings.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Executives & High Earners",
    subtitle: "W-2 income plus investments",
    description: "Maximize deductions, optimize equity compensation, and coordinate investment income with your salary. Strategic planning for stock options, RSUs, and deferred compensation.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Investors & Real Estate Owners",
    subtitle: "Portfolio income and property holdings",
    description: "Navigate capital gains strategies, real estate depreciation, 1031 exchanges, and investment income optimization. Comprehensive planning across your entire portfolio.",
  },
];

export default function WhoIServe() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[var(--color-gold)] font-semibold text-sm uppercase tracking-wider">
            Who I Work With
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[var(--color-navy-deep)]">
            Built for High-Achieving Professionals
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            I work with successful individuals who have complex financial situations—and who expect their tax strategy to match their ambition.
          </p>
        </div>

        {/* Client Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {clientTypes.map((client, index) => (
            <div
              key={client.title}
              className="card p-8 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-xl bg-[var(--color-navy-deep)] flex items-center justify-center text-[var(--color-gold)] mb-6 group-hover:scale-110 transition-transform duration-300">
                {client.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-[var(--color-navy-deep)] mb-1">
                {client.title}
              </h3>
              {client.subtitle && (
                <p className="text-[var(--color-gold)] text-sm font-medium mb-3">
                  {client.subtitle}
                </p>
              )}
              <p className="text-gray-600 text-sm leading-relaxed">
                {client.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional client note */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            Also serving: Medical professionals • Attorneys • Consultants • Tech professionals • Self-employed specialists
          </p>
        </div>
      </div>
    </section>
  );
}
