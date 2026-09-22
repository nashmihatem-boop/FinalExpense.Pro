import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CostFactorsGrid } from "@/components/final-expense/policy-types-table";

export const metadata: Metadata = {
  title: "$20,000 Final Expense Insurance: The Modal Coverage Tier",
  description:
    "A professional analysis of the $20,000 coverage amount, the most frequently selected final expense tier, and its premium determinants.",
  openGraph: { title: "$20,000 Final Expense Insurance: The Modal Coverage Tier", description: "A professional analysis of the $20,000 coverage amount, the most frequently selected final expense tier, and its premium determinants." },

  twitter: { title: "$20,000 Final Expense Insurance: The Modal Coverage Tier", description: "A professional analysis of the $20,000 coverage amount, the most frequently selected final expense tier, and its premium determinants." },
};

export default function TwentyThousandCostPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/final-expense-insurance-cost" className="hover:text-harbor">Cost by Coverage Amount</Link> / $20,000
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          $20,000 final expense insurance: the modal coverage tier
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          $20,000 represents the most frequently selected coverage amount among applicants who
          have conducted a thorough evaluation of comprehensive funeral costs. Premium
          determination remains individual to the applicant; however, the typical application of
          this coverage amount is highly consistent across the applicant population.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">
            Direct answer
          </p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            A $20,000 premium cannot be quoted from a published rate schedule, as determination
            occurs on an individual basis. The consistent element is this tier's status as the
            most frequently selected amount, addressed below.
          </p>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Typical utilization of $20,000 in coverage
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          In many jurisdictions, $20,000 is sufficient to fund a complete traditional funeral and
          burial — inclusive of service, casket, vault, plot, and marker — with residual margin
          available for ancillary costs: obituary publication, floral arrangements, a subsequent
          gathering, or travel expenses for family members. Actual costs vary materially by region
          and specific selections, and this figure should be regarded as a general pattern rather
          than a jurisdiction-specific guarantee.{" "}
          <a href="https://nfda.org" className="text-harbor-mid underline">
            The National Funeral Directors Association
          </a>{" "}
          publishes annual national median data for independent verification.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Basis for its frequent selection
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          $20,000 typically represents the threshold at which the principal components of a
          traditional funeral are addressed without requiring reduction of service selections to
          accommodate a lower coverage amount, while maintaining a materially lower premium
          relative to{" "}
          <Link href="/final-expense-insurance-cost/40000" className="text-harbor-mid underline">
            $40,000
          </Link>
          . This balance accounts for its frequent recommendation in agent consultations, rather
          than any inherent universal appropriateness. The applicable amount should nonetheless be
          determined by the applicant's specific coverage objectives rather than prevailing
          selection patterns.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Premium determinants at the $20,000 tier
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Frequency of selection does not alter the underlying pricing methodology — a $20,000
          policy is priced according to the identical determinants applicable to any coverage
          amount:
        </p>
        <CostFactorsGrid />
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A formal quote remains the only method for determining an applicant-specific premium at
          $20,000, without obligation to proceed.
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
