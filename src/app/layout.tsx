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
  metadataBase: new URL("https://sculpt-verse.vercel.app"),
  title: {
    default: "SculptVerse - Custom Sculptures in Hyderabad",
    template: "%s | SculptVerse",
  },
  description:
    "Custom cement, FRP, metal and garden sculptures in Hyderabad for villas, resorts, parks, schools and memorable real spaces.",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/apple-icon.png",
  },
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
    url: "https://sculpt-verse.vercel.app/",
    siteName: "SculptVerse",
    title: "SculptVerse - Custom Sculptures in Hyderabad",
    description:
      "Custom cement, FRP, metal and garden sculptures planned around your site, budget and installation needs.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SculptVerse custom giraffe sculptures displayed in a landscaped garden",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SculptVerse - Custom Sculptures in Hyderabad",
    description:
      "Custom cement, FRP, metal and garden sculptures for villas, resorts, parks and schools.",
    images: ["/og-image.png"],
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
      <body suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
