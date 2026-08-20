// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import MouseGlow from "@/components/ui/MouseGlow";
import { LanguageProvider } from "@/context/LanguageContext";
// 1. IMPORT NAVBAR KAMU DI SINI (sesuaikan path-nya jika perlu)
import Navbar from "@/components/layout/Navbar"; 

// ... (metadata tetap sama seperti sebelumnya)

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#FFFDFC] text-[#2D2433] antialiased selection:bg-pink-500 selection:text-white relative">
        <LanguageProvider>
          {/* 2. RENDERING NAVBAR DI SINI (Harus di dalam LanguageProvider agar bisa baca bahasa) */}
          <Navbar /> 
          
          <MouseGlow />

          {/* ... (Script JSON-LD tetap di sini) */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                name: "Dorothea Alexandra",
                // ... (sisanya sama)
              }),
            }}
          />
          
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}