/* ===========================================
   HOW IT WORKS COMPONENT
   
   Three-step process timeline
   =========================================== */

const steps = [
  {
    step: 1,
    title: "Book a Consultation",
    description: "Schedule a free discovery call where we'll discuss your current situation, real estate portfolio, and tax goals. No commitment required.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    step: 2,
    title: "Get Your Custom Plan",
    description: "Receive a comprehensive tax strategy tailored to your specific situation. We'll identify opportunities and create an actionable roadmap.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    step: 3,
    title: "Execute & Monitor",
    description: "Implement your strategy with ongoing support. I'll continuously monitor tax law changes and your portfolio to optimize your position year-round.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[var(--color-gold)] font-semibold text-sm uppercase tracking-wider">
            Simple Process
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[var(--color-navy-deep)]">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Getting started is easy. Here&apos;s what to expect when you work with me.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent" />
          
          {/* Steps */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
            {steps.map((item, index) => (
              <div key={item.step} className="relative">
                {/* Mobile Timeline Line */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden absolute left-6 top-16 bottom-0 w-0.5 bg-[var(--color-gold)]/30" style={{ height: 'calc(100% + 2rem)' }} />
                )}
                
                {/* Step Content */}
                <div className="flex lg:flex-col items-start lg:items-center text-left lg:text-center">
                  {/* Step Number Circle */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-[var(--color-navy-deep)] flex items-center justify-center text-white shadow-lg">
                      {item.icon}
                    </div>
                    {/* Step Badge */}
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-[var(--color-gold)] flex items-center justify-center text-[var(--color-navy-deep)] text-xs font-bold shadow">
                      {item.step}
                    </div>
                  </div>
                  
                  {/* Text Content */}
                  <div className="ml-6 lg:ml-0 lg:mt-8">
                    <h3 className="text-xl font-bold text-[var(--color-navy-deep)] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed max-w-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


