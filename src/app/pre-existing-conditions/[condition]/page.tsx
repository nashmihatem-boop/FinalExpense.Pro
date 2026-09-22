import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { CONDITIONS, TIER_INFO, COMMON_QUESTION_CATEGORIES, findCondition } from "@/lib/condition-facts";

export function generateStaticParams() {
  return CONDITIONS.map((c) => ({ condition: c.slug }));
}

export async function generateMetadata(props: PageProps<"/pre-existing-conditions/[condition]">): Promise<Metadata> {
  const { condition: slug } = await props.params;
  const condition = findCondition(slug);
  if (!condition) return {};
  const title = `${condition.name}: Underwriting Classification for Final Expense Insurance`;
  const description = `A professional analysis of how simplified-issue underwriting classifies ${condition.name}, the applicable outcome tier, and next steps toward a formal quote.`;
  return {
    title,
    description,
    openGraph: { title, description },
    twitter: { title, description },
  };
}

export default async function ConditionPage(props: PageProps<"/pre-existing-conditions/[condition]">) {
  const { condition: slug } = await props.params;
  const condition = findCondition(slug);
  if (!condition) notFound();

  const tierInfo = TIER_INFO[condition.tier];
  const others = CONDITIONS.filter((c) => c.slug !== condition.slug).slice(0, 6);

  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/pre-existing-conditions" className="hover:text-harbor">Pre-Existing Conditions</Link> / {condition.name}
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          {condition.name}: underwriting classification for final expense insurance
        </h1>

        <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-canvas-alt px-4 py-2">
          <span className="h-2 w-2 rounded-full bg-brass" />
          <span className="text-sm font-bold text-harbor">{tierInfo.label}</span>
        </div>

        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">{tierInfo.blurb}</p>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">{condition.note}</p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">Material considerations</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            The following represents a general, typical pattern rather than a guaranteed
            determination. Each carrier establishes independent health questions and look-back
            periods, such that identical conditions may receive divergent classifications across
            carriers. A decline from a single carrier does not constitute a determination of
            ineligibility elsewhere.
          </p>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Typical classification for {condition.name.toLowerCase()}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          The determination generally depends on severity and chronology rather than the diagnosis
          in isolation:
        </p>
        <div className="mt-5 overflow-x-auto rounded-2xl border border-mist">
          <table className="w-full min-w-[480px] border-collapse text-left">
            <thead>
              <tr className="border-b border-mist bg-canvas-alt">
                <th className="px-5 py-3 text-sm font-semibold text-charcoal/60">Presenting circumstances</th>
                <th className="px-5 py-3 font-display text-sm font-extrabold text-harbor">Typical determination</th>
              </tr>
            </thead>
            <tbody>
              {condition.scenarios.map((s, i) => (
                <tr key={s.situation} className={i < condition.scenarios.length - 1 ? "border-b border-mist" : ""}>
                  <td className="px-5 py-3.5 text-sm text-charcoal align-top">{s.situation}</td>
                  <td className="px-5 py-3.5 text-sm font-semibold text-charcoal/80 align-top">{s.outcome}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Underwriting methodology
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A simplified-issue application does not require a medical examination. The applicant
          instead responds to a defined set of health questions, and the carrier separately
          verifies prescription history and cross-references the MIB, a shared industry database,
          to confirm the accuracy of disclosed information. This process resolves to one of four
          classifications: <strong className="text-harbor">level</strong> (full coverage from
          policy inception), <strong className="text-harbor">graded</strong> (a partial benefit
          increasing incrementally across the initial years), <strong className="text-harbor">modified</strong>{" "}
          (premiums returned with interest during that period), or a{" "}
          <strong className="text-harbor">decline</strong>, which directs the applicant toward
          guaranteed acceptance. Refer to the{" "}
          <Link href="/pre-existing-conditions#tiers" className="text-harbor-mid underline">
            complete classification reference
          </Link>{" "}
          for further detail.
        </p>

        <h3 className="mt-8 font-display text-lg font-extrabold text-harbor">
          Standard inquiries regarding {condition.name.toLowerCase()}
        </h3>
        <div className="mt-4 overflow-x-auto rounded-2xl border border-mist">
          <table className="w-full min-w-[480px] border-collapse text-left">
            <thead>
              <tr className="border-b border-mist bg-canvas-alt">
                <th className="px-5 py-3 text-sm font-semibold text-charcoal/60">Inquiry</th>
                <th className="px-5 py-3 font-display text-sm font-extrabold text-harbor">Underwriting rationale</th>
              </tr>
            </thead>
            <tbody>
              {COMMON_QUESTION_CATEGORIES.map((q, i) => (
                <tr key={q.question} className={i < COMMON_QUESTION_CATEGORIES.length - 1 ? "border-b border-mist" : ""}>
                  <td className="px-5 py-3.5 text-sm font-semibold text-charcoal/70 align-top">{q.question}</td>
                  <td className="px-5 py-3.5 text-sm text-charcoal/80 align-top">{q.why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-charcoal/60">
          Exact phrasing and look-back periods vary by carrier; the categories above are general
          rather than representative of any specific carrier's application.
        </p>

        {condition.medications && condition.medications.length > 0 && (
          <>
            <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
              Relevant medications
            </h2>
            <p className="mt-4 text-base leading-relaxed text-charcoal/80">
              Carriers verify prescription history, such that the specific medication regimen may
              carry weight comparable to the diagnosis itself:
            </p>
            <div className="mt-5 space-y-3">
              {condition.medications.map((m) => (
                <div key={m.name} className="rounded-xl border border-mist bg-canvas-raised p-5">
                  <p className="font-display text-base font-extrabold text-harbor">{m.name}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-charcoal/75">{m.note}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-charcoal/60">
              Refer to the complete{" "}
              <Link href="/pre-existing-conditions/prescriptions" className="text-harbor-mid underline">
                prescription history reference
              </Link>{" "}
              for broader context on medication-based underwriting.
            </p>
          </>
        )}

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Recommended next step
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          The most reliable method for determining a specific outcome is consultation with a
          licensed agent capable of matching an applicant's health profile to the carriers whose
          criteria are most favorable — rather than submitting an application to a single carrier
          without comparison. This consultation carries no cost.
        </p>

        <div className="mt-10 text-center">
          <Button as="link" href="/get-quote" size="lg">
            Request a Professional Coverage Review
          </Button>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Additional conditions
        </h2>
        <ul className="mt-4 grid gap-x-6 gap-y-2 sm:grid-cols-2">
          {others.map((c) => (
            <li key={c.slug}>
              <Link href={`/pre-existing-conditions/${c.slug}`} className="text-sm text-harbor-mid hover:underline">
                {c.name}
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-charcoal/60">
          <Link href="/pre-existing-conditions" className="font-semibold text-harbor-mid hover:underline">
            ← Return to the complete reference
          </Link>
        </p>
      </div>
    </div>
  );
}
