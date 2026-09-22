import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "FinalExpense.Pro",
    short_name: "FinalExpense.Pro",
    description: "Expert guidance on final expense life insurance coverage, reviewed by licensed professionals.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#122140",
    icons: [{ src: "/icon.svg", type: "image/svg+xml", sizes: "any" }],
  };
}
