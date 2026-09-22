import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Identifying Agent Misconduct: A Professional Framework",
  description:
    "A professional framework for identifying when an insurance agent isn't acting in your interest — payment requests, incomplete forms, withheld paperwork — and the proper remediation path.",
  openGraph: { title: "Identifying Agent Misconduct: A Professional Framework", description: "A professional framework for identifying when an insurance agent isn't acting in your interest — payment requests, incomplete forms, withheld paperwork — and the proper remediation path." },

  twitter: { title: "Identifying Agent Misconduct: A Professional Framework", description: "A professional framework for identifying when an insurance agent isn't acting in your interest — payment requests, incomplete forms, withheld paperwork — and the proper remediation path." },
};

export default function AgentFraudPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/avoiding-scams" className="hover:text-harbor">Avoiding Scams</Link> / Agent Fraud
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Identifying agent misconduct: a professional framework
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          The standard of practice for a licensed agent is well defined: match the client to
          appropriate coverage, submit the application accurately, and deliver policy
          documentation without being asked twice. A small number of practitioners fall short of
          that standard, and the deviations are specific enough to identify systematically —
          worth reviewing before an application is underway, not after a problem surfaces.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Indicator one: payment directed to the individual, not the carrier
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Premium payment should be directed to the insurance carrier at all times — never to an
          individual agent personally, and never as cash. A request to pay the agent directly
          &quot;to expedite processing&quot; has no legitimate underwriting justification. It is
          also among the more common mechanisms by which a payment is collected while no policy is
          actually issued.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Indicator two: pressure to execute an incomplete application
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          An application should never be signed with fields left blank on the assurance that
          they'll be completed subsequently. A signature on an incomplete form authorizes a third
          party to enter information after the fact — including health disclosures that directly
          determine whether a future claim is honored. Every applicable field should be verified
          complete prior to signature, without exception.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Indicator three: reluctance to provide executed copies
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Upon execution of an application or policy, you are entitled to the complete signed
          record — not a summary, not a verbal account. An agent who delays this, offers vague
          justification, or suggests it's unnecessary is exhibiting a documented warning sign.
          Retain every signed document for the full duration the policy remains in force.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          The proper remediation path
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Contact the carrier directly, using contact information sourced independently rather
          than a number supplied by the agent, and request confirmation that a policy exists in
          your name with payment correctly applied. Our guide to{" "}
          <Link href="/avoiding-scams/verify-a-company-is-legitimate" className="text-harbor-mid underline">
            verifying a company is legitimate
          </Link>{" "}
          details exactly how to source that information independently. Where the response is
          inconsistent or unavailable, the appropriate next step is a formal complaint with your
          state's department of insurance — the same regulatory body that issued the agent's
          license. That office exists specifically to investigate matters of this kind, and a
          complaint does not require documented proof up front, only a specific, accurate account
          of the interaction.
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
