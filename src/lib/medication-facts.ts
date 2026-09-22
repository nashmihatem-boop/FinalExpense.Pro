export type MedicationFact = {
  slug: string;
  name: string;
  examples: string;
  summary: string;
  detail: string;
};

export const MEDICATIONS: MedicationFact[] = [
  {
    slug: "anti-seizure-medication",
    name: "Anti-Seizure Medication",
    examples: "e.g., Keppra, Dilantin, Lamictal",
    summary: "Typically interpreted as an indicator of an epilepsy or seizure history rather than as an independent concern.",
    detail:
      "Carriers attach less significance to the medication itself than to what it indicates: the duration of seizure-free status, and whether the underlying condition is controlled. An extended period without a seizure while maintained on a stable dose commonly qualifies for level coverage. A recent seizure, or a recent adjustment to the medication regimen, is more likely to prompt additional underwriting questions or a graded classification.",
  },
  {
    slug: "antidepressants",
    name: "Antidepressants",
    examples: "e.g., Zoloft, Lexapro, Wellbutrin",
    summary: "Among the most frequently encountered prescriptions in underwriting, and rarely an obstacle on its own.",
    detail:
      "Depression and anxiety are extremely common diagnoses, and most carriers treat a stable antidepressant prescription as routine rather than as cause for concern. Underwriting weight falls more heavily on stability: the length of time on the medication, whether the dosage has changed recently, and whether a history of hospitalization exists. A well-managed, long-standing prescription is generally a non-issue.",
  },
  {
    slug: "blood-thinners",
    name: "Blood Thinners",
    examples: "e.g., Eliquis, Xarelto, Warfarin",
    summary: "The underlying reason for the prescription carries more underwriting weight than the medication itself.",
    detail:
      "Blood thinners are prescribed for a wide range of underlying reasons, among them AFib, a prior blood clot, or a mechanical heart valve, and carriers look past the prescription itself to that underlying condition. A blood thinner associated with a well-managed condition such as AFib frequently remains eligible at level rates, whereas one associated with a more serious, recent cardiac event may instead point toward a graded classification.",
  },
  {
    slug: "opioid-pain-medication",
    name: "Opioid Pain Medication",
    examples: "e.g., Oxycodone, Hydrocodone, Tramadol",
    summary: "The most closely scrutinized medication category, as carriers are specifically screening for indications of dependency.",
    detail:
      "Occasional or short-term use associated with a specific event, a past surgery, for example, is evaluated very differently from an ongoing, long-term prescription. Carriers are primarily seeking to rule out substance dependency, along with the more serious chronic pain conditions for which opioids are sometimes prescribed. A long-standing, stable prescription tied to a known condition fares better than one that is recent or open-ended.",
  },
];

export function findMedication(slug: string): MedicationFact | undefined {
  return MEDICATIONS.find((m) => m.slug === slug);
}
