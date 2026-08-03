import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Privacy Policy | Nader Accountancy",
  },
  description:
    "Learn how Nader Accountancy collects, uses, and protects information submitted through its website, assessments, and scheduling tools.",
};

const sectionHeadingClasses =
  "text-xl font-bold text-[var(--color-navy-deep)] sm:text-2xl";
const paragraphClasses = "mt-4 leading-7 text-gray-600";
const listClasses =
  "mt-4 list-disc space-y-2.5 pl-5 leading-7 text-gray-600 marker:text-[var(--color-gold-dark)]";

export default function PrivacyPage() {
  return (
    <main className="bg-[var(--color-gray-50)] px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:px-8">
      <div className="mx-auto max-w-4xl rounded-2xl border border-gray-200 bg-white px-6 py-10 shadow-sm sm:px-10 sm:py-14 lg:px-14">
        <header className="border-b border-gray-200 pb-8 sm:pb-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-gold-dark)]">
            Nader Accountancy
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-[var(--color-navy-deep)] sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">
            Effective Date: August 2, 2026
          </p>
        </header>

        <article className="mx-auto mt-10 max-w-3xl space-y-10 sm:mt-12 sm:space-y-12">
          <section>
            <h2 className={sectionHeadingClasses}>Introduction</h2>
            <p className={paragraphClasses}>
              Nader Accountancy respects your privacy. This Privacy Policy
              explains how we collect, use, and disclose information when you
              visit our website, complete the Creator Tax Risk Score, schedule
              an appointment, contact us, or use our accounting, tax-planning,
              and related services.
            </p>
          </section>

          <section>
            <h2 className={sectionHeadingClasses}>Information We Collect</h2>
            <p className={paragraphClasses}>
              Depending on how you interact with us, we may collect:
            </p>
            <ul className={listClasses}>
              <li>
                Your name, email address, and other contact information.
              </li>
              <li>
                Your Creator Tax Risk Score answers, score, and assessment
                results.
              </li>
              <li>
                Appointment information, your estimated revenue range, and any
                optional notes you submit through Calendly.
              </li>
              <li>
                Messages you submit through website forms or send to us by
                email.
              </li>
              <li>
                Technical information such as your device, browser, IP
                address, referring page, and website activity collected through
                cookies or similar technologies.
              </li>
            </ul>
          </section>

          <section>
            <h2 className={sectionHeadingClasses}>How We Use Information</h2>
            <p className={paragraphClasses}>We may use information to:</p>
            <ul className={listClasses}>
              <li>Deliver your assessment results.</li>
              <li>Respond to questions, requests, and other inquiries.</li>
              <li>Schedule and conduct consultations.</li>
              <li>
                Provide accounting, tax-planning, and related professional
                services.
              </li>
              <li>
                Send optional educational or marketing emails when you have
                consented to receive them.
              </li>
              <li>
                Measure and improve our website, communications, and
                advertising.
              </li>
              <li>
                Protect the website, prevent misuse, and comply with legal and
                professional obligations.
              </li>
            </ul>
          </section>

          <section>
            <h2 className={sectionHeadingClasses}>
              Service Providers and Disclosures
            </h2>
            <p className={paragraphClasses}>
              We may disclose information to or have it processed by service
              providers that support our website and business. These providers
              may include ScoreApp for assessments, Calendly for appointment
              scheduling, website hosting services, email providers, and Google
              analytics or advertising tools. They may process information
              under their own terms and privacy policies and are permitted to
              use it as allowed by their agreements with us and applicable law.
            </p>
            <p className={paragraphClasses}>
              We may also disclose information when we reasonably believe it is
              required by law, legal process, or a government request; to
              protect rights, safety, or property; or as part of a legitimate
              merger, acquisition, financing, reorganization, or other business
              transfer.
            </p>
          </section>

          <section>
            <h2 className={sectionHeadingClasses}>
              Selling or Sharing Personal Information
            </h2>
            <p className={paragraphClasses}>
              Nader Accountancy does not sell personal information in exchange
              for money. Some analytics or advertising technologies may,
              however, be considered a sale or &ldquo;sharing&rdquo; of
              personal information under certain privacy laws because they
              support cross-context behavioral advertising or similar
              activities.
            </p>
          </section>

          <section>
            <h2 className={sectionHeadingClasses}>Cookies and Analytics</h2>
            <p className={paragraphClasses}>
              We and our service providers may use cookies and similar
              technologies for essential website functions, analytics, and
              advertising measurement. These technologies can help remember
              settings, understand how visitors use the site, and measure the
              effectiveness of campaigns.
            </p>
            <p className={paragraphClasses}>
              You can manage or block cookies through your browser settings.
              You may also use opt-out tools made available by applicable
              analytics or advertising providers. Blocking some cookies may
              affect how parts of the website function.
            </p>
          </section>

          <section>
            <h2 className={sectionHeadingClasses}>Data Retention</h2>
            <p className={paragraphClasses}>
              We retain information only for as long as reasonably necessary
              for the purposes described in this policy, our legitimate
              business needs, and applicable legal or professional obligations.
              Retention periods vary based on the type of information and why
              it was collected.
            </p>
          </section>

          <section>
            <h2 className={sectionHeadingClasses}>
              Your Choices and Privacy Rights
            </h2>
            <p className={paragraphClasses}>
              Depending on your location and governing law, you may have the
              right to request access to, correction of, or deletion of certain
              personal information. You may also withdraw your consent to
              marketing or unsubscribe using the link in a marketing email.
            </p>
            <p className={paragraphClasses}>
              To make a privacy request, email{" "}
              <a
                href="mailto:ben@naderaccountancy.com"
                className="font-semibold text-[var(--color-gold-dark)] underline decoration-[var(--color-gold)]/50 underline-offset-4 transition-colors hover:text-[var(--color-navy-deep)]"
              >
                ben@naderaccountancy.com
              </a>
              . We may need to verify your identity before completing a
              request. The rights available to you and any exceptions depend on
              your location and applicable law.
            </p>
          </section>

          <section>
            <h2 className={sectionHeadingClasses}>Data Security</h2>
            <p className={paragraphClasses}>
              We use reasonable administrative, technical, and physical
              safeguards designed to protect personal information. However, no
              internet transmission or storage system can be guaranteed to be
              completely secure.
            </p>
          </section>

          <section>
            <h2 className={sectionHeadingClasses}>Children&apos;s Privacy</h2>
            <p className={paragraphClasses}>
              Our website and assessment are not directed to children under 13,
              and we do not knowingly collect personal information from
              children under 13. If you believe a child under 13 has provided
              personal information to us, please contact us so we can review
              and address the situation.
            </p>
          </section>

          <section>
            <h2 className={sectionHeadingClasses}>Third-Party Websites</h2>
            <p className={paragraphClasses}>
              Our website may link to external websites or services. Nader
              Accountancy does not control and is not responsible for the
              privacy practices, content, or security of those third parties.
              Review their privacy policies before providing information.
            </p>
          </section>

          <section>
            <h2 className={sectionHeadingClasses}>Changes to This Policy</h2>
            <p className={paragraphClasses}>
              We may update this Privacy Policy from time to time. When we do,
              we will post the revised policy on this page and update the
              effective date above. Your continued use of the website after an
              update is subject to the revised policy.
            </p>
          </section>

          <section>
            <h2 className={sectionHeadingClasses}>Contact Us</h2>
            <p className={paragraphClasses}>
              If you have questions about this Privacy Policy or our privacy
              practices, contact:
            </p>
            <address className="mt-4 not-italic leading-7 text-gray-600">
              <p className="font-semibold text-[var(--color-navy-deep)]">
                Nader Accountancy
              </p>
              <p>
                <a
                  href="mailto:ben@naderaccountancy.com"
                  className="text-[var(--color-gold-dark)] underline decoration-[var(--color-gold)]/50 underline-offset-4 transition-colors hover:text-[var(--color-navy-deep)]"
                >
                  ben@naderaccountancy.com
                </a>
              </p>
              <p>
                <a
                  href="https://www.naderaccountancy.com"
                  className="text-[var(--color-gold-dark)] underline decoration-[var(--color-gold)]/50 underline-offset-4 transition-colors hover:text-[var(--color-navy-deep)]"
                >
                  www.naderaccountancy.com
                </a>
              </p>
            </address>
          </section>
        </article>
      </div>
    </main>
  );
}
