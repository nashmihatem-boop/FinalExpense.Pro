import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Tax Treatment of Life Insurance Death Benefits",
  description:
    "A professional summary of the federal tax treatment of life insurance death benefits, applicable nuances, and the recommendation to consult a tax professional.",
  openGraph: { title: "Tax Treatment of Life Insurance Death Benefits", description: "A professional summary of the federal tax treatment of life insurance death benefits, applicable nuances, and the recommendation to consult a tax professional." },

  twitter: { title: "Tax Treatment of Life Insurance Death Benefits", description: "A professional summary of the federal tax treatment of life insurance death benefits, applicable nuances, and the recommendation to consult a tax professional." },
};

export default function IsLifeInsuranceTaxablePage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Tax treatment of life insurance death benefits
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          This constitutes among the most frequently raised questions regarding life insurance,
          and the general rule provides a favorable answer. The following addresses the
          established federal rule, applicable nuances, and the rationale for individualized tax
          consultation.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          General rule: death benefits are generally exempt from federal income tax
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Under federal law, life insurance death benefits are generally received by the
          beneficiary free of federal income tax. This constitutes one of the most well-
          established characteristics of life insurance within the United States regulatory
          framework, and substantially underlies its function as a reliable planning instrument —
          in the standard case, the disbursed amount is not diminished by federal income tax at
          any point in the disbursement process.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          The interest-accrual exception
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A recognized nuance concerns disbursement timing. Where payout is delayed and the
          carrier retains funds for a period prior to disbursement, interest accruing during this
          period may be subject to taxation, notwithstanding the tax-exempt status of the
          underlying death benefit. The death benefit itself remains exempt from federal income
          tax; interest accrued during a disbursement delay constitutes a distinct, potentially
          taxable event.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Estate tax considerations for substantial estates
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A second, more specific nuance applies to substantial estates: policy value may in
          certain circumstances factor into estate tax calculations, a consideration distinct from
          the income tax treatment addressed above. This consideration applies to a limited
          proportion of estates and depends on federal, and in certain cases state, thresholds
          subject to periodic modification — sufficiently variable that specific figures are not
          provided here, as such figures would risk obsolescence or inapplicability to a given
          circumstance.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold text-harbor">
            Consultation with a tax professional is advisable
          </p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            The general rule above is well established and provides a reliable starting reference;
            however, tax determinations are inherently individualized — state of residence, estate
            magnitude, policy ownership structure, and comparable factors all bear on the
            analysis. Prior to acting on assumptions regarding tax treatment, consultation with a
            qualified tax professional regarding the specific circumstances is advisable.
          </p>
        </div>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            Request a Professional Coverage Review
          </Button>
        </div>
      </div>
    </div>
  );
}
