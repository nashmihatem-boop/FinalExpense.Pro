import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "The Funeral Planning Process: A Procedural Overview",
  description:
    "A professional, procedural overview of the funeral planning process, detailing the decisions and cost drivers at each stage.",
  openGraph: { title: "The Funeral Planning Process: A Procedural Overview", description: "A professional, procedural overview of the funeral planning process, detailing the decisions and cost drivers at each stage." },

  twitter: { title: "The Funeral Planning Process: A Procedural Overview", description: "A professional, procedural overview of the funeral planning process, detailing the decisions and cost drivers at each stage." },
};

export default function WhatToExpectPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/funeral-cost" className="hover:text-harbor">Funeral Cost</Link> / What to Expect
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          The funeral planning process: a procedural overview
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          For those navigating this process for the first time, the volume of required decisions —
          often arising within a day or two of a death — can be substantial. None of these
          decisions require resolution in isolation or in immediate succession. The following
          outlines the standard procedural sequence and the specific determinations, financial and
          otherwise, made at each stage.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Stage 1: Provider selection
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          The initial procedural step is placing the decedent in the care of a funeral home or
          cremation provider. Where hospice care was involved, hospice staff frequently assist in
          coordinating this initial contact. Absent a pre-selected provider, comparison across
          multiple providers prior to commitment is both permissible and advisable — there is no
          obligation to engage the first, nearest, or most familiar option. Providers are legally
          required to disclose pricing information by telephone upon request, making a brief
          comparison process a worthwhile use of time even under time pressure.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Stage 2: The arrangement conference
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          This meeting, typically conducted in person at the funeral home, is where the majority of
          substantive decisions are finalized. Determinations include burial versus cremation;
          service format — a full traditional funeral with viewing, a memorial service without the
          body present, a graveside-only service, or a direct disposition without formal service —
          and review of the funeral home's itemized price list (the General Price List, as
          federally mandated). Given the volume of information involved, bringing an additional
          family member, taking materials for later review, or requesting additional time on
          non-time-sensitive decisions is standard practice.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Stage 3: Primary cost determinants
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A limited set of decisions from the arrangement conference account for the majority of
          total cost. The basic services fee is mandatory across all providers, covering overhead
          and staff time independent of additional selections. Beyond this: embalming versus
          refrigeration (embalming is infrequently a legal requirement — providers are obligated to
          disclose when it is versus when it is being offered as optional), casket or urn
          selection, and the disposition method itself. Where burial is selected, cemetery costs
          are billed separately from the funeral home as a distinct business entity — plot cost,
          interment (opening and closing), and marker costs are typically excluded from the funeral
          home's invoice entirely.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Stage 4: Concurrent administrative requirements
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Concurrent with arrangement decisions, a separate administrative track proceeds: ordering
          certified copies of the death certificate (procuring a quantity exceeding immediate
          anticipated need is advisable, as financial institutions, insurers, and government
          agencies each require an original), drafting an obituary, and filing permits required for
          burial or cremation. Many providers incorporate substantial coordination of these tasks
          into the basic services fee — direct inquiry on this point is advisable, as it can
          materially reduce administrative burden.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Stage 5: Cost verification prior to commitment
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Pricing is established independently and locally by each provider; consequently, the only
          reliable method for determining actual total cost is direct inquiry — in writing, itemized,
          prior to executing any agreement. Where time permits, obtaining a comparative quote from a
          second provider is a reasonable and common practice. For those engaging in advance
          planning rather than responding to an immediate loss, this represents the optimal timing
          for such a conversation — a current estimate from a local provider, absent time pressure.
        </p>

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
