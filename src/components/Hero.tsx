import Link from "next/link";

/* ===========================================
   HERO COMPONENT
   
   Main hero section for the home page
   =========================================== */

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-navy overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-bg opacity-50" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[var(--color-gold)]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[var(--color-gold)]/5 rounded-full blur-3xl" />
      
      {/* Geometric Shapes */}
      <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-[var(--color-gold)] rounded-full animate-pulse" />
      <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-[var(--color-gold)]/50 rounded-full animate-pulse animation-delay-200" />
      <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-[var(--color-gold)]/70 rounded-full animate-pulse animation-delay-400" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 pt-52">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="animate-fade-in-up opacity-0 mb-6">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[var(--color-gold)]/10 border border-[var(--color-gold)]/30 text-[var(--color-gold)] text-sm font-medium">
              <span className="w-2 h-2 bg-[var(--color-gold)] rounded-full mr-2 animate-pulse" />
              Proactive Tax Strategy
            </span>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-in-up opacity-0 animation-delay-100 text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Real Estate Tax Strategy for{" "}
            <span className="text-gradient-gold">
              Investors
            </span>{" "}
            and{" "}
            <span className="text-gradient-gold">
              High-Income Professionals
            </span>
          </h1>

          {/* Subheadline */}
          <p className="animate-fade-in-up opacity-0 animation-delay-200 text-lg sm:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
            Stop leaving money on the table. Get proactive, subscription-based tax planning that works year-round to minimize your tax burden and maximize your real estate investments.
          </p>

          {/* CTAs */}
          <div className="animate-fade-in-up opacity-0 animation-delay-300 flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="btn-primary text-center">
              Book a Consultation
            </Link>
            <Link href="/services" className="btn-secondary text-center">
              View Services
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="animate-fade-in-up opacity-0 animation-delay-400 mt-12 pt-12 border-t border-white/10">
            <p className="text-gray-400 text-sm mb-4">Trusted by real estate investors nationwide</p>
            <div className="flex flex-wrap gap-6 items-center">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[var(--color-gold)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-white text-sm font-medium">Licensed CPA</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[var(--color-gold)]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
                <span className="text-white text-sm font-medium">Master&apos;s in Taxation</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[var(--color-gold)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                </svg>
                <span className="text-white text-sm font-medium">5+ Years Real Estate Focus</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}


