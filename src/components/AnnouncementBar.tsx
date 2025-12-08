"use client";

import { useState, useRef, useLayoutEffect, useEffect } from "react";
import Link from "next/link";

/* ===========================================
   ANNOUNCEMENT BAR COMPONENT
   
   Free Tax Savings Analysis announcement bar
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
      {/* Main Bar with gold gradient background */}
      <div className="relative bg-gradient-to-r from-[var(--color-gold-dark)] via-[var(--color-gold)] to-[var(--color-gold-dark)]">
        {/* Subtle shimmer overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_25%,rgba(255,255,255,0.15)_50%,transparent_75%)] bg-[length:200%_100%]" />
        {/* Bottom shadow for depth */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-[var(--color-gold-dark)]/50" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center py-3 sm:py-3.5 relative">
            <div className="flex flex-col sm:flex-row items-center sm:items-center justify-center gap-3 sm:gap-5 text-center sm:text-left w-full sm:w-auto mr-8">
              <div className="flex items-center gap-2 sm:gap-2.5">
                {/* Minimalist navy diamond icon */}
                <span className="flex-shrink-0 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[var(--color-navy-deep)] rotate-45" />
                
                {/* Announcement Text */}
                <p className="text-sm sm:text-[15px] text-[var(--color-navy-deep)] tracking-wide font-medium leading-[1.55]">
                  <span className="font-bold">Free for Creators:</span>
                  <span className="mx-1.5 sm:mx-2 text-[var(--color-navy-deep)]/30">|</span>
                  <span>
                    Complimentary Tax Savings Analysis
                  </span>
                  <span className="hidden md:inline text-[var(--color-navy-deep)]/70 font-semibold ml-1">— Discover How Much You Could Save</span>
                </p>
              </div>

              {/* CTA Button - navy on gold */}
              <Link
                href="/claim-offer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-1.5 w-full sm:w-auto border-2 border-[var(--color-navy-deep)] text-[var(--color-navy-deep)] text-sm font-bold tracking-wide rounded-lg bg-transparent transition-all duration-300 hover:bg-[var(--color-navy-deep)] hover:text-[var(--color-gold)] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-navy-deep)]/40"
                data-gtm="announcement-get-yours-free"
              >
                <span>Get Yours Free</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l6 7-6 7" />
                </svg>
              </Link>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setIsVisible(false)}
              className="absolute right-4 p-1.5 text-[var(--color-navy-deep)]/60 hover:text-[var(--color-navy-deep)] transition-colors duration-200"
              aria-label="Dismiss announcement"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
    </div>
  );
}
