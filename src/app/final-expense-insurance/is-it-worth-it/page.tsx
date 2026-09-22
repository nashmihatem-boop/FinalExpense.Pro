import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Evaluating the Necessity of Final Expense Insurance",
  description:
    "A professional, balanced framework for evaluating whether final expense insurance is warranted given an individual's specific financial circumstances.",
  openGraph: { title: "Evaluating the Necessity of Final Expense Insurance", description: "A professional, balanced framework for evaluating whether final expense insurance is warranted given an individual's specific financial circumstances." },

  twitter: { title: "Evaluating the Necessity of Final Expense Insurance", description: "A professional, balanced framework for evaluating whether final expense insurance is warranted given an individual's specific financial circumstances." },
};

export default function IsItWorthItPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/final-expense-insurance" className="hover:text-harbor">Final Expense Insurance</Link> / Is It Worth It?
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Evaluating the necessity of final expense insurance
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          No universally applicable determination exists. The appropriate conclusion depends on
          existing financial provisions and the specific risk the applicant seeks to mitigate. The
          following provides a balanced analytical framework for independent evaluation.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Circumstances favoring acquisition
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          For a substantial proportion of applicants, the determination is relatively
          straightforward. Acquisition is generally warranted where the following apply:
        </p>
        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">Favorable indicators</p>
          <ul className="mt-3 space-y-2 text-base leading-relaxed text-charcoal/80">
            <li>• Absence of dedicated savings allocated specifically to final expenses.</li>
            <li>• A requirement for certainty that survivors will not bear funeral, burial, or final medical costs directly or via credit.</li>
            <li>• Preference for expedited, simplified underwriting over pursuing a larger traditional policy at a later date.</li>
            <li>• A desire to preclude retirement or investment account depletion, at an inopportune time or otherwise, to address these costs.</li>
          </ul>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Circumstances where acquisition may not be warranted
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          This coverage is not universally appropriate. Acquisition may provide limited
          incremental value where liquid, readily accessible savings are already specifically
          designated for final expenses — as distinct from retirement funds allocated for other
          purposes. The same applies where an existing life insurance policy, with a current
          beneficiary designation, is of sufficient magnitude to address these costs alongside its
          other intended functions. Additionally, where an applicant's financial circumstances are
          such that this cost would not constitute a hardship for survivors, acquisition may be
          unnecessary. Layering additional coverage atop existing adequate provisions generally
          constitutes redundant expenditure rather than incremental protection — a determination
          warranting direct acknowledgment rather than the sale of unnecessary coverage.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Diagnostic questions for self-assessment
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Are funds currently allocated specifically for this purpose, distinct from retirement
          savings designated otherwise? Should death occur within the current month, would
          survivors face an unanticipated financial obligation for these costs? Where existing
          coverage is in place, has its adequacy been verified accounting for obligations beyond
          the funeral itself — outstanding medical debt or other liabilities?
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          No universally correct determination exists
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          This constitutes a personal financial determination rather than a matter warranting
          urgency-based decision-making, and either conclusion may be appropriate depending on
          circumstances. For an independent assessment, a licensed agent can evaluate existing
          provisions, the cost of addressing any identified gap, and the overall appropriateness of
          acquisition — without charge or obligation, irrespective of the resulting conclusion.
        </p>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            Request a Professional Coverage Review
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/final-expense-insurance/biggest-mistakes" className="font-semibold text-harbor-mid hover:underline">
              Proceeding to application: errors to avoid →
            </Link>
          </p>
          <p className="mt-2 text-sm text-charcoal/60">
            <Link href="/final-expense-insurance" className="font-semibold text-harbor-mid hover:underline">
              ← Return to the complete reference
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
