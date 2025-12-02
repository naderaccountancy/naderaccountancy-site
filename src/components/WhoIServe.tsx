/* ===========================================
   WHO I SERVE COMPONENT
   
   Section showcasing target client personas
   =========================================== */

const clientTypes = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Real Estate Investors",
    description: "From single-family rentals to larger portfolios. Maximize depreciation, leverage tax-advantaged strategies, and keep more cash in your pocket.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "S-Corp Business Owners",
    description: "Optimize your business structure, ensure reasonable compensation compliance, and integrate your real estate holdings with your business strategy.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "High-Income W-2 Earners",
    description: "Professionals, executives, and specialists looking to offset W-2 income through strategic real estate investments and tax planning.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Physicians & Healthcare Professionals",
    description: "Doctors, dentists, and healthcare providers with high incomes looking to preserve wealth through strategic real estate investments and tax optimization.",
  },
];

export default function WhoIServe() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[var(--color-gold)] font-semibold text-sm uppercase tracking-wider">
            Ideal Clients
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[var(--color-navy-deep)]">
            Who I Serve
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            I specialize in working with clients who understand that proactive tax planning is an investment, not an expense.
          </p>
        </div>

        {/* Client Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
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
              <h3 className="text-xl font-bold text-[var(--color-navy-deep)] mb-3">
                {client.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {client.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


