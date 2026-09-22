import { ImageResponse } from "next/og";

export const alt = "FinalExpense.Pro — Expert Final Expense Insurance Guidance";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Google's CSS2 endpoint always returns the currently-valid woff2 URL for a given family/weight,
// which is more reliable than hardcoding a versioned fonts.gstatic.com path (those change).
async function loadGoogleFont(text: string, weight: 400 | 700): Promise<ArrayBuffer> {
  const cssUrl = `https://fonts.googleapis.com/css2?family=Inter:wght@${weight}&text=${encodeURIComponent(text)}`;
  const css = await fetch(cssUrl, { headers: { "User-Agent": "Mozilla/5.0" } }).then((r) => r.text());
  const match = css.match(/src: url\(([^)]+)\) format\('(?:woff2|truetype|opentype)'\)/);
  if (!match) throw new Error("Could not find font URL in Google Fonts CSS response");
  const fontRes = await fetch(match[1]);
  return fontRes.arrayBuffer();
}

export default async function Image() {
  const HEADLINE = "FinalExpense.Pro Expert guidance, done right the first time.";
  const BODY = "No medical exam for most applicants Rate locked for life Reviewed by licensed professionals";
  const [interBold, interRegular] = await Promise.all([
    loadGoogleFont(HEADLINE, 700),
    loadGoogleFont(BODY, 400),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundImage: "linear-gradient(135deg, #050c1a 0%, #122140 65%, #1c3054 100%)",
          fontFamily: "Inter",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <svg width="56" height="56" viewBox="0 0 32 32" fill="none">
            <path d="M16 6 L25 9.5 V16 C25 21.5 21.2 25.8 16 27 C10.8 25.8 7 21.5 7 16 V9.5 Z" stroke="#dbe0e8" strokeWidth="2.4" strokeLinejoin="round" />
            <path d="M12.4 16.2 L15 18.8 L20 13.4" stroke="#a97917" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div style={{ display: "flex", fontSize: 34, fontWeight: 700, color: "#ffffff" }}>
            FinalExpense<span style={{ color: "#a97917" }}>.pro</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 56,
            maxWidth: 920,
            fontSize: 60,
            lineHeight: 1.12,
            fontWeight: 700,
            color: "#ffffff",
          }}
        >
          Expert guidance, done right the first time.
        </div>

        <div style={{ display: "flex", marginTop: 32, gap: 28 }}>
          {["No medical exam for most applicants", "Rate locked for life", "Reviewed by licensed professionals"].map((item) => (
            <div key={item} style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div
                style={{
                  display: "flex",
                  width: 22,
                  height: 22,
                  borderRadius: 999,
                  backgroundColor: "rgba(91,122,153,0.35)",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8.5L6.2 11.5L13 4.5" stroke="#a9c2d6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div style={{ display: "flex", fontSize: 22, color: "#c3ccd9" }}>{item}</div>
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Inter", data: interRegular, weight: 400, style: "normal" },
        { name: "Inter", data: interBold, weight: 700, style: "normal" },
      ],
    }
  );
}
