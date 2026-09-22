import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Cremation Cost: A Professional Factor Analysis",
  description:
    "A professional analysis of the documented factors that move cremation pricing — service type, urn selection, and provider structure.",
  openGraph: { title: "Cremation Cost: A Professional Factor Analysis", description: "A professional analysis of the documented factors that move cremation pricing — service type, urn selection, and provider structure." },

  twitter: { title: "Cremation Cost: A Professional Factor Analysis", description: "A professional analysis of the documented factors that move cremation pricing — service type, urn selection, and provider structure." },
};

export default function CremationCostPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/funeral-cost" className="hover:text-harbor">Funeral Cost</Link> / Cremation Cost
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Cremation cost: a professional factor analysis
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Cremation pricing exhibits substantial variance by provider and region, rendering any
          single published figure largely uninformative. A more productive approach involves
          understanding the specific factors that shift a cremation toward the lower or higher end
          of the range, providing a framework for evaluating quotes from local providers.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Direct cremation versus cremation with a preceding viewing
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          This represents the most significant cost variable. Direct cremation, absent a viewing
          or preceding service, occupies the lower end of the range, as it eliminates embalming, a
          viewing-appropriate casket, and staffed service time. The addition of a viewing or
          service reintroduces these cost components. For a professional baseline, see our
          analysis of{" "}
          <Link href="/funeral-cost/direct-cremation" className="font-semibold text-harbor-mid hover:underline">
            direct cremation
          </Link>{" "}
          in isolation.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Urn selection
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Providers typically include a basic container, though many families elect a separate
          urn, which carries its own cost range determined by material and craftsmanship —
          analogous to{" "}
          <Link href="/funeral-cost/casket-cost" className="font-semibold text-harbor-mid hover:underline">
            casket pricing
          </Link>
          . Procurement is not limited to the provider's on-site inventory; externally sourced
          urns are equally suitable.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Funeral home versus standalone crematory
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Certain funeral homes operate proprietary crematory facilities; others contract with
          independent crematories. Where disposition alone is required, without ancillary
          full-service offerings, direct engagement with a cremation-focused provider frequently
          represents the more cost-efficient path.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Ancillary cost components
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Several secondary factors merit consideration: additional certified death certificate
          copies, transportation where death occurred outside the service area, required permits,
          and optional items such as keepsake jewelry or division of remains among family members.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold text-harbor">Request documentation in writing</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            A reputable provider furnishes an itemized price list upon request, prior to
            commitment. Comparing that documentation against actual requirements, rather than a
            bundled package, provides the clearest visibility into cost allocation.
          </p>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          The determinative figure is provider-specific
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Each factor above varies independently by geography and provider, precluding a reliable
          general figure. The professionally recommended approach is direct outreach to one or
          more local providers for an itemized quote, with coverage sized to that figure plus an
          appropriate margin.
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
