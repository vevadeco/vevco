import { ImageResponse } from "next/og";

export const alt =
  "Vevade — Hamilton web design and Shopify development since 2012";
export const size = { width: 1200, height: 630 };
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
          background: "#111827",
          color: "white",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: 56,
              height: 56,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 14,
              marginRight: 16,
              background:
                "linear-gradient(135deg, #2563eb 0%, #7c3aed 50%, #06b6d4 100%)",
              fontSize: 32,
              fontWeight: 700,
            }}
          >
            V
          </div>
          <div style={{ fontSize: 32, fontWeight: 700 }}>Vevade</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 60,
              fontWeight: 700,
              lineHeight: 1.1,
              maxWidth: 920,
            }}
          >
            Web design and Shopify development
          </div>
          <div style={{ marginTop: 20, fontSize: 28, color: "#d1d5db" }}>
            Hamilton, Burlington, Oakville, and Niagara · Since 2012
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
