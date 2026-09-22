import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Life Insurance Terminology: A Professional Reference",
  description:
    "A professional reference defining the life insurance terminology used throughout this site, from beneficiary and death benefit to lapse and look-back period.",
  openGraph: { title: "Life Insurance Terminology: A Professional Reference", description: "A professional reference defining the life insurance terminology used throughout this site, from beneficiary and death benefit to lapse and look-back period." },

  twitter: { title: "Life Insurance Terminology: A Professional Reference", description: "A professional reference defining the life insurance terminology used throughout this site, from beneficiary and death benefit to lapse and look-back period." },
};

const TERMS: { term: string; definition: ReactNode }[] = [
  {
    term: "Beneficiary",
    definition: (
      <>
        The party or parties designated to receive policy proceeds upon the insured's death —
        an individual, several individuals jointly, or an organization. Subject to policy terms,
        this designation may be revised at the policyholder's discretion throughout the
        policy's active term.
      </>
    ),
  },
  {
    term: "Death benefit",
    definition: (
      <>
        The sum disbursed to the beneficiary upon claim approval following the insured's death.
        This payment represents the central obligation underlying the policy.
      </>
    ),
  },
  {
    term: "Premium",
    definition: (
      <>
        The recurring payment obligation, typically assessed monthly, required to sustain a
        policy's in-force status. Extended non-payment may result in termination of coverage.
      </>
    ),
  },
  {
    term: "Face amount",
    definition: (
      <>
        The contractually specified coverage figure serving as the baseline for benefit
        calculation, prior to application of any early-duration modification such as a graded or
        modified payout schedule.
      </>
    ),
  },
  {
    term: "Cash value",
    definition: (
      <>
        An accumulation feature embedded in whole life and final expense products, distinct from
        the death benefit and available to the policyholder during the insured's lifetime.
        Consult the{" "}
        <Link href="/cash-value-life-insurance" className="font-semibold text-harbor-mid hover:underline">
          detailed cash value analysis
        </Link>{" "}
        for further explanation.
      </>
    ),
  },
  {
    term: "Simplified issue",
    definition: (
      <>
        An underwriting track that dispenses with medical examination in favor of a condensed
        health questionnaire, subsequently verified against records such as prescription history.
        For its application to specific health conditions, refer to the{" "}
        <Link href="/pre-existing-conditions" className="font-semibold text-harbor-mid hover:underline">
          pre-existing conditions reference
        </Link>
        .
      </>
    ),
  },
  {
    term: "Guaranteed issue",
    definition: (
      <>
        Also termed guaranteed acceptance. An underwriting track requiring neither health
        questions nor medical examination — applicants within the eligible age band are accepted
        unconditionally, generally subject to a waiting period applicable to natural-cause death.
      </>
    ),
  },
  {
    term: "Level / graded / modified",
    definition: (
      <>
        The three principal benefit structures governing payout during a policy's initial term.
        Level provides the complete benefit immediately. Graded provides a partial, annually
        increasing amount throughout the initial term. Modified returns premium payments, often
        with accrued interest, in place of a benefit during that period. Each structure converts
        to full benefit payment upon expiration of the initial term.
      </>
    ),
  },
  {
    term: "Contestability period",
    definition: (
      <>
        A defined period, typically the initial two policy years, during which the carrier
        retains authority to investigate and potentially contest a claim on grounds of material
        misrepresentation in the original application.
      </>
    ),
  },
  {
    term: "Underwriting",
    definition: (
      <>
        The carrier's evaluative process — encompassing health disclosures, prescription
        verification, and related review — culminating in a determination regarding policy
        issuance and applicable terms.
      </>
    ),
  },
  {
    term: "Look-back period",
    definition: (
      <>
        The temporal scope governing a carrier's inquiry into prior diagnosis, treatment, or
        hospitalization. This duration is not standardized and varies by carrier and by the
        specific condition under review.
      </>
    ),
  },
  {
    term: "Free-look period",
    definition: (
      <>
        A defined interval following policy delivery during which cancellation for any reason
        entitles the policyholder to complete reimbursement of premiums remitted.
      </>
    ),
  },
  {
    term: "Grace period",
    definition: (
      <>
        A specified interval subsequent to a missed premium due date during which coverage
        remains effective pending payment, prior to formal lapse.
      </>
    ),
  },
  {
    term: "Lapse",
    definition: (
      <>
        The termination event resulting from premium non-payment persisting beyond the grace
        period. Following lapse, coverage ceases to be effective.
      </>
    ),
  },
];

export default function LifeInsuranceGlossaryPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Life insurance terminology: a professional reference
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          This industry maintains specialized terminology that may be unfamiliar to applicants
          without prior exposure. The following reference provides precise definitions for terms
          referenced throughout this site.
        </p>

        <dl className="mt-10 divide-y divide-mist border-t border-mist">
          {TERMS.map((item) => (
            <div key={item.term} className="py-6">
              <dt className="font-display text-xl font-extrabold text-harbor">{item.term}</dt>
              <dd className="mt-2 text-base leading-relaxed text-charcoal/80">{item.definition}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            Request a Professional Coverage Review
          </Button>
        </div>
      </div>
    </div>
  );
}
