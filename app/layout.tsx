import type { Metadata } from "next";
import Nav from "./components/nav";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Common Grounds Coffee House – Coffee, Pastries & Community",
  description:
    "Common Grounds Coffee House is your cozy neighborhood spot for ethically sourced coffee, fresh-baked pastries, and a welcoming space to connect.",
  keywords: [
    "coffee house",
    "specialty coffee",
    "Common Grounds Coffee House",
    "espresso",
    "latte",
    "pastries",
    "community cafe",
    "coffee shop",
  ],
  authors: [{ name: "Common Grounds Coffee House" }],
  openGraph: {
    type: "website",
    url: "https://common-grounds.vercel.app",
    title: "Common Grounds Coffee House – Coffee, Pastries & Community",
    description:
      "Enjoy ethically sourced coffee, fresh pastries, and a cozy space to connect at Common Grounds Coffee House.",
    images: [
      {
        url: "https://common-grounds.vercel.app/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Common Grounds Coffee House interior with coffee and pastries",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Common Grounds Coffee House – Coffee, Pastries & Community",
    description:
      "Sip, savor, and stay awhile at Common Grounds Coffee House – your local spot for great coffee and warm community.",
    images: ["https://common-grounds.vercel.app/images/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  metadataBase: new URL("https://common-grounds.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
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
      "https://www.facebook.com/CommonGroundsCoffeeHouse",
      "https://www.instagram.com/CommonGroundsCoffeeHouse",
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={poppins.className}>
        <main>
          <Nav />
          {children}
          <Analytics />
        </main>
      </body>
    </html>
  );
}
