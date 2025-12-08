/* ===========================================
   WHO I SERVE COMPONENT
   
   Section showcasing target high-income client personas
   =========================================== */

const clientTypes = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    title: "YouTubers & Video Creators",
    subtitle: "AdSense, sponsorships & beyond",
    description: "From AdSense revenue to brand deals to merch sales, I help you optimize every income stream, structure your business properly, and keep more of what you earn.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Influencers & Social Creators",
    subtitle: "Multi-platform income optimization",
    description: "Instagram, TikTok, brand partnerships, affiliate income—I understand how creators actually make money and help you build a tax strategy that matches your hustle.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: "Course Creators & Coaches",
    subtitle: "Digital product businesses",
    description: "Selling courses, memberships, or coaching? I help online educators structure their business, maximize deductions, and plan for sustainable growth.",
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
            Built for Content Creators
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            I specialize in creators who are serious about their business—and want a financial partner who actually understands how the creator economy works.
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
            Also serving: Streamers • Podcasters • Newsletter creators • UGC creators • Online entrepreneurs
          </p>
        </div>
      </div>
    </section>
  );
}
