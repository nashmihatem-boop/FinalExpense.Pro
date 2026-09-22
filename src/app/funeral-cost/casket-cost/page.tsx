import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Casket Pricing: A Professional Cost Analysis",
  description:
    "A professional analysis of the factors driving casket prices — material and craftsmanship — and the federal consumer right to purchase from a third party.",
  openGraph: { title: "Casket Pricing: A Professional Cost Analysis", description: "A professional analysis of the factors driving casket prices — material and craftsmanship — and the federal consumer right to purchase from a third party." },

  twitter: { title: "Casket Pricing: A Professional Cost Analysis", description: "A professional analysis of the factors driving casket prices — material and craftsmanship — and the federal consumer right to purchase from a third party." },
};

export default function CasketCostPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/funeral-cost" className="hover:text-harbor">Funeral Cost</Link> / Casket Cost
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Casket pricing: a professional cost analysis
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Casket pricing spans a considerable range, attributable to a defined set of factors —
          principally material and craftsmanship. Consumers also retain meaningful control over
          this specific cost category under a federal regulation worth understanding prior to
          procurement.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Material composition
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Material represents the primary determinant of price. Solid hardwoods and heavier-gauge
          metals, including bronze and copper, occupy the upper price range. Lighter-gauge steel
          and veneered wood occupy the mid-range. Simpler materials — cloth-covered wood,
          fiberboard, and comparable alternatives — occupy the lower range and represent entirely
          appropriate, dignified selections rather than a compromise.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Craftsmanship and finish quality
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Beyond raw material, pricing follows conventions comparable to fine furniture — interior
          fabric quality, hardware, joinery, and finish work each contribute to cost as detail and
          labor input increase. Two units constructed from comparable base materials can command
          substantially different prices once craftsmanship is accounted for.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          The federal right to third-party procurement
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Under the FTC's Funeral Rule, a federal consumer-protection regulation, consumers retain
          the right to procure a casket from a third-party vendor, including online retailers,
          rather than exclusively through the engaged funeral home. The funeral home is legally
          obligated to accept the item and is prohibited from assessing a handling fee or
          otherwise penalizing the consumer for exercising this right — a materially relevant
          consideration for cost-conscious planning.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold text-harbor">The Funeral Rule in application</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            A funeral home must accept a third-party casket without imposing a fee. A quoted
            "casket handling charge" for an externally sourced item should be challenged directly —
            such charges are not permitted under the rule.
          </p>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Rental options for a pre-cremation viewing
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Families requiring a viewing prior to{" "}
          <Link href="/funeral-cost/direct-cremation" className="font-semibold text-harbor-mid hover:underline">
            cremation
          </Link>{" "}
          without outright casket purchase have an established alternative: a rental casket
          designed for this purpose, used in conjunction with a separate cremation container. This
          option merits inquiry where a traditional viewing is desired despite cost or disposition
          considerations favoring cremation.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Obtaining an accurate figure
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Given that material, craftsmanship, and regional market conditions vary independently,
          an accurate figure is obtainable only through direct quotation from a provider or
          third-party vendor for the specific item under consideration. That figure, or a
          reasonable estimated range, should inform the sizing of a final expense policy, with an
          appropriate margin retained for remaining arrangements.
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
