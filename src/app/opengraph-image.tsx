import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name}, Premium Steel Distributor in Bhadrak, Odisha`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #202020 0%, #2A4A65 55%, #355C7D 100%)",
          padding: "64px 72px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <div
            style={{
              color: "#8FB4D1",
              fontSize: 28,
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            Bhadrak · Odisha
          </div>
          <div
            style={{
              color: "#ffffff",
              fontSize: 64,
              fontWeight: 800,
              lineHeight: 1.1,
              maxWidth: 900,
            }}
          >
            {site.name}
          </div>
          <div
            style={{
              color: "rgba(255,255,255,0.78)",
              fontSize: 32,
              fontWeight: 500,
              maxWidth: 820,
            }}
          >
            {site.tagline}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            color: "rgba(255,255,255,0.65)",
            fontSize: 24,
          }}
        >
          <span>Steel · Stainless · Mild Steel · Structural</span>
          <span>www.srijagannathtraders.in</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
