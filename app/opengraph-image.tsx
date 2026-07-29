// app/opengraph-image.tsx
import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Dorothea Alexandra - Visual Designer & Cinematic Storyteller";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/jpeg";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          width: "100%",
          height: "100%",
          backgroundColor: "#FFFDFC",
          backgroundImage: "radial-gradient(#E96A98 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "16px",
              height: "16px",
              borderRadius: "50%",
              backgroundColor: "#E96A98",
            }}
          />
          <span
            style={{
              fontSize: "20px",
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: "0.2em",
              color: "#2D2433",
              textTransform: "uppercase",
            }}
          >
            PORTFOLIO 2026
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <h1
            style={{
              fontSize: "64px",
              fontWeight: 900,
              color: "#2D2433",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Dorothea Alexandra
          </h1>
          <p
            style={{
              fontSize: "28px",
              color: "#E96A98",
              fontWeight: 600,
            }}
          >
            Senior Visual Designer & Cinematic Storyteller
          </p>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "2px solid rgba(45, 36, 51, 0.1)",
            paddingTop: "32px",
          }}
        >
          <span style={{ fontSize: "18px", color: "#6B6570" }}>
            dorotheaalexandra@gmail.com
          </span>
          <span
            style={{
              fontSize: "18px",
              fontWeight: 700,
              color: "#2D2433",
            }}
          >
            Available for Selected Projects
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}