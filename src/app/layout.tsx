import type { Metadata } from "next";
import "./globals.css";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://suryajansi.vercel.app";
// Use a timestamp to force cache refresh
const imageVersion = Date.now();
const imageUrl = `${baseUrl}/images/surya-jansi.jpg?v=${imageVersion}`;

export const metadata: Metadata = {
  title: "A. Surya & Dr. R. Jansi — Wedding Invitation",
  description:
    "Join us to celebrate the wedding of A. Surya, B.E. and Dr. R. Jansi, B.D.S. on Thursday, 25th June 2026 at Sri Ranganathan Ranjitham Mahal, Dharmapuri.",
  
  icons: {
    icon: [
      {
        url: "/images/surya-jansi.jpg",
        sizes: "32x32",
        type: "image/jpeg",
      },
      {
        url: "/images/surya-jansi.jpg",
        sizes: "192x192",
        type: "image/jpeg",
      },
      {
        url: "/images/surya-jansi.jpg",
        sizes: "512x512",
        type: "image/jpeg",
      },
    ],
    shortcut: "/images/surya-jansi.jpg",
    apple: [
      {
        url: "/images/surya-jansi.jpg",
        sizes: "180x180",
        type: "image/jpeg",
      },
    ],
  },
  
  manifest: "/manifest.json",
  
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#7F1D1D" },
    { media: "(prefers-color-scheme: dark)", color: "#7F1D1D" },
  ],
  
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
        url: imageUrl,
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
    images: [imageUrl],
  },
  
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
        {/* CRITICAL: EXPLICIT META TAGS FOR WHATSAPP */}
        <meta property="og:title" content="A. Surya & Dr. R. Jansi — Wedding Invitation" />
        <meta property="og:description" content="Join us to celebrate the wedding of A. Surya, B.E. and Dr. R. Jansi, B.D.S. on Thursday, 25th June 2026 at Sri Ranganathan Ranjitham Mahal, Dharmapuri." />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:url" content={baseUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Surya & Jansi Wedding" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="A. Surya & Dr. R. Jansi — Wedding Invitation" />
        <meta name="twitter:description" content="Join us to celebrate the wedding of A. Surya, B.E. and Dr. R. Jansi, B.D.S. on Thursday, 25th June 2026 at Sri Ranganathan Ranjitham Mahal, Dharmapuri." />
        <meta name="twitter:image" content={imageUrl} />
        
        <link rel="mask-icon" href="/images/surya-jansi.jpg" color="#7F1D1D" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}