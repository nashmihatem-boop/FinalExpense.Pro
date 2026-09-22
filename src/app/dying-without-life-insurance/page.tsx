import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Financial Consequences of Dying Without Life Insurance",
  description:
    "A professional analysis of the financial obligations survivors assume when a death occurs without life insurance coverage in place.",
  openGraph: { title: "Financial Consequences of Dying Without Life Insurance", description: "A professional analysis of the financial obligations survivors assume when a death occurs without life insurance coverage in place." },

  twitter: { title: "Financial Consequences of Dying Without Life Insurance", description: "A professional analysis of the financial obligations survivors assume when a death occurs without life insurance coverage in place." },
};

export default function DyingWithoutLifeInsurancePage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Financial consequences of dying without life insurance
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          This analysis is intended to inform rather than alarm. A clear understanding of the
          financial consequences of an uninsured death provides the most direct illustration of
          life insurance's fundamental purpose.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Funeral costs are due independent of estate resolution
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Funeral homes typically require payment at or near the time services are rendered,
          substantially preceding estate settlement or resolution of broader financial matters.
          Absent a policy or preneed arrangement, this obligation typically falls to whichever
          family members are willing and financially able to satisfy it — frequently through
          credit card debt or personal loans undertaken to meet an immediate timeline.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Estate resources are available, though not immediately
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          The decedent's estate constitutes the primary source for satisfying outstanding
          obligations and final expenses prior to distribution to heirs. In practice, however,
          probate proceedings require substantial time, and many estates lack sufficient readily
          accessible liquidity to address an immediately due funeral obligation. Even where the
          estate ultimately proves adequate, this eventual sufficiency provides no practical
          benefit on the date payment is required.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Costs typically accumulate concurrently rather than in isolation
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Funeral and burial expenses typically arise alongside other ongoing financial
          obligations unaffected by the loss — outstanding medical bills, existing credit
          obligations, and continuing household expenses such as rent, mortgage payments, or
          utilities. Individually, these obligations may be manageable. Their simultaneous
          accumulation, combined with a new funeral obligation and frequently the loss of
          household income, constitutes the actual mechanism by which families experience material
          financial hardship.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          The function coverage serves
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Life insurance and final expense coverage exist specifically to preclude this financial
          exposure. Rather than requiring family members to fund costs directly and pursue
          reimbursement subsequently, a named beneficiary typically receives the death benefit in
          cash within days of claim submission — funds immediately available without requiring
          probate. This mechanism does not mitigate the underlying loss; it ensures survivors are
          not additionally burdened with the associated financial obligation.
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
