# Kapoor Transport — Premium Industrial Logistics Website

Enterprise-grade logistics website for Kapoor Transport, India's most trusted heavy haulage company.

## Tech Stack

- **Next.js 16** — App Router, SSR, API routes
- **Tailwind CSS v4** — Utility-first styling
- **Framer Motion** — Animations and transitions
- **MongoDB + Mongoose** — Lead capture and storage
- **Nodemailer** — Email notifications via Gmail SMTP
- **Lucide React** — Consistent icon system
- **TypeScript** — Full type safety

## Features

- Premium enterprise UI with custom design system
- Contact form with MongoDB lead storage + email notifications
- WhatsApp integration (FAB + CTA buttons)
- Fully responsive (mobile-first)
- SEO optimized — sitemap, robots.txt, JSON-LD, OpenGraph
- Service pages with dynamic routing (`/services/[slug]`)
- Scroll progress indicator, page loader, smooth animations

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage — Hero, Stats, Services, Industries, Testimonials |
| `/about` | Company story, values, timeline, infrastructure |
| `/services` | All services overview with methodology |
| `/services/[slug]` | Individual service detail pages |
| `/fleet` | Fleet showcase with filtering |
| `/clients` | Case studies and client logos |
| `/contact` | Full contact form + map |

## Setup

### 1. Install dependencies
```bash
npm install
```

### 2. Configure environment variables
Copy `.env.local.example` to `.env.local` and fill in your values:
```bash
cp .env.local.example .env.local
```

Required variables:
```
MONGODB_URI=mongodb+srv://...
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-gmail@gmail.com
SMTP_PASS=your-app-password
LEAD_EMAIL=leads@kapoortransport.in
NEXT_PUBLIC_BASE_URL=https://kapoortransport.in
```

### 3. Run development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 4. Build for production
```bash
npm run build
npm start
```

## Deployment (Vercel)

1. Push to GitHub
2. Import repo at [vercel.com/new](https://vercel.com/new)
3. Add all environment variables from `.env.local`
4. Deploy — Vercel auto-detects Next.js

## Project Structure

```
src/
├── app/                  # Next.js App Router pages + API
│   ├── api/contact/      # Contact form API route
│   ├── about/
│   ├── services/[slug]/
│   ├── fleet/
│   ├── clients/
│   └── contact/
├── components/
│   ├── sections/         # Page sections (Hero, Stats, etc.)
│   ├── service-page/     # Service detail page components
│   └── ui/               # Design system components
├── context/              # React context (Modal)
├── data/                 # Site config and services data
├── hooks/                # Custom hooks
└── lib/                  # MongoDB, mailer, utils
```
