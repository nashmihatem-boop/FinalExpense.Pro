import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CostFactorsGrid } from "@/components/final-expense/policy-types-table";

export const metadata: Metadata = {
  title: "$25,000 Final Expense Insurance: Beyond Funeral Cost Coverage",
  description:
    "A professional analysis of the $25,000 coverage tier and its typical application to obligations beyond funeral costs, plus premium determinants.",
  openGraph: { title: "$25,000 Final Expense Insurance: Beyond Funeral Cost Coverage", description: "A professional analysis of the $25,000 coverage tier and its typical application to obligations beyond funeral costs, plus premium determinants." },

  twitter: { title: "$25,000 Final Expense Insurance: Beyond Funeral Cost Coverage", description: "A professional analysis of the $25,000 coverage tier and its typical application to obligations beyond funeral costs, plus premium determinants." },
};

export default function TwentyFiveThousandCostPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/final-expense-insurance-cost" className="hover:text-harbor">Cost by Coverage Amount</Link> / $25,000
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          $25,000 final expense insurance: beyond funeral cost coverage
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          $25,000 represents a coverage tier extending beyond funeral costs specifically. At this
          level, applicants typically begin evaluating additional financial obligations they
          prefer not to leave for surviving family members to resolve. As with every tier
          addressed in this reference, actual premium determination remains applicant-specific.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">
            Direct answer
          </p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            A $25,000 premium is established on an individual basis, consistent with all coverage
            amounts addressed here. Notably, applicants selecting this tier typically budget for
            considerations beyond the funeral itself.
          </p>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Typical utilization of $25,000 in coverage
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          In most jurisdictions, $25,000 comfortably funds a traditional funeral and burial with
          substantial residual margin — accounting for its association with planning beyond the
          service alone: an outstanding medical obligation, a credit card balance, an automobile
          loan, or simply a financial buffer ensuring no family member independently absorbs
          residual costs following settlement with the funeral provider.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          The transition from funeral coverage to post-funeral obligations
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          At{" "}
          <Link href="/final-expense-insurance-cost/10000" className="text-harbor-mid underline">
            $10,000
          </Link>{" "}
          and{" "}
          <Link href="/final-expense-insurance-cost/20000" className="text-harbor-mid underline">
            $20,000
          </Link>
          , applicant focus is predominantly on the service itself. At $25,000, consideration
          frequently expands to encompass the subsequent period — ongoing financial obligations,
          housing payments due prior to estate settlement, and comparable considerations. No
          formal threshold governs this transition; it reflects an observed pattern in applicant
          rationale for this specific tier.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Premium determinants at the $25,000 tier
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          The determinants establishing premium at $25,000 are identical to those applicable at
          every other coverage tier:
        </p>
        <CostFactorsGrid />
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A formal quote remains the only method for determining an applicant-specific premium at
          $25,000, based on individual age, health status, and state of residence.
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
