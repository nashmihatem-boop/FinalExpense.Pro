import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Final Expense Insurance in Your 60s: Underwriting Considerations",
  description:
    "A professional analysis of underwriting factors applicable in one's 60s, including the increasing relevance of pre-existing conditions.",
  openGraph: { title: "Final Expense Insurance in Your 60s: Underwriting Considerations", description: "A professional analysis of underwriting factors applicable in one's 60s, including the increasing relevance of pre-existing conditions." },

  twitter: { title: "Final Expense Insurance in Your 60s: Underwriting Considerations", description: "A professional analysis of underwriting factors applicable in one's 60s, including the increasing relevance of pre-existing conditions." },
};

export default function FinalExpenseInsuranceInYour60sPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/final-expense-insurance" className="hover:text-harbor">Final Expense Insurance</Link> / Your 60s
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Final expense insurance in your 60s: underwriting considerations
        </h1>
        <div className="relative mt-8 aspect-[16/7] overflow-hidden rounded-2xl">
          <Image
            src="/photos/senior-walking-outdoors.jpg"
            alt="A couple in their 60s walking together outdoors"
            fill
            sizes="(min-width: 640px) 768px, 100vw"
            className="object-cover"
          />
        </div>
        <p className="mt-8 text-lg leading-relaxed text-charcoal/80">
          A substantial proportion of applicants initiate final expense coverage during their
          sixties, frequently coinciding with retirement, the arrival of a first grandchild, or
          direct experience settling a parent's or associate's final expenses. This remains a
          favorable decade for application, notwithstanding certain distinctions from the
          preceding decade.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          A frequently represented application age
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Retirement frequently prompts serious consideration of fixed costs, legacy planning, and
          advance resolution of end-of-life financial matters. Applicants in their sixties remain
          comfortably within standard carrier age parameters, with the complete range of coverage
          amounts and both principal policy structures available. Carriers additionally maintain
          substantial underwriting experience specific to this age cohort, given its frequency of
          representation among applicants.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Increasing relevance of pre-existing conditions
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Relative to the fifties, a greater proportion of applicants in their sixties manage at
          least one ongoing condition — hypertension, hyperlipidemia, joint replacement, sleep
          apnea, or early-stage diabetes. This does not preclude a favorable outcome. The majority
          of these conditions, when stable and appropriately managed, continue to qualify for
          simplified issue and frequently result in level, day-one coverage. The{" "}
          <Link href="/pre-existing-conditions" className="text-harbor-mid underline">
            pre-existing conditions reference
          </Link>{" "}
          addresses typical carrier evaluation of these conditions and associated classification
          outcomes.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          The continuing cost of deferral
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Final expense pricing is established at the applicant's age on the date of application
          and subsequently fixed for the policy's duration. Consequently, a rate secured during
          one's sixties will typically exceed the cost of equivalent coverage secured during one's
          fifties, though it remains preferable to deferral into one's seventies for identical
          coverage. Where the prior decade has already elapsed, immediate application represents
          the more favorable course relative to further deferral.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Preparation prior to application
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Prior to application, compiling the following is advisable: diagnosed conditions and
          approximate onset dates, current medications, and general treatment history. Carriers
          verify prescription history against disclosed information, such that accuracy at the
          outset mitigates the risk of subsequent discrepancy. The{" "}
          <Link href="/pre-existing-conditions#how-to-prepare" className="text-harbor-mid underline">
            pre-application preparation reference
          </Link>{" "}
          provides comprehensive guidance.
        </p>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            Request a Professional Coverage Review
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/final-expense-insurance-in-your-70s" className="font-semibold text-harbor-mid hover:underline">
              Considerations applicable to your 70s →
            </Link>
          </p>
          <p className="mt-2 text-sm text-charcoal/60">
            <Link href="/final-expense-insurance-in-your-50s" className="font-semibold text-harbor-mid hover:underline">
              ← Considerations applicable to your 50s
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
