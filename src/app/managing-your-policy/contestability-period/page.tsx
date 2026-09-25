import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SafeLink } from "@/components/safe-link";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "The Contestability Period: Professional Definition",
  description:
    "A professional definition of the standard two-year contestability period, its underwriting purpose, and its distinction from a graded or modified waiting period.",
  openGraph: { title: "The Contestability Period: Professional Definition", description: "A professional definition of the standard two-year contestability period, its underwriting purpose, and its distinction from a graded or modified waiting period." },

  twitter: { title: "The Contestability Period: Professional Definition", description: "A professional definition of the standard two-year contestability period, its underwriting purpose, and its distinction from a graded or modified waiting period." },
};

export default function ContestabilityPeriodPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/managing-your-policy" className="hover:text-harbor">Managing Your Policy</Link> / The Contestability Period
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          The contestability period: professional definition
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          The term &quot;two years&quot; appears in multiple distinct contexts within life
          insurance. The contestability period is one specific, industry-standard application of
          that timeframe, and a precise professional understanding of its scope is warranted.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Formal definition
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          The contestability period is a standard contractual window — typically the first two
          years a policy is in force — during which the carrier retains the right to conduct a
          detailed review of a claim to verify the accuracy of the original application prior to
          disbursement. Upon expiration of this window, the policy is generally deemed
          incontestable on these grounds, with documented fraud remaining a standing exception.
          Precise terms are governed by the individual policy and should be confirmed with the
          carrier.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Underwriting rationale
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          This provision preserves the actuarial integrity that keeps premiums equitable across the
          insured population. Where an applicant misrepresented health status to obtain coverage
          for which they would not otherwise have qualified, the contestability period provides
          the carrier's mechanism to identify this prior to a substantial disbursement — thereby
          maintaining fair pricing for the majority of applicants who disclosed accurately.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Circumstances triggering heightened review
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A death occurring within this window, particularly one attributable to an undisclosed
          health condition, is the primary trigger for enhanced review. Such review does not
          constitute denial — it reflects standard verification of the application against
          medical and prescription records prior to authorizing payment.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Distinction from graded or modified waiting periods
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          These two concepts are frequently conflated despite governing distinct matters, as the
          following clarifies.
        </p>
        <div className="mt-6 overflow-x-auto rounded-2xl border border-mist">
          <table className="w-full min-w-[480px] border-collapse text-left">
            <thead>
              <tr className="border-b border-mist bg-canvas-alt">
                <th className="px-5 py-3.5 text-sm font-semibold text-charcoal/60">Concept</th>
                <th className="px-5 py-3.5 font-display text-sm font-extrabold text-harbor">What it governs</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-mist">
                <td className="px-5 py-4 text-sm font-semibold text-charcoal/70">Contestability period</td>
                <td className="px-5 py-4 text-sm text-charcoal">
                  The carrier&apos;s right to review a claim for misrepresentation. Applies broadly, regardless of underwriting type.
                </td>
              </tr>
              <tr>
                <td className="px-5 py-4 text-sm font-semibold text-charcoal/70">Graded, modified, or guaranteed-acceptance wait</td>
                <td className="px-5 py-4 text-sm text-charcoal">
                  How much of the death benefit is paid for a natural-cause death in the early years, set at the time you&apos;re underwritten.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Where a health condition is relevant to the underlying decision, our{" "}
          <Link href="/pre-existing-conditions" className="text-harbor-mid underline">
            guide to pre-existing conditions
          </Link>{" "}
          addresses graded and modified benefit schedules in professional detail.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">Material vs. immaterial discrepancy</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            Review during this period targets material misrepresentation — an answer that would
            have altered the underwriting outcome — rather than minor documentation
            inconsistencies. Policies past their second anniversary are generally no longer subject
            to this exposure.
          </p>
        </div>

        <div className="mt-14 text-center">
          <Button as="link" href={siteConfig.supportPhoneHref} variant="outline" size="lg">
            Call {siteConfig.supportPhoneDisplay}
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            Evaluating new coverage?{" "}
            <SafeLink href="/get-quote" className="font-semibold text-harbor-mid hover:underline">
              Request a Professional Coverage Review →
            </SafeLink>
          </p>
          <p className="mt-3 text-sm text-charcoal/60">
            <Link href="/managing-your-policy" className="font-semibold text-harbor-mid hover:underline">
              ← Back to Managing Your Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
