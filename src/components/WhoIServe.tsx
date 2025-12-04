/* ===========================================
   WHO I SERVE COMPONENT
   
   Section showcasing target creator client personas
   =========================================== */

const clientTypes = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    title: "YouTubers & Video Creators",
    subtitle: "AdSense, sponsors, and brand deals",
    description: "Multiple income streams from AdSense, sponsorships, and affiliate marketing. I'll help you maximize deductions, handle quarterly taxes, and set up the right entity structure.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: "Course Creators & Coaches",
    subtitle: "Digital products and consulting",
    description: "Lumpy launch income, digital product sales, and coaching revenue. I'll help you plan for big months, optimize S-corp timing, and manage contractor payments.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    ),
    title: "Podcasters & Streamers",
    subtitle: "Twitch, Patreon, and sponsorships",
    description: "Subscriptions, donations, bits, and brand deals. I understand the unique tax treatment of each revenue stream and will structure everything for maximum benefit.",
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
            I work exclusively with content creators and online business owners. I understand your income streams, your deductions, and your world.
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

        {/* Additional platforms note */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            Also serving: TikTok creators • Newsletter writers • Affiliate marketers • Online service providers
          </p>
        </div>
      </div>
    </section>
  );
}
