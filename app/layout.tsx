// 'use client'

import HeaderWrapper from "./components/Header/HeaderWrapper";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
// import { usePathname } from "next/navigation";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    name: "Common Grounds Coffee House",
    image: "https://common-grounds.vercel.app/images/og-image.jpg",
    url: "https://common-grounds.vercel.app",
    telephone: "+593964213147",
    priceRange: "$$",
  
    geo: {
      "@type": "GeoCoordinates",
      latitude: -2.20543888,
      longitude: -80.9616754,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Friday",
        ],
        opens: "08:00",
        closes: "13:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Thursday","Saturday", "Sunday"],
        opens: "08:00",
        closes: "14:00",
      },
    ],
    servesCuisine: ["Coffee", "Bolon","Smoothie", "Sandwiches"],
    menu: "https://common-grounds.vercel.app/menu",
    sameAs: [
      "https://www.instagram.com/CommonGroundsCoffeeHouse",
    ],
  };

  return (
    <html lang="es">
      <head>
        <title>Common Grounds Coffee House </title>
        <meta name="description" content="Common Grounds Coffee House is a cozy breakfast/brunch café offering a mix of Ecuadorian and American-style dishes." />
        <meta name="keywords" content="coffee house, specialty coffee, Common Grounds Coffee House, espresso, latte, pastries, community cafe, coffee shop, ecuador, playa, cafe, desayuno" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://common-grounds.vercel.app" />
        <meta property="og:title" content="Common Grounds Coffee House – Coffee, Pastries & Community" />
        <meta property="og:description" content="A cozy breakfast/brunch café offering a mix of Ecuadorian and American-style dishes." />
        <meta property="og:image" content="https://common-grounds.vercel.app/images/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Common Grounds Coffee House " />
        {/* <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Common Grounds Coffee House – Coffee, Pastries & Community" />
        <meta name="twitter:description" content="Sip, savor, and stay awhile at Common Grounds Coffee House – your local spot for great coffee and warm community." />
        <meta name="twitter:image" content="https://common-grounds.vercel.app/images/og-image.jpg" /> */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={poppins.className}>
        <main>
          <HeaderWrapper/>
          {children}
          <Analytics />
        </main>
      </body>
    </html>
  );
}