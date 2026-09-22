import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Policy Cancellation: A Professional Pre-Cancellation Review",
  description:
    "A professional review of how life insurance policy cancellation works, the disposition of any cash value, and the underwriting factors to verify beforehand.",
  openGraph: { title: "Policy Cancellation: A Professional Pre-Cancellation Review", description: "A professional review of how life insurance policy cancellation works, the disposition of any cash value, and the underwriting factors to verify beforehand." },

  twitter: { title: "Policy Cancellation: A Professional Pre-Cancellation Review", description: "A professional review of how life insurance policy cancellation works, the disposition of any cash value, and the underwriting factors to verify beforehand." },
};

export default function CancelPolicyPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/managing-your-policy" className="hover:text-harbor">Managing Your Policy</Link> / Cancel a Policy
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Policy cancellation: a professional pre-cancellation review
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Cancellation is, in certain circumstances, the appropriate course of action. However,
          because life insurance pricing is fundamentally tied to age at issuance, a professional
          review of the following factors is advisable before proceeding, so that cancellation
          does not result in a net financial cost.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          The cancellation procedure
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Cancellation typically requires only a request to the carrier, submitted in writing or
          by telephone. Where the policy holds cash value, this action is generally termed
          &quot;surrender.&quot; In either case, coverage terminates as of a specified date, with
          no further premium obligation thereafter.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Disposition of accumulated cash value
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A whole life policy with accumulated cash value typically distributes that value upon
          surrender, net of any outstanding obligation — including an unpaid{" "}
          <Link href="/managing-your-policy/borrow-from-policy" className="text-harbor-mid underline">
            policy loan
          </Link>
          . A term policy carries no cash value to distribute. Surrendered cash value may carry
          tax consequences depending on circumstances, and confirmation with the carrier or a tax
          professional is advisable prior to finalizing.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Additional factors warranting verification
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Confirm whether any balance or fee applies to the cancellation itself, and obtain written
          confirmation of the cancellation to eliminate ambiguity regarding the effective date. Where
          another party — a spouse, adult child, or other family member — relies on this specific
          policy within their own planning, a professional conversation with that party is
          advisable prior to proceeding.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">The primary consideration</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            Because pricing is generally determined by age (and in some cases health) at
            application, a subsequently issued policy will almost invariably carry a higher
            premium than the current one, irrespective of any change in health status. Where
            cancellation is intended to facilitate a replacement, professional practice dictates
            securing and confirming the replacement policy before terminating existing coverage.
          </p>
        </div>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            Request a Professional Coverage Review
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            Have questions first?{" "}
            <a href={siteConfig.supportPhoneHref} className="font-semibold text-harbor-mid hover:underline">
              Call {siteConfig.supportPhoneDisplay}
            </a>
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
