import { SITE } from "@/data/site";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://kapoortransport.in";

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${BASE_URL}/#organization`,
        name: SITE.name,
        url: BASE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${BASE_URL}/logo.jpeg`,
          width: 200,
          height: 200,
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: SITE.phone,
          contactType: "customer service",
          areaServed: "IN",
          availableLanguage: ["English", "Hindi"],
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "Near G-4, Baleshwar Silverline, Opposite Baleshwar City, Hathijan Circle",
          addressLocality: "Ahmedabad",
          addressRegion: "Gujarat",
          postalCode: "382445",
          addressCountry: "IN",
        },
        sameAs: [`https://wa.me/${SITE.whatsapp}`],
        foundingDate: SITE.founded,
        description:
          "India's most trusted heavy transport & logistics company. 500+ fleet, 30+ years, 28 states.",
      },
      {
        "@type": "LocalBusiness",
        "@id": `${BASE_URL}/#localbusiness`,
        name: SITE.name,
        image: `${BASE_URL}/logo.jpeg`,
        url: BASE_URL,
        telephone: SITE.phone,
        email: SITE.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: "Near G-4, Baleshwar Silverline, Opposite Baleshwar City, Hathijan Circle",
          addressLocality: "Ahmedabad",
          addressRegion: "Gujarat",
          postalCode: "382445",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 22.9784,
          longitude: 72.6446,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "08:00",
            closes: "20:00",
          },
        ],
        priceRange: "$$",
      },
      {
        "@type": "WebSite",
        "@id": `${BASE_URL}/#website`,
        url: BASE_URL,
        name: SITE.name,
        publisher: { "@id": `${BASE_URL}/#organization` },
        potentialAction: {
          "@type": "SearchAction",
          target: { "@type": "EntryPoint", urlTemplate: `${BASE_URL}/services?q={search_term_string}` },
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
