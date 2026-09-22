import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Final Expense Insurance for a Child: A Product Distinction",
  description:
    "A professional clarification: what is typically termed final expense insurance for a child constitutes a structurally distinct, smaller product category.",
  openGraph: { title: "Final Expense Insurance for a Child: A Product Distinction", description: "A professional clarification: what is typically termed final expense insurance for a child constitutes a structurally distinct, smaller product category." },

  twitter: { title: "Final Expense Insurance for a Child: A Product Distinction", description: "A professional clarification: what is typically termed final expense insurance for a child constitutes a structurally distinct, smaller product category." },
};

export default function ChildPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/final-expense-insurance-for" className="hover:text-harbor">Final Expense Insurance For</Link> / Child
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Final expense insurance for a child: a product distinction
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          A clarification is warranted at the outset: the product typically identified as "final
          expense insurance for a child" is structurally distinct from, and substantially smaller
          in scale than, the senior-oriented coverage addressed elsewhere on this site. It
          constitutes a legitimate but niche product category, addressed below with full
          transparency regarding its function.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          A structurally distinct, smaller product
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Throughout the remainder of this site, "final expense insurance" refers to coverage
          designed for seniors, sized to address funeral and end-of-life costs. A policy insuring
          a child constitutes an entirely separate category — typically a small juvenile whole
          life policy. This product is legitimate and available, though it occupies a
          substantially smaller segment of the insurance market and serves a distinct purpose
          from the coverage addressed elsewhere on this site. This distinction is stated directly
          rather than presenting content developed for a materially different use case.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Rationale for parental consideration
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          The underlying rationale is generally unrelated to anticipation of mortality — childhood
          mortality is statistically rare, a fact generally understood by parents. The primary
          value proposition is optionality. A juvenile whole life policy secures insurability on a
          permanent basis: subsequently developed health conditions do not affect existing
          coverage, and conversion to a larger adult policy is frequently available without
          additional underwriting. The policy also fixes a permanently low premium, as cost is
          determined by age at issuance. Certain families additionally view the policy as a modest
          savings mechanism, given the cash value accumulation characteristic of whole life
          products. Coverage of actual funeral costs is typically a secondary consideration
          relative to the preceding two factors.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Structural distinctions applicable to a child policy
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          As a minor cannot execute a binding contract, a parent or legal guardian serves as
          applicant and owner by default, with the child designated as the insured party.
          Underwriting is typically minimal — frequently limited to a brief health questionnaire,
          reflecting the statistically low risk profile of child applicants. Coverage amounts are
          typically modest, consistent with the product's intended function. Specific terms,
          minimum issue ages, and conversion provisions vary materially by carrier, warranting
          direct consultation with a licensed agent regarding product specifics.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Considerations warranting evaluation prior to purchase
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Given the statistically low probability of death-benefit utilization, a clear
          understanding of the product's actual function is advisable: primarily secured future
          insurability and modest lifelong coverage, rather than a probability-based product
          comparable to senior final expense insurance. This distinction does not counsel against
          the product — many families derive genuine value from it — but the value proposition
          differs materially from the coverage addressed elsewhere on this site, and selection
          should reflect this distinction rather than a general assumption of necessity.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Seeking coverage for yourself or a parent instead?
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Where the objective is coverage of funeral or final costs for oneself or an aging family
          member, the remainder of this site addresses that product directly. The{" "}
          <Link href="/final-expense-insurance" className="text-harbor-mid underline">
            final expense insurance reference
          </Link>{" "}
          constitutes the appropriate starting point, or proceed directly to{" "}
          <Link href="/final-expense-insurance-for/parents" className="text-harbor-mid underline">
            coverage for a parent
          </Link>
          .
        </p>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            Request a Professional Coverage Review
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/final-expense-insurance-for" className="font-semibold text-harbor-mid hover:underline">
              ← See all relationships
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
