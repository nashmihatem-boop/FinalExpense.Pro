import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Life Insurance and Death by Suicide: A Policy Analysis",
  description:
    "A professional analysis of how life insurance policies treat death by suicide, including the standard exclusion period and its underwriting rationale.",
  openGraph: { title: "Life Insurance and Death by Suicide: A Policy Analysis", description: "A professional analysis of how life insurance policies treat death by suicide, including the standard exclusion period and its underwriting rationale." },

  twitter: { title: "Life Insurance and Death by Suicide: A Policy Analysis", description: "A professional analysis of how life insurance policies treat death by suicide, including the standard exclusion period and its underwriting rationale." },
};

export default function DoesLifeInsuranceCoverSuicidePage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Life insurance and death by suicide: a policy analysis
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          This represents a sensitive and frequently raised question. The following provides a
          direct, factual response, together with a support resource for immediate need.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold text-harbor">Immediate support resource</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            The 988 Suicide &amp; Crisis Lifeline provides free, confidential support on a 24/7
            basis.{" "}
            <a href="tel:988" className="font-semibold text-harbor-mid hover:underline">
              Call or text 988
            </a>{" "}
            at any time support is needed.
          </p>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Summary determination
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          The substantial majority of life insurance policies, including final expense products,
          provide coverage for death by suicide, subject to a conditional limitation from policy
          inception. Nearly all policies incorporate a suicide exclusion period, typically
          encompassing the initial two years of coverage. A death by suicide occurring subsequent
          to this period is generally treated identically to any other covered cause of death,
          with full benefit disbursement to the beneficiary.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Underwriting rationale for the exclusion period
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          This provision does not reflect an assessment of any individual applicant — it
          constitutes a standard, industry-wide safeguard incorporated into policy underwriting
          generally. A substantial proportion of final expense policies utilize simplified-issue
          underwriting, wherein approval is granted based on responses to an abbreviated health
          questionnaire rather than comprehensive medical examination. The suicide exclusion
          period operates alongside the broader contestability period — during which a carrier
          retains authority to review a claim in detail — functioning as a standard safeguard for
          this expedited underwriting approach. The provision applies uniformly and automatically
          to all applicants as a standard contractual term, rather than representing an
          individualized determination.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Treatment during the exclusion period
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Where death by suicide occurs within the initial exclusion period, the majority of
          policies do not disburse the full death benefit. Instead, carriers typically return
          premiums paid into the policy, in certain cases with interest applied — a treatment
          structurally comparable to other early-period limitations characteristic of these
          policies. Upon expiration of the exclusion period, this limitation no longer applies,
          and the policy treats suicide equivalently to any other covered cause of death.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          A standard contractual provision, not an individualized determination
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          This point warrants reiteration: the exclusion period constitutes a standard, printed
          provision present in nearly every life insurance contract, irrespective of underwriting
          method. It is not subject to case-by-case carrier discretion and is not specific to any
          particular carrier or product category. Following its expiration, a suicide exclusion
          carries no greater bearing on claim determination than any other expired early-period
          contractual provision.
        </p>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            Request a Professional Coverage Review
          </Button>
        </div>
      </div>
    </div>
  );
}
