import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Death Benefit Structure: A Professional Explanation",
  description:
    "A professional explanation of death benefit disbursement, tax treatment, permissible use, and coverage amount determination.",
  openGraph: { title: "Death Benefit Structure: A Professional Explanation", description: "A professional explanation of death benefit disbursement, tax treatment, permissible use, and coverage amount determination." },

  twitter: { title: "Death Benefit Structure: A Professional Explanation", description: "A professional explanation of death benefit disbursement, tax treatment, permissible use, and coverage amount determination." },
};

export default function WhatIsADeathBenefitPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Death benefit structure: a professional explanation
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          A death benefit constitutes the amount an insurer disburses to the designated beneficiary
          following the insured&apos;s death. It represents the fundamental purpose of a life
          insurance policy, with all other contractual provisions defining the timing, amount, and
          conditions governing this disbursement.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Disbursement structure
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Death benefits are typically disbursed as a single lump-sum payment, remitted directly to
          the beneficiary upon claim approval. Certain policies offer alternative structures,
          including installment-based disbursement over a defined period; however, lump-sum
          disbursement remains the prevailing structure, and the one underlying most final expense
          policies.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Tax treatment
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Death benefits are generally received free of income tax by the designated beneficiary —
          a consistent characteristic of life insurance as a financial instrument. Tax treatment
          may nonetheless vary based on policy ownership structure or specific circumstances,
          warranting consultation with a qualified tax professional rather than a general assumption
          of uniform treatment.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Permissible use of proceeds
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          No restriction governs the use of death benefit proceeds. Unlike a prepaid funeral
          arrangement, which is typically bound to services from a specific provider, death benefit
          proceeds are disbursed as unrestricted cash. While frequently applied toward funeral
          expenses, proceeds may equally address medical debt, ongoing living expenses, or any
          other need identified by the beneficiary.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Determination of coverage amount
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          The death benefit amount is determined by the applicant at policy issuance, not by the
          insurer, based on the intended coverage purpose. A policy structured specifically for
          end-of-life expenses typically involves a more modest amount than one structured for
          income replacement. See{" "}
          <Link href="/final-expense-insurance" className="font-semibold text-harbor-mid hover:underline">
            how final expense insurance works
          </Link>{" "}
          regarding coverage amount selection, and{" "}
          <Link href="/what-is-a-beneficiary" className="font-semibold text-harbor-mid hover:underline">
            beneficiary designation
          </Link>{" "}
          regarding eligible recipients.
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
