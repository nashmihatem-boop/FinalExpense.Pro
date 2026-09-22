import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Policy Loans Against Cash Value: A Professional Overview",
  description:
    "A professional overview of how a policy loan against a whole life policy's cash value operates, and its documented effect on the death benefit if left unpaid.",
  openGraph: { title: "Policy Loans Against Cash Value: A Professional Overview", description: "A professional overview of how a policy loan against a whole life policy's cash value operates, and its documented effect on the death benefit if left unpaid." },

  twitter: { title: "Policy Loans Against Cash Value: A Professional Overview", description: "A professional overview of how a policy loan against a whole life policy's cash value operates, and its documented effect on the death benefit if left unpaid." },
};

export default function BorrowFromPolicyPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/managing-your-policy" className="hover:text-harbor">Managing Your Policy</Link> / Borrowing Against Your Policy
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Policy loans against cash value: a professional overview
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Final expense policies are structured as whole life insurance, which accumulates cash
          value in addition to the death benefit. Where a policy has been in force for a
          sufficient period, a policy loan against that value is typically available, though it
          operates under materially different terms than a conventional bank loan.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          The nature of the underlying asset
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Cash value constitutes a distinct, gradually accumulating component of a whole life
          policy — separate from the death benefit and unavailable at issuance. It accrues
          progressively as premiums are paid, typically accelerating as the policy matures.
          Borrowing is limited to the amount of cash value actually accumulated, not the policy's
          full face amount, meaning a recently issued policy may have little or no accumulated
          value available.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Mechanics of the loan
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Because the loan is secured against an asset the policyholder already owns, it typically
          does not require a credit check or formal approval process. Interest accrues on the
          outstanding balance at a carrier-determined rate, and repayment is generally not subject
          to a fixed schedule — the policyholder may repay on a self-determined timeline, or not
          at all. This flexibility carries a specific professional consideration addressed below.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          The consequence of an unpaid balance
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Any outstanding loan balance, inclusive of accrued interest, is deducted from the death
          benefit at the time a claim is paid, directly reducing the beneficiary's proceeds. Should
          the balance be permitted to accrue to a level approaching the policy's total cash value,
          the policy may lapse, terminating coverage entirely. This risk is the professional basis
          for treating a policy loan as a material financial obligation rather than a cost-free
          resource.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">Prior to initiating a loan</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            Request from the carrier: current cash value, the applicable interest rate, the
            accrual methodology, and the precise effect an unpaid balance would have on the death
            benefit if never repaid. The policy's most recent in-force illustration or annual
            statement typically provides these figures directly.
          </p>
        </div>

        <div className="mt-14 text-center">
          <Button as="link" href={siteConfig.supportPhoneHref} variant="outline" size="lg">
            Call {siteConfig.supportPhoneDisplay}
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/managing-your-policy" className="font-semibold text-harbor-mid hover:underline">
              ← Back to Managing Your Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
