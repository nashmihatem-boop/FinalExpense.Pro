import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CostFactorsGrid } from "@/components/final-expense/policy-types-table";

export const metadata: Metadata = {
  title: "$30,000 Final Expense Insurance: A Margin-Tier Analysis",
  description:
    "A professional analysis of the $30,000 coverage tier, its typical applicant profile, and premium determinants.",
  openGraph: { title: "$30,000 Final Expense Insurance: A Margin-Tier Analysis", description: "A professional analysis of the $30,000 coverage tier, its typical applicant profile, and premium determinants." },

  twitter: { title: "$30,000 Final Expense Insurance: A Margin-Tier Analysis", description: "A professional analysis of the $30,000 coverage tier, its typical applicant profile, and premium determinants." },
};

export default function ThirtyThousandCostPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/final-expense-insurance-cost" className="hover:text-harbor">Cost by Coverage Amount</Link> / $30,000
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          $30,000 final expense insurance: a margin-tier analysis
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          $30,000 constitutes a substantial-margin coverage tier, generally sufficient to fund a
          complete traditional funeral without constraint, while retaining material residual
          value. Consistent with all tiers addressed in this reference, actual premium
          determination remains applicant-specific rather than published as a fixed figure.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">
            Direct answer
          </p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            No standard rate exists for $30,000 in coverage — premium determination is
            applicant-specific. The consistent element is functional application: complete funeral
            costs addressed comfortably, with substantial residual value.
          </p>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Typical utilization of $30,000 in coverage
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          At this tier, a complete traditional funeral and burial is generally funded without
          requiring economy in service selection, casket, or plot — while retaining a substantial
          residual margin frequently sufficient to materially reduce outstanding debt obligations,
          whether medical, credit-based, or automotive-related, extending well beyond the ancillary
          costs typically associated with the service itself.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Applicant profiles typically selecting this tier
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Applicants carrying material outstanding debt they specifically intend not to transfer
          informally to a surviving spouse or adult child frequently select this tier. Additional
          applicants include those who evaluated{" "}
          <Link href="/final-expense-insurance-cost/20000" className="text-harbor-mid underline">
            $20,000
          </Link>{" "}
          but sought reduced constraint regarding casket, service, or plot selection, along with
          applicants who would otherwise maintain two separate lower-value policies and prefer
          consolidation into a single instrument.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Premium determinants at the $30,000 tier
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A larger coverage amount does not alter the underlying pricing methodology — $30,000 is
          priced according to identical determinants applicable to any coverage tier:
        </p>
        <CostFactorsGrid />
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A formal quote remains the only method for determining an applicant-specific premium at
          $30,000, without obligation to proceed.
        </p>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            Request a Professional Coverage Review
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/final-expense-insurance-cost" className="font-semibold text-harbor-mid hover:underline">
              ← Back to cost by coverage amount
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
