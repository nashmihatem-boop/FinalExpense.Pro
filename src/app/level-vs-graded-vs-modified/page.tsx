import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Level, Graded, and Modified Benefit Structures: A Comparative Analysis",
  description:
    "A professional, comparative analysis of the three death-benefit structures in final expense insurance, and the classification pathway when none apply.",
  openGraph: { title: "Level, Graded, and Modified Benefit Structures: A Comparative Analysis", description: "A professional, comparative analysis of the three death-benefit structures in final expense insurance, and the classification pathway when none apply." },

  twitter: { title: "Level, Graded, and Modified Benefit Structures: A Comparative Analysis", description: "A professional, comparative analysis of the three death-benefit structures in final expense insurance, and the classification pathway when none apply." },
};

const OUTCOMES = [
  {
    slug: "level-benefit",
    name: "Level",
    duringWindow: "No waiting period applicable — 100% of the benefit from policy inception",
    after: "No change; the benefit is already complete.",
    summary: "The full death benefit, effective immediately, at the lowest cost of the three structures.",
  },
  {
    slug: "graded-benefit",
    name: "Graded",
    duringWindow: "A partial benefit that increases incrementally on an annual basis",
    after: "100% of the benefit",
    summary: "A genuine, increasing payout from policy inception, reaching full value on a defined schedule.",
  },
  {
    slug: "modified-benefit",
    name: "Modified",
    duringWindow: "Premiums returned with interest — not a death benefit",
    after: "100% of the benefit",
    summary: "Premiums refunded with interest during the waiting period, followed by full coverage.",
  },
];

export default function LevelVsGradedVsModifiedPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="font-sans text-sm font-semibold tracking-[0.14em] text-brass uppercase">
          Level vs. Graded vs. Modified
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Level, graded, and modified: three structural approaches to your death benefit
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Health disclosures on a final expense application determine assignment to one of a
          defined set of classification outcomes, which in turn determines the timing of full
          death-benefit availability. The following provides a comparative analysis of the three
          principal outcomes, along with the fourth pathway applicable when none of the three
          apply.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          The three outcomes, compared
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Every simplified-issue policy — requiring health questions but no medical examination —
          is structured according to one of these three frameworks. The distinction is material
          only in the event of natural-cause death during a carrier-established initial period,
          commonly the first two years; following this period, all three structures provide
          identical benefits.
        </p>
        <div className="mt-6 overflow-x-auto rounded-2xl border border-mist">
          <table className="w-full min-w-[560px] border-collapse text-left">
            <thead>
              <tr className="border-b border-mist bg-canvas-alt">
                <th className="px-5 py-3.5 text-sm font-semibold text-charcoal/60">Structure</th>
                <th className="px-5 py-3.5 font-display text-sm font-extrabold text-harbor">During period, natural-cause death</th>
                <th className="px-5 py-3.5 font-display text-sm font-extrabold text-charcoal/60">Following the period</th>
              </tr>
            </thead>
            <tbody>
              {OUTCOMES.map((o, i) => (
                <tr key={o.slug} className={i < OUTCOMES.length - 1 ? "border-b border-mist" : ""}>
                  <td className="px-5 py-4 text-sm font-semibold text-charcoal/70 align-top">
                    <Link href={`/level-vs-graded-vs-modified/${o.slug}`} className="text-harbor-mid hover:underline">
                      {o.name}
                    </Link>
                  </td>
                  <td className="px-5 py-4 text-sm text-charcoal align-top">{o.duringWindow}</td>
                  <td className="px-5 py-4 text-sm text-charcoal/70 align-top">{o.after}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold text-harbor">A common provision across all three</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            Accidental death is generally compensated in full immediately under any of the three
            structures, irrespective of policy tenure. The waiting period applies exclusively to
            natural-cause death — it does not constitute a delay applicable to the policy broadly.
          </p>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Determinants of classification
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Underwriters primarily evaluate two factors: the current stability and management of the
          applicant's health, and the recency or severity of any more complex elements within the
          medical history. A condition that is controlled, actively treated, and free of recent
          hospitalization typically results in level classification. A more recent or still-
          stabilizing condition typically results in graded or modified classification instead.
          Additionally, each carrier establishes independent health questions and look-back
          periods governing how far into the past a diagnosis is considered — such that an
          identical applicant may receive differing classifications depending exclusively on which
          carrier conducts the review.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          The fourth pathway: when none of the three structures apply
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Certain health histories fall outside the parameters a given carrier is willing to
          underwrite through simplified issue in any capacity — this constitutes a decline,
          specific to that individual carrier rather than a determination of ineligibility
          broadly. Guaranteed acceptance functions as the structural backstop for this
          circumstance: it dispenses with health questions entirely and accepts applicants within
          the eligible age range irrespective of health history, in exchange for a two-year
          waiting period applicable to natural-cause death. This represents a distinct framework
          from the three structures addressed above and is detailed comprehensively in{" "}
          <Link href="/pre-existing-conditions" className="text-harbor-mid underline">
            the complete pre-existing conditions reference
          </Link>
          .
        </p>

        <div className="mt-14 rounded-2xl bg-canvas-alt p-7">
          <h2 className="font-display text-xl font-extrabold text-harbor">Detailed analysis of each structure</h2>
          <ul className="mt-4 space-y-4">
            <li>
              <Link href="/level-vs-graded-vs-modified/level-benefit" className="font-semibold text-harbor-mid hover:underline">
                Level benefit coverage: a detailed analysis →
              </Link>
              <p className="mt-1 text-sm text-charcoal/70">
                The basis for its lower cost, and the typical qualifying health profile.
              </p>
            </li>
            <li>
              <Link href="/level-vs-graded-vs-modified/graded-benefit" className="font-semibold text-harbor-mid hover:underline">
                Graded benefit coverage: a detailed analysis →
              </Link>
              <p className="mt-1 text-sm text-charcoal/70">
                The mechanics of the step-up structure, and its validity as coverage.
              </p>
            </li>
            <li>
              <Link href="/level-vs-graded-vs-modified/modified-benefit" className="font-semibold text-harbor-mid hover:underline">
                Modified benefit coverage: a detailed analysis →
              </Link>
              <p className="mt-1 text-sm text-charcoal/70">
                The return-of-premium-with-interest structure, and its distinction from graded.
              </p>
            </li>
          </ul>
        </div>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            Request a Professional Coverage Review
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/pre-existing-conditions" className="font-semibold text-harbor-mid hover:underline">
              ← Return to the complete pre-existing conditions reference
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
