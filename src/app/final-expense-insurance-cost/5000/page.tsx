import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CostFactorsGrid } from "@/components/final-expense/policy-types-table";

export const metadata: Metadata = {
  title: "$5,000 Final Expense Insurance: Cost and Utilization Analysis",
  description:
    "A professional analysis of the typical utilization of $5,000 in final expense coverage, applicant profiles, and premium determinants.",
  openGraph: { title: "$5,000 Final Expense Insurance: Cost and Utilization Analysis", description: "A professional analysis of the typical utilization of $5,000 in final expense coverage, applicant profiles, and premium determinants." },

  twitter: { title: "$5,000 Final Expense Insurance: Cost and Utilization Analysis", description: "A professional analysis of the typical utilization of $5,000 in final expense coverage, applicant profiles, and premium determinants." },
};

export default function FiveThousandCostPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/final-expense-insurance-cost" className="hover:text-harbor">Cost by Coverage Amount</Link> / $5,000
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          $5,000 final expense insurance: cost and utilization analysis
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          $5,000 typically represents the lowest face amount available among carriers offering
          final expense products. No fixed premium can be quoted here, as pricing is determined on
          an individual basis; however, the functional role of this amount is reasonably
          consistent across applicants — it typically serves a supplemental function rather than
          constituting a comprehensive funeral budget.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">
            Direct answer
          </p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            A $5,000 premium is contingent on age, health status, gender, tobacco use, and state of
            residence, precluding responsible publication of a fixed figure. What can be stated
            with confidence: this amount typically supplements an existing arrangement rather than
            constituting the sole funeral provision.
          </p>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Typical utilization of $5,000 in coverage
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          In most jurisdictions, $5,000 is insufficient to fund a complete traditional funeral
          independently. More commonly, this amount addresses a portion of a basic cremation, or
          functions alongside pre-existing financial provisions — savings, a preneed funeral home
          arrangement, or an existing life insurance policy of insufficient magnitude on its own.
          Certain applicants select this amount deliberately as a contingency layer supplementing
          an existing plan, rather than as the primary coverage mechanism.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Applicant profiles typically selecting this amount
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Three applicant categories predominate. The first consists of applicants obtaining
          initial coverage who prioritize minimizing ongoing premium obligation. The second
          consists of applicants who have already substantially funded funeral arrangements
          through alternative means and require only supplemental coverage for a residual gap. The
          third consists of fixed-income applicants who prefer immediate coverage in force over
          delayed decision-making regarding a larger amount. Selection of a lower initial amount
          does not preclude subsequent supplementation; however, any additional policy requires
          independent underwriting reflecting age and health status at that later date, a factor
          warranting consideration for applicants anticipating future coverage needs.
        </p>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Where $5,000 appears insufficient for the intended purpose, direct comparison against a{" "}
          <Link href="/final-expense-insurance-cost/10000" className="text-harbor-mid underline">
            $10,000 policy
          </Link>{" "}
          is advisable prior to a final determination.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Premium determinants at the $5,000 tier
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Notwithstanding the lower face amount, pricing is determined by the identical factors
          applicable to any coverage tier:
        </p>
        <CostFactorsGrid />
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A formal quote, requiring approximately two minutes and carrying no obligation, remains
          the only reliable method for determining an applicant-specific premium at $5,000.
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
