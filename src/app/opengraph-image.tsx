import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const dynamic = "force-static";
export const alt = `${profile.name}, AI researcher`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#fafaf8", padding: "80px", color: "#1e2126" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 72, fontFamily: "serif", letterSpacing: "-0.02em" }}>{profile.name}</div>
          <div style={{ fontSize: 30, color: "#4a505a", marginTop: 16 }}>{profile.title}</div>
        </div>
        <div style={{ fontSize: 40, fontFamily: "serif", fontStyle: "italic", maxWidth: 900, lineHeight: 1.25 }}>{profile.headline}</div>
        <div style={{ display: "flex", borderTop: "2px solid #2f3e9e", paddingTop: 20, fontSize: 24, color: "#4a505a" }}>
          Explainable AI, African language NLP, multimodal evaluation
        </div>
      </div>
    ),
    size,
  );
}
