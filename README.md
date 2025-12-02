# Real Estate Tax Strategist CPA Website

A premium, modern marketing website built with Next.js 16, TypeScript, and Tailwind CSS for a real estate tax strategist CPA.

## Features

- **Responsive Design**: Mobile-first layout that works beautifully on all devices
- **Modern UI**: Deep navy, white, and muted gold color scheme with clean typography
- **SEO Optimized**: Meta tags, Open Graph, and semantic HTML throughout
- **Conversion Focused**: Strategic CTAs, trust badges, testimonials, and clear pricing
- **Accessible**: Proper heading structure, contrast ratios, and keyboard navigation

## Pages

1. **Home** - Hero section, client types, three pillars, how it works, credentials, testimonials
2. **Services** - Pricing cards (Essentials, Growth, Elite), FAQ section
3. **About** - Bio, credentials, headshot placeholder, personal story
4. **Contact** - Contact form with validation, Calendly placeholder, FAQ

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

```bash
# Clone or download the project
cd ben-nader-cpa

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm start
```

## Customization Guide

### 🔤 Update Your Name

Search and replace the following placeholders throughout the project:

| Placeholder | Replace With | Files |
|-------------|--------------|-------|
| `Your Name, CPA` | Your actual name | `Navbar.tsx`, `Footer.tsx`, `layout.tsx`, all pages |
| `YN` | Your initials | `Navbar.tsx`, `Footer.tsx`, `favicon.svg`, `og-image.svg` |
| `hello@yourname.com` | Your email | `Footer.tsx`, `contact/page.tsx` |
| `(555) 123-4567` | Your phone | `Footer.tsx` |

### 💰 Update Pricing

Edit the `pricingPlans` array in `src/app/services/page.tsx`:

```typescript
const pricingPlans = [
  {
    id: "essentials",
    name: "Essentials",
    price: "$200",  // CHANGE THIS
    description: "...",
    features: [...],
  },
  // ... more plans
];
```

### 📅 Add Calendly

1. Get your Calendly embed code or link
2. Update `CONTACT_CONFIG.calendlyUrl` in `src/app/contact/page.tsx`
3. Optionally embed the Calendly widget inline by replacing the placeholder div

### 🖼️ Add Your Headshot

1. Add your headshot image to `/public/headshot.jpg`
2. Update `src/app/about/page.tsx` to use the image instead of the placeholder

### 🎨 Customize Colors

Edit CSS variables in `src/app/globals.css`:

```css
:root {
  --color-navy-deep: #0f172a;    /* Primary dark */
  --color-navy: #1e293b;          /* Secondary dark */
  --color-gold: #d4a853;          /* Accent color */
  --color-gold-light: #e8c879;    /* Light accent */
}
```

### 📊 Add Analytics

Uncomment and configure the analytics section in `src/app/layout.tsx`:

```typescript
// Add your Google Analytics ID
<Script src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID" />
```

### 💬 Add Real Testimonials

Edit the `testimonials` array in `src/components/Testimonials.tsx`:

```typescript
const testimonials = [
  {
    quote: "Your client's testimonial...",
    author: "Client Name",
    role: "Their Role",
    properties: "X Properties",
  },
  // ... more testimonials
];
```

### 📝 Update SEO

Edit metadata in `src/app/layout.tsx` and individual page files:

```typescript
export const metadata: Metadata = {
  title: "Your Name, CPA | Real Estate Tax Strategy",
  description: "Your custom description...",
  metadataBase: new URL("https://yourdomain.com"),
  // ... more metadata
};
```

## File Structure

```
ben-nader-cpa/
├── public/
│   ├── favicon.svg          # Site favicon (update initials)
│   └── og-image.svg         # Open Graph image (update name)
├── src/
│   ├── app/
│   │   ├── globals.css      # Global styles & CSS variables
│   │   ├── layout.tsx       # Root layout with SEO
│   │   ├── page.tsx         # Home page
│   │   ├── services/
│   │   │   └── page.tsx     # Services & pricing
│   │   ├── about/
│   │   │   └── page.tsx     # About page
│   │   └── contact/
│   │       └── page.tsx     # Contact page
│   └── components/
│       ├── index.ts         # Component exports
│       ├── Navbar.tsx       # Navigation
│       ├── Footer.tsx       # Footer
│       ├── Hero.tsx         # Hero section
│       ├── WhoIServe.tsx    # Client types section
│       ├── ThreePillars.tsx # Value props section
│       ├── HowItWorks.tsx   # Process timeline
│       ├── TrustBadges.tsx  # Credentials section
│       ├── Testimonials.tsx # Social proof
│       ├── CTAStrip.tsx     # CTA sections
│       ├── PricingCard.tsx  # Pricing card component
│       └── ContactForm.tsx  # Contact form
├── package.json
├── tailwind.config.ts
└── README.md
```

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import to Vercel
3. Deploy automatically

### Other Platforms

Build the static export:

```bash
npm run build
```

Deploy the `.next` folder to your hosting provider.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Font**: Plus Jakarta Sans
- **Animations**: CSS animations & transitions

## License

This project is for personal/commercial use. Customize and deploy as your own.

---

**Need help?** The code includes extensive comments marked with `CHANGE THIS` to guide customization.
