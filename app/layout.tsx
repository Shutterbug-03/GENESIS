import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { StructuredData } from "@/components/structured-data";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vcusgenesis.com"),
  title: {
    default: "VCUS Genesis | Gynecology & Obstetrics — Dr. Uma Sheshgiri",
    template: "%s | VCUS Genesis",
  },
  description:
    "Gynecology and obstetrics with humanized care, guiding you through every stage of life. 40+ years of clinical expertise by Dr. Uma Sheshgiri in New BEL Road, Bengaluru.",
  keywords: [
    "best gynecologist Bengaluru",
    "gynecologist New BEL Road",
    "Dr. Uma Sheshgiri",
    "VCUS Genesis",
    "obstetrics Bangalore",
    "high risk pregnancy doctor Bangalore",
    "natural delivery hospital Bengaluru",
    "fertility specialist New BEL Road",
    "perimenopause clinic Bangalore",
    "women's health clinic RMV 2nd Stage",
    "antenatal care Bangalore",
  ],
  authors: [{ name: "Dr. Uma Sheshgiri", url: "https://vcusgenesis.com/about" }],
  creator: "VCUS Genesis Women's Health & Infertility",
  publisher: "VCUS Genesis",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "VCUS Genesis | Warmth, Safety and Expertise in Women's Care",
    description:
      "A quiet luxury sanctuary designed so every woman feels safe, heard, and accompanied through every stage of life. Led by Dr. Uma Sheshgiri on New BEL Road, Bengaluru.",
    url: "https://vcusgenesis.com",
    siteName: "VCUS Genesis Women's Health & Infertility",
    images: [
      {
        url: "/images/genesis_distinction_sanctuary.jpg",
        width: 1200,
        height: 900,
        alt: "VCUS Genesis Boutique Women's Clinic Bengaluru",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VCUS Genesis | Warmth, Safety and Expertise in Women's Care",
    description:
      "40+ years of continuous clinical expertise in obstetrics, gynecology, and fertility care by Dr. Uma Sheshgiri in Bengaluru.",
    images: ["/images/genesis_distinction_sanctuary.jpg"],
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
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${plusJakarta.variable} antialiased scroll-smooth`}
    >
      <head>
        <StructuredData />
      </head>
      <body className="min-h-screen bg-brand-sand text-brand-charcoal flex flex-col font-sans selection:bg-brand-mist selection:text-brand-sage-deep">
        {children}
      </body>
    </html>
  );
}
