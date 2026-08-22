// app/layout.tsx
import type { Metadata } from "next";
import { Lexend_Deca } from "next/font/google";
import "./globals.css";
import MouseGlow from "@/components/ui/MouseGlow";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/layout/Navbar"; 

const lexendDeca = Lexend_Deca({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Dorothea Alexandra Manuputty, S.Ds - Portfolio",
  description: "Portfolio Website of Dorothea Alexandra Manuputty",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Load Google Font Cause */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cause:wght@100..900&display=swap" rel="stylesheet" />
      </head>
      <body className={`${lexendDeca.className} bg-[#FFFDFC] text-[#2D2433] antialiased selection:bg-pink-500 selection:text-white relative`}>
        <LanguageProvider>
          <Navbar /> 
          <MouseGlow />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}