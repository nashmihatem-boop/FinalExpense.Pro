import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Headstone Pricing: A Professional Cost Analysis",
  description:
    "A professional analysis of how material, dimensions, and engraving determine headstone and grave marker pricing, and how to obtain an accurate quote.",
  openGraph: { title: "Headstone Pricing: A Professional Cost Analysis", description: "A professional analysis of how material, dimensions, and engraving determine headstone and grave marker pricing, and how to obtain an accurate quote." },

  twitter: { title: "Headstone Pricing: A Professional Cost Analysis", description: "A professional analysis of how material, dimensions, and engraving determine headstone and grave marker pricing, and how to obtain an accurate quote." },
};

export default function HeadstoneCostPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/funeral-cost" className="hover:text-harbor">Funeral Cost</Link> / Headstone Cost
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Headstone pricing: a professional cost analysis
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Consistent with other cost categories addressed in this guide, headstone and marker
          pricing is not standardized, and is determined independently by individual monument
          companies based on a defined set of factors warranting review prior to obtaining
          quotations.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Material as the primary cost determinant
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Granite constitutes the prevailing standard for permanent markers, valued for its
          durability and priced according to stone grade and volume. Bronze markers — a cast metal
          plaque affixed to a granite or concrete base — are priced according to casting weight and
          detail, in addition to base cost. Smaller flat markers or temporary markers carry lower
          cost than large upright monuments across all material categories. No option is
          objectively superior; selection reflects personal preference constrained by cemetery
          policy.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Dimensional and configuration factors
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A flush marker set level with the ground generally carries lower cost than an upright
          monument, which requires additional material and a more substantial foundation. A
          companion marker, intended to eventually span two plots, carries a higher cost than a
          single marker but typically less than two separately procured markers. Custom
          configurations require proportionally greater material and fabrication input relative to
          a standard catalog design.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Engraving as a cost variable
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Cost scales in proportion to engraving complexity — a name and dates carries lower cost
          than an epitaph or detailed design. Reserving space for a subsequent name and date,
          common for a surviving spouse, is generally more cost-efficient than engraving at a
          later date as a separate transaction. Custom artwork or portrait etching requires
          substantially greater skilled labor than a standard catalog emblem, reflected accordingly
          in price.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Cemetery-imposed constraints
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Many cemeteries, particularly newer sections designated as memorial gardens, permit only
          flush markers for maintenance purposes and prohibit upright monuments entirely within
          those sections. Certain cemeteries additionally require procurement through an approved
          vendor list or impose specific dimensional and material requirements. Verification of
          cemetery policy prior to marker selection is professionally advisable.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold text-harbor">Obtaining an accurate quotation</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            Monument companies provide direct quotations; confirm precisely what is included, as
            the marker, engraving, and installation fee are variably bundled or itemized
            separately depending on the vendor. This figure should inform coverage sizing, with an
            appropriate margin retained.
          </p>
        </div>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            Request a Professional Coverage Review
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/funeral-cost" className="font-semibold text-harbor-mid hover:underline">
              ← Back to the funeral cost guide
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
