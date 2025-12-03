import { Metadata } from "next";
import { CTAStrip } from "@/components";

/* ===========================================
   EDUCATIONAL RESOURCES PAGE

   YouTube video embeds and educational content

   To customize:
   - Update the video IDs and titles below
   - Add more videos as needed
   =========================================== */

export const metadata: Metadata = {
  title: "Resources | Nader Accountancy - Real Estate Tax Videos",
  description: "Free educational videos on real estate tax strategy, cost segregation, 1031 exchanges, and tax planning tips for investors.",
};

const videos = [
  {
    id: "KXZKfpBQAyQ",
    title: "Ultimate Tax Write-Off Guide",
    description: "Comprehensive guide to everyday tax write-offs, from depreciation to deductible expenses, so you can capture every available savings opportunity.",
  },
  {
    id: "o2H9Fbc7NFc",
    title: "Travel Write-Offs Guide",
    description: "Detailed walkthrough of travel-related write-offs—documenting trips, booking rules, and staying compliant when travel supports your real estate business.",
  },
];

export default function EducationalResourcesPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-navy pt-44 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-[var(--color-gold)] font-semibold text-sm uppercase tracking-wider">
              Resources
            </span>
            <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-white">
              Free Real Estate Tax Education
            </h1>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              Watch expert videos on real estate tax strategy, cost segregation, 1031 exchanges, and proven techniques to minimize your tax burden and maximize your investment returns.
            </p>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--color-navy-deep)]">
              Featured Videos
            </h2>
            <p className="mt-4 text-gray-600">
              Educational content designed to help real estate investors understand tax strategy
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {videos.map((video, index) => (
              <div key={video.id} className="space-y-6">
                {/* Video Embed */}
                <div className="aspect-video rounded-2xl overflow-hidden shadow-xl bg-black">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>

                {/* Video Info */}
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-[var(--color-navy-deep)]">
                    {video.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {video.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources Section */}
      <section className="py-20 bg-[var(--color-gray-50)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--color-navy-deep)]">
              More Learning Opportunities
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  ),
                  title: "Video Library",
                  description: "Subscribe to our YouTube channel for regular tax strategy videos and real estate investment tips.",
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  ),
                  title: "Strategy Sessions",
                  description: "Book a consultation to discuss your specific tax situation and get personalized advice.",
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  ),
                  title: "Tax Guides",
                  description: "Download comprehensive guides on real estate tax topics and investment strategies.",
                },
              ].map((resource) => (
                <div key={resource.title} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-gold)]/10 text-[var(--color-gold)] mb-4">
                    {resource.icon}
                  </div>
                  <h3 className="font-semibold text-[var(--color-navy-deep)] mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {resource.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <CTAStrip
        title="Ready to Apply These Strategies?"
        subtitle="Get personalized tax planning advice tailored to your real estate investments."
        primaryButtonText="Book Consultation"
        primaryButtonHref="/contact"
        secondaryButtonText="View Services"
        secondaryButtonHref="/services"
      />
    </main>
  );
}
