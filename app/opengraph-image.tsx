import { ImageResponse } from "next/og";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#071311", color: "#f4f1e8", padding: "68px", borderRight: "84px solid #123f38" }}>
        <div style={{ display: "flex", fontSize: 32, letterSpacing: 8, color: "#ff6846" }}>ALOHA AUTO DETAILING</div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 88, fontWeight: 900, lineHeight: .94, maxWidth: 930 }}><span>YOUR CAR.</span><span>CARED FOR.</span></div>
        <div style={{ display: "flex", fontSize: 27 }}>Mobile detailing · Peachtree City, Georgia</div>
    </div>, size
  );
}
