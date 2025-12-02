import { Metadata } from "next";
import Script from "next/script";
import { ContactForm } from "@/components";

/* ===========================================
   CONTACT PAGE
   
   Contact form and booking information
   
   To customize:
   - Update email address below
   - Add your Calendly or booking link
   =========================================== */

export const metadata: Metadata = {
  title: "Contact | Nader Accountancy - Book a Consultation",
  description: "Book a free real estate tax consultation. Discuss your portfolio, tax goals, and how proactive planning can save you money.",
};

const CONTACT_CONFIG = {
  email: "ben@naderaccountancy.com",
  calendlyUrl: "https://calendly.com/naderaccountancy",
};

export default function ContactPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-navy pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-[var(--color-gold)] font-semibold text-sm uppercase tracking-wider">
              Contact
            </span>
            <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-white">
              Book Your Real Estate Tax Consultation
            </h1>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              Ready to optimize your tax strategy? Let&apos;s talk. Fill out the form below or book directly through my calendar.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-[var(--color-gray-50)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Info */}
            <div>
              {/* What to Expect */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-[var(--color-navy-deep)] mb-6">
                  What Happens on the Call
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      step: "1",
                      title: "We Discuss Your Situation",
                      description: "Tell me about your real estate portfolio, income sources, and current tax situation.",
                    },
                    {
                      step: "2",
                      title: "I Identify Opportunities",
                      description: "Based on what you share, I'll highlight potential strategies and areas where you might be leaving money on the table.",
                    },
                    {
                      step: "3",
                      title: "We Explore Next Steps",
                      description: "If it's a good fit, I'll recommend a plan and explain exactly how we'd work together. No pressure, no obligation.",
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-[var(--color-gold)] flex items-center justify-center text-[var(--color-navy-deep)] font-bold">
                          {item.step}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-[var(--color-navy-deep)] mb-1">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Calendly Embed Placeholder */}
              <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
                <h3 className="text-xl font-bold text-[var(--color-navy-deep)] mb-4">
                  Book Directly
                </h3>
                
                {/* Calendly inline widget begin */}
                <div className="calendly-inline-widget" data-url="https://calendly.com/ben-naderaccountancy/new-meeting" style={{minWidth: '320px', height: '700px'}}></div>
                <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
                {/* Calendly inline widget end */}
              </div>

              {/* Direct Contact */}
              <div className="bg-[var(--color-navy-deep)] rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Prefer Email?</h3>
                <p className="text-gray-300 mb-6">
                  Not ready for a call? Send me an email and I&apos;ll respond within 1-2 business days.
                </p>
                
                {/* Email */}
                <a
                  href={`mailto:${CONTACT_CONFIG.email}`}
                  className="inline-flex items-center gap-2 text-[var(--color-gold)] hover:text-[var(--color-gold-light)] transition-colors font-medium"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {CONTACT_CONFIG.email}
                </a>

                {/* Trust indicators */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-[var(--color-gold)]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      No spam, ever
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-[var(--color-gold)]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Confidential
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-[var(--color-gold)]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Quick response
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div>
              <div className="sticky top-28">
                <h2 className="text-2xl font-bold text-[var(--color-navy-deep)] mb-6">
                  Send a Message
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Mini Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-[var(--color-navy-deep)] mb-8">
            Common Questions About the Consultation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {[
              {
                q: "Is the consultation really free?",
                a: "Yes, the initial discovery call is completely free with no obligation. It's a chance for us to see if we're a good fit.",
              },
              {
                q: "How long is the call?",
                a: "Typically 20-30 minutes. Enough time to understand your situation and discuss potential strategies.",
              },
              {
                q: "What should I prepare?",
                a: "Just a general idea of your properties, income level, and what you're hoping to achieve. No documents needed.",
              },
              {
                q: "What if I'm not ready to commit?",
                a: "No problem at all. The call is about education and exploration. There's zero pressure to sign up for anything.",
              },
            ].map((item) => (
              <div
                key={item.q}
                className="p-6 rounded-xl bg-[var(--color-gray-50)]"
              >
                <h3 className="font-semibold text-[var(--color-navy-deep)] mb-2">
                  {item.q}
                </h3>
                <p className="text-gray-600 text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}


