// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://yourdomain.com"; // Replace with your actual domain

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Dorothea Alexandra | Senior Visual Designer & Cinematic Storyteller",
    template: "%s | Dorothea Alexandra",
  },
  description:
    "Portfolio of Dorothea Alexandra—specializing in high-impact graphic design, cinematic video editing, motion systems, and digital storytelling.",
  keywords: [
    "Visual Designer",
    "Video Editor",
    "Cinematic Storyteller",
    "Motion Designer",
    "UI/UX Designer",
    "Portfolio",
  ],
  authors: [{ name: "Dorothea Alexandra", url: siteUrl }],
  creator: "Dorothea Alexandra",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Dorothea Alexandra | Senior Visual Designer & Cinematic Storyteller",
    description:
      "Explore curated showreels, high-impact motion design, and strategic visual brand identities.",
    siteName: "Dorothea Alexandra Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dorothea Alexandra - Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dorothea Alexandra | Senior Visual Designer & Cinematic Storyteller",
    description:
      "Explore curated showreels, high-impact motion design, and strategic visual brand identities.",
    images: ["/og-image.jpg"],
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
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#FFFDFC] text-[#2D2433] antialiased selection:bg-pink-500 selection:text-white">
        {/* Structured Data (Person Schema) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Dorothea Alexandra",
              url: siteUrl,
              jobTitle: "Visual Designer & Cinematic Storyteller",
              sameAs: [
                "https://linkedin.com/in/yourprofile",
                "https://behance.net/yourprofile",
                "https://instagram.com/yourprofile",
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}