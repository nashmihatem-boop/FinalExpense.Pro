import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Juvenile Life Insurance: A Product Overview",
  description:
    "A professional overview of juvenile whole life policies and riders, applicant rationale, and their structural distinction from senior final expense coverage.",
  openGraph: { title: "Juvenile Life Insurance: A Product Overview", description: "A professional overview of juvenile whole life policies and riders, applicant rationale, and their structural distinction from senior final expense coverage." },

  twitter: { title: "Juvenile Life Insurance: A Product Overview", description: "A professional overview of juvenile whole life policies and riders, applicant rationale, and their structural distinction from senior final expense coverage." },
};

export default function LifeInsuranceForChildrenPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Juvenile life insurance: a product overview
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Juvenile life insurance constitutes a legitimate, though comparatively niche, market
          segment — structurally distinct from the senior-oriented final expense coverage
          addressed throughout the remainder of this reference. The following addresses its
          actual structure and function.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Typical product structure
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Juvenile coverage is typically structured in one of two forms: a standalone whole life
          policy issued in the child's name, or a{" "}
          <Link href="/life-insurance-riders" className="font-semibold text-harbor-mid hover:underline">
            rider
          </Link>{" "}
          appended to a parent's policy, providing modest supplemental coverage on the child. In
          either structure, coverage amounts remain modest by design, consistent with the
          product's intended scope. As a whole life product when issued independently, the policy
          accumulates cash value over time, utilizing the same mechanism applicable to adult whole
          life and final expense products.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Rationale for procurement
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Procurement rationale generally reduces to one of two considerations. The first involves
          securing future insurability — procuring coverage during childhood, while health status
          is favorable, guarantees continued insurability into adulthood irrespective of
          subsequently developed health conditions, frequently with conversion options to a larger
          adult policy at specified intervals without additional underwriting. The second involves
          initiating cash value accumulation at an early stage, leveraging the gradual growth
          characteristic of whole life products over an extended horizon. Neither rationale
          relates to income replacement, the typical driver of adult life insurance procurement —
          a minor has no dependents reliant on their income, rendering the underlying purpose
          categorically distinct.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Distinction from final expense insurance
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Final expense insurance, the subject of the remainder of this reference, is structured
          for senior applicants and sized to address a specific, near-term objective: precluding
          funeral, burial, and end-of-life costs from burdening survivors. Juvenile coverage
          constitutes a smaller, discretionary, long-horizon product addressing an entirely
          different life stage and objective. Applicants specifically seeking a juvenile policy or
          rider should consult an agent directly, as this constitutes a distinct product category
          from the primary subject matter of this reference.
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
