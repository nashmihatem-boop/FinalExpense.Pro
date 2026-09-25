import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SafeLink } from "@/components/safe-link";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Missed Premium Payments: Professional Protocol",
  description:
    "A professional protocol for a missed premium payment — grace period mechanics, lapse consequences, and the reinstatement process.",
  openGraph: { title: "Missed Premium Payments: Professional Protocol", description: "A professional protocol for a missed premium payment — grace period mechanics, lapse consequences, and the reinstatement process." },

  twitter: { title: "Missed Premium Payments: Professional Protocol", description: "A professional protocol for a missed premium payment — grace period mechanics, lapse consequences, and the reinstatement process." },
};

export default function MissedPremiumPaymentPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/managing-your-policy" className="hover:text-harbor">Managing Your Policy</Link> / Missed Premium Payment
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Missed premium payments: professional protocol
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          A missed premium payment is a common occurrence and does not typically constitute an
          immediate crisis. Policies are structured with a built-in mechanism for precisely this
          circumstance — the following is a professional review of how that mechanism operates and
          the appropriate response.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          The grace period mechanism
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Most policies incorporate a grace period commencing upon a missed due date, during which
          coverage generally remains fully in force notwithstanding the outstanding payment. The
          precise duration is determined by policy terms and state regulation; the specific figure
          should be confirmed with the carrier rather than assumed.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Death occurring within the grace period
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Coverage is generally deemed active throughout the grace period, rendering a claim
          payable in most circumstances. The outstanding premium is typically deducted from the
          death benefit rather than resulting in denial. This provision should be verified against
          the specific policy's terms.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Consequence of an unaddressed grace period
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Upon expiration of the grace period without payment, the policy generally lapses,
          terminating coverage and premium collection. This outcome carries a material
          consequence: securing replacement coverage subsequently typically incurs a higher
          premium, driven solely by the applicant's increased age.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Reinstatement following a lapse
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Many carriers offer reinstatement within a defined window following lapse, subject to
          requirements that may include payment of arrears, updated health disclosures, or
          evidence of continued insurability. The specific requirements should be confirmed
          directly with the carrier. Where reinstatement is unavailable, or health status renders
          it impractical, evaluating a replacement policy is the appropriate professional
          alternative.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">Preventive best practice</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            Establishing automatic payment, maintaining current payment information following card
            expiration or account changes, and ensuring the carrier holds current contact
            information collectively minimize the risk of an unaddressed missed payment.
          </p>
        </div>

        <div className="mt-14 text-center">
          <Button as="link" href={siteConfig.supportPhoneHref} variant="outline" size="lg">
            Call {siteConfig.supportPhoneDisplay}
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            If reinstatement isn&apos;t the right fit,{" "}
            <SafeLink href="/get-quote" className="font-semibold text-harbor-mid hover:underline">
              request a professional coverage review →
            </SafeLink>
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
