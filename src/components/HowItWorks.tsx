/* ===========================================
   HOW IT WORKS COMPONENT
   
   Three-step process for high-income professionals
   =========================================== */

const steps = [
  {
    step: 1,
    title: "Schedule a Consultation",
    description: "Book a complimentary discovery call. We'll discuss your financial situation, current tax strategy, and identify areas for optimization. No pressure, no obligation.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    step: 2,
    title: "Develop Your Strategy",
    description: "If we're a fit, I'll conduct a comprehensive review and build a customized tax strategy. Entity optimization, income planning, and proactive projections—tailored to your situation.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    step: 3,
    title: "Focus on What Matters",
    description: "With your tax strategy handled year-round, you can focus on growing your business and wealth. No surprises, no stress—just confidence in your financial position.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
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
            Getting started is easy. Here&apos;s what to expect.
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
