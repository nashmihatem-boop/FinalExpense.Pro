import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Responding to a Denied Claim: Professional Options",
  description:
    "A professional breakdown of the documented reasons a death benefit claim is denied, and the full range of remediation options available to a beneficiary.",
  openGraph: { title: "Responding to a Denied Claim: Professional Options", description: "A professional breakdown of the documented reasons a death benefit claim is denied, and the full range of remediation options available to a beneficiary." },

  twitter: { title: "Responding to a Denied Claim: Professional Options", description: "A professional breakdown of the documented reasons a death benefit claim is denied, and the full range of remediation options available to a beneficiary." },
};

export default function ClaimDeniedPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/managing-your-policy" className="hover:text-harbor">Managing Your Policy</Link> / If a Claim Is Denied
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Responding to a denied claim: professional options
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          A claim denial is understandably distressing, particularly given the surrounding
          circumstances, but it does not necessarily represent a final outcome. What follows is a
          professional review of the documented causes and the concrete remediation options
          available to a beneficiary.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Documented causes of denial
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A limited set of patterns accounts for the majority of denials. Misrepresentation on the
          original application — an inaccurately disclosed health condition or other material
          fact — is typically raised only within the policy's{" "}
          <Link href="/managing-your-policy/contestability-period" className="text-harbor-mid underline">
            contestability period
          </Link>
          . A lapsed policy is a second cause — where premiums ceased and the{" "}
          <Link href="/managing-your-policy/missed-premium-payment" className="text-harbor-mid underline">
            grace period
          </Link>{" "}
          expired without payment or reinstatement, coverage may not have been in force at the time
          of death. A non-accidental death occurring during a guaranteed-acceptance waiting period
          is a third pattern, though this typically produces a reduced, modified payout rather than
          an outright denial, consistent with that policy structure. Less commonly, denial results
          from an explicitly excluded cause of death.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Step one: obtain the stated reason in writing
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Carriers are generally obligated to provide a specific, written basis for denial. Where
          only a verbal or general explanation has been provided, a written statement should be
          formally requested — the specific stated reason determines the appropriate subsequent
          action.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Step two: pursue the internal appeal
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Most carriers maintain a formal internal appeals process. Where documentation directly
          addressing the stated basis is available — clarifying medical records, or evidence of a
          processed payment — submitting it through a formal appeal represents the most direct
          initial remedy.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Step three: engage the state insurance department
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Every state maintains a regulatory body specifically empowered to review consumer
          complaints regarding claims handling. This office can evaluate whether proper procedure
          was followed and, in certain cases, facilitate a resolution. Filing a complaint carries
          no cost.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Step four: retain counsel for material disputes
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          For a substantial benefit amount, or a denial that appears inconsistent with the policy's
          own language, an attorney specializing in insurance disputes can evaluate the policy
          language and denial letter and advise on the merits of a formal contest. Many such
          attorneys offer an initial consultation at no cost.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">Documentation practice</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            The original application, the policy itself, the denial letter, and all correspondence
            with the carrier collectively strengthen any appeal. Maintain dated copies of all
            materials, including records of telephone communications.
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
