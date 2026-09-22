import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Filing a Death Benefit Claim: Professional Procedure",
  description:
    "The professional, five-step procedure a beneficiary follows to file a death benefit claim, from locating the policy to submitting documentation.",
  openGraph: { title: "Filing a Death Benefit Claim: Professional Procedure", description: "The professional, five-step procedure a beneficiary follows to file a death benefit claim, from locating the policy to submitting documentation." },

  twitter: { title: "Filing a Death Benefit Claim: Professional Procedure", description: "The professional, five-step procedure a beneficiary follows to file a death benefit claim, from locating the policy to submitting documentation." },
};

export default function HowToFileAClaimPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/managing-your-policy" className="hover:text-harbor">Managing Your Policy</Link> / How to File a Claim
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Filing a death benefit claim: professional procedure
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Our condolences on your loss. This process is administrative in nature rather than
          complex, and the following professional procedure outlines each step so expectations are
          clear from the outset.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          1. Locate the policy documentation
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Identify the policy document, a declarations page, or a recent premium statement — these
          typically contain the carrier name and policy number, expediting the process. Where none
          are available, our{" "}
          <Link href="/managing-your-policy/find-a-lost-policy" className="text-harbor-mid underline">
            guide to locating an undocumented policy
          </Link>{" "}
          outlines additional sources.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          2. Contact the carrier's claims department
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Contact the carrier directly to initiate the claim. A policy number expedites the
          process, though most carriers can locate a policy using the deceased's name and date of
          birth in its absence.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          3. Complete the claim form in its entirety
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          The carrier will provide its specific claim form, by mail or electronic download,
          requesting information regarding the deceased, beneficiary contact and identification
          details, and the preferred payout method. Complete every applicable field — an
          incomplete form is the most frequently cited cause of processing delay.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          4. Submit a certified death certificate
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A certified copy, bearing an official raised seal from the issuing authority, is
          required — a photocopy is insufficient. Funeral homes typically assist with ordering
          these. Requesting multiple certified copies at the outset is advisable, as other
          institutions (financial institutions, additional policies, the estate) will generally
          require their own original.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          5. Submit the claim and respond to review requests
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Following submission, the carrier conducts a review prior to disbursement, which may
          include follow-up inquiries — particularly where the policy remains within its{" "}
          <Link href="/managing-your-policy/contestability-period" className="text-harbor-mid underline">
            contestability period
          </Link>{" "}
          or where the cause of death requires clarification. Prompt response to any request
          maintains processing momentum.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">Policy documentation unavailable?</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            This does not indicate the absence of a policy. Our{" "}
            <Link href="/managing-your-policy/find-a-lost-policy" className="text-harbor-mid underline">
              guide to locating an undocumented policy
            </Link>{" "}
            details the appropriate next steps.
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
