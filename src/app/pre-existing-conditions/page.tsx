import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CONDITIONS, TIER_INFO, type Tier } from "@/lib/condition-facts";
import { CarrierComparisonGraphic } from "@/components/pre-existing/carrier-comparison-graphic";

export const metadata: Metadata = {
  title: "Final Expense Insurance Underwriting for Pre-Existing Conditions",
  description:
    "A professional reference on how simplified-issue underwriting treats common health conditions, the level/graded/modified/guaranteed-acceptance classifications, and how to determine your likely outcome before applying.",
  openGraph: { title: "Final Expense Insurance Underwriting for Pre-Existing Conditions", description: "A professional reference on how simplified-issue underwriting treats common health conditions, the level/graded/modified/guaranteed-acceptance classifications, and how to determine your likely outcome before applying." },

  twitter: { title: "Final Expense Insurance Underwriting for Pre-Existing Conditions", description: "A professional reference on how simplified-issue underwriting treats common health conditions, the level/graded/modified/guaranteed-acceptance classifications, and how to determine your likely outcome before applying." },
};

const TOC = [
  { id: "the-two-paths-and-how-simplified-issue-works", label: "The two underwriting paths" },
  { id: "tiers", label: "Classification outcomes — level, graded, modified, decline" },
  { id: "where-conditions-land", label: "Typical classification by condition" },
  { id: "a-z", label: "Condition reference (A–Z)" },
  { id: "why-carriers-differ", label: "Why outcomes vary by carrier" },
  { id: "how-to-prepare", label: "Pre-application preparation" },
  { id: "faq", label: "Frequently asked questions" },
];

const TIER_GROUPS: { tier: Tier; heading: string }[] = [
  { tier: "level", heading: "Conditions typically qualifying for level classification" },
  { tier: "graded-modified", heading: "Conditions typically resulting in graded or modified classification" },
  { tier: "guaranteed", heading: "Conditions typically requiring guaranteed-acceptance coverage" },
];

const FAQS = [
  {
    q: "Does a multi-medication regimen preclude qualification?",
    a: "No. Multiple concurrent medications do not automatically preclude qualification. Carriers primarily use prescription history to verify the accuracy of health disclosures — a substantial proportion of applicants on multiple daily medications still qualify for full, day-one coverage.",
  },
  {
    q: "Does a decline from one carrier indicate universal ineligibility?",
    a: "Generally, no. Underwriting rules and look-back periods vary independently by carrier, such that a decline at one company frequently does not extend to others. Guaranteed acceptance additionally functions as a categorical backstop, as it does not incorporate health questions.",
  },
  {
    q: "What distinguishes \"no exam\" from \"no health questions\"?",
    a: "\"No exam\" denotes simplified issue: no physical examination or laboratory work is required, though health questions remain applicable. \"No health questions\" denotes guaranteed acceptance, which invariably carries a two-year waiting period. A product represented as offering both simultaneously does not exist within this market and should be regarded with skepticism.",
  },
  {
    q: "Does a diabetes diagnosis necessitate a two-year waiting period?",
    a: "Not necessarily. A substantial proportion of stable, well-managed diabetes cases, including many involving complications, continue to qualify for simplified issue with day-one coverage. The two-year waiting period is specific to the guaranteed-acceptance category, a distinct underwriting track.",
  },
  {
    q: "Is disclosure required for a condition that is currently asymptomatic?",
    a: "Yes. All health questions must be answered accurately regardless of current symptomatic status. Carriers cross-reference disclosures against prescription history and a shared industry database, and any discrepancy identified during the contestability period may jeopardize claim payment.",
  },
];

export default function PreExistingConditionsPage() {
  const grouped = TIER_GROUPS.map((g) => ({
    ...g,
    conditions: CONDITIONS.filter((c) => c.tier === g.tier).slice(0, 7),
  }));

  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="font-sans text-sm font-semibold tracking-[0.14em] text-brass uppercase">
          Pre-Existing Conditions
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Final expense insurance underwriting for pre-existing conditions
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          A pre-existing health condition does not categorically preclude qualification for final
          expense coverage. The majority of applicants with a documented health history qualify —
          in some cases for the most favorable available rate, in others through a product
          structured for a more complex medical profile. This reference details the underwriting
          methodology carriers apply, the typical classification outcomes for common conditions,
          and a framework for determining a likely outcome prior to application.
        </p>

        <nav aria-label="Guide contents" className="mt-8 rounded-2xl border border-mist p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">Contents</p>
          <ol className="mt-3 space-y-2">
            {TOC.map((item, i) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-sm text-harbor-mid hover:underline">
                  {i + 1}. {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <h2 id="the-two-paths-and-how-simplified-issue-works" className="mt-14 scroll-mt-24 font-display text-2xl font-extrabold text-harbor">
          The two underwriting paths
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Applications involving a health condition are almost universally resolved through one of
          two frameworks: simplified issue or guaranteed acceptance. Simplified issue is the
          framework the majority of applicants engage with initially and is the primary subject of
          this reference; guaranteed acceptance operates under a distinct, more straightforward
          rule set addressed independently.
        </p>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Simplified issue requires no medical examination — no clinical visit, no laboratory
          testing. The applicant instead responds to a limited set of yes-or-no health questions,
          generally fewer than twelve. The carrier additionally conducts supplementary verification:
          a review of prescription history, and a cross-reference against the MIB, a shared
          industry database of prior insurance applications. A determination is frequently issued
          the same day or within several business days.
        </p>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          The optimal outcome under this framework is "level" classification — full death benefit
          in effect from policy inception — and simplified issue is typically priced more favorably
          than guaranteed acceptance for an equivalent coverage amount.
        </p>
        <div className="mt-6 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold text-harbor">An important distinction</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            "No examination" and "no health questions" are not equivalent terms. "No examination"
            typically denotes simplified issue, under which health questions remain applicable.
            "No health questions" denotes guaranteed acceptance, which invariably carries a
            two-year waiting period. Any representation combining both no health questions and no
            waiting period should be treated with skepticism, as this combination is not offered
            within this market.
          </p>
        </div>

        <h2 id="tiers" className="mt-14 scroll-mt-24 font-display text-2xl font-extrabold text-harbor">
          Classification outcomes — level, graded, modified, decline
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Evaluation of health disclosures does not resolve to a binary determination — carriers
          assign applicants to one of several classification outcomes, which determines the timing
          of full death-benefit availability.
        </p>
        <div className="mt-6 overflow-x-auto rounded-2xl border border-mist">
          <table className="w-full min-w-[560px] border-collapse text-left">
            <thead>
              <tr className="border-b border-mist bg-canvas-alt">
                <th className="px-5 py-3.5 text-sm font-semibold text-charcoal/60">Classification</th>
                <th className="px-5 py-3.5 font-display text-sm font-extrabold text-harbor">Years 1–2, natural-cause death</th>
                <th className="px-5 py-3.5 font-display text-sm font-extrabold text-charcoal/60">Following the waiting period</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-mist">
                <td className="px-5 py-4 text-sm font-semibold text-charcoal/70">Level</td>
                <td className="px-5 py-4 text-sm text-charcoal">100% of the death benefit, from policy inception</td>
                <td className="px-5 py-4 text-sm text-charcoal/70">100%</td>
              </tr>
              <tr className="border-b border-mist">
                <td className="px-5 py-4 text-sm font-semibold text-charcoal/70">Graded</td>
                <td className="px-5 py-4 text-sm text-charcoal">A partial benefit increasing incrementally each year</td>
                <td className="px-5 py-4 text-sm text-charcoal/70">100%</td>
              </tr>
              <tr className="border-b border-mist">
                <td className="px-5 py-4 text-sm font-semibold text-charcoal/70">Modified</td>
                <td className="px-5 py-4 text-sm text-charcoal">Premiums returned with interest — not the full benefit amount</td>
                <td className="px-5 py-4 text-sm text-charcoal/70">100%</td>
              </tr>
              <tr>
                <td className="px-5 py-4 text-sm font-semibold text-charcoal/70">Decline</td>
                <td className="px-5 py-4 text-sm text-charcoal">No simplified-issue policy offered by that specific carrier</td>
                <td className="px-5 py-4 text-sm text-charcoal/70">—</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-charcoal/60">
          Accidental death is generally compensated in full immediately, even under graded or
          modified classifications — the waiting period applies exclusively to natural-cause
          death. A decline from a given carrier typically indicates that guaranteed acceptance, or
          application to a different carrier, represents the appropriate next step, rather than
          categorical ineligibility.
        </p>

        <h2 id="where-conditions-land" className="mt-14 scroll-mt-24 font-display text-2xl font-extrabold text-harbor">
          Typical classification by condition
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          The following reflects general, typical patterns rather than guaranteed outcomes. Each
          carrier establishes independent underwriting criteria, which accounts for differential
          classification of an identical condition across carriers.
        </p>
        {grouped.map((g) => (
          <div key={g.tier} className="mt-8">
            <h3 className="font-display text-lg font-extrabold text-harbor">{g.heading}</h3>
            <div className="mt-4 overflow-x-auto rounded-2xl border border-mist">
              <table className="w-full min-w-[480px] border-collapse text-left">
                <tbody>
                  {g.conditions.map((c, i) => (
                    <tr key={c.slug} className={i < g.conditions.length - 1 ? "border-b border-mist" : ""}>
                      <td className="px-5 py-3.5 text-sm font-semibold text-charcoal/70 align-top">
                        <Link href={`/pre-existing-conditions/${c.slug}`} className="text-harbor-mid hover:underline">
                          {c.name}
                        </Link>
                      </td>
                      <td className="px-5 py-3.5 text-sm text-charcoal align-top">{c.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}

        <h2 id="a-z" className="mt-14 scroll-mt-24 font-display text-2xl font-extrabold text-harbor">
          Condition reference (A–Z)
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A comprehensive reference index of conditions addressed in this guide — select any entry
          for detailed analysis. As noted above, these represent typical outcomes rather than
          guaranteed determinations.
        </p>
        <div className="mt-6 overflow-x-auto rounded-2xl border border-mist">
          <table className="w-full min-w-[560px] border-collapse text-left">
            <thead>
              <tr className="border-b border-mist bg-canvas-alt">
                <th className="px-5 py-3 text-sm font-semibold text-charcoal/60">Condition</th>
                <th className="px-5 py-3 font-display text-sm font-extrabold text-harbor">Typical classification</th>
              </tr>
            </thead>
            <tbody>
              {CONDITIONS.map((c, i) => (
                <tr key={c.slug} className={i < CONDITIONS.length - 1 ? "border-b border-mist" : ""}>
                  <td className="px-5 py-3 text-sm font-semibold text-charcoal/70">
                    <Link href={`/pre-existing-conditions/${c.slug}`} className="text-harbor-mid hover:underline">
                      {c.name}
                    </Link>
                  </td>
                  <td className="px-5 py-3 text-sm text-charcoal/80">{TIER_INFO[c.tier].label}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-charcoal/60">
          Where a specific circumstance is not represented, or a prior application resulted in
          decline, this does not indicate categorical ineligibility — an alternative carrier's
          criteria, or the guaranteed-acceptance framework, frequently remains applicable.
        </p>

        <h2 id="why-carriers-differ" className="mt-14 scroll-mt-24 font-display text-2xl font-extrabold text-harbor">
          Why outcomes vary by carrier
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Identical applicant profiles frequently yield divergent determinations across carriers —
          one classifying level, another graded. This is not an inconsistency in the system but a
          structural feature of the market, one that can be leveraged advantageously with
          appropriate guidance.
        </p>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          No uniform underwriting standard governs the industry. Each carrier independently
          establishes its health questions, look-back periods (the interval preceding application
          during which a diagnosis or treatment is considered), and accepted-medication criteria. A
          treatment occurring three years prior may fall outside one carrier's two-year look-back
          period while remaining within another's four-year period — this distinction alone can
          determine classification.
        </p>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Consequently, applying to a single carrier and accepting its determination without
          comparison may result in forfeited value — either in premium or classification tier.
          This is the specific function an independent agency serves: matching an applicant's
          health profile to the carrier whose underwriting criteria are most favorable, prior to
          formal application.
        </p>

        <CarrierComparisonGraphic />

        <h2 id="how-to-prepare" className="mt-14 scroll-mt-24 font-display text-2xl font-extrabold text-harbor">
          Pre-application preparation
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Adequate preparation materially improves the application process. Prior to applying,
          compiling the following is advisable: each condition and its diagnosis date, the date of
          most recent treatment or hospitalization, and a complete, current medication list.
          Carriers verify prescription history against disclosed information, so accuracy in this
          list mitigates the risk of discrepancy.
        </p>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          All questions should be answered accurately. A discrepancy between disclosed information
          and medical records, identified during the contestability period, may jeopardize claim
          payment. Where a knockout condition applies — current oxygen dependency, dialysis, or
          active cancer treatment — guaranteed acceptance represents the appropriate initial path
          rather than a secondary option.
        </p>

        <h2 id="faq" className="mt-14 scroll-mt-24 font-display text-2xl font-extrabold text-harbor">
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

        <div className="mt-14 rounded-2xl bg-canvas-alt p-7">
          <h2 className="font-display text-xl font-extrabold text-harbor">Related references</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/pre-existing-conditions/can-you-be-denied" className="font-semibold text-harbor-mid hover:underline">
                Application decline: causes and determinants →
              </Link>
            </li>
            <li>
              <Link href="/pre-existing-conditions/no-waiting-period" className="font-semibold text-harbor-mid hover:underline">
                Qualifying for day-one coverage without a waiting period →
              </Link>
            </li>
            <li>
              <Link href="/pre-existing-conditions/prescriptions" className="font-semibold text-harbor-mid hover:underline">
                The role of prescription history in underwriting →
              </Link>
            </li>
          </ul>
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
