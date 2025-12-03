import {
  Hero,
  HighlightBox,
  WhoIServe,
  ThreePillars,
  HowItWorks,
  TrustBadges,
  Testimonials,
  CTAStrip,
} from "@/components";

/* ===========================================
   HOME PAGE
   
   Main landing page with all sections
   =========================================== */

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <Hero />

      {/* Complimentary Onboarding Highlight */}
      <HighlightBox />

      {/* Who I Serve Section */}
      <WhoIServe />

      {/* Three Pillars Section */}
      <ThreePillars />

      {/* How It Works Section */}
      <HowItWorks />

      {/* Trust Badges Section */}
      <TrustBadges />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Final CTA Strip */}
      <CTAStrip />
    </main>
  );
}
