import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Navbar, Footer, AnnouncementBar } from "@/components";

const GTM_ID = "GTM-T5LTVRHC";

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
    default: "Content Creator Tax Services & Accounting | Nader Accountancy",
    template: "%s | Nader Accountancy",
  },
  description: "Specialized tax services and accounting for content creators, YouTubers, influencers, and streamers. Expert CPA helping creators save thousands on taxes with S-corp strategies, bookkeeping, and year-round tax planning.",
  keywords: [
    "content creator tax services",
    "content creator accountant",
    "content creator CPA",
    "YouTuber tax services",
    "influencer accountant",
    "influencer tax help",
    "streamer tax services",
    "TikTok creator taxes",
    "social media influencer accountant",
    "creator economy CPA",
    "YouTube AdSense taxes",
    "content creator bookkeeping",
    "S-corp for content creators",
    "influencer tax deductions",
    "creator tax planning",
    "online entrepreneur accountant",
  ],
  authors: [{ name: "Ben Nader, CPA" }],
  creator: "Nader Accountancy",
  metadataBase: new URL("https://naderaccountancy.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://naderaccountancy.com",
    siteName: "Nader Accountancy",
    title: "Content Creator Tax Services & Accounting | Nader Accountancy",
    description: "Expert CPA specializing in content creators, YouTubers, and influencers. Save thousands on taxes with creator-focused tax strategy and bookkeeping.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nader Accountancy - Content Creator Tax Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Content Creator Tax Services & Accounting | Nader Accountancy",
    description: "Expert CPA specializing in content creators, YouTubers, and influencers. Save thousands on taxes with creator-focused tax strategy.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
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
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `}
        </Script>

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

        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[var(--color-gold)] focus:text-[var(--color-navy-deep)] focus:rounded-lg focus:font-medium"
        >
          Skip to main content
        </a>

        {/* Announcement Bar */}
        <AnnouncementBar />

        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <div id="main-content">
          {children}
        </div>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
