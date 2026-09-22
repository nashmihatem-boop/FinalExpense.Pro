import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Whole Life Insurance: A Structural Overview",
  description:
    "A professional overview of whole life insurance: permanent coverage duration, level premium structure, guaranteed death benefit, and cash value accumulation.",
  openGraph: { title: "Whole Life Insurance: A Structural Overview", description: "A professional overview of whole life insurance: permanent coverage duration, level premium structure, guaranteed death benefit, and cash value accumulation." },

  twitter: { title: "Whole Life Insurance: A Structural Overview", description: "A professional overview of whole life insurance: permanent coverage duration, level premium structure, guaranteed death benefit, and cash value accumulation." },
};

export default function WhatIsWholeLifeInsurancePage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Whole life insurance: a structural overview
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Whole life insurance constitutes a category of permanent life insurance, structured to
          remain in force for the insured&apos;s entire life rather than expiring after a defined
          term, as with term insurance. In exchange for a level premium, the policy guarantees a
          death benefit for the duration the policy remains active, while concurrently accumulating
          cash value.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Duration of coverage
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          The defining characteristic is structural permanence. Provided premiums are remitted, a
          whole life policy does not terminate at a term&apos;s conclusion and does not require
          renewal or re-underwriting at a later date. Coverage remains in force for the
          insured&apos;s lifetime, which accounts for its use in contexts requiring indefinite
          coverage, as distinct from coverage addressing a defined period such as a mortgage term.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Level premium structure
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          The premium established at policy issuance remains fixed for the policy&apos;s duration,
          notwithstanding the insured&apos;s increasing age-related mortality risk. This is achieved
          through pricing based on issue age, with cost distributed evenly across the policy term
          rather than escalating periodically, as occurs with certain other insurance structures.
          The result is a predictable, unchanging payment obligation.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Cash value accumulation
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A portion of each premium payment is allocated to a cash value component, which
          accumulates according to a guaranteed schedule specified within the policy contract. This
          constitutes a savings-like feature integral to the contract structure; depending on
          policy terms, it may be accessible during the insured&apos;s lifetime, though withdrawal
          may reduce the eventual death benefit absent repayment. This feature, while legitimate, is
          generally secondary to the guaranteed death benefit for policies of modest face value.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Death benefit guarantee
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Throughout the policy&apos;s active duration, the death benefit remains guaranteed at a
          fixed amount established at issuance, independent of investment performance or market
          conditions. This guarantee constitutes the primary rationale for selecting whole life over
          alternative permanent structures: the benefit represents a certain, rather than projected,
          amount.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Final expense insurance as a whole life subcategory
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Final expense insurance does not constitute a distinct category from whole life insurance;
          rather, it is whole life insurance structured and underwritten for a specific application
          — addressing end-of-life expenses rather than long-term income replacement. It typically
          involves reduced face amounts, simplified underwriting, and more accessible qualification
          relative to larger whole life policies, while retaining the same core guarantees of level
          premium and guaranteed death benefit. See{" "}
          <Link href="/final-expense-insurance" className="font-semibold text-harbor-mid hover:underline">
            how final expense insurance works
          </Link>{" "}
          for further detail specific to this application.
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
