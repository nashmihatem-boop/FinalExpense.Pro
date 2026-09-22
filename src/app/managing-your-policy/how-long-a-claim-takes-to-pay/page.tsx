import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Claim Processing Timelines: Documented Factors",
  description:
    "A professional review of the documented factors that accelerate or delay a death benefit claim's processing timeline, and the beneficiary's available levers.",
  openGraph: { title: "Claim Processing Timelines: Documented Factors", description: "A professional review of the documented factors that accelerate or delay a death benefit claim's processing timeline, and the beneficiary's available levers." },

  twitter: { title: "Claim Processing Timelines: Documented Factors", description: "A professional review of the documented factors that accelerate or delay a death benefit claim's processing timeline, and the beneficiary's available levers." },
};

export default function HowLongAClaimTakesToPayPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/managing-your-policy" className="hover:text-harbor">Managing Your Policy</Link> / How Long a Claim Takes to Pay
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Claim processing timelines: documented factors
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          No universal timeline governs claim processing — duration varies by carrier and by the
          specific circumstances of the claim. A professional understanding of the documented
          factors affecting that timeline provides a more reliable expectation than any
          industry-wide figure.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Absence of a standardized timeline
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Each carrier establishes and discloses its own claims-processing standard, and a
          straightforward claim proceeds materially faster than one involving complications. The
          professionally recommended approach is to request the specific carrier's typical
          timeline following receipt of a complete claim, rather than relying on generalized
          figures.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Documentation completeness as the primary variable
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Incomplete documentation — an absent signature, an uncertified death certificate, or a
          partially completed form — is the most frequently cited cause of processing delay on an
          otherwise straightforward claim. Thorough review prior to submission represents the
          single variable fully within the beneficiary's control.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Contestability period review
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Where death occurs within a policy's first two years, carriers routinely conduct
          enhanced review to confirm the original application's accuracy — standard practice, not
          an indication of an adverse outcome. Our{" "}
          <Link href="/managing-your-policy/contestability-period" className="text-harbor-mid underline">
            guide to the contestability period
          </Link>{" "}
          provides a professional explanation of that review process.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Cause-of-death documentation
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          An unresolved or atypical cause of death — one pending autopsy or formal investigation,
          for example — extends the timeline while the carrier awaits official documentation from
          a coroner or medical examiner. This factor falls outside the beneficiary's control and
          proceeds according to the relevant jurisdiction's process.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">Recommended practices</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            Secure multiple certified death certificate copies at the outset, respond promptly to
            carrier requests, retain copies of all submitted materials, and follow up at
            reasonable intervals rather than interpreting silence as indicative of a problem.
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
