import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar, Footer } from "@/components";

const GTM_ID = "GTM-T5LTVRHC";

// ⚠️ MAINTENANCE MODE - Set to true to hide the site
const MAINTENANCE_MODE = false;

/* ===========================================
   ROOT LAYOUT
   
   Main layout wrapper for all pages
   =========================================== */

// Font configuration
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: {
    default: "Tax Services & Planning | Nader Accountancy",
    template: "%s | Nader Accountancy",
  },
  description: "Expert CPA services for individuals and businesses. Tax return preparation starting at $1,000 or year-round tax planning starting at $400/month.",
  keywords: [
    "tax services",
    "tax preparation",
    "CPA services",
    "tax planning",
    "accountant",
    "tax return preparation",
    "year-round tax planning",
    "small business taxes",
    "individual tax returns",
  ],
  authors: [{ name: "Ben Nader, CPA" }],
  creator: "Nader Accountancy",
  metadataBase: new URL("https://naderaccountancy.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://naderaccountancy.com",
    siteName: "Nader Accountancy",
    title: "Tax Services & Planning | Nader Accountancy",
    description: "Expert CPA services for individuals and businesses. Tax return preparation or year-round tax planning tailored to your needs.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nader Accountancy - Tax Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tax Services & Planning | Nader Accountancy",
    description: "Expert CPA services for individuals and businesses. Tax return preparation or year-round tax planning tailored to your needs.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: !MAINTENANCE_MODE,
    follow: !MAINTENANCE_MODE,
    googleBot: {
      index: !MAINTENANCE_MODE,
      follow: !MAINTENANCE_MODE,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Tag Manager - Head Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `,
          }}
        />

        {/* Preconnect to external resources for better performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#0f172a" />
      </head>
      <body className={`${plusJakartaSans.variable} font-sans antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {MAINTENANCE_MODE ? (
          /* ========== MAINTENANCE MODE PAGE ========== */
          <div className="min-h-screen bg-gradient-to-br from-[#0a1628] via-[#0f172a] to-[#1e293b] flex items-center justify-center p-6">
            <div className="text-center max-w-lg">
              {/* Logo/Brand */}
              <div className="mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#d4af37] to-[#b8962d] mb-6">
                  <svg className="w-10 h-10 text-[#0f172a]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  Nader Accountancy
                </h1>
              </div>
              
              {/* Message */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
                <h2 className="text-xl md:text-2xl font-semibold text-[#d4af37] mb-4">
                  Coming Soon
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  We&apos;re working on something exciting. Our website will be back online shortly.
                </p>
              </div>
              
              {/* Contact info */}
              <p className="text-gray-400 text-sm">
                Questions? Reach out at{" "}
                <a 
                  href="mailto:ben@naderaccountancy.com" 
                  className="text-[#d4af37] hover:text-[#e5c44a] transition-colors"
                >
                  ben@naderaccountancy.com
                </a>
              </p>
            </div>
          </div>
        ) : (
          /* ========== NORMAL SITE ========== */
          <>
            {/* Skip to main content for accessibility */}
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[var(--color-gold)] focus:text-[var(--color-navy-deep)] focus:rounded-lg focus:font-medium"
            >
              Skip to main content
            </a>

            {/* Navigation */}
            <Navbar />

            {/* Main Content */}
            <div id="main-content">
              {children}
            </div>

            {/* Footer */}
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
