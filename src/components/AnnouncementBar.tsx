"use client";

import { useState, useRef, useLayoutEffect, useEffect } from "react";
import Link from "next/link";

/* ===========================================
   ANNOUNCEMENT BAR COMPONENT
   
   Premium announcement bar fixed at top of page
   Elegant, minimal design matching site aesthetics
   =========================================== */

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);
  const barRef = useRef<HTMLDivElement | null>(null);

  const setAnnouncementOffset = (value: number) => {
    if (typeof document !== "undefined") {
      document.documentElement.style.setProperty("--announcement-offset", `${value}px`);
    }
  };

  useLayoutEffect(() => {
    if (isVisible && barRef.current) {
      setAnnouncementOffset(barRef.current.offsetHeight);
    } else {
      setAnnouncementOffset(0);
    }
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible || !barRef.current) return;

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (entry) {
        setAnnouncementOffset(entry.contentRect.height);
      }
    });

    observer.observe(barRef.current);

    return () => {
      observer.disconnect();
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div ref={barRef} className="fixed top-0 left-0 right-0 z-[60]">
      {/* Main Bar with subtle gold-tinted gradient background */}
      <div className="relative bg-[var(--color-navy-deep)]">
        {/* Subtle gold radial glow behind content */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-gold)_0%,_transparent_70%)] opacity-[0.03]" />
        {/* Thin gold divider line beneath the bar */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-gold)]/40 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center py-3.5 sm:py-4 relative">
            <div className="flex flex-col sm:flex-row items-center sm:items-center justify-center gap-3 sm:gap-5 text-center sm:text-left w-full sm:w-auto mr-8">
              <div className="flex items-center gap-2 sm:gap-2.5">
                {/* Minimalist gold diamond icon */}
                <span className="flex-shrink-0 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[var(--color-gold)] rotate-45 opacity-80" />
                
                {/* Announcement Text - increased font weight and line height */}
                <p className="text-sm sm:text-[15px] text-gray-200 tracking-wide font-normal leading-[1.55]">
                  <span className="text-[var(--color-gold)] font-semibold">New Clients:</span>
                  <span className="mx-1.5 sm:mx-2 text-[var(--color-gold)]/40">|</span>
                  <span className="text-gray-200">
                    Complimentary 30-Day Tax Strategy Onboarding
                  </span>
                  <span className="hidden md:inline text-gray-400 ml-1">— Limited Openings</span>
                </p>
              </div>

              {/* CTA Button - refined styling */}
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-1.5 w-full sm:w-auto border border-[var(--color-gold)]/35 text-[var(--color-gold)] text-sm font-semibold tracking-wide rounded-lg bg-[var(--color-gold)]/6 transition-all duration-300 hover:border-[var(--color-gold)]/70 hover:bg-[var(--color-gold)]/12 hover:shadow-[0_0_10px_rgba(212,168,83,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)]/40"
              >
                <span>Claim Offer</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 5l6 7-6 7" />
                </svg>
              </Link>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setIsVisible(false)}
              className="absolute right-4 p-1.5 text-gray-500 hover:text-gray-300 transition-colors duration-200"
              aria-label="Dismiss announcement"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
    </div>
  );
}
