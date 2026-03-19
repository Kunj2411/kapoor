import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Kapoor Transport – Driving Trust Across India";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#212223",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Background gradient */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(73,93,110,0.9) 0%, rgba(33,34,35,0.95) 60%)",
          }}
        />

        {/* Accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            background: "#D89042",
          }}
        />

        {/* Content */}
        <div style={{ position: "relative", zIndex: 1 }}>
          <p
            style={{
              fontSize: 14,
              fontWeight: 800,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#D89042",
              marginBottom: 16,
            }}
          >
            Kapoor Transport
          </p>
          <h1
            style={{
              fontSize: 64,
              fontWeight: 900,
              color: "#ffffff",
              lineHeight: 1.05,
              marginBottom: 24,
              maxWidth: 800,
            }}
          >
            Driving Trust Across India
          </h1>
          <p style={{ fontSize: 22, color: "rgba(255,255,255,0.6)", maxWidth: 700 }}>
            500+ fleet · 30+ years · 28 states · Industrial logistics & ODC specialists
          </p>
        </div>
      </div>
    ),
    { ...size }
  );
}
