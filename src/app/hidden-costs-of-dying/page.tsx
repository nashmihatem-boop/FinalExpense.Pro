import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Ancillary Costs Associated with Death: An Overlooked Category",
  description:
    "A professional analysis of the costs beyond the funeral itself: probate, medical obligations, debt, ongoing household expenses, family travel, and lost income.",
  openGraph: { title: "Ancillary Costs Associated with Death: An Overlooked Category", description: "A professional analysis of the costs beyond the funeral itself: probate, medical obligations, debt, ongoing household expenses, family travel, and lost income." },

  twitter: { title: "Ancillary Costs Associated with Death: An Overlooked Category", description: "A professional analysis of the costs beyond the funeral itself: probate, medical obligations, debt, ongoing household expenses, family travel, and lost income." },
};

export default function HiddenCostsOfDyingPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Ancillary costs associated with death: an overlooked category
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          When financial planning for a death in the family occurs, the funeral is typically the
          primary, and frequently sole, consideration. The funeral, however, rarely constitutes
          the final financial obligation. Several additional cost categories typically emerge in
          the subsequent weeks and months, and their tendency to be overlooked in advance renders
          them particularly likely to create unanticipated financial strain.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Probate and estate administration costs
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Property held solely in the decedent's name — real property, a vehicle, or a bank
          account without a designated beneficiary — typically requires probate: the judicial
          process validating a will, or applying intestate succession law absent a will, and
          formally transferring ownership. Probate frequently involves court filing fees and
          typically requires an attorney or executor to manage documentation, creditor
          notification, and process completion. This process additionally requires substantial
          time, potentially months, during which certain assets remain inaccessible to the family.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Outstanding medical obligations
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A terminal illness frequently generates a final series of medical obligations —
          hospitalization, specialist consultation, equipment, home health services — certain of
          which may be invoiced subsequent to death. Depending on structural characteristics,
          certain obligations constitute claims against the estate rather than personal debt of any
          family member, though resolution remains necessary prior to estate settlement, and the
          amounts involved are frequently substantial.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Credit obligations and unsecured debt
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Credit card balances, personal loans, and comparable unsecured obligations do not
          extinguish upon death — these are typically satisfied from estate assets prior to
          distribution to heirs. Families frequently underestimate the proportion of estate value
          allocated to obligations not conventionally categorized as final expenses.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Continuing household obligations
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Financial obligations continue independent of bereavement. Rent or mortgage payments,
          utility costs, insurance premiums, and comparable recurring obligations remain due,
          frequently while family attention is directed toward more immediate concerns. Continued
          payment of these obligations pending resolution of household affairs may constitute
          material near-term out-of-pocket expense.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Travel costs associated with service attendance
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Where family members reside across multiple geographic locations, coordinating
          attendance at a funeral or memorial service on short notice frequently generates
          substantial costs — airfare, lodging, ground transportation, and lost work time,
          typically arranged without advance planning. This cost category is infrequently
          incorporated into funeral cost planning, notwithstanding its material and often
          individually borne financial impact.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Lost household income
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          The financial impact of death extends beyond incurred obligations to encompass
          discontinued income. A surviving spouse may require unpaid leave to manage arrangements
          and grieving, and where the decedent contributed to household income, this gap does not
          self-resolve. This frequently constitutes the most substantial financial impact,
          precisely because it manifests as an absence rather than a discrete invoice.
        </p>

        <p className="mt-8 text-base leading-relaxed text-charcoal/80">
          This analysis is not intended to alarm, but rather to inform. The majority of these
          costs fall precisely within the scope a modest life insurance policy is designed to
          address: cash disbursed directly to the beneficiary, available for allocation to
          whatever obligation actually arises, rather than restricted to a single funeral
          provider's invoice.
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
