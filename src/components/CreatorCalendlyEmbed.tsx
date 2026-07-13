"use client";

import { useEffect, useState } from "react";
import { InlineWidget } from "react-calendly";
import { CALENDLY_PAGE_SETTINGS } from "./calendlyTheme";

const PLACEHOLDER_MARKER = "CALENDLY_URL_PLACEHOLDER";

type CreatorCalendlyEmbedProps = {
  url: string;
  height?: number;
  mobileHeight?: number;
  minHeight?: number;
};

export default function CreatorCalendlyEmbed({
  url,
  height = 700,
  mobileHeight = 1100,
  minHeight = 600,
}: CreatorCalendlyEmbedProps) {
  // On mobile the Calendly booking UI stacks vertically and is taller than the
  // default height, which produces an internal scrollbar. Use a taller height
  // on small screens so the whole widget fits and the page scrolls naturally.
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  const effectiveHeight = isMobile ? mobileHeight : height;

  const trimmedUrl = url.trim();
  const isPlaceholder =
    !trimmedUrl || trimmedUrl.includes(PLACEHOLDER_MARKER);

  if (isPlaceholder) {
    return (
      <div
        className="w-full rounded-2xl border-2 border-dashed border-[var(--color-gold)]/50 bg-[var(--color-gray-50)] flex items-center justify-center p-8 text-center"
        style={{ minHeight }}
        role="status"
      >
        <div className="max-w-md">
          <p className="text-sm font-semibold text-[var(--color-navy-deep)] mb-2">
            Calendly widget placeholder
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            Replace the CALENDLY_URL constant at the top of this page with the
            live Calendly link to load the inline booking widget here.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <InlineWidget
        url={trimmedUrl}
        styles={{ height: `${effectiveHeight}px`, minWidth: "320px" }}
        pageSettings={CALENDLY_PAGE_SETTINGS}
      />
    </div>
  );
}
