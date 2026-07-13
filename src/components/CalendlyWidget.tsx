"use client";

import { useEffect, useRef } from "react";
import { withCalendlyTheme } from "./calendlyTheme";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (config: {
        url: string;
        parentElement: HTMLElement;
        prefill?: Record<string, string>;
        utm?: Record<string, string>;
        resize?: boolean;
      }) => void;
    };
  }
}

const SCRIPT_ID = "calendly-widget-script";
const DEFAULT_WIDGET_URL = "https://calendly.com/ben-naderaccountancy/new-meeting";

type CalendlyWidgetProps = {
  url?: string;
  minWidth?: number;
  height?: number;
  mobileHeight?: number;
};

export default function CalendlyWidget({
  url = DEFAULT_WIDGET_URL,
  minWidth = 320,
  height = 700,
}: CalendlyWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const themedUrl = withCalendlyTheme(url);

  useEffect(() => {
    const initWidget = () => {
      if (!window.Calendly || !containerRef.current) return;

      // Calendly expects the container to be empty before initializing
      containerRef.current.innerHTML = "";
      window.Calendly.initInlineWidget({
        url: themedUrl,
        parentElement: containerRef.current,
        // Let Calendly grow the iframe to fit its content (date -> time
        // list -> form), so the widget never scrolls internally.
        resize: true,
      });
    };

    const scriptAlreadyLoaded = document.getElementById(SCRIPT_ID);

    if (!scriptAlreadyLoaded) {
      const script = document.createElement("script");
      script.id = SCRIPT_ID;
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      script.onload = initWidget;
      document.body.appendChild(script);
    } else if (window.Calendly) {
      initWidget();
    } else {
      const handleLoad = () => initWidget();
      scriptAlreadyLoaded.addEventListener("load", handleLoad);
      return () => {
        scriptAlreadyLoaded.removeEventListener("load", handleLoad);
      };
    }

    // Refresh widget when component is unmounted to avoid duplicates
    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, [themedUrl]);

  return (
    <div
      ref={containerRef}
      className="calendly-inline-widget"
      data-url={themedUrl}
      data-resize="true"
      style={{ minWidth, height: "auto", minHeight: height }}
    />
  );
}


