import Link from "next/link";

/* ===========================================
   CTA STRIP COMPONENT
   
   Call-to-action section for creators
   =========================================== */

interface CTAStripProps {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
}

export default function CTAStrip({
  title = "Ready to Stop Stressing About Taxes?",
  subtitle = "Book a free call and let's see if we're a good fit.",
  primaryButtonText = "Book a Free Call",
  primaryButtonHref = "/contact",
  secondaryButtonText = "View Pricing",
  secondaryButtonHref = "/services",
}: CTAStripProps) {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-navy-deep)] via-[var(--color-navy)] to-[var(--color-navy-deep)]" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 pattern-bg opacity-30" />
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-[var(--color-gold)]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--color-gold)]/5 rounded-full blur-3xl" />
      
      {/* Content */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          {title}
        </h2>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          {subtitle}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={primaryButtonHref} className="btn-primary text-center">
            {primaryButtonText}
          </Link>
          <Link href={secondaryButtonHref} className="btn-secondary text-center">
            {secondaryButtonText}
          </Link>
        </div>

        {/* Trust Note */}
        <p className="mt-8 text-gray-400 text-sm">
          No pressure • No obligation • Just a conversation
        </p>
      </div>
    </section>
  );
}
