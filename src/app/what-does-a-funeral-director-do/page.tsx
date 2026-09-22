import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "The Function of a Funeral Director: A Professional Overview",
  description:
    "A professional overview of the funeral director's role — logistical coordination, regulatory paperwork, preparation of the deceased, and family guidance.",
  openGraph: { title: "The Function of a Funeral Director: A Professional Overview", description: "A professional overview of the funeral director's role — logistical coordination, regulatory paperwork, preparation of the deceased, and family guidance." },

  twitter: { title: "The Function of a Funeral Director: A Professional Overview", description: "A professional overview of the funeral director's role — logistical coordination, regulatory paperwork, preparation of the deceased, and family guidance." },
};

export default function WhatDoesAFuneralDirectorDoPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          The function of a funeral director: a professional overview
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Upon a death, a funeral director typically becomes a primary point of contact for a
          family operating under significant emotional and practical strain. The role extends
          considerably beyond service administration, encompassing logistics, regulatory
          documentation, technical preparation, and structured guidance at a time when family
          capacity for these tasks is minimal.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Logistical coordination
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A funeral director manages the operational infrastructure underlying a service, including
          transportation of the deceased, coordination with the cemetery or crematory, scheduling
          of the service and any visitation, and arrangement of clergy or officiants as requested.
          This coordination typically occurs within a compressed timeframe, structured so that the
          family is not required to manage individual logistical components directly.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Regulatory and administrative documentation
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A death generates substantial administrative documentation, the majority of which a
          funeral director typically processes on the family&apos;s behalf — including death
          certificate filing, securing permits required for burial or cremation, and providing
          guidance on subsequent steps such as notifying the Social Security Administration or
          initiating a life insurance claim. Most families lack prior familiarity with this
          process, underscoring the value of routine professional handling.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Preparation of the deceased
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Funeral directors apply specialized technical training in preparing the deceased, a
          function most families do not consider until directly relevant — encompassing embalming
          and preparation for viewing, or a simpler preparation preceding direct cremation or
          burial. The specific procedure varies according to family selection, though the
          applicable standard of care remains consistent across approaches.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Guidance through decision-making
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Perhaps the least visible, yet most significant function involves guiding a family
          through decisions most have not previously encountered — service type, burial or
          cremation, and which elements to include or omit — while maintaining awareness that the
          family is grieving rather than engaged in a commercial transaction. An effective funeral
          director presents options transparently and does not encourage expenditure beyond the
          family&apos;s actual requirements.
        </p>

        <p className="mt-8 text-base leading-relaxed text-charcoal/80">
          Each of these decisions carries an associated cost. Pre-arranged coverage, with a
          beneficiary positioned to remit payment to the funeral home directly and on the
          family&apos;s own schedule, eliminates one additional variable during this period.
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
