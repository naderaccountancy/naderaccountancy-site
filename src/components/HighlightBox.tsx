import Link from "next/link";

/* ===========================================
   HIGHLIGHT BOX COMPONENT
   
   Premium offer highlight for creators
   =========================================== */

export default function HighlightBox() {
  return (
    <section className="py-12 bg-[var(--color-navy-deep)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative border border-[var(--color-gold)]/40 rounded-xl bg-[var(--color-navy)]/50 backdrop-blur-sm p-8 md:p-10 overflow-hidden">
          {/* Subtle corner accents */}
          <div className="absolute top-0 left-0 w-16 h-16">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-[var(--color-gold)] to-transparent" />
            <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-[var(--color-gold)] to-transparent" />
          </div>
          <div className="absolute bottom-0 right-0 w-16 h-16">
            <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-[var(--color-gold)] to-transparent" />
            <div className="absolute bottom-0 right-0 w-px h-full bg-gradient-to-t from-[var(--color-gold)] to-transparent" />
          </div>

          {/* Content */}
          <div className="relative text-center">
            {/* Label */}
            <span className="inline-block text-[var(--color-gold)] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              Free Discovery Call
            </span>

            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Not Sure If We&apos;re a Fit?
            </h3>

            {/* Description */}
            <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto mb-8">
              Book a free 15-minute call. We&apos;ll talk through your situation, I&apos;ll share some initial thoughts, and we&apos;ll see if working together makes sense. No pressure, no obligation.
            </p>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 btn-primary"
            >
              <span>Book Your Free Call</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
