import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Beneficiary Designation Updates: Professional Procedure",
  description:
    "The professional procedure for updating a life insurance policy's beneficiary designation, and the circumstances under which a review is advisable.",
  openGraph: { title: "Beneficiary Designation Updates: Professional Procedure", description: "The professional procedure for updating a life insurance policy's beneficiary designation, and the circumstances under which a review is advisable." },

  twitter: { title: "Beneficiary Designation Updates: Professional Procedure", description: "The professional procedure for updating a life insurance policy's beneficiary designation, and the circumstances under which a review is advisable." },
};

export default function ChangeBeneficiaryPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/managing-your-policy" className="hover:text-harbor">Managing Your Policy</Link> / Change Your Beneficiary
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Beneficiary designation updates: professional procedure
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Updating a beneficiary designation is procedurally simpler than most policyholders
          anticipate — it has no effect on coverage, premium, or any other policy term. The
          process consists solely of notifying the carrier of the intended designation.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          An administrative form, not a new contract
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A beneficiary-change form, submitted in writing or through the carrier's online portal
          where available, is the standard mechanism. Upon processing, all other policy
          terms — coverage amount, premium, duration — remain unchanged. No reapplication or
          underwriting is required.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Primary and contingent designations
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          The primary beneficiary receives the death benefit in the first instance. A contingent
          beneficiary receives it only where the primary designation is no longer valid. Where one
          designation is being updated, a professional review of both simultaneously is advisable —
          see{" "}
          <Link href="/managing-your-policy/beneficiary-dies-before-you" className="text-harbor-mid underline">
            what happens if a beneficiary dies before you do
          </Link>{" "}
          for the professional rationale behind the contingent designation.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Circumstances that typically warrant an update
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Divorce, remarriage, the death of the currently designated party, the birth of a child
          or grandchild, or a change in intended recipient are the most commonly documented
          triggers. Policyholders also frequently update a designation years after initially
          naming a parent who has since died, redirecting the benefit to a spouse or child.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">A note regarding former spouses</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            Certain states automatically revoke a former spouse's beneficiary status upon divorce,
            but this varies by jurisdiction and should not be relied upon in isolation. Whether the
            intent is to remove or intentionally retain a former spouse's designation, submitting a
            formal beneficiary-change form is the reliable method of ensuring the policy reflects
            current intent.
          </p>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Recommended review frequency
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          No fixed schedule is mandated. Tying a review to major life events, or conducting one on
          a multi-year interval, is a professionally reasonable practice requiring only a brief
          call with the carrier.
        </p>

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
