import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Predeceased Beneficiary Provisions: A Professional Overview",
  description:
    "A professional overview of what governs a policy when a named beneficiary predeceases the insured, and why a contingent designation is professionally recommended.",
  openGraph: { title: "Predeceased Beneficiary Provisions: A Professional Overview", description: "A professional overview of what governs a policy when a named beneficiary predeceases the insured, and why a contingent designation is professionally recommended." },

  twitter: { title: "Predeceased Beneficiary Provisions: A Professional Overview", description: "A professional overview of what governs a policy when a named beneficiary predeceases the insured, and why a contingent designation is professionally recommended." },
};

export default function BeneficiaryDiesBeforeYouPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/managing-your-policy" className="hover:text-harbor">Managing Your Policy</Link> / If Your Beneficiary Dies Before You
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Predeceased beneficiary provisions: a professional overview
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          This scenario arises with meaningful frequency, particularly on policies that have been
          in force for an extended period — a spouse, sibling, or other named beneficiary
          predeceases the insured, and the designation is never formally updated. The following is
          a professional explanation of what that means for the policy, and the corrective step
          required.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          A policy does not self-update
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Carriers do not automatically remove or reassign a beneficiary who has died. The policy
          continues to list that individual as a matter of record until the policyholder formally
          submits a change, regardless of elapsed time. Coverage itself remains unaffected in the
          interim — the issue surfaces only upon a subsequent claim.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          The governing outcome absent an update
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Where a contingent (secondary) beneficiary was designated at application, the death
          benefit generally passes to that party without complication. Absent a contingent
          designation, and where the primary beneficiary has predeceased the insured, the benefit
          typically defaults to the insured's estate rather than to a specific individual. This
          ordinarily necessitates probate — a judicial process that extends the timeline, becomes
          part of the public record, and may in some jurisdictions be accessible to the estate's
          creditors prior to distribution. The precise outcome is governed by the specific policy
          and state, and should be confirmed directly with the carrier rather than assumed.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Why a contingent designation is professionally advised
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Designating a contingent beneficiary incurs no cost and requires only a few minutes, yet
          it establishes a clear secondary recipient should the primary designation no longer be
          valid. It is among the simplest available measures to ensure the benefit reaches an
          intended individual rather than defaulting to the estate.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">Recommended verification</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            Contact the carrier directly and request confirmation of the current primary and
            contingent beneficiary designations. This verification carries no cost, regardless of
            whether the designation is believed to be current. Where an update is required, the
            process is a standard form — see{" "}
            <Link href="/managing-your-policy/change-beneficiary" className="text-harbor-mid underline">
              how to change your beneficiary
            </Link>
            .
          </p>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Additional circumstances warranting review
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A beneficiary's death is one of several circumstances that can render a designation
          outdated. Divorce, remarriage, the birth of a child or grandchild, or a change in
          relationship with the currently named party are all common, professionally recognized
          triggers for review. Where the designation has not been reviewed in several years,
          verification is advisable.
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
