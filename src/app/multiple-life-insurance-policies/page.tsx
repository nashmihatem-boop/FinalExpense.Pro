import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Holding Multiple Life Insurance Policies: A Professional Overview",
  description:
    "A professional overview of concurrent life insurance policy ownership, including insurer treatment of aggregate coverage and criteria for adding a policy.",
  openGraph: { title: "Holding Multiple Life Insurance Policies: A Professional Overview", description: "A professional overview of concurrent life insurance policy ownership, including insurer treatment of aggregate coverage and criteria for adding a policy." },

  twitter: { title: "Holding Multiple Life Insurance Policies: A Professional Overview", description: "A professional overview of concurrent life insurance policy ownership, including insurer treatment of aggregate coverage and criteria for adding a policy." },
};

export default function MultipleLifeInsurancePoliciesPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Holding multiple life insurance policies: a professional overview
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Concurrent ownership of multiple life insurance policies is permissible and, in practice,
          common. This typically reflects distinct coverage objectives arising at different life
          stages, rather than duplicative or excessive coverage.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          The typical structural rationale
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A common pattern involves an individual who acquired a substantial term policy earlier
          in life to replace income for dependents — an objective unrelated to funeral or
          end-of-life expenses. A separate, smaller final expense policy is subsequently acquired,
          addressing burial costs and related final expenses specifically. Each policy serves a
          distinct function; neither substitutes for the other.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Insurer treatment of concurrent coverage
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Each policy constitutes an independent contract, with its own issuing insurer, premium
          structure, and beneficiary designation. Ownership of one policy does not restrict the
          ability to acquire another. Insurers do, however, evaluate aggregate coverage in force
          across all policies held by an applicant; heightened underwriting scrutiny on this basis
          generally applies only at substantial cumulative coverage amounts, well in excess of
          typical final expense policy face values.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Criteria for evaluating an additional policy
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          The relevant analytical question is whether existing coverage genuinely addresses final
          expenses, or was structured for an unrelated purpose. A term policy approaching its
          expiration date, for example, was typically not structured to address burial costs, and
          its lapse does not resolve itself. A{" "}
          <Link href="/final-expense-insurance" className="font-semibold text-harbor-mid hover:underline">
            dedicated final expense policy
          </Link>{" "}
          addresses this specific coverage gap independently, without requiring modification to
          existing policies.
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
