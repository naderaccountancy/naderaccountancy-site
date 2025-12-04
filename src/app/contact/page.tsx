import { Metadata } from "next";
import { CalendlyWidget } from "@/components";

/* ===========================================
   CONTACT PAGE
   
   Calendly booking for creators
   =========================================== */

export const metadata: Metadata = {
  title: "Contact | Nader Accountancy - Book a Free Call",
  description: "Book a free discovery call. Let's talk about your creator business, your tax situation, and how I can help you stop overpaying.",
};

const CONTACT_CONFIG = {
  email: "ben@naderaccountancy.com",
};

export default function ContactPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-navy pt-44 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-[var(--color-gold)] font-semibold text-sm uppercase tracking-wider">
              Let&apos;s Chat
            </span>
            <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-white">
              Book a Free Discovery Call
            </h1>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              Not sure if we&apos;re a fit? Let&apos;s find out. Book a free call and we&apos;ll talk through your situation—no pressure, no obligation.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-[var(--color-gray-50)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* What to Expect */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--color-navy-deep)] mb-6 text-center">
              What We&apos;ll Cover on the Call
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  step: "1",
                  title: "Your Creator Business",
                  description: "Tell me about your content, your platforms, and your income streams.",
                },
                {
                  step: "2",
                  title: "Your Current Tax Situation",
                  description: "Are you DIY-ing it? Working with someone? Let's talk about where you're at.",
                },
                {
                  step: "3",
                  title: "Quick Wins & Next Steps",
                  description: "I'll share thoughts on opportunities you might be missing.",
                },
              ].map((item) => (
                <div key={item.step} className="bg-white rounded-xl p-6 shadow-sm text-center">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-gold)] flex items-center justify-center text-[var(--color-navy-deep)] font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-[var(--color-navy-deep)] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Calendly Embed */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-[var(--color-navy-deep)] mb-6 text-center">
              Pick a Time That Works
            </h3>
            <CalendlyWidget />
          </div>

          {/* Direct Contact */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-2">Prefer email?</p>
            <a
              href={`mailto:${CONTACT_CONFIG.email}`}
              className="inline-flex items-center gap-2 text-[var(--color-gold)] hover:text-[var(--color-gold-dark)] transition-colors font-medium"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {CONTACT_CONFIG.email}
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Mini Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-[var(--color-navy-deep)] mb-8">
            Common Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {[
              {
                q: "Is the call really free?",
                a: "Yes, 100% free with no obligation. It's a chance for us to see if we're a good fit for each other.",
              },
              {
                q: "How long is the call?",
                a: "Usually 15-20 minutes. Enough time to understand your situation and see how I can help.",
              },
              {
                q: "What should I prepare?",
                a: "Just a general idea of your income, platforms you use, and your biggest tax frustrations. No documents needed.",
              },
              {
                q: "What if I'm not ready to commit?",
                a: "Totally fine! The call is just a conversation. Zero pressure to sign up for anything.",
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
