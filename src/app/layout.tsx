import type { Metadata } from "next";
import { Playfair_Display, Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingCTA } from "@/components/layout/FloatingCTA";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-accent",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "SculptVerse — Transforming Spaces Into Living Art",
    template: "%s | SculptVerse",
  },
  description:
    "Premium custom cement, metal & landscape sculptures for resorts, villas, parks & schools. Handcrafted animal sculptures, garden features, and resort installations by master artisans.",
  keywords: [
    "custom sculptures",
    "cement sculptures",
    "animal sculptures",
    "resort sculptures",
    "garden sculptures",
    "metal art",
    "landscape art",
    "FRP sculptures",
    "handcrafted statues",
    "outdoor sculptures India",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "SculptVerse",
    title: "SculptVerse — Transforming Spaces Into Living Art",
    description:
      "Premium custom cement, metal & landscape sculptures for resorts, villas, parks & schools.",
    images: [{ url: "/images/image copy 8.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SculptVerse — Transforming Spaces Into Living Art",
    description:
      "Premium custom cement, metal & landscape sculptures for resorts, villas, parks & schools.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${cormorant.variable}`}
    >
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
