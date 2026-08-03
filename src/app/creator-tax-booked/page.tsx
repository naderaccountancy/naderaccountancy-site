import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Creator Tax Consultation Booked",
  description:
    "Your creator tax consultation with Nader Accountancy has been booked.",
};

export default function CreatorTaxBookedPage() {
  return (
    <main className="relative flex min-h-[calc(100vh-5rem)] items-center overflow-hidden bg-gradient-navy px-4 pb-20 pt-32 sm:px-6 sm:pb-24 sm:pt-36 lg:px-8">
      <div className="pattern-bg absolute inset-0 opacity-40" aria-hidden="true" />
      <div
        className="absolute right-0 top-20 h-72 w-72 rounded-full bg-[var(--color-gold)]/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[var(--color-gold)]/5 blur-3xl"
        aria-hidden="true"
      />

      <section className="relative mx-auto w-full max-w-3xl rounded-2xl border border-white/10 bg-white px-6 py-12 text-center shadow-2xl sm:px-10 sm:py-16">
        <div
          className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-gold)]/15 text-[var(--color-gold-dark)] sm:h-16 sm:w-16"
          aria-hidden="true"
        >
          <svg
            className="h-7 w-7 sm:h-8 sm:w-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M5 13l4 4L19 7"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
            />
          </svg>
        </div>

        <h1 className="mt-6 text-3xl font-bold tracking-tight text-[var(--color-navy-deep)] sm:text-4xl lg:text-5xl">
          Your Creator Tax Consultation Is Booked
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
          You’ll receive a calendar invitation and meeting details by email. We
          look forward to speaking with you.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 font-semibold text-[var(--color-gold-dark)] transition-colors hover:text-[var(--color-navy-deep)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)] focus-visible:ring-offset-4"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              d="M15 19l-7-7 7-7"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
            />
          </svg>
          Return to Nader Accountancy
        </Link>
      </section>
    </main>
  );
}
