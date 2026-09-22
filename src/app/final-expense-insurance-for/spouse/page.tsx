import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Final Expense Insurance for a Spouse: Structural Considerations",
  description:
    "A professional analysis of spousal final expense coverage — applicant and ownership structure, beneficiary designation, and underwriting independence.",
  openGraph: { title: "Final Expense Insurance for a Spouse: Structural Considerations", description: "A professional analysis of spousal final expense coverage — applicant and ownership structure, beneficiary designation, and underwriting independence." },

  twitter: { title: "Final Expense Insurance for a Spouse: Structural Considerations", description: "A professional analysis of spousal final expense coverage — applicant and ownership structure, beneficiary designation, and underwriting independence." },
};

export default function SpousePage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/final-expense-insurance-for" className="hover:text-harbor">Final Expense Insurance For</Link> / Spouse
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Final expense insurance for a spouse: structural considerations
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Among the relationships addressed in this reference, spousal coverage presents the most
          straightforward structural profile. A shared household, shared financial obligations, and
          shared consequences in the absence of coverage collectively simplify the arrangement. The
          following addresses the typical structural approach.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Rationale for reciprocal spousal coverage
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Within an established shared household, a death constitutes both a personal loss and a
          financial obligation, frequently arising during an already difficult period. Reciprocal
          coverage addresses this obligation directly, ensuring neither party bears financial
          administration alongside bereavement. This arrangement also aligns naturally with
          existing financial planning practices, as couples routinely conduct joint financial
          review, into which final expense coverage integrates as a standard component rather than
          a discrete undertaking.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Applicant and ownership structure
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Spousal relationships represent among the clearest satisfactions of the insurable-
          interest standard — the shared financial and emotional stake is inherent, such that
          spousal coverage rarely invites scrutiny. The substantive determination concerns
          structural preference. Many couples elect two independent policies, with each spouse
          serving as both applicant and insured on their respective policy. Alternatively, one
          spouse may serve as owner of a policy insuring the other — an arrangement often preferred
          where one party manages household financial administration and prefers centralized
          control. Both structures are standard industry practice, reflecting preference rather
          than regulatory requirement.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Beneficiary designation
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Most spouses designate each other as primary beneficiary, a straightforward structure
          under which the surviving spouse receives the death benefit directly, applicable toward
          funeral costs or other purposes as needed. Designation of a contingent beneficiary — often
          an adult child — is advisable in the event the primary beneficiary predeceases the
          insured or both spouses pass concurrently. Beneficiary designations can typically be
          modified at any point subsequent to policy issuance; accordingly, review following
          divorce, remarriage, or other material life changes is advisable rather than assuming the
          original designation remains appropriate indefinitely.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Joint application, independent underwriting
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Notwithstanding a joint decision to obtain coverage, underwriting is conducted on an
          individual basis — health, age, and lifestyle factors are evaluated independently for
          each applicant, such that differing rate classifications or outcomes between spouses are
          entirely standard. A disparity in outcomes reflects independent health histories rather
          than any procedural irregularity. Where a health condition affects one spouse's
          application, the{" "}
          <Link href="/pre-existing-conditions" className="text-harbor-mid underline">
            pre-existing conditions reference
          </Link>{" "}
          addresses typical carrier treatment of such conditions.
        </p>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            Request a Professional Coverage Review
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/final-expense-insurance-for" className="font-semibold text-harbor-mid hover:underline">
              ← See all relationships
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
