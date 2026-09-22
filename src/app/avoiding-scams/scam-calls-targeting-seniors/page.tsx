import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Evaluating Inbound Insurance Calls: A Professional Checklist",
  description:
    "A professional checklist for distinguishing a legitimate final expense insurance call from a fraudulent one, and the correct protocol if a call is already in progress.",
  openGraph: { title: "Evaluating Inbound Insurance Calls: A Professional Checklist", description: "A professional checklist for distinguishing a legitimate final expense insurance call from a fraudulent one, and the correct protocol if a call is already in progress." },

  twitter: { title: "Evaluating Inbound Insurance Calls: A Professional Checklist", description: "A professional checklist for distinguishing a legitimate final expense insurance call from a fraudulent one, and the correct protocol if a call is already in progress." },
};

export default function ScamCallsTargetingSeniorsPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/avoiding-scams" className="hover:text-harbor">Avoiding Scams</Link> / Scam Calls Targeting Seniors
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Evaluating inbound insurance calls: a professional checklist
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Telephone remains one of the primary distribution channels for this product — and,
          correspondingly, one of the primary vectors for fraud targeting this demographic. The
          opening moments of a legitimate call and a fraudulent one are often indistinguishable, so
          a professional evaluation depends on a fixed set of criteria established in advance, not
          judgment formed in the moment.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          The professional standard for a legitimate call
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A licensed professional initiating contact — whether in response to a requested quote or
          as follow-up on an existing policy — identifies themselves by name, states the
          represented company, and produces a license number on request without hesitation. They
          explain the product being discussed in plain terms, do not solicit a same-call decision,
          and follow the call with documented paperwork available for review well before any
          payment obligation arises.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Documented indicators of a fraudulent call
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          The following behaviors are reliable indicators regardless of the caller's apparent
          professionalism or confidence.
        </p>
        <div className="mt-6 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">Watch for</p>
          <ul className="mt-3 space-y-2 text-base leading-relaxed text-charcoal/80">
            <li>• A demand for immediate payment, particularly by gift card, wire transfer, or cryptocurrency.</li>
            <li>• Applied urgency intended to force a decision before the call ends.</li>
            <li>• Refusal to provide written documentation, or evasiveness regarding the represented carrier.</li>
            <li>• A request for a bank account, Social Security, or Medicare number without adequate justification.</li>
            <li>• Prior knowledge of financial or health details from an unexplained source.</li>
          </ul>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Protocol for a call already in progress
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Terminate the call. No explanation or courtesy is required — a legitimate organization
          loses nothing from a callback initiated later through independently verified contact
          information. Do not confirm or disclose personal or financial information, even for
          stated identity verification, as confirmed details are frequently used to lend
          credibility to a subsequent contact attempt. If verification of the company's legitimacy
          is desired, conduct that verification independently through the relevant state insurance
          department, not through contact information supplied by the caller.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Post-call reporting obligations
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Reporting the incident remains appropriate even after the call concludes. The Federal
          Trade Commission accepts reports of this nature at{" "}
          <a
            href="https://reportfraud.ftc.gov"
            target="_blank"
            rel="noopener noreferrer"
            className="text-harbor-mid underline"
          >
            reportfraud.ftc.gov
          </a>
          , and aggregated reporting assists regulators in identifying patterns even where an
          individual report does not initiate a discrete investigation. Where funds have already
          been transferred, immediate contact with the financial institution is advisable — the
          probability of recovery correlates directly with reporting speed.
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
