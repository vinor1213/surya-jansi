import type { Metadata } from "next";
import "./globals.css";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://suryajansi.vercel.app";

export const metadata: Metadata = {
  title: "A. Surya & Dr. R. Jansi — Wedding Invitation",
  description:
    "Join us to celebrate the wedding of A. Surya, B.E. and Dr. R. Jansi, B.D.S. on Thursday, 25th June 2026 at Sri Ranganathan Ranjitham Mahal, Dharmapuri.",
  
  // Icons/Favicon using the same image
  icons: {
    icon: [
      {
        url: "/images/surya-jansi.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/images/surya-jansi.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/images/surya-jansi.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    shortcut: "/images/surya-jansi.png",
    apple: [
      {
        url: "/images/surya-jansi.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  
  // Manifest for PWA
  manifest: "/manifest.json",
  
  // Theme color for browser UI
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#7F1D1D" },
    { media: "(prefers-color-scheme: dark)", color: "#7F1D1D" },
  ],
  
  // Apple specific
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Surya & Jansi Wedding",
  },
  
  openGraph: {
    title: "A. Surya & Dr. R. Jansi — Wedding",
    description: "25th June 2026 · Sri Ranganathan Ranjitham Mahal · Dharmapuri",
    type: "website",
    images: [
      {
        url: `${baseUrl}/images/surya-jansi.png`,
        width: 1200,
        height: 630,
        alt: "Wedding Invitation",
      },
    ],
    url: baseUrl,
    siteName: "Surya & Jansi Wedding",
    locale: "ta_IN",
  },
  
  twitter: {
    card: "summary_large_image",
    title: "A. Surya & Dr. R. Jansi — Wedding",
    description: "25th June 2026 · Sri Ranganathan Ranjitham Mahal · Dharmapuri",
    images: [`${baseUrl}/images/surya-jansi.png`],
  },
  
  // Additional metadata
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "Surya & Jansi" }],
  keywords: [
    "wedding",
    "Surya",
    "Jansi",
    "Dharmapuri",
    "Tamil wedding",
    "June 2026",
    "Sri Ranganathan Ranjitham Mahal",
  ],
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ta">
      <head>
        {/* Additional link tags if needed */}
        <link rel="mask-icon" href="/images/surya-jansi.png" color="#7F1D1D" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}