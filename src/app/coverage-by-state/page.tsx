import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { US_STATES } from "@/lib/us-states";

export const metadata: Metadata = {
  title: "Final Expense Insurance: State-by-State Regulatory Reference",
  description:
    "A professional reference on state-by-state final expense insurance regulation. Select a jurisdiction for detailed information and a formal quote.",
  openGraph: { title: "Final Expense Insurance: State-by-State Regulatory Reference", description: "A professional reference on state-by-state final expense insurance regulation. Select a jurisdiction for detailed information and a formal quote." },

  twitter: { title: "Final Expense Insurance: State-by-State Regulatory Reference", description: "A professional reference on state-by-state final expense insurance regulation. Select a jurisdiction for detailed information and a formal quote." },
};

const FAQS = [
  {
    q: "Does cost vary materially by jurisdiction?",
    a: "Insurance is regulated at the state level, so carrier and product availability differs by jurisdiction. Within a given state, however, premium is determined primarily by age, gender, tobacco use, health status, and coverage amount — not by specific address.",
  },
  {
    q: "Does relocation affect an existing policy?",
    a: "No. This constitutes a whole life policy attached to the insured individual rather than a specific address — once in force, coverage and premium remain unchanged regardless of subsequent relocation.",
  },
  {
    q: "Is there a substantive distinction between final expense and burial insurance?",
    a: "No substantive distinction exists. \"Burial insurance,\" \"funeral insurance,\" and \"final expense insurance\" are synonymous terms referring to the same product category — a modest whole life policy structured to address end-of-life costs.",
  },
  {
    q: "Must the agent hold a license specific to my state?",
    a: "Yes — agents are required to hold licensure in the applicant's state of residence to conduct a sale there. Upon quote request, applicants are matched with agents and carriers holding appropriate licensure in their jurisdiction.",
  },
];

export default function CoverageByStatePage() {
  return (
    <div className="bg-canvas">
      <section className="bg-gradient-to-r from-harbor-deep via-harbor to-harbor-deep">
        <div className="mx-auto max-w-3xl px-5 py-16 text-center sm:px-8 sm:py-20">
          <h1 className="font-display text-3xl font-extrabold text-canvas sm:text-4xl">
            Final expense insurance: state-by-state regulatory reference
          </h1>
          <p className="mt-4 text-lg text-canvas/75">
            No two states apply identical rules to carrier licensure or product approval. Locate
            the applicable jurisdiction below to proceed with an evaluation.
          </p>
          <div className="mt-8 flex justify-center">
            <Button as="link" href="/get-quote" size="lg">
              See your rate now
            </Button>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="rounded-2xl border border-mist bg-canvas-alt p-7">
          <p className="text-base leading-relaxed text-charcoal/80">
            This reference exists to support systematic evaluation of burial and final expense
            products issued by carriers licensed across all fifty states and the District.
            Identify the applicable jurisdiction below for detailed analysis and a referral to an
            appropriately licensed agent.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-charcoal/60">
            This organization operates as an independent agency rather than a single carrier,
            providing genuine cross-carrier comparison without enrollment obligation.
          </p>
        </div>

        <h2 className="mt-14 font-display text-2xl font-extrabold text-harbor">
          Select a jurisdiction
        </h2>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {US_STATES.map((s) => (
            <Link
              key={s.code}
              href={`/coverage-by-state/${s.code.toLowerCase()}`}
              className="flex items-center gap-3 rounded-xl border border-mist bg-canvas-raised px-4 py-3.5 transition-colors hover:border-harbor-mid/50"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-harbor font-display text-xs font-extrabold text-brass">
                {s.code}
              </span>
              <span className="text-sm font-semibold text-charcoal">{s.name}</span>
            </Link>
          ))}
        </div>

        <h2 className="mt-16 font-display text-2xl font-extrabold text-harbor">
          Frequently asked questions
        </h2>
        <div className="mt-6 space-y-3">
          {FAQS.map((item) => (
            <details key={item.q} className="group rounded-xl border border-mist bg-canvas-raised px-6 py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-bold text-harbor marker:content-none">
                {item.q}
                <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4 shrink-0 text-harbor-mid transition-transform duration-200 group-open:-rotate-180">
                  <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </summary>
              <p className="mt-3 text-base leading-relaxed text-charcoal/80">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
