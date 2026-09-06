import { ImageResponse } from "next/og";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 16,
          background: "linear-gradient(135deg, #0b0f19 0%, #060810 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          borderRadius: 8,
          border: "1.5px solid rgba(99, 102, 241, 0.8)",
          boxShadow: "0 0 8px rgba(6, 182, 212, 0.6)",
          fontWeight: 900,
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
          letterSpacing: "-0.5px",
        }}
      >
        <span
          style={{
            background: "linear-gradient(135deg, #22d3ee 0%, #818cf8 100%)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          LS
        </span>
      </div>
    ),
    {
      ...size,
    }
  );
}
