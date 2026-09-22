import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PolicyTypesTable } from "@/components/final-expense/policy-types-table";

export const metadata: Metadata = {
  title: "Procurement Errors in Final Expense Insurance: A Professional Analysis",
  description:
    "A professional analysis of common, avoidable errors in final expense insurance procurement, from single-carrier comparison to lapse risk.",
  openGraph: { title: "Procurement Errors in Final Expense Insurance: A Professional Analysis", description: "A professional analysis of common, avoidable errors in final expense insurance procurement, from single-carrier comparison to lapse risk." },

  twitter: { title: "Procurement Errors in Final Expense Insurance: A Professional Analysis", description: "A professional analysis of common, avoidable errors in final expense insurance procurement, from single-carrier comparison to lapse risk." },
};

export default function BiggestMistakesPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/final-expense-insurance" className="hover:text-harbor">Final Expense Insurance</Link> / Biggest Mistakes
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Procurement errors in final expense insurance: a professional analysis
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Each of the following errors is readily avoidable with appropriate advance awareness.
          None require specialized expertise to circumvent — the following four represent the
          most frequently observed errors among applicants.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Error 1: reliance on a single quotation
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          The most frequently observed error involves accepting the first carrier or agent
          consulted without comparative evaluation. Each carrier establishes independent health
          questions, look-back periods, and pricing structures — an identical applicant profile
          may yield materially different outcomes across carriers.{" "}
          <Link href="/pre-existing-conditions#why-carriers-differ" className="text-harbor-mid underline">
            The analysis of inter-carrier variation
          </Link>{" "}
          addresses this dynamic prior to accepting an initial offer as definitive.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Error 2: guaranteed-issue selection where simplified issue was available
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Guaranteed issue eliminates health questions but carries a materially higher cost for
          equivalent coverage, in addition to a waiting period. Certain applicants select this
          structure by default assumption, or because it was the initial offering presented,
          without determining whether simplified issue — generally lower cost and effective
          immediately — was in fact available.
        </p>
        <PolicyTypesTable />

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Error 3: inaccurate health disclosure
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Understating or omitting a health condition to secure a more favorable rate or avoid
          decline presents a substantive downstream risk. Should a claim arise during the
          contestability period — during which a carrier retains authority to verify disclosed
          information against medical and prescription records — a discrepancy identified at that
          juncture may result in claim denial or reduced benefit payment, at the point of greatest
          financial need for survivors. Accurate initial disclosure preserves the coverage for
          which premiums are paid.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Error 4: policy lapse following a missed payment
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A single missed premium payment does not necessarily result in coverage termination.
          Policies incorporate a grace period — typically approximately 30 days, subject to
          variation by carrier and jurisdiction — during which payment may be remitted prior to
          formal lapse. The substantive error is not the missed payment itself, but rather the
          assumption that coverage has terminated without contacting the carrier or agent within
          the applicable grace period. Maintaining current payment information and promptly
          addressing payment failures preserves previously funded coverage.
        </p>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            Request a Professional Coverage Review
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/final-expense-insurance/buy-online" className="font-semibold text-harbor-mid hover:underline">
              The post-quotation process →
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
