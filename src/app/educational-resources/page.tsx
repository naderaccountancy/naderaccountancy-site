import { Metadata } from "next";
import { CTAStrip } from "@/components";

/* ===========================================
   EDUCATIONAL RESOURCES PAGE

   YouTube video embeds and educational content for creators
   =========================================== */

export const metadata: Metadata = {
  title: "Resources | Nader Accountancy - Tax Tips for Creators",
  description: "Free educational videos on tax strategy for content creators. S-corps, deductions, quarterly taxes, and more.",
};

const videos = [
  {
    id: "KXZKfpBQAyQ",
    title: "Ultimate Tax Write-Off Guide",
    description: "Comprehensive guide to everyday tax write-offs for creators. Learn what you can deduct—from equipment to home office to software subscriptions.",
  },
  {
    id: "o2H9Fbc7NFc",
    title: "Travel Write-Offs Guide",
    description: "Everything you need to know about deducting travel as a creator. Conferences, collaborations, content trips—what counts and what doesn't.",
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
              Free Tax Education for Creators
            </h1>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              Learn the tax strategies that can save you thousands. No jargon, no confusion—just clear explanations of what you need to know.
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
              Practical tax tips designed specifically for content creators
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {videos.map((video) => (
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

      {/* Topics Section */}
      <section className="py-20 bg-[var(--color-gray-50)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--color-navy-deep)]">
              What Creators Need to Know
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "S-Corp Election",
                description: "How S-corps work, when they make sense, and how much they can save you on self-employment tax.",
              },
              {
                title: "Quarterly Taxes",
                description: "Why you need to pay quarterly, how to calculate what you owe, and how to avoid penalties.",
              },
              {
                title: "Deductions",
                description: "Equipment, software, home office, travel, meals—what you can deduct and how to document it.",
              },
              {
                title: "Business Expenses",
                description: "The difference between personal and business expenses, and why separating them matters.",
              },
              {
                title: "Entity Structure",
                description: "LLC vs S-corp vs sole proprietor—what's right for your situation and when to make the switch.",
              },
              {
                title: "Retirement Planning",
                description: "Solo 401k, SEP IRA, and other retirement options for self-employed creators.",
              },
            ].map((topic) => (
              <div
                key={topic.title}
                className="p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-[var(--color-navy-deep)] mb-2">
                  {topic.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {topic.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--color-navy-deep)]">
              More Ways to Learn
            </h2>
          </div>

          <div className="bg-[var(--color-gray-50)] rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  ),
                  title: "YouTube Channel",
                  description: "Subscribe for regular videos on creator taxes, deductions, and money tips.",
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  ),
                  title: "Free Discovery Call",
                  description: "Book a call to discuss your specific situation and get personalized guidance.",
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  title: "Email Me",
                  description: "Have a quick question? Reach out anytime—I'm happy to point you in the right direction.",
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
        title="Ready to Get Your Taxes Handled?"
        subtitle="Book a free call and let's talk about your situation."
        primaryButtonText="Book a Free Call"
        primaryButtonHref="/contact"
        secondaryButtonText="View Pricing"
        secondaryButtonHref="/services"
      />
    </main>
  );
}
