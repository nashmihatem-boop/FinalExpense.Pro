import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Locating an Undocumented Policy: A Systematic Approach",
  description:
    "A systematic, professional approach to locating a life insurance policy believed to exist without accessible documentation, including free lookup resources.",
  openGraph: { title: "Locating an Undocumented Policy: A Systematic Approach", description: "A systematic, professional approach to locating a life insurance policy believed to exist without accessible documentation, including free lookup resources." },

  twitter: { title: "Locating an Undocumented Policy: A Systematic Approach", description: "A systematic, professional approach to locating a life insurance policy believed to exist without accessible documentation, including free lookup resources." },
};

export default function FindALostPolicyPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/managing-your-policy" className="hover:text-harbor">Managing Your Policy</Link> / Find a Lost Policy
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Locating an undocumented policy: a systematic approach
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Whether personal records have been misplaced or a policy is believed to exist for a
          family member without accessible documentation, a systematic review of the following
          sources should be completed before concluding that no policy exists.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Begin with financial records
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Bank and checking account statements are typically the most efficient starting point —
          review for a recurring disbursement to an insurance carrier, whether monthly, quarterly,
          or annually. Canceled checks, credit card statements, and physical filing systems,
          including safe deposit boxes, are common repositories for this documentation.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Review email and physical correspondence
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Carriers routinely issue annual statements, premium notices, and policy anniversary
          correspondence. Search email using any known carrier name, or general terms such as
          &quot;premium,&quot; &quot;policy,&quot; or &quot;statement.&quot; Physical mail and
          filing systems should also be reviewed.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Contact the originating agent, where identifiable
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Where the originating agent or agency is known, direct contact is advisable — agencies
          typically retain records well beyond the point of sale and may be able to confirm the
          existence of a policy independent of personal documentation.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Verify potential employer-sponsored coverage
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Where the individual was employed full-time, group or supplemental life insurance
          through an employer should be verified. This represents a distinct category from an
          individually owned final expense policy and is a commonly overlooked source.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Query the state unclaimed property registry
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Every state maintains an unclaimed property database, and life insurance proceeds are
          routed there where a carrier was unable to locate a beneficiary. A search for &quot;[your
          state] unclaimed property&quot; will identify the appropriate official lookup tool, at
          no cost, and should be checked against every name and prior address associated with the
          individual.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Utilize the NAIC policy locator service
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          The National Association of Insurance Commissioners administers a complimentary life
          insurance policy locator service. A request containing basic identifying information is
          submitted and forwarded to participating carriers for verification of a matching policy —
          a legitimate resource specifically designed for this circumstance.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">A note on process</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            Locating an undocumented policy frequently requires querying several of these sources
            in combination rather than resolution through a single inquiry. This is a common
            outcome, not an indication of a dead end.
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
