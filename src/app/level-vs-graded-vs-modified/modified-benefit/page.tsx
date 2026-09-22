import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Modified Benefit Coverage: A Structural Analysis",
  description:
    "A professional analysis of the return-of-premium-with-interest structure, its distinction from graded classification, and the associated health profile.",
  openGraph: { title: "Modified Benefit Coverage: A Structural Analysis", description: "A professional analysis of the return-of-premium-with-interest structure, its distinction from graded classification, and the associated health profile." },

  twitter: { title: "Modified Benefit Coverage: A Structural Analysis", description: "A professional analysis of the return-of-premium-with-interest structure, its distinction from graded classification, and the associated health profile." },
};

export default function ModifiedBenefitPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/level-vs-graded-vs-modified" className="hover:text-harbor">Level vs. Graded vs. Modified</Link> / Modified Benefit
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Modified benefit coverage: the return-of-premium-with-interest structure
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Modified classification addresses the same underlying underwriting challenge as graded
          classification — a health history presenting greater near-term risk than level pricing
          accommodates — through a distinct mechanism. Rather than a partial, incrementally
          increasing death benefit, a modified policy returns premiums paid, with interest, during
          its initial period. The following addresses the precise mechanics of this structure, its
          distinction from graded classification, and the associated health profile.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          The precise meaning of "modified" classification
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Consistent with any final expense policy, a modified policy is active from its issue
          date, with premiums due immediately. The distinction arises specifically in the event of
          natural-cause death during the policy's initial waiting period — commonly the first two
          years, with the precise duration determined by the individual contract. Rather than any
          portion of the death benefit, the beneficiary receives the premiums paid into the policy,
          returned with interest. Upon expiration of this period, the policy converts and functions
          identically to a level policy for its remaining duration: 100% of the face amount, for
          any covered cause of death.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold text-harbor">Accidental death provisions parallel graded classification</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            Accidental death is generally compensated in full immediately, irrespective of policy
            tenure. The return-of-premium structure applies specifically to natural-cause death
            during the waiting period — it does not alter treatment of accidental death.
          </p>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Distinction from graded classification
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          The distinction lies precisely in the amount disbursed should death occur during the
          waiting period. A{" "}
          <Link href="/level-vs-graded-vs-modified/graded-benefit" className="text-harbor-mid underline">
            graded policy
          </Link>{" "}
          continues to disburse a portion of the actual death benefit — a genuine, if partial,
          insurance payout that increases annually. A modified policy disburses no portion of the
          death benefit during this period; the beneficiary instead receives what functions as a
          refund of premiums paid, with interest, rather than a genuine insurance benefit. Both
          structures convert to the full death benefit upon expiration of the waiting period — the
          distinction pertains exclusively to the outcome during the initial years, not to
          subsequent treatment.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Rationale for the interest component
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          The interest component exists to ensure the beneficiary does not receive merely the
          nominal amount paid in, without recognition of time value. The specific rate and
          calculation methodology are established by the individual carrier and contract, warranting
          confirmation of the precise terms within the policy illustration rather than assumption
          of a specific figure — structurally, however, the provision is designed to exceed a flat
          refund, notwithstanding that it remains distinct from the full death benefit.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Health profile typically associated with this classification
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Modified classification typically applies one increment further along the same risk
          spectrum as graded classification — a health history a carrier assesses as presenting
          somewhat greater near-term risk than typical graded presentations, without meeting the
          threshold for an outright decline. Chronic pancreatitis illustrates this distinction in
          practice: when well-managed with infrequent exacerbations, it frequently qualifies for
          graded classification; with more frequent exacerbations or associated hospitalization,
          the identical underlying condition frequently shifts to modified classification instead.
          The determining factor relates less to the specific diagnosis than to the degree of
          recent clinical activity or instability.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Determining applicability
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          The most reliable method for determination involves evaluation of a specific health
          history against multiple carriers prior to formal application, as the threshold each
          carrier establishes between graded, modified, and guaranteed-acceptance classifications
          is independently determined. An independent agent can perform this evaluation. Where a
          history indicates reduced near-term flexibility beyond this threshold, guaranteed
          acceptance — addressed comprehensively in{" "}
          <Link href="/pre-existing-conditions" className="text-harbor-mid underline">
            the complete pre-existing conditions reference
          </Link>{" "}
          — remains available as a structural backstop.
        </p>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            Request a Professional Coverage Review
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/level-vs-graded-vs-modified" className="font-semibold text-harbor-mid hover:underline">
              ← Return to the comparative analysis
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
