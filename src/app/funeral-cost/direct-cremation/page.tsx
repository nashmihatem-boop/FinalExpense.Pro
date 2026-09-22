import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Direct Cremation: A Professional Definition",
  description:
    "A professional definition of direct cremation, the basis for its lower cost relative to alternatives, and the standard practice of a separately scheduled memorial.",
  openGraph: { title: "Direct Cremation: A Professional Definition", description: "A professional definition of direct cremation, the basis for its lower cost relative to alternatives, and the standard practice of a separately scheduled memorial." },

  twitter: { title: "Direct Cremation: A Professional Definition", description: "A professional definition of direct cremation, the basis for its lower cost relative to alternatives, and the standard practice of a separately scheduled memorial." },
};

export default function DirectCremationPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/funeral-cost" className="hover:text-harbor">Funeral Cost</Link> / Direct Cremation
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Direct cremation: a professional definition
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Direct cremation is a precisely defined disposition category: cremation without a
          preceding viewing, visitation, or funeral service. It generally represents the lowest-cost
          disposition option available, attributable to the services excluded rather than any
          reduction in quality. The following addresses its scope, cost basis, and standard
          practice regarding a separately scheduled memorial.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Scope of inclusion
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Direct cremation encompasses transportation of the deceased, filing of required permits,
          performance of the cremation, and return of the cremated remains, typically in a basic
          container absent a separately purchased urn. Excluded are all elements associated with a
          preceding service: embalming, viewing or visitation, and a formal casket, in favor of a
          simpler, lower-cost alternative container.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Basis for reduced cost
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Cost within this industry correlates directly with the number of service components
          involved, and direct cremation involves materially fewer: no embalming, no casket
          procurement, no staffed viewing facility time. Pricing nonetheless varies by provider and
          region, warranting an itemized quote from a local provider rather than reliance on an
          assumed figure.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Standard practice: a separately scheduled memorial
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Selecting direct cremation does not preclude a memorial gathering — it decouples
          disposition from the commemorative service. Many families schedule a memorial or
          celebration of life at a later date, in a venue of personal significance rather than a
          funeral home chapel. This approach affords additional travel time for out-of-town
          attendees and allows the service to be structured according to family preference rather
          than a standardized format.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold text-harbor">One option among several</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            Direct cremation is not appropriate for every family's requirements. Certain
            traditions necessitate a viewing prior to disposition, representing a distinct
            arrangement with its own cost structure — see our analysis of{" "}
            <Link href="/funeral-cost/cremation-cost" className="font-semibold text-harbor-mid hover:underline">
              cremation pricing inclusive of a preceding service
            </Link>
            .
          </p>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Determining suitability
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          The appropriate determination depends on the relative priority assigned to cost
          efficiency and simplicity versus a traditional service with the body present. Neither
          represents a professionally superior choice. The material consideration is ensuring the
          selected approach is reflected in coverage sizing and communicated to those responsible
          for arrangements.
        </p>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            Request a Professional Coverage Review
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/funeral-cost" className="font-semibold text-harbor-mid hover:underline">
              ← Back to the full guide
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
