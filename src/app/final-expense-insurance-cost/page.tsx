import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CostFactorsGrid } from "@/components/final-expense/policy-types-table";

export const metadata: Metadata = {
  title: "Final Expense Insurance Cost Structure: A Professional Overview",
  description:
    "A professional overview of the determinants of final expense insurance premiums and the typical application of coverage amounts from $5,000 to $40,000 and above.",
  openGraph: { title: "Final Expense Insurance Cost Structure: A Professional Overview", description: "A professional overview of the determinants of final expense insurance premiums and the typical application of coverage amounts from $5,000 to $40,000 and above." },

  twitter: { title: "Final Expense Insurance Cost Structure: A Professional Overview", description: "A professional overview of the determinants of final expense insurance premiums and the typical application of coverage amounts from $5,000 to $40,000 and above." },
};

const COST_TIERS = [
  {
    amount: "$5,000",
    href: "/final-expense-insurance-cost/5000",
    blurb: "The lowest face amount commonly offered — typically supplemental to existing savings or coverage rather than a comprehensive funeral budget.",
  },
  {
    amount: "$10,000",
    href: "/final-expense-insurance-cost/10000",
    blurb: "A frequently selected baseline, generally sufficient for a modest cremation or basic service with residual funds.",
  },
  {
    amount: "$15,000",
    href: "/final-expense-insurance-cost/15000",
    blurb: "An intermediate tier — sufficient for an expanded service or modest burial, below full traditional-funeral budgeting.",
  },
  {
    amount: "$20,000",
    href: "/final-expense-insurance-cost/20000",
    blurb: "Among the most frequently selected amounts — typically sufficient for a traditional funeral and burial with a residual margin.",
  },
  {
    amount: "$25,000",
    href: "/final-expense-insurance-cost/25000",
    blurb: "Extends beyond funeral costs specifically, accommodating outstanding medical obligations, debt, or other residual expenses.",
  },
  {
    amount: "$30,000",
    href: "/final-expense-insurance-cost/30000",
    blurb: "A substantial margin tier — funds a full traditional funeral without constraint, with material residual value.",
  },
  {
    amount: "$40,000",
    href: "/final-expense-insurance-cost/40000",
    blurb: "Approaching the upper threshold of conventional final expense products — structured to provide residual value beyond funeral costs.",
  },
];

export default function FinalExpenseInsuranceCostPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="font-sans text-sm font-semibold tracking-[0.14em] text-brass uppercase">
          Cost by Coverage Amount
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Final expense insurance cost structure: a professional overview
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          No standardized rate schedule can be published, as final expense insurance is
          underwritten on an individual basis; the sole precisely accurate figure is the one a
          carrier provides following a brief application. This overview instead addresses the
          determinants of premium calculation and the typical utilization of various coverage
          amounts, enabling selection of an appropriate target prior to formal engagement with a
          carrier.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">
            Rationale for omitting sample pricing
          </p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            A representative rate would require fixed assumptions regarding age, gender, health
            history, and state of residence — altering any single variable materially changes the
            resulting figure. Publication of a non-representative figure would introduce more risk
            of misinterpretation than benefit. For baseline research into funeral and cremation
            costs,{" "}
            <a href="https://nfda.org" className="text-harbor-mid underline">
              the National Funeral Directors Association
            </a>{" "}
            publishes annual national median data. For a figure specific to an individual
            applicant, a formal quote remains the only reliable source.
          </p>
        </div>

        <h2 className="mt-14 font-display text-2xl font-extrabold text-harbor">
          Determinants of premium calculation
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Carriers uniformly evaluate a consistent set of factors. None are proprietary, and none
          vary based on the specific carrier selected:
        </p>
        <CostFactorsGrid />

        <h2 className="mt-14 font-display text-2xl font-extrabold text-harbor">
          Coverage amount: the sole applicant-controlled variable
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Age, health status, and gender are fixed at the point of application. Coverage amount,
          by contrast, remains a discretionary decision bearing a direct, predictable relationship
          to premium — increased coverage corresponds to increased cost, all other factors held
          constant. This reframes the relevant inquiry from minimizing premium to determining the
          coverage amount that adequately addresses the intended purpose. The following sections
          address this determination by specific coverage amount.
        </p>

        <h2 className="mt-14 font-display text-2xl font-extrabold text-harbor">
          Cost analysis by coverage amount
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Each amount below corresponds to a tier addressed directly within our quote process.
          Select the amount most closely aligned with your objective for detailed analysis.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {COST_TIERS.map((tier) => (
            <Link
              key={tier.href}
              href={tier.href}
              className="rounded-xl border border-mist bg-canvas-raised p-5 transition-colors hover:border-harbor-mid/50"
            >
              <p className="font-display text-lg font-extrabold text-harbor">{tier.amount}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-charcoal/70">{tier.blurb}</p>
            </Link>
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
