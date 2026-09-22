import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Green Burial: A Professional Overview",
  description:
    "A professional overview of what eco-conscious green burial involves procedurally, and the documented basis for its typically lower cost.",
  openGraph: { title: "Green Burial: A Professional Overview", description: "A professional overview of what eco-conscious green burial involves procedurally, and the documented basis for its typically lower cost." },

  twitter: { title: "Green Burial: A Professional Overview", description: "A professional overview of what eco-conscious green burial involves procedurally, and the documented basis for its typically lower cost." },
};

export default function GreenBurialPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Green burial: a professional overview
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Green, or natural, burial is an approach oriented toward minimizing environmental
          impact, with steadily increasing adoption alongside conventional burial and cremation.
          The following addresses the defining characteristics of the practice and its typical
          cost implications.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Defining characteristics
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Several elements typically define the practice: absence of chemical embalming; a
          biodegradable container, ranging from a simple shroud to a casket constructed of
          untreated wood, wicker, or bamboo; absence of a concrete burial vault; and interment
          within a natural or conservation burial ground specifically designated for this purpose.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Basis for reduced cost
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Green burial frequently, though not universally, carries a lower cost than conventional
          burial, attributable to the elimination of specific cost components rather than a
          discount applied to them: no embalming chemicals, a lower-cost container relative to
          traditional metal caskets, and no vault requirement. This pattern admits exceptions — a
          natural burial ground establishes independent plot pricing, and certain premium
          natural-material caskets carry non-trivial cost.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Variability in availability and standards
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Not all cemeteries offer green burial, and the term is not applied uniformly across
          providers. Certain burial grounds hold independent third-party certification; others
          apply the term without external verification. Direct confirmation with a specific
          provider regarding the precise scope of their green offering is professionally
          advisable.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Relationship to cremation
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Cremation constitutes a distinct disposition category, involving its own energy
          expenditure and not inherently representing the lower-impact option. Certain families
          combine both approaches, selecting cremation followed by interment of the remains in a
          biodegradable urn within a natural burial ground. No single approach is professionally
          superior — the determination depends on family priorities.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold text-harbor">Verification and coverage sizing</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            Given the relatively nascent and non-standardized nature of this market, direct
            verification with the provider is advisable, including confirmation of whether a
            vault is required even within a designated "green" section, as this materially affects
            cost. The resulting figure should inform coverage sizing.
          </p>
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
