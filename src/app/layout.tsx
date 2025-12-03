import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar, Footer, AnnouncementBar } from "@/components";

/* ===========================================
   ROOT LAYOUT
   
   Main layout wrapper for all pages
   
   To customize:
   - Update metadata below with your information
   - Change font if desired
   =========================================== */

// Font configuration - CHANGE THIS if you want a different font
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  // Site title template - individual pages can override
  title: {
    default: "Nader Accountancy | Real Estate Tax Strategy",
    template: "%s | Nader Accountancy",
  },
  description: "Proactive real estate tax planning and strategy for investors and high-income professionals. Licensed CPA with specialized expertise in real estate taxation.",
  keywords: [
    "real estate tax",
    "CPA",
    "tax strategy",
    "real estate investor",
    "tax planning",
    "cost segregation",
    "1031 exchange",
    "depreciation",
    "rental property tax",
    "S-corp tax",
  ],
  authors: [{ name: "Ben Nader, CPA" }],
  creator: "Nader Accountancy",
  metadataBase: new URL("https://naderaccountancy.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://naderaccountancy.com",
    siteName: "Nader Accountancy",
    title: "Nader Accountancy | Real Estate Tax Strategy",
    description: "Proactive real estate tax planning and strategy for investors and high-income professionals.",
    images: [
      {
        url: "/og-image.jpg", // Add this image to /public folder
        width: 1200,
        height: 630,
        alt: "Nader Accountancy - Real Estate Tax Strategy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nader Accountancy | Real Estate Tax Strategy",
    description: "Proactive real estate tax planning and strategy for investors and high-income professionals.",
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
  // CHANGE THIS: Add your verification codes
  // verification: {
  //   google: "your-google-verification-code",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preconnect to external resources for better performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon - CHANGE THIS: Add your favicon to /public */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#0f172a" />
      </head>
      <body className={`${plusJakartaSans.variable} font-sans antialiased`}>
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

        {/* 
          OPTIONAL: Add analytics scripts here
          Example for Google Analytics:
          <Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" strategy="afterInteractive" />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `}
          </Script>
        */}
      </body>
    </html>
  );
}
