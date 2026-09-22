import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PolicyTypesTable } from "@/components/final-expense/policy-types-table";

export const metadata: Metadata = {
  title: "Final Expense Insurance in Your 80s: Eligibility Analysis",
  description:
    "A professional analysis of continued final expense insurance eligibility in one's 80s, and the conditions favoring guaranteed-issue coverage.",
  openGraph: { title: "Final Expense Insurance in Your 80s: Eligibility Analysis", description: "A professional analysis of continued final expense insurance eligibility in one's 80s, and the conditions favoring guaranteed-issue coverage." },

  twitter: { title: "Final Expense Insurance in Your 80s: Eligibility Analysis", description: "A professional analysis of continued final expense insurance eligibility in one's 80s, and the conditions favoring guaranteed-issue coverage." },
};

export default function FinalExpenseInsuranceInYour80sPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/final-expense-insurance" className="hover:text-harbor">Final Expense Insurance</Link> / Your 80s
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Final expense insurance in your 80s: eligibility analysis
        </h1>
        <div className="relative mt-8 aspect-[16/7] overflow-hidden rounded-2xl">
          <Image
            src="/photos/senior-candid-smile-outdoors.jpg"
            alt="A woman in her 80s smiling outdoors"
            fill
            sizes="(min-width: 640px) 768px, 100vw"
            className="object-cover"
          />
        </div>
        <p className="mt-8 text-lg leading-relaxed text-charcoal/80">
          A common assumption among applicants in their eighties holds that eligibility has
          lapsed. This assumption is frequently inaccurate — final expense insurance generally
          remains available at this age, subject to certain considerations addressed below.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Eligibility frequently remains intact
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          The majority of carriers continue to offer final expense coverage well into the eighties.
          Maximum issue age is established independently by each carrier and varies materially
          across the industry; consequently, direct verification of specific carrier limits is
          advisable rather than assuming ineligibility. The perception of exceeding an age
          threshold proves inaccurate more frequently than accurate at this stage.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Increased prevalence of guaranteed-issue suitability
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          As health histories lengthen with age, a greater proportion of applicants in their
          eighties are better suited to guaranteed-acceptance coverage — the product category that
          dispenses with health questions entirely and accepts all applicants within the eligible
          age range, in exchange for a two-year waiting period applicable to natural-cause death.
          This does not constitute the sole available option at this age, though its utilization
          increases relative to earlier decades.
        </p>
        <PolicyTypesTable />

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Simplified issue warrants prior consideration
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Guaranteed issue does not constitute the presumptively appropriate starting point based
          on age alone. A substantial proportion of applicants in their eighties maintain
          sufficient health status to qualify for simplified issue, which carries lower cost for
          equivalent coverage and eliminates the waiting period entirely. Formal review of health
          disclosures prior to assuming guaranteed issue represents the sole viable option is
          advisable; the{" "}
          <Link href="/final-expense-insurance/biggest-mistakes" className="text-harbor-mid underline">
            analysis of common procurement errors
          </Link>{" "}
          addresses this specific consideration in greater detail.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Coverage amount considerations at this stage
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Priorities typically narrow to essential considerations at this age — funeral, burial, or
          cremation costs, and ensuring adult children do not bear residual financial
          responsibility. Where cremation is under consideration, the{" "}
          <Link href="/final-expense-insurance/cremation-coverage" className="text-harbor-mid underline">
            analysis of cremation coverage
          </Link>{" "}
          addresses the scope and limitations of the death benefit in that context.
        </p>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            Request a Professional Coverage Review
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/final-expense-insurance/is-it-worth-it" className="font-semibold text-harbor-mid hover:underline">
              Evaluating necessity: a comprehensive analysis →
            </Link>
          </p>
          <p className="mt-2 text-sm text-charcoal/60">
            <Link href="/final-expense-insurance-in-your-70s" className="font-semibold text-harbor-mid hover:underline">
              ← Considerations applicable to your 70s
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
