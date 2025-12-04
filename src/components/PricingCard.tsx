import Link from "next/link";

/* ===========================================
   PRICING CARD COMPONENT
   
   Reusable pricing card for services page
   
   To customize pricing:
   - Update the pricing data in services/page.tsx
   =========================================== */

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  id?: string;
  name: string;
  price: string;
  period?: string;
  description: string;
  features: PricingFeature[];
  featured?: boolean;
  ctaText?: string;
  ctaHref?: string;
}

export default function PricingCard({
  id,
  name,
  price,
  period = "/month",
  description,
  features,
  featured = false,
  ctaText = "Get Started",
  ctaHref = "/contact",
}: PricingCardProps) {
  return (
    <div
      id={id}
      className={`relative bg-white rounded-2xl p-8 flex flex-col h-full ${
        featured
          ? "pricing-featured shadow-2xl scale-105 z-10"
          : "shadow-lg hover:shadow-xl"
      } transition-all duration-300`}
    >
      {/* Plan Name */}
      <div className="mb-6">
        <h3 className="text-xl font-bold text-[var(--color-navy-deep)] mb-2">
          {name}
        </h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>

      {/* Price */}
      <div className="mb-8">
        <div className="flex items-baseline">
          <span className="text-4xl font-bold text-[var(--color-navy-deep)]">
            {price}
            <span className="text-2xl font-semibold">{period}</span>
          </span>
        </div>
      </div>

      {/* Features */}
      <ul className="space-y-4 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            {feature.included ? (
              <svg
                className="w-5 h-5 text-[var(--color-gold)] flex-shrink-0 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
            )}
            <span className={feature.included ? "text-gray-700" : "text-gray-400"}>
              {feature.text}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <div className="mt-auto">
        <Link
          href={ctaHref}
          className={`block w-full text-center py-3.5 rounded-lg font-semibold transition-all duration-300 ${
            featured
              ? "btn-primary"
              : "bg-[var(--color-navy-deep)] text-white hover:bg-[var(--color-navy-light)]"
          }`}
        >
          {ctaText}
        </Link>
      </div>
    </div>
  );
}


