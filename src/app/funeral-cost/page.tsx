import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { TopicCard } from "@/components/topic-card";

export const metadata: Metadata = {
  title: "Funeral Cost: A Professional Reference Guide",
  description:
    "A professional reference guide to why funeral costs vary, the cost categories involved, and how to obtain an accurate figure before sizing coverage.",
  openGraph: { title: "Funeral Cost: A Professional Reference Guide", description: "A professional reference guide to why funeral costs vary, the cost categories involved, and how to obtain an accurate figure before sizing coverage." },

  twitter: { title: "Funeral Cost: A Professional Reference Guide", description: "A professional reference guide to why funeral costs vary, the cost categories involved, and how to obtain an accurate figure before sizing coverage." },
};

const TOPICS: { href: string; title: string; description: string; image?: string }[] = [
  {
    href: "/funeral-cost/what-to-expect",
    title: "What to expect",
    description: "A professional walkthrough of the funeral planning process and its decision points.",
    image: "/photos/reflective-garden-bench.jpg",
  },
  {
    href: "/funeral-cost/prepaid-funeral-plans",
    title: "Prepaid plans vs. final expense insurance",
    description: "A professional comparison of each mechanism, and the tradeoffs of a single-provider commitment.",
    image: "/photos/reflective-soft-light.jpg",
  },
  {
    href: "/funeral-cost/cemetery-plot-cost",
    title: "What affects cemetery plot cost",
    description: "Location, cemetery classification, and ongoing fees such as perpetual care.",
    image: "/photos/reflective-golden-hour-landscape.jpg",
  },
  {
    href: "/funeral-cost/headstone-cost",
    title: "What affects headstone cost",
    description: "Material, dimensions, and engraving — the primary determinants of price.",
    image: "/photos/reflective-memorial-garden.jpg",
  },
  {
    href: "/funeral-cost/green-burial",
    title: "What is green burial?",
    description: "An increasingly common option, and why it is frequently, though not universally, less costly.",
    image: "/photos/reflective-hands-flower.jpg",
  },
  {
    href: "/funeral-cost/burial-vs-cremation",
    title: "Burial vs. cremation",
    description: "A professional comparison on cost, timeline, and procedural requirements.",
  },
  {
    href: "/funeral-cost/cremation-cost",
    title: "What affects cremation cost",
    description: "Direct cremation versus cremation with a service, and the resulting cost differential.",
  },
  {
    href: "/funeral-cost/direct-cremation",
    title: "What is direct cremation?",
    description: "The least expensive disposition category, and its precise scope of inclusion.",
  },
  {
    href: "/funeral-cost/casket-cost",
    title: "What affects casket cost",
    description: "Material and craftsmanship account for most of the pricing range.",
  },
  {
    href: "/funeral-cost/funeral-financial-assistance",
    title: "Financial assistance resources",
    description: "Documented assistance programs for cases where coverage was not previously arranged.",
  },
];

export default function FuneralCostPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="font-sans text-sm font-semibold tracking-[0.14em] text-brass uppercase">
          Funeral Cost
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Funeral cost: a professional reference guide
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Requesting pricing for comparable services from two funeral homes in the same
          municipality routinely produces two materially different figures. This is expected:
          funeral pricing is neither standardized nor nationally regulated, and depends
          substantially on choices within the family's control. This reference guide addresses why
          costs vary, the categories involved, and how to obtain a reliable current figure.
        </p>

        <h2 className="mt-14 font-display text-2xl font-extrabold text-harbor">
          The determinants of cost variation
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          <span className="font-semibold text-harbor">Geographic region.</span> Cost of living,
          local real estate values, and the competitive density of providers in a given market all
          influence pricing at the local level. Adjacent municipalities can exhibit materially
          different price levels for equivalent services.
        </p>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          <span className="font-semibold text-harbor">Provider.</span> Each funeral home operates
          as an independently priced business, including those affiliated with a larger corporate
          entity. No standardized national price schedule exists, nor any requirement for pricing
          parity between providers.
        </p>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          <span className="font-semibold text-harbor">Selections made.</span> Burial versus
          cremation, a full traditional service versus a direct disposition, the casket or urn
          selected, and whether a vault is required collectively account for the majority of cost
          variation. Two families engaging the same provider can incur substantially different
          totals based solely on these selections.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold text-harbor">A documented consumer right: the itemized price list</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            Funeral homes are federally required to provide an itemized general price list and to
            permit selection and payment for individual items rather than mandating a bundled
            package. Requesting this documentation in writing, at the outset, is professionally
            advisable when comparing providers.
          </p>
        </div>

        <h2 className="mt-14 font-display text-2xl font-extrabold text-harbor">
          The cost categories involved
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Nearly every funeral, regardless of provider or geography, decomposes into the same
          broad categories. What varies is the price attributable to each, and whether all
          categories are applicable to a given arrangement.
        </p>
        <ul className="mt-4 space-y-3 text-base leading-relaxed text-charcoal/80">
          <li>
            <span className="font-semibold text-harbor">The basic services fee.</span> Effectively
            unavoidable, covering overhead, staff time, and coordination of arrangements
            regardless of other selections.
          </li>
          <li>
            <span className="font-semibold text-harbor">Casket or urn.</span> The most significant
            source of variance, driven by material and craftsmanship. Both economical and premium
            options are available at every provider.
          </li>
          <li>
            <span className="font-semibold text-harbor">The disposition itself.</span> Burial and
            cremation each carry a distinct direct cost, separate from merchandise. Cremation is
            generally the lower-cost path, as it eliminates several procedural requirements of
            traditional burial.
          </li>
          <li>
            <span className="font-semibold text-harbor">Plot and marker, where burial is selected.</span>{" "}
            Burial introduces a separate cost structure from a distinct business entity — the
            plot, the opening-and-closing fee, and a marker — in addition to funeral home charges.
          </li>
        </ul>

        <h2 className="mt-14 font-display text-2xl font-extrabold text-harbor">
          Sizing coverage in the absence of a precise figure
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          As this market is not standardized, an accurate figure is obtainable only by direct
          inquiry to a local provider — a funeral home for service costs, and a cemetery
          separately where burial is contemplated. Final expense insurance pays a fixed cash
          benefit to the named beneficiary, so the professionally recommended approach is to
          obtain a current, itemized estimate, incorporate a reasonable margin, and size coverage
          to that total rather than an estimate.
        </p>

        <h2 className="mt-14 font-display text-2xl font-extrabold text-harbor">
          Detailed guidance by cost category
        </h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {TOPICS.map((topic) => (
            <TopicCard key={topic.href} href={topic.href} title={topic.title} description={topic.description} image={topic.image} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            Request a Professional Coverage Review
          </Button>
        </div>
      </div>
    </div>
  );
}
