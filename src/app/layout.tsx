import type { Metadata } from "next";
import { Inter_Tight, Playfair_Display } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Peak — futuristic Apple-inspired memes site",
  description: "Peak delivers sleek, premium meme moments with a clean, futuristic vibe. Explore hero content, about Peak, how to join, and tokenomics at a glance.",
  keywords: ["futuristic memes", "apple-like design", "peak memes", "meme site", "landing page", "tokenomics"],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Peak — futuristic Apple-inspired memes site",
    description: "Peak delivers sleek, premium meme moments with a clean, futuristic vibe. Explore hero content, about Peak, how to join, and tokenomics at a glance.",
    type: "website",
    url: "/",
    siteName: "Peak",
    images: [{ url: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/minimal-vector-mascot-for-peak-waist-up--1759931604454-623f73da.jpg", width: 1200, height: 630, alt: "Minimalist Peak mascot on glossy gradient background" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Peak — futuristic Apple-inspired memes site",
    description: "Peak delivers sleek, premium meme moments with a clean, futuristic vibe. Explore hero content, about Peak, how to join, and tokenomics at a glance.",
    images: ["https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/minimal-vector-mascot-for-peak-waist-up--1759931604454-623f73da.jpg"],
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interTight.variable} ${playfairDisplay.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}