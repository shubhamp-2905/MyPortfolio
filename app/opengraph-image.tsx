import { ImageResponse } from "next/og";
import { SITE_CONFIG } from "@/lib/data";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#FAFAF8",
          color: "#0E1116",
          padding: "72px 84px",
          fontFamily: "sans-serif",
          border: "1px solid #E7E5E0",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 20,
            color: "#5B6270",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          <span>{SITE_CONFIG.role}</span>
          <span style={{ color: "#3730A3" }}>{SITE_CONFIG.location}</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 76, fontWeight: 600, letterSpacing: "-0.03em" }}>
            {SITE_CONFIG.name}
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#5B6270",
              lineHeight: 1.4,
              maxWidth: 960,
            }}
          >
            {SITE_CONFIG.valueStatement}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "1px solid #E7E5E0",
            paddingTop: 24,
            fontSize: 18,
            color: "#5B6270",
          }}
        >
          <span>Python · SQL · PostgreSQL · LangGraph · FastAPI</span>
          <span>my-portfolio-tawny-eta-31.vercel.app</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
