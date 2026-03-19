import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import ScrollProgress from "@/components/ScrollProgress";
import PageLoader from "@/components/PageLoader";
import JsonLd from "@/components/JsonLd";
import { ModalProvider } from "@/context/ModalContext";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://kapoortransport.in";

export const viewport: Viewport = {
  themeColor: "#495D6E",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Kapoor Transport – Industrial Logistics & Heavy Haulage India",
    template: "%s | Kapoor Transport",
  },
  description:
    "India's most trusted heavy transport & logistics company. 500+ fleet, 30+ years, 28 states. ODC cargo, industrial haulage, supply chain solutions.",
  keywords: [
    "heavy transport India",
    "ODC cargo logistics",
    "industrial haulage",
    "logistics company India",
    "heavy haulage",
    "supply chain solutions",
    "Kapoor Transport",
    "over dimensional cargo",
    "fleet logistics",
    "project cargo India",
  ],
  authors: [{ name: "Kapoor Transport", url: BASE_URL }],
  creator: "Kapoor Transport",
  publisher: "Kapoor Transport",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: "Kapoor Transport",
    title: "Kapoor Transport – Industrial Logistics & Heavy Haulage India",
    description:
      "India's most trusted heavy transport & logistics company. 500+ fleet, 30+ years, 28 states.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kapoor Transport – Driving Trust Across India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kapoor Transport – Industrial Logistics India",
    description:
      "India's most trusted heavy transport & logistics company. 500+ fleet, 30+ years, 28 states.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: BASE_URL,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <JsonLd />
      </head>
      <body className={`${inter.variable} font-sans`}>
        <a href="#main-content" className="skip-link">Skip to content</a>
        <ModalProvider>
          <PageLoader />
          <ScrollProgress />
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
          <WhatsAppFAB />
        </ModalProvider>
      </body>
    </html>
  );
}
