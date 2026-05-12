"use client";

import { InlineWidget } from "react-calendly";

const PLACEHOLDER_MARKER = "CALENDLY_URL_PLACEHOLDER";

type CreatorCalendlyEmbedProps = {
  url: string;
  height?: number;
  minHeight?: number;
};

export default function CreatorCalendlyEmbed({
  url,
  height = 700,
  minHeight = 600,
}: CreatorCalendlyEmbedProps) {
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
        styles={{ height: `${height}px`, minWidth: "320px" }}
        pageSettings={{
          backgroundColor: "ffffff",
          primaryColor: "d4a853",
          textColor: "0f172a",
          hideEventTypeDetails: false,
          hideLandingPageDetails: false,
        }}
      />
    </div>
  );
}
