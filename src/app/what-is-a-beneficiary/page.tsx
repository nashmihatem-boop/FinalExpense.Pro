import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Beneficiary Designation: A Professional Explanation",
  description:
    "A professional explanation of beneficiary designation — eligible parties, primary vs. contingent structure, and designation maintenance requirements.",
  openGraph: { title: "Beneficiary Designation: A Professional Explanation", description: "A professional explanation of beneficiary designation — eligible parties, primary vs. contingent structure, and designation maintenance requirements." },

  twitter: { title: "Beneficiary Designation: A Professional Explanation", description: "A professional explanation of beneficiary designation — eligible parties, primary vs. contingent structure, and designation maintenance requirements." },
};

export default function WhatIsABeneficiaryPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Beneficiary designation: a professional explanation
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          A beneficiary is the designated party — an individual, multiple individuals, or an
          entity — entitled to receive a policy&apos;s death benefit. Designation is procedurally
          straightforward, yet substantively significant, as it determines the ultimate recipient
          of the policy&apos;s proceeds.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Eligible beneficiary designations
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Designation of an individual — a spouse, adult child, or other family member — represents
          the most common structure, though additional structures are available. Multiple
          beneficiaries may be designated, with specified percentage allocations rather than an
          assumed equal split. A trust may also be designated, typically where specific
          distribution instructions are required. Designation of one&apos;s estate is permissible
          but generally disadvantageous, as proceeds are then subject to probate prior to
          distribution, undermining the efficiency of direct designation.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Primary and contingent beneficiary structure
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A primary beneficiary holds first entitlement to the death benefit. A contingent
          beneficiary receives proceeds only where all primary beneficiaries are unable to do so,
          typically due to predeceasing the insured. Contingent designation is optional; its
          absence, however, creates exposure — proceeds with no eligible beneficiary typically
          default to the insured&apos;s estate, incurring probate cost and delay.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Maintenance of designation accuracy
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A beneficiary designation does not update automatically in response to life events.
          Marriage, divorce, the birth of a child, or the death of a previously designated
          beneficiary can each render an existing designation inaccurate or invalid absent active
          review. Insurers remit proceeds strictly according to the designation on file,
          irrespective of testamentary instruments or presumed intent, making periodic review
          following material life events advisable. Updates are typically processed through a
          straightforward request to the insurer or agent, without requiring policy reissuance.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Designation practice for final expense policies
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          For final expense policies specifically, the designated beneficiary is typically the
          individual expected to manage arrangements and remit payment following death — frequently
          a spouse or adult child, independent of testamentary executor designation. Direct
          designation, rather than default designation of the estate, enables expedited
          disbursement without dependency on estate administration timelines.
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
