/* ===========================================
   TRUST BADGES COMPONENT
   
   Credentials and trust indicators section
   
   To customize:
   - Update credentials below with your information
   =========================================== */

const credentials = [
  {
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
      </svg>
    ),
    title: "Certified Public Accountant",
    subtitle: "Licensed CPA",
    detail: "Active License",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />
      </svg>
    ),
    title: "Master's in Taxation",
    subtitle: "Loyola Marymount University",
    detail: "Advanced Tax Education",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
      </svg>
    ),
    title: "B.A. in Business Economics",
    subtitle: "UC Irvine",
    detail: "Strong Foundation",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
      </svg>
    ),
    title: "5+ Years Experience",
    subtitle: "Real Estate Taxation Focus",
    detail: "Specialized Expertise",
  },
];

export default function TrustBadges() {
  return (
    <section className="py-20 bg-[var(--color-navy-deep)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-[var(--color-gold)] font-semibold text-sm uppercase tracking-wider">
            Qualifications
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">
            Credentials You Can Trust
          </h2>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {credentials.map((credential) => (
            <div
              key={credential.title}
              className="group relative bg-[var(--color-navy)]/50 border border-[var(--color-navy-light)]/30 rounded-xl p-6 text-center hover:bg-[var(--color-navy-light)]/30 hover:border-[var(--color-gold)]/30 transition-all duration-300"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-gold)]/10 text-[var(--color-gold)] mb-4 group-hover:scale-110 transition-transform duration-300">
                {credential.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-lg font-semibold text-white mb-1">
                {credential.title}
              </h3>
              <p className="text-[var(--color-gold)] text-sm font-medium mb-2">
                {credential.subtitle}
              </p>
              <p className="text-gray-400 text-xs">
                {credential.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


