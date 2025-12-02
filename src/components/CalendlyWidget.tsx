"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (config: {
        url: string;
        parentElement: HTMLElement;
        prefill?: Record<string, string>;
        utm?: Record<string, string>;
      }) => void;
    };
  }
}

const SCRIPT_ID = "calendly-widget-script";
const WIDGET_URL = "https://calendly.com/ben-naderaccountancy/new-meeting";

export default function CalendlyWidget() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initWidget = () => {
      if (!window.Calendly || !containerRef.current) return;

      // Calendly expects the container to be empty before initializing
      containerRef.current.innerHTML = "";
      window.Calendly.initInlineWidget({
        url: WIDGET_URL,
        parentElement: containerRef.current,
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
  }, []);

  return (
    <div
      ref={containerRef}
      className="calendly-inline-widget"
      data-url={WIDGET_URL}
      style={{ minWidth: 320, height: 700 }}
    />
  );
}

