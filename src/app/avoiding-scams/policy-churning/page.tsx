import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Policy Churning: A Professional Evaluation Framework",
  description:
    "A professional framework for evaluating a policy-replacement recommendation, including the contestability and cash-value costs of churning.",
  openGraph: { title: "Policy Churning: A Professional Evaluation Framework", description: "A professional framework for evaluating a policy-replacement recommendation, including the contestability and cash-value costs of churning." },

  twitter: { title: "Policy Churning: A Professional Evaluation Framework", description: "A professional framework for evaluating a policy-replacement recommendation, including the contestability and cash-value costs of churning." },
};

export default function PolicyChurningPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/avoiding-scams" className="hover:text-harbor">Avoiding Scams</Link> / Policy Churning
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Policy churning: a professional evaluation framework
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          &quot;Churning&quot; is the industry's own term for a documented conflict of interest: an
          agent recommends replacing an in-force policy, not because the replacement objectively
          serves the client better, but because a new policy generates a new commission. It is a
          recognized problem in this industry, and it merits a professional evaluation on its own
          terms before any replacement recommendation is accepted.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          How the recommendation typically presents
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A churning recommendation rarely identifies itself as such. It is typically framed as a
          straightforward improvement — a lower premium, additional coverage, a different carrier.
          What that framing routinely omits is the cost of resetting the contract: time already
          accrued within the existing policy's contestability period, and, where the policy is
          permanent and has accumulated cash value, that value as well.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Quantifying the cost of replacement
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Two costs merit explicit evaluation. First, nearly every life insurance policy carries a
          contestability period — typically the first two policy years — during which the insurer
          retains the right to investigate a claim against the original application. Replacing the
          policy resets this clock on an entirely new contract, irrespective of how far the
          existing policy had already progressed past its own window. Second, where the existing
          policy is whole life and has accumulated cash value, surrendering it to fund a new policy
          can mean forfeiting that value, or incurring a surrender charge. A new policy also
          requires underwriting at the applicant's current age and health, which frequently
          produces a higher premium than the one already secured.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Why the incentive exists
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          The underlying incentive is direct: new business generates a new commission, while an
          undisturbed existing policy generates none. The great majority of licensed professionals
          do not act on this incentive at a client's expense — most replacement conversations are
          driven by a genuine change in need. It is precisely this incentive, however, that makes
          churning possible in the minority of cases where it does occur, which is why an
          independent evaluation is professionally warranted regardless of how the recommendation
          is framed.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          A professional pre-replacement checklist
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A legitimate basis for replacement does exist in some cases — a genuine change in
          circumstances, or a materially better product. Any such recommendation should withstand
          the following evaluation before proceeding.
        </p>
        <div className="mt-6 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">Before you replace a policy</p>
          <ul className="mt-3 space-y-2 text-base leading-relaxed text-charcoal/80">
            <li>• Require a specific justification for the replacement — not merely what differs, but why the reset is warranted.</li>
            <li>• Request a written comparison: the new contestability timeline, forfeited cash value, and the actual premium differential, side by side.</li>
            <li>• Obtain an independent second opinion — from a family member or another licensed professional — before executing any change of this magnitude.</li>
          </ul>
        </div>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            Request a Professional Coverage Review
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/avoiding-scams" className="font-semibold text-harbor-mid hover:underline">
              ← Back to Avoiding Scams
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
