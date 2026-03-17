import HeaderWrapper from "./components/Header/HeaderWrapper";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap", 
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  name: "Common Grounds Coffee House",
  image: "https://common-grounds.vercel.app/images/og-image.jpg",
  url: "https://common-grounds.vercel.app",
  priceRange: "$$",
  geo: {
    "@type": "GeoCoordinates",
    latitude: -2.20543888,
    longitude: -80.9616754,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Friday"],
      opens: "08:00",
      closes: "13:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Thursday", "Saturday", "Sunday"],
      opens: "08:00",
      closes: "14:00",
    },
  ],
  servesCuisine: ["Coffee", "Bolon", "Smoothie", "Sandwiches", "Ecuadorian Breakfast", "American Breakfast", "Breakfast"],
  menu: "https://common-grounds.vercel.app/menu",
  sameAs: ["https://www.instagram.com/CommonGroundsCoffeeHouse"],
};

// Next.js generates all <head> tags from this — no manual <head> needed
export const metadata: Metadata = {
  title: "Common Grounds Coffee House",
  description: "Common Grounds Coffee House is a cozy breakfast and brunch café offering a mix of Ecuadorian and American-style dishes.",
  keywords: ["coffee house", "specialty coffee", "Common Grounds Coffee House", "espresso", "latte", "pastries", "community cafe", "coffee shop", "ecuador", "playa", "cafe", "desayuno"],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    url: "https://common-grounds.vercel.app",
    title: "Common Grounds Coffee House – Coffee, Pastries & Community",
    description: "A cozy breakfast/brunch café offering a mix of Ecuadorian and American-style dishes.",
    images: [
      {
        url: "https://common-grounds.vercel.app/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Common Grounds Coffee House",
      },
    ],
  },
  // Uncomment when ready to add Twitter/X card
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Common Grounds Coffee House – Coffee, Pastries & Community",
  //   description: "Sip, savor, and stay awhile at Common Grounds Coffee House.",
  //   images: ["https://common-grounds.vercel.app/images/og-image.jpg"],
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-EC">
      <body className={poppins.className}>
        <HeaderWrapper />
        <main>{children}</main>
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}