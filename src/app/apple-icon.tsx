import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #2563eb 0%, #7c3aed 50%, #06b6d4 100%)",
          borderRadius: 40,
          color: "white",
          fontSize: 110,
          fontWeight: 900,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        V
      </div>
    ),
    { ...size }
  );
}
