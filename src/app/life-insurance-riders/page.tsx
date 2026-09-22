import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Life Insurance Riders: A Structural Reference",
  description:
    "A professional reference on policy riders, their attachment to a base contract, and common examples including accelerated death benefit and waiver-of-premium riders.",
  openGraph: { title: "Life Insurance Riders: A Structural Reference", description: "A professional reference on policy riders, their attachment to a base contract, and common examples including accelerated death benefit and waiver-of-premium riders." },

  twitter: { title: "Life Insurance Riders: A Structural Reference", description: "A professional reference on policy riders, their attachment to a base contract, and common examples including accelerated death benefit and waiver-of-premium riders." },
};

export default function LifeInsuranceRidersPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Life insurance riders: a structural reference
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          A rider constitutes an optional supplementary provision attached to a base life
          insurance policy, modifying or extending coverage beyond the standard policy terms. The
          following addresses several commonly available riders in general terms.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Structural function
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          The base policy constitutes the core contractual arrangement: death benefit, premium,
          and associated standard terms. A rider attaches to this base contract, introducing
          additional flexibility, a supplementary benefit, or a modification applicable to a
          specific circumstance. Certain riders involve additional cost; others are incorporated
          without separate charge, depending on the policy. In all cases, riders remain
          discretionary — selection occurs at application, with certain riders available for
          subsequent addition.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Accelerated death benefit (living benefit) riders
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Among the most widely recognized riders. This provision permits the policyholder to
          access a portion of the death benefit during their lifetime upon diagnosis of a
          qualifying terminal illness — funds intended to address costs associated with that
          circumstance, rather than being reserved exclusively for post-death beneficiary
          disbursement. Amounts accessed under this provision are generally deducted from the
          residual death benefit.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Waiver-of-premium riders
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          This provision addresses continuity of coverage where serious illness or disability
          materially impairs the policyholder's capacity to remit premium payments. Upon
          qualification, this rider suspends the premium payment obligation for a defined period
          while maintaining the policy in full force — coverage continues notwithstanding the
          suspension of payment.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Child riders
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Certain base policies additionally offer a rider providing modest supplemental coverage
          for a policyholder's child, obviating the need for a fully independent policy. This
          represents a reduced-scale variant of the{" "}
          <Link href="/life-insurance-for-children" className="font-semibold text-harbor-mid hover:underline">
            standalone juvenile coverage
          </Link>{" "}
          addressed elsewhere in this reference, incorporated instead into a parent's existing
          policy.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Advisability of direct inquiry
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Rider availability, cost structure, and qualification requirements vary substantially
          across policies and carriers. Direct inquiry regarding available riders and their
          respective premium implications is advisable prior to application, rather than
          discovery following policy issuance.
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
