import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Verifying Carrier and Agent Legitimacy: A Professional Protocol",
  description:
    "A professional, three-step protocol for verifying a carrier's and agent's state insurance license, confirming an NPN, and identifying non-standard payment requests.",
  openGraph: { title: "Verifying Carrier and Agent Legitimacy: A Professional Protocol", description: "A professional, three-step protocol for verifying a carrier's and agent's state insurance license, confirming an NPN, and identifying non-standard payment requests." },

  twitter: { title: "Verifying Carrier and Agent Legitimacy: A Professional Protocol", description: "A professional, three-step protocol for verifying a carrier's and agent's state insurance license, confirming an NPN, and identifying non-standard payment requests." },
};

export default function VerifyCompanyIsLegitimatePage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Verifying carrier and agent legitimacy: a professional protocol
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Prior to disclosing health history, personal information, or payment details, a
          three-step verification protocol confirms the counterparty's legitimacy. Each step is
          free, requires only minutes, and is the professional standard applied before proceeding
          with any application.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Step one: confirm state licensure for both the carrier and the agent
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Every state maintains an insurance department (variously titled a Department or
          Division of Insurance) responsible for licensing every company and individual agent
          authorized to transact business there. This licensure is public record, and every state
          provides a no-cost lookup tool to confirm license status by name. Where the relevant
          regulator is unclear, the National Association of Insurance Commissioners maintains a
          directory at{" "}
          <a
            href="https://www.naic.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-harbor-mid underline"
          >
            naic.org
          </a>{" "}
          that resolves this in seconds. This verification requires no specialized expertise —
          it is the standard tool regulators expect consumers to use.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Step two: request the agent's National Producer Number
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Every licensed agent is assigned a National Producer Number (NPN) at the time of
          licensure — a persistent identifier independent of current carrier affiliation. A
          licensed professional will provide this number without hesitation upon request, and it
          is verifiable through the same state lookup tools referenced above. Hesitation,
          deflection, or an inability to produce an NPN should be treated as sufficient grounds to
          halt the transaction pending independent verification.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Step three: evaluate the requested payment method
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Legitimate carriers collect premium exclusively through standard, traceable
          instruments — bank draft, a check payable to the carrier, or a card charged directly by
          the carrier. No legitimate transaction requires deviation from these methods. A request
          for wire transfer, gift cards, cryptocurrency, or mailed cash should be treated as
          disqualifying — no legitimate insurance company employs these payment methods under any
          circumstance. Each shares a defining characteristic unrelated to insurance: once
          transmitted, the funds are effectively unrecoverable.
        </p>
        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">A reliable heuristic</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            Any payment method that would also serve a fraudulent caller posing as a relative in
            distress is, by definition, not a method a legitimate insurance carrier employs.
          </p>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          This protocol applies to our own credentials as well
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          This practice exists to connect clients with licensed insurance professionals, so it
          would be professionally inconsistent to publish a verification protocol without inviting
          its application here. Request our license credentials. Independently verify any carrier
          referenced in a conversation with us. A legitimate agency incurs no risk from a
          five-minute verification, and no client should be expected to proceed on the basis of
          assurance alone — ours included.
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
