import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Distribution Channels: Captive, Independent, and Direct",
  description:
    "A professional breakdown of the three distribution models for final expense insurance — captive agent, independent agent, and direct carrier — and how each affects your outcome.",
  openGraph: { title: "Distribution Channels: Captive, Independent, and Direct", description: "A professional breakdown of the three distribution models for final expense insurance — captive agent, independent agent, and direct carrier — and how each affects your outcome." },

  twitter: { title: "Distribution Channels: Captive, Independent, and Direct", description: "A professional breakdown of the three distribution models for final expense insurance — captive agent, independent agent, and direct carrier — and how each affects your outcome." },
};

export default function IndependentVsCaptiveVsDirectPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/avoiding-scams" className="hover:text-harbor">Avoiding Scams</Link> / Independent vs. Captive vs. Direct
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Distribution channels: captive, independent, and direct
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Understanding the distribution model behind a quote is as consequential as understanding
          the quote itself. Final expense insurance reaches consumers through exactly three
          channels, each defined by a distinct relationship between the buyer, the seller, and the
          underwriting carrier. None represents a compliance concern on its own — the professional
          distinction is simply knowing which model you're engaging with before evaluating any
          recommendation it produces.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          The captive-agent model
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A captive agent is contracted to represent a single carrier exclusively. Every product
          presented originates from that one company. The professional advantage is depth: a
          captive agent typically has thorough command of that carrier's underwriting rules and
          documentation. The structural limitation is breadth — where that carrier's guidelines
          don't align with a given health profile or budget, the captive agent has no alternative
          to offer, regardless of whether a better-suited option exists elsewhere.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          The independent-agency model
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          An independent agency — the model this practice operates under — holds appointments with
          multiple carriers rather than one. That structure allows a single intake to be evaluated
          against several sets of underwriting guidelines concurrently, which is materially
          relevant in this market: carriers differ substantially in how they assess identical
          health profiles. A condition declined by one carrier is routinely approved by another.
          The tradeoff is that carrier-specific depth is necessarily distributed across a broader
          set of products rather than concentrated in one.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Direct-to-carrier purchase
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A direct purchase bypasses agent representation entirely — the applicant transacts with
          the carrier's own platform or call center. This model favors an applicant who has already
          identified a specific product and prioritizes transaction speed. The professional
          limitation is the absence of comparative evaluation: no party is benchmarking the
          resulting terms against competing carriers if the initial offer proves suboptimal.
        </p>

        <div className="mt-6 overflow-x-auto rounded-2xl border border-mist">
          <table className="w-full min-w-[560px] border-collapse text-left">
            <thead>
              <tr className="border-b border-mist bg-canvas-alt">
                <th className="px-5 py-3.5 text-sm font-semibold text-charcoal/60">How you buy</th>
                <th className="px-5 py-3.5 font-display text-sm font-extrabold text-harbor">Who they represent</th>
                <th className="px-5 py-3.5 font-display text-sm font-extrabold text-charcoal/60">Carriers compared for you</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-mist">
                <td className="px-5 py-4 text-sm font-semibold text-charcoal/70">Captive agent</td>
                <td className="px-5 py-4 text-sm text-charcoal">One insurance company</td>
                <td className="px-5 py-4 text-sm text-charcoal/70">Just that company&apos;s own options</td>
              </tr>
              <tr className="border-b border-mist">
                <td className="px-5 py-4 text-sm font-semibold text-charcoal/70">Independent agent</td>
                <td className="px-5 py-4 text-sm text-charcoal">You — across multiple companies</td>
                <td className="px-5 py-4 text-sm text-charcoal/70">Several companies, matched to your situation</td>
              </tr>
              <tr>
                <td className="px-5 py-4 text-sm font-semibold text-charcoal/70">Direct from a carrier</td>
                <td className="px-5 py-4 text-sm text-charcoal">The carrier itself</td>
                <td className="px-5 py-4 text-sm text-charcoal/70">Just that one company, no agent involved</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          No single model is correct in every case
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A captive relationship can be entirely appropriate for an applicant already committed to
          a specific carrier. A direct purchase can be the right call for a healthy applicant
          prioritizing speed. An independent agency tends to add the most value when health
          history, age, or budget make the optimal carrier genuinely unclear — a common but not
          universal scenario. The professional recommendation is simply to identify which model
          you're engaging with, and select the one matched to your actual circumstances rather
          than defaulting by assumption.
        </p>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            Request a Professional Coverage Review
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/avoiding-scams" className="font-semibold text-harbor-mid hover:underline">
              ← Back to Avoiding Scams
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
