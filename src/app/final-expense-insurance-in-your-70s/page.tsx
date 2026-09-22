import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Final Expense Insurance in Your 70s: The Modal Applicant Age",
  description:
    "A professional analysis of the 70s as the modal application age for final expense insurance, and the appropriate handling of health disclosures.",
  openGraph: { title: "Final Expense Insurance in Your 70s: The Modal Applicant Age", description: "A professional analysis of the 70s as the modal application age for final expense insurance, and the appropriate handling of health disclosures." },

  twitter: { title: "Final Expense Insurance in Your 70s: The Modal Applicant Age", description: "A professional analysis of the 70s as the modal application age for final expense insurance, and the appropriate handling of health disclosures." },
};

export default function FinalExpenseInsuranceInYour70sPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/final-expense-insurance" className="hover:text-harbor">Final Expense Insurance</Link> / Your 70s
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Final expense insurance in your 70s: the modal applicant age
        </h1>
        <div className="relative mt-8 aspect-[16/7] overflow-hidden rounded-2xl">
          <Image
            src="/photos/senior-reading-porch.jpg"
            alt="A woman in her 70s reading on a porch"
            fill
            sizes="(min-width: 640px) 768px, 100vw"
            className="object-cover"
          />
        </div>
        <p className="mt-8 text-lg leading-relaxed text-charcoal/80">
          If a single decade defines the core market for this product, it is this one. Applicants
          in their seventies represent the largest single age cohort for final expense insurance,
          resulting in correspondingly extensive carrier underwriting experience with this
          demographic relative to any other.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          The primary demographic for this product
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Applicants in their seventies constitute the largest proportion of final expense
          policyholders. Both simplified-issue and guaranteed-issue products see substantial
          utilization at this age, and the majority of simplified-issue questionnaires are
          specifically calibrated to this demographic. Applicants initiating inquiry at this age
          are not disadvantaged by timing — this cohort represents the product's principal target
          market.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Increased prevalence of disclosable conditions
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          By the seventh decade, a greater proportion of applicants present at least one diagnosed
          condition — cardiac history, diabetes, prior cancer diagnosis, COPD, or arthritis. This
          prevalence is statistically typical rather than disqualifying, and constitutes the
          specific subject matter addressed by the{" "}
          <Link href="/pre-existing-conditions" className="text-harbor-mid underline">
            pre-existing conditions reference
          </Link>
          , which details typical carrier evaluation methodology and associated classification
          outcomes.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Disclosure does not necessitate guaranteed issue
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A common misconception holds that any disclosable condition necessitates guaranteed-
          acceptance coverage; this is frequently inaccurate. Level and graded classifications
          through simplified issue remain readily attainable at this age, contingent on condition
          stability and management quality. The{" "}
          <Link href="/pre-existing-conditions#tiers" className="text-harbor-mid underline">
            classification reference
          </Link>{" "}
          addresses the level, graded, modified, and guaranteed-acceptance framework in detail
          prior to assuming a specific outcome.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Heightened importance of carrier comparison
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Each carrier independently establishes health questions and look-back periods, and given
          the elevated prevalence of disclosable conditions among seventy-year-old applicants
          relative to younger cohorts, the differential between an appropriately matched carrier
          and an arbitrarily selected one widens materially at this age. The{" "}
          <Link href="/pre-existing-conditions#why-carriers-differ" className="text-harbor-mid underline">
            analysis of inter-carrier variation
          </Link>{" "}
          addresses this dynamic prior to carrier selection.
        </p>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            Request a Professional Coverage Review
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/final-expense-insurance-in-your-80s" className="font-semibold text-harbor-mid hover:underline">
              Considerations applicable to your 80s →
            </Link>
          </p>
          <p className="mt-2 text-sm text-charcoal/60">
            <Link href="/final-expense-insurance-in-your-60s" className="font-semibold text-harbor-mid hover:underline">
              ← Considerations applicable to your 60s
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
