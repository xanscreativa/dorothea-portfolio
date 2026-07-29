import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import MouseGlow from "./components/ui/MouseGlow";
import Cursor from "./components/ui/Cursor";
import LoadingScreen from "./components/ui/LoadingScreen";
import PageLoader from "./components/layout/PageLoader";
import PageTransition from "./components/layout/PageTransition";
import CustomCursor from "./components/layout/CustomCursor";
import Navbar from "./components/layout/Navbar";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://xansstudio.com"),

  title: {
    default: "XANS® | Creative Designer & Video Editor",
    template: "%s | XANS®",
  },

  description:
    "Creative branding, graphic design, illustration and video editing portfolio by XANS Studio.",

  keywords: [
    "Graphic Designer",
    "Brand Identity",
    "Logo Design",
    "Video Editor",
    "Portfolio",
    "Indonesia",
  ],

  authors: [
    {
      name: "XANS Studio",
    },
  ],

  creator: "XANS Studio",

  openGraph: {
    title: "XANS®",
    description: "Creative Designer & Video Editor",
    url: "https://xansstudio.com",
    siteName: "XANS CREATIVA",
    images: ["/og-cover.jpg"],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "XANS®",
    description: "Creative Designer & Video Editor",
    images: ["/og-cover.jpg"],
  },

  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${jakarta.variable} font-sans bg-[#FFFDFC] text-[#2D2433] antialiased overflow-x-hidden`}
      >
        <PageLoader />

        <LoadingScreen />

        <MouseGlow />

        <Cursor />

        <CustomCursor />

        <Navbar />

        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}