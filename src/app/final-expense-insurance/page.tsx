import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PolicyTypesTable, CostFactorsGrid } from "@/components/final-expense/policy-types-table";

export const metadata: Metadata = {
  title: "Final Expense Insurance: A Comprehensive Reference",
  description:
    "A professional reference on final expense (burial) insurance mechanics, the two principal policy structures, premium determinants, and the application process.",
  openGraph: { title: "Final Expense Insurance: A Comprehensive Reference", description: "A professional reference on final expense (burial) insurance mechanics, the two principal policy structures, premium determinants, and the application process." },

  twitter: { title: "Final Expense Insurance: A Comprehensive Reference", description: "A professional reference on final expense (burial) insurance mechanics, the two principal policy structures, premium determinants, and the application process." },
};

export default function FinalExpenseInsurancePage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="font-sans text-sm font-semibold tracking-[0.14em] text-brass uppercase">
          Final Expense Insurance
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Final expense insurance: a comprehensive reference
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Also designated burial insurance or funeral insurance, this product constitutes a
          modest whole life policy structured for a singular purpose: ensuring survivors are not
          responsible for funeral, burial, or final medical expenses.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">Key considerations</p>
          <ul className="mt-3 space-y-2 text-base leading-relaxed text-charcoal/80">
            <li>• The death benefit is disbursed directly to the designated beneficiary, not to a funeral establishment.</li>
            <li>• As whole life coverage, the premium is fixed upon approval and coverage persists indefinitely provided premiums remain current.</li>
            <li>• The majority of applicants qualify absent a medical examination, and numerous pre-existing conditions do not preclude qualification.</li>
          </ul>
        </div>

        <h2 className="mt-14 font-display text-2xl font-extrabold text-harbor">
          Operational mechanics
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          The applicant selects a coverage amount commensurate with anticipated need — typically
          sufficient to address funeral, burial, or cremation costs, together with residual
          medical or credit obligations. Upon approval, a fixed monthly premium applies for the
          policy's duration. Upon the insured's death, the carrier disburses the complete death
          benefit to the named beneficiary in cash, on a tax-free basis, typically within days of
          claim submission. The beneficiary retains full discretion regarding fund allocation —
          funeral costs, other obligations, or otherwise. In contrast to a funeral-home prepayment
          arrangement, these funds are not restricted to a specific provider or service package.
        </p>

        <h2 className="mt-14 font-display text-2xl font-extrabold text-harbor">
          The two principal policy structures
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          The substantial majority of policies fall within one of the two categories below.
          Neither structure is categorically superior — the appropriate selection depends on
          health status and the urgency of establishing full coverage.
        </p>

        <PolicyTypesTable />
        <p className="mt-4 text-sm leading-relaxed text-charcoal/60">
          Specific figures vary by carrier, jurisdiction, and individual applicant details. A
          licensed agent can provide precise qualification and cost information at no charge.
        </p>

        <h2 className="mt-14 font-display text-2xl font-extrabold text-harbor">
          Immediate coverage versus a waiting period
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          This constitutes the most material distinction between the two structures addressed
          above. A simplified-issue policy, upon acceptance of health disclosures, typically
          provides coverage effective from the first day — death from any covered cause following
          the initial premium payment results in full benefit disbursement. Guaranteed-issue
          policies, given the absence of health questions, typically incorporate a two-year
          waiting period: natural-cause death occurring within this period generally results in
          premium reimbursement rather than full benefit payment (accidental death is typically
          covered immediately under either structure). Following expiration of the waiting period,
          full coverage applies.
        </p>

        <h2 className="mt-14 font-display text-2xl font-extrabold text-harbor">
          Premium determinants
        </h2>
        <CostFactorsGrid />

        <h2 className="mt-14 font-display text-2xl font-extrabold text-harbor">
          Application procedure
        </h2>
        <ol className="mt-6 space-y-5">
          <li className="flex gap-4">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-harbor font-display text-sm font-extrabold text-canvas">1</span>
            <p className="text-base leading-relaxed text-charcoal/80">
              <strong className="text-harbor">Provide foundational information.</strong> Age,
              general health status, desired coverage amount, and contact details — the
              questionnaire on this site, requiring approximately two minutes.
            </p>
          </li>
          <li className="flex gap-4">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-harbor font-display text-sm font-extrabold text-canvas">2</span>
            <p className="text-base leading-relaxed text-charcoal/80">
              <strong className="text-harbor">Licensed agent consultation.</strong> The agent
              evaluates options across carrier partners and provides a comprehensive qualification
              assessment, including pricing, coverage amount, and applicable waiting period.
            </p>
          </li>
          <li className="flex gap-4">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-harbor font-display text-sm font-extrabold text-canvas">3</span>
            <p className="text-base leading-relaxed text-charcoal/80">
              <strong className="text-harbor">Formal application, at applicant discretion.</strong>{" "}
              Where a policy meets requirements, the application may be completed during the same
              consultation — most simplified-issue applications require only health disclosures
              and beneficiary designation. No obligation attaches to this process.
            </p>
          </li>
        </ol>

        <div className="mt-14 rounded-2xl bg-canvas-alt p-7">
          <h2 className="font-display text-xl font-extrabold text-harbor">
            Rationale for a multi-carrier comparison model
          </h2>
          <p className="mt-3 text-base leading-relaxed text-charcoal/80">
            FinalExpense.Pro specializes in final expense insurance for individuals seeking
            assurance that funeral costs will not constitute a burden on survivors. Partnerships
            with multiple carriers enable systematic comparison across dozens of products, rather
            than directing all applicants toward a single carrier's offering irrespective of
            individual fit.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-charcoal/60">
            Compensation structure: upon enrollment through a licensed agent partner, the carrier
            compensates the agency directly. This represents standard industry practice and does
            not affect the applicant's premium or incur any cost — quotes and agent consultations
            are provided without charge.
          </p>
        </div>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            Request a Professional Coverage Review
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            Preliminary questions? Review our{" "}
            <Link href="/#faq" className="font-semibold text-harbor-mid hover:underline">
              FAQ
            </Link>{" "}
            or the{" "}
            <Link href="/tcpa-consent" className="font-semibold text-harbor-mid hover:underline">
              communication policy details
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
