import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Final Expense Insurance for a Grandparent: A Coordination Guide",
  description:
    "A professional guide to extended-family-initiated grandparent coverage, insurable interest at one generation removed, and family coordination.",
  openGraph: { title: "Final Expense Insurance for a Grandparent: A Coordination Guide", description: "A professional guide to extended-family-initiated grandparent coverage, insurable interest at one generation removed, and family coordination." },

  twitter: { title: "Final Expense Insurance for a Grandparent: A Coordination Guide", description: "A professional guide to extended-family-initiated grandparent coverage, insurable interest at one generation removed, and family coordination." },
};

export default function GrandparentsPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/final-expense-insurance-for" className="hover:text-harbor">Final Expense Insurance For</Link> / Grandparents
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Final expense insurance for a grandparent: a coordination guide
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Coverage initiated by a grandchild or other extended family member occurs with greater
          frequency than commonly assumed — particularly where a grandparent's own children are
          not positioned to act, or where a specific grandchild maintains the closest relationship.
          The following addresses the relevant considerations.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Rationale for extended-family initiation
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Family structures do not uniformly conform to a standard configuration. A grandparent's
          children may reside at a distance, be managing independent health or financial
          circumstances, or simply not maintain the closest day-to-day relationship. A grandchild —
          frequently an adult with greater financial stability and a strong relational bond — may
          consequently be the individual best positioned to identify the coverage gap and initiate
          resolution. This determination is also frequently precipitated by a specific event: a
          fall, a diagnosis, or a hospitalization that renders the absence of coverage immediately
          material rather than hypothetical.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Insurable interest at one generation removed
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          The insurable-interest standard applicable throughout this reference applies equally
          here: a genuine financial or emotional stake in the grandparent's continued life is
          required, and the grandparent must independently consent and respond to health questions
          personally. A grandchild-grandparent relationship is generally recognized on terms
          comparable to a sibling relationship — valid, though one degree removed from the most
          immediately recognized cases (spouse, parent-child), such that a carrier may pose
          additional clarifying questions regarding the relationship and the basis for the
          application. The{" "}
          <Link href="/final-expense-insurance-for/sibling" className="text-harbor-mid underline">
            sibling coverage reference
          </Link>{" "}
          addresses the practical application of insurable interest in comparable detail, and the
          same principles apply here.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Coordination with other family members
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Given that a grandparent typically has multiple children and grandchildren who could
          reasonably initiate coverage, preliminary family discussion prior to application is
          advisable — primarily to avoid duplicate coverage arranged independently by separate
          relatives, or subsequent disagreement regarding beneficiary designation. Clarifying in
          advance whether the objective is relieving the grandparent's own children of this
          responsibility, seeking reimbursement from the broader family, or simply assuming
          ownership of the task, is advisable. None of these rationales requires family consent,
          though articulating the rationale explicitly tends to prevent subsequent misunderstanding.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Required grandparent participation
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Consistent with any insured adult, the grandparent must participate directly in the
          process — providing consent, responding to health questions accurately and personally,
          and executing the application. Research, comparison, and administrative logistics may be
          managed by the grandchild; however, the grandparent's presence, even briefly, during the
          formal application should be anticipated.
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
