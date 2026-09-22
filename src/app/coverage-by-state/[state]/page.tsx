import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { PolicyTypesTable, CostFactorsGrid } from "@/components/final-expense/policy-types-table";
import { US_STATES } from "@/lib/us-states";
import { STATE_FACTS, formatMetros } from "@/lib/state-facts";
import { STATE_COUNTIES, countyTermFor } from "@/lib/state-counties";
import { siteConfig } from "@/lib/site-config";

function findState(slug: string) {
  return US_STATES.find((s) => s.code.toLowerCase() === slug.toLowerCase());
}

export function generateStaticParams() {
  return US_STATES.map((s) => ({ state: s.code.toLowerCase() }));
}

export async function generateMetadata(props: PageProps<"/coverage-by-state/[state]">): Promise<Metadata> {
  const { state: slug } = await props.params;
  const state = findState(slug);
  if (!state) return {};
  const title = `Final Expense Insurance in ${state.name}: A Regulatory and Cost Analysis`;
  const description = `A professional analysis of final expense insurance in ${state.name}: underwriting mechanics, premium determinants, state regulation, veteran benefits, and next steps.`;
  return {
    title,
    description,
    openGraph: { title, description },
    twitter: { title, description },
  };
}

const TOC = [
  { id: "costs", label: (s: string) => `Funeral and Cremation Costs in ${s}` },
  { id: "how-it-works", label: () => "Underwriting and Policy Mechanics" },
  { id: "policy-types", label: () => "Available Policy Structures" },
  { id: "regulations", label: (s: string) => `Regulatory Framework in ${s}` },
  { id: "burial-laws", label: (s: string) => `Funeral and Burial Statutes in ${s}` },
  { id: "regions", label: (s: string) => `Regional Coverage in ${s}` },
  { id: "counties", label: (s: string) => `County-Level Coverage in ${s}` },
  { id: "veterans", label: () => "Veterans' Burial Benefits" },
  { id: "faq", label: () => "Frequently Asked Questions" },
];

function faqsFor(stateName: string, isDC: boolean) {
  const locality = isDC ? "the District" : stateName;
  return [
    {
      q: `Is final expense insurance available to ${stateName} residents?`,
      a: `Affirmatively. Multiple carriers hold licensure to underwrite final expense coverage for ${locality} residents. Specific carrier and product availability depends on age, health status, and desired coverage amount — a licensed agent can provide precise qualification details.`,
    },
    {
      q: `Does premium pricing differ materially in ${stateName}?`,
      a: `Insurance regulation occurs at the state level, resulting in variation in product availability by jurisdiction. Within ${locality}, however, premium determination remains primarily a function of age, gender, tobacco use, health status, and coverage amount, rather than specific address.`,
    },
    {
      q: `Does relocation from ${stateName} affect existing coverage?`,
      a: `No. The policy is attached to the insured individual rather than a specific jurisdiction — coverage and premium remain unchanged following relocation.`,
    },
    {
      q: "Is a medical examination required for qualification?",
      a: "The majority of final expense policies do not require one. Simplified-issue products require a limited health questionnaire; guaranteed-issue products eliminate health questions entirely in exchange for a waiting period prior to full benefit applicability.",
    },
    {
      q: "What coverage amount is appropriate?",
      a: "Most applicants size coverage to address funeral or burial costs plus any outstanding obligations they prefer not to leave unaddressed. No universally applicable figure exists — a licensed agent can provide a recommendation specific to individual circumstances, without charge.",
    },
    {
      q: "May multiple beneficiaries be designated?",
      a: "Yes. Multiple beneficiaries may typically be designated with specified percentage allocations, and this designation may be modified subsequently as circumstances change.",
    },
    {
      q: `Do veterans in ${stateName} receive supplementary burial benefits?`,
      a: "Many veterans, and in certain cases their spouses, qualify for federal burial benefits administered through the VA, including a burial allowance and potential eligibility for interment in a VA national cemetery, irrespective of state of residence. Final expense insurance operates independently of these benefits and frequently addresses costs the VA benefit does not cover, such as a service, viewing, or supplementary headstone costs.",
    },
  ];
}

export default async function StateCoveragePage(props: PageProps<"/coverage-by-state/[state]">) {
  const { state: slug } = await props.params;
  const state = findState(slug);
  if (!state) notFound();

  const isDC = state.code === "DC";
  const facts = STATE_FACTS[state.code];
  const displayName = isDC ? "D.C." : state.name;
  const possessive = isDC ? "the District of Columbia's" : `${state.name}'s`;
  const faqs = faqsFor(state.name, isDC);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="bg-canvas">
      {/* Static, locally-authored JSON-LD — no user input reaches this. */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="font-sans text-sm font-semibold tracking-[0.14em] text-brass uppercase">
          {state.name}
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Final expense insurance in {state.name}: a regulatory and cost analysis
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          {isDC ? (
            <>
              Residents of Washington, D.C. may procure final expense coverage through carriers
              holding District licensure.
            </>
          ) : (
            <>
              Residents throughout {state.name} — encompassing {facts.capital}, the state
              capital, and extending to {formatMetros(facts.metros)} — may procure coverage
              through carriers licensed within the state.
            </>
          )}{" "}
          Consistent with insurance generally, regulation occurs at the state level: {possessive}{" "}
          Department of Insurance determines which carriers and products may be offered locally,
          which accounts for jurisdictional variation in available options. This reference
          addresses cost considerations, applicable regulations, and the process for obtaining a
          referral to a licensed local agent for {displayName} residents specifically.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">
            Summary considerations for {displayName} residents
          </p>
          <ul className="mt-3 space-y-2 text-base leading-relaxed text-charcoal/80">
            <li>• All agents hold licensure specific to {isDC ? "the District" : state.name}.</li>
            <li>• Premium determination remains primarily age-, health-, and coverage-amount-driven.</li>
            <li>• The substantial majority of applicants qualify absent medical examination.</li>
            <li>• Coverage remains effective following relocation to another jurisdiction.</li>
          </ul>
        </div>

        <nav aria-label="Guide contents" className="mt-8 rounded-2xl border border-mist p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">Contents</p>
          <ol className="mt-3 grid gap-2 sm:grid-cols-2">
            {TOC.map((item, i) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-sm text-harbor-mid hover:underline">
                  {i + 1}. {item.label(state.name)}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <h2 id="costs" className="mt-14 scroll-mt-24 font-display text-2xl font-extrabold text-harbor">
          Funeral and cremation costs in {state.name}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Funeral and cremation costs vary considerably based on selected services and specific
          geographic location; this reference does not present unverified regional estimates, but
          notes generally that direct cremation typically represents a fraction of the cost
          associated with a complete traditional funeral inclusive of viewing, casket, vault, and
          burial plot. The{" "}
          <a href="https://nfda.org" className="text-harbor-mid underline">National Funeral Directors Association</a>{" "}
          publishes annual national median cost data as a reference point, though local funeral
          homes remain the authoritative source for current {displayName}-specific pricing.
          Coverage amount determination should reflect the specific arrangement contemplated
          rather than a generic figure — a licensed agent can assist in this determination.
        </p>

        <h2 id="how-it-works" className="mt-14 scroll-mt-24 font-display text-2xl font-extrabold text-harbor">
          Underwriting and policy mechanics
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          The applicant selects a coverage amount appropriate to anticipated need, completes a
          limited health questionnaire (waived entirely under guaranteed-issue products), and,
          upon approval, remits a fixed monthly premium for the policy's duration. Upon the
          insured's death, the designated beneficiary receives the complete death benefit in cash,
          on a tax-free basis, typically within days of claim submission, with full discretion
          regarding fund allocation — funeral costs, medical obligations, or other purposes — as
          this structure does not restrict proceeds to a specific provider, unlike a prepaid
          funeral arrangement.
        </p>

        <h2 id="policy-types" className="mt-14 scroll-mt-24 font-display text-2xl font-extrabold text-harbor">
          Available policy structures
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          The substantial majority of policies sold to {displayName} residents fall within one of
          the two structures below. Neither structure is categorically superior — the appropriate
          selection depends on health status and the urgency of establishing full coverage.
        </p>
        <PolicyTypesTable />
        <p className="mt-4 text-sm leading-relaxed text-charcoal/60">
          Specific carrier availability and pricing in {displayName} vary — a licensed agent can
          provide precise qualification information without charge.
        </p>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A simplified-issue policy, upon acceptance of health disclosures, generally provides
          full coverage from policy inception. Guaranteed-issue policies, given the absence of
          health questions, typically incorporate a two-year waiting period — natural-cause death
          within this period generally results in premium reimbursement rather than full benefit
          disbursement (accidental death is typically covered immediately under either structure).
          Following expiration of the waiting period, full coverage applies for the policy's
          remaining duration.
        </p>

        <h2 id="regulations" className="mt-14 scroll-mt-24 font-display text-2xl font-extrabold text-harbor">
          Regulatory framework in {state.name}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          {isDC ? "D.C." : state.name}, consistent with every jurisdiction, determines through its
          Department of Insurance which carriers and products may be sold to residents. Agents
          must hold jurisdiction-specific licensure, and carriers must obtain approval of policy
          forms and rates prior to local distribution. Policies additionally incorporate a
          free-look period — typically between 10 and 30 days, varying by jurisdiction — during
          which cancellation for full refund remains available; specific policy documentation will
          reflect the applicable duration. As these requirements are jurisdiction-specific, a
          product available nationally is not necessarily approved for {displayName} — a licensed
          agent will present only options confirmed available in this jurisdiction.
        </p>

        <h2 id="burial-laws" className="mt-14 scroll-mt-24 font-display text-2xl font-extrabold text-harbor">
          Funeral and burial statutes in {state.name}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Funeral and burial practices are similarly subject to state-level regulation. Generally,
          state statute establishes the party holding legal authority over funeral and burial
          determinations (typically a spouse or next of kin, absent alternative designation),
          mandates funeral home licensure, and establishes consumer protection requirements
          regarding price disclosure. Given jurisdictional variation in these requirements,
          consultation with a local funeral home or an elder law attorney is advisable for
          jurisdiction-specific guidance — final expense insurance functions to ensure funds are
          available irrespective of the specific determinations made.
        </p>

        <h2 className="mt-14 font-display text-2xl font-extrabold text-harbor">
          Premium determinants
        </h2>
        <CostFactorsGrid />

        <h2 id="regions" className="mt-14 scroll-mt-24 font-display text-2xl font-extrabold text-harbor">
          Regional coverage in {state.name}
        </h2>
        {isDC ? (
          <p className="mt-4 text-base leading-relaxed text-charcoal/80">
            Washington, D.C. constitutes a single jurisdiction rather than a state comprising
            counties or regions — coverage is administered uniformly throughout the District.
          </p>
        ) : (
          <>
            <p className="mt-4 text-base leading-relaxed text-charcoal/80">
              Licensed agents and carriers serve residents throughout {state.name}, inclusive of
              the state capital and principal metropolitan areas:
            </p>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-mist">
              <table className="w-full min-w-[420px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-mist bg-canvas-alt">
                    <th className="px-5 py-3.5 text-sm font-semibold text-charcoal/60">Area</th>
                    <th className="px-5 py-3.5 font-display text-sm font-extrabold text-harbor">City</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-mist">
                    <td className="px-5 py-4 text-sm font-semibold text-charcoal/70">State capital</td>
                    <td className="px-5 py-4 text-sm text-charcoal">{facts.capital}</td>
                  </tr>
                  {facts.metros.map((metro, i) => (
                    <tr key={metro} className={i < facts.metros.length - 1 ? "border-b border-mist" : ""}>
                      <td className="px-5 py-4 text-sm font-semibold text-charcoal/70">Major metro</td>
                      <td className="px-5 py-4 text-sm text-charcoal">{metro}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        <h2 id="counties" className="mt-14 scroll-mt-24 font-display text-2xl font-extrabold text-harbor">
          County-level coverage in {state.name}
        </h2>
        {isDC ? (
          <p className="mt-4 text-base leading-relaxed text-charcoal/80">
            Washington, D.C. constitutes a single federal district without county-level
            subdivision — coverage is administered uniformly throughout.
          </p>
        ) : (
          <>
            <p className="mt-4 text-base leading-relaxed text-charcoal/80">
              Coverage extends to residents throughout every {countyTermFor(state.code).singular}{" "}
              in {state.name}, not solely major metropolitan areas. All{" "}
              {STATE_COUNTIES[state.code]?.length ?? 0} are currently served:
            </p>
            <div className="mt-6 columns-2 gap-x-6 sm:columns-3 lg:columns-4">
              {(STATE_COUNTIES[state.code] ?? []).map((county) => (
                <p key={county} className="break-inside-avoid py-1 text-sm text-charcoal/75">
                  {county}
                </p>
              ))}
            </div>
          </>
        )}

        <h2 id="veterans" className="mt-14 scroll-mt-24 font-display text-2xl font-extrabold text-harbor">
          Veterans&apos; burial benefits
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Veterans, and in certain circumstances their spouses, may qualify for federal burial
          benefits administered through the VA, including a burial allowance and potential
          eligibility for interment in a VA national cemetery, irrespective of state of residence.
          Final expense insurance operates independently of these benefits and is frequently
          utilized to address costs not covered by the VA benefit, such as a service, viewing, or
          supplementary headstone costs. A licensed agent can clarify the interaction between
          these two provisions.
        </p>

        <h2 id="faq" className="mt-14 scroll-mt-24 font-display text-2xl font-extrabold text-harbor">
          Frequently asked questions
        </h2>
        <div className="mt-6 space-y-3">
          {faqs.map((item) => (
            <details key={item.q} className="group rounded-xl border border-mist bg-canvas-raised px-6 py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-bold text-harbor marker:content-none">
                {item.q}
                <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4 shrink-0 text-harbor-mid transition-transform duration-200 group-open:-rotate-180">
                  <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </summary>
              <p className="mt-3 text-base leading-relaxed text-charcoal/80">{item.a}</p>
            </details>
          ))}
        </div>

        <div className="mt-14 rounded-2xl bg-canvas-alt p-7">
          <h2 className="font-display text-xl font-extrabold text-harbor">
            Rationale for multi-carrier comparison in {displayName}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-charcoal/80">
            {siteConfig.name} specializes in final expense insurance for individuals seeking
            assurance that funeral costs will not burden survivors. Partnerships with multiple
            carriers enable systematic comparison for {displayName} residents, rather than
            directing all applicants toward a single carrier's product irrespective of fit.
          </p>
        </div>

        <div className="mt-14 text-center">
          <Button as="link" href={`/get-quote?state=${state.code}`} size="lg">
            See what you qualify for in {state.name}
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/coverage-by-state" className="font-semibold text-harbor-mid hover:underline">
              ← See all states
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
