'use client'

import Nav from "./components/nav";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { usePathname } from "next/navigation";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const isStudio = pathname?.startsWith('/studio');

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    name: "Common Grounds Coffee House",
    image: "https://common-grounds.vercel.app/images/og-image.jpg",
    url: "https://common-grounds.vercel.app",
    telephone: "+1-555-123-4567",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Main Street",
      addressLocality: "Your City",
      addressRegion: "Your State",
      postalCode: "12345",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 40.7128,
      longitude: -74.006,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "07:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "08:00",
        closes: "17:00",
      },
    ],
    servesCuisine: ["Coffee", "Pastries", "Sandwiches"],
    menu: "https://common-grounds.vercel.app/menu",
    sameAs: [
      "https://www.instagram.com/CommonGroundsCoffeeHouse",
    ],
  };

  return (
    <html lang="en">
      <head>
        <title>Common Grounds Coffee House – Coffee, Pastries & Community</title>
        <meta name="description" content="Common Grounds Coffee House is your cozy neighborhood spot for ethically sourced coffee, fresh-baked pastries, and a welcoming space to connect." />
        <meta name="keywords" content="coffee house, specialty coffee, Common Grounds Coffee House, espresso, latte, pastries, community cafe, coffee shop, ecuador, playa, cafe, desayuno" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://common-grounds.vercel.app" />
        <meta property="og:title" content="Common Grounds Coffee House – Coffee, Pastries & Community" />
        <meta property="og:description" content="Enjoy ethically sourced coffee, fresh pastries, and a cozy space to connect at Common Grounds Coffee House." />
        <meta property="og:image" content="https://common-grounds.vercel.app/images/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Common Grounds Coffee House interior with coffee and pastries" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Common Grounds Coffee House – Coffee, Pastries & Community" />
        <meta name="twitter:description" content="Sip, savor, and stay awhile at Common Grounds Coffee House – your local spot for great coffee and warm community." />
        <meta name="twitter:image" content="https://common-grounds.vercel.app/images/og-image.jpg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={poppins.className}>
        <main>
          {!isStudio && <Nav />}
          {children}
          <Analytics />
        </main>
      </body>
    </html>
  );
}