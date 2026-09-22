import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Celebration of Life Services: A Structural Comparison",
  description:
    "A professional comparison of celebration-of-life services against traditional funerals, their typical elements, and their integration with burial or cremation.",
  openGraph: { title: "Celebration of Life Services: A Structural Comparison", description: "A professional comparison of celebration-of-life services against traditional funerals, their typical elements, and their integration with burial or cremation." },

  twitter: { title: "Celebration of Life Services: A Structural Comparison", description: "A professional comparison of celebration-of-life services against traditional funerals, their typical elements, and their integration with burial or cremation." },
};

export default function CelebrationOfLifePage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Celebration of life services: a structural comparison
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          A celebration of life represents one of the more structurally flexible options available
          to families arranging a memorial. The following addresses its principal distinctions
          from a traditional funeral and its integration with burial or cremation arrangements.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Distinction from a traditional funeral
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A traditional funeral service generally follows an established structure — frequently
          religious in character, formal in presentation, and typically scheduled in proximity to
          burial. A celebration of life is structured with considerably greater flexibility,
          typically emphasizing personalization and informality, organized around the specific
          individual's life and character rather than a prescribed order of service. No standard
          template governs this format, a characteristic that appeals to families seeking an
          arrangement reflective of the individual being honored.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Integration with burial or cremation
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A celebration of life is frequently conducted separately from, and subsequent to, the
          disposition of remains — burial or cremation typically occurs independently, often
          shortly following death, while the memorial gathering is scheduled at a later date. This
          arrangement is particularly common in conjunction with cremation, as it eliminates the
          scheduling constraints associated with traditional burial, affording the family
          discretion in selecting an appropriate date and venue. This format is not exclusive to
          cremation, however, and may be conducted in conjunction with, or as an alternative to, a
          traditional burial service.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Typical elements
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Given the absence of a fixed format, specific elements remain at the family's
          discretion. Common components include the presentation of photographs or video, musical
          selections meaningful to the individual, and an open period for attendees to share
          recollections — frequently conducted at a location of personal significance, such as a
          residence, park, or favored establishment, rather than a funeral home or religious
          venue. Certain families incorporate traditional elements, such as a religious reading or
          formal eulogy, while others adopt a format more closely resembling a reception.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Implications for advance planning
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Given the structural flexibility of this format, associated costs vary considerably
          based on family selections — venue rental, catering, guest travel, and other
          customizations may accumulate differently than costs associated with a standard
          service. Advance provision of funds, through life insurance or final expense coverage,
          affords the family discretion to arrange a service genuinely reflective of their
          preferences, rather than constraint to the most economical available option.
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
