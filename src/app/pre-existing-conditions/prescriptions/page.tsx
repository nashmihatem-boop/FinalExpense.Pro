import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MEDICATIONS } from "@/lib/medication-facts";

export const metadata: Metadata = {
  title: "The Role of Prescription History in Underwriting",
  description: "A professional analysis of why medication history carries underwriting weight comparable to diagnosis when applying for final expense insurance.",
  openGraph: {
    title: "The Role of Prescription History in Underwriting",
    description: "A professional analysis of why medication history carries underwriting weight comparable to diagnosis when applying for final expense insurance.",
  },
  twitter: {
    title: "The Role of Prescription History in Underwriting",
    description: "A professional analysis of why medication history carries underwriting weight comparable to diagnosis when applying for final expense insurance.",
  },
};

export default function PrescriptionsPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/pre-existing-conditions" className="hover:text-harbor">Pre-Existing Conditions</Link> / Prescription History
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          The role of prescription history in underwriting
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Under simplified-issue underwriting, the specific medications an applicant takes can
          carry weight comparable to the underlying diagnosis. Carriers incorporate a prescription
          history review as a standard component of the underwriting process. The following
          addresses the rationale for this practice and its application to several common
          medication categories.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Rationale for prescription verification
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Simplified issue does not incorporate a medical examination, yet carriers require
          confidence in the accuracy of health disclosures. A prescription history review serves
          as the primary verification mechanism — a limited, database-driven inquiry rather than a
          request for complete medical records. Where disclosed information and prescription
          history are consistent, the review typically expedites approval. Where a discrepancy
          exists, the outcome may be a decline or a less favorable classification than would
          otherwise apply, reinforcing the professional importance of complete and accurate
          disclosure over an optimistic self-characterization.
        </p>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Certain medications additionally convey information independent of explicit disclosure —
          a specific combination of prescriptions may function as an indicator of a condition not
          otherwise mentioned. This is why the medication itself, and not solely the associated
          diagnosis, factors into the underwriting review.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Medication categories
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {MEDICATIONS.map((m) => (
            <Link
              key={m.slug}
              href={`/pre-existing-conditions/prescriptions/${m.slug}`}
              className="rounded-2xl border border-mist bg-canvas-raised p-6 transition-colors hover:border-harbor-mid/50"
            >
              <p className="font-display text-lg font-extrabold text-harbor">{m.name}</p>
              <p className="mt-1 text-xs text-charcoal/50">{m.examples}</p>
              <p className="mt-2.5 text-sm leading-relaxed text-charcoal/75">{m.summary}</p>
            </Link>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            Request a Professional Coverage Review
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/pre-existing-conditions" className="font-semibold text-harbor-mid hover:underline">
              ← Return to the complete reference
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
