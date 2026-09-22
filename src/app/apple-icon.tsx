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
          backgroundColor: "#122140",
        }}
      >
        <svg width="116" height="116" viewBox="0 0 32 32" fill="none">
          <path d="M16 6 L25 9.5 V16 C25 21.5 21.2 25.8 16 27 C10.8 25.8 7 21.5 7 16 V9.5 Z" stroke="#dbe0e8" strokeWidth="2.4" strokeLinejoin="round" />
          <path d="M12.4 16.2 L15 18.8 L20 13.4" stroke="#a97917" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    ),
    size
  );
}
