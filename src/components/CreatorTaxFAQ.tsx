"use client";

import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

type CreatorTaxFAQProps = {
  items: FaqItem[];
};

export default function CreatorTaxFAQ({ items }: CreatorTaxFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3 max-w-3xl mx-auto">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;

        return (
          <div
            key={item.question}
            className="rounded-xl bg-white border border-gray-100 shadow-sm overflow-hidden"
          >
            <button
              id={buttonId}
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 sm:py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)] focus-visible:ring-offset-2 rounded-xl"
            >
              <span className="text-base sm:text-lg font-semibold text-[var(--color-navy-deep)] pr-2">
                {item.question}
              </span>
              <span
                className={`flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-gray-50)] flex items-center justify-center text-[var(--color-navy-deep)] transition-transform duration-300 ${
                  isOpen ? "rotate-45" : "rotate-0"
                }`}
                aria-hidden="true"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </span>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="px-5 sm:px-6 pb-5 sm:pb-6 text-gray-700 leading-relaxed text-sm sm:text-base"
            >
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
