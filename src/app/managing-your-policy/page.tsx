import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SafeLink } from "@/components/safe-link";
import { TopicCard } from "@/components/topic-card";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Professional Policy Administration Resources",
  description:
    "Already hold a final expense or life insurance policy? Access professional guidance on claims, beneficiaries, missed payments, cash value, and more.",
  openGraph: { title: "Professional Policy Administration Resources", description: "Already hold a final expense or life insurance policy? Access professional guidance on claims, beneficiaries, missed payments, cash value, and more." },

  twitter: { title: "Professional Policy Administration Resources", description: "Already hold a final expense or life insurance policy? Access professional guidance on claims, beneficiaries, missed payments, cash value, and more." },
};

const TOPICS: { href: string; title: string; description: string; image?: string }[] = [
  {
    href: "/managing-your-policy/borrow-from-policy",
    title: "Policy loans against cash value",
    description: "A professional breakdown of how a policy loan works, and its effect on the death benefit if unpaid.",
    image: "/photos/planning-seniors-conversation.jpg",
  },
  {
    href: "/managing-your-policy/beneficiary-dies-before-you",
    title: "Predeceased beneficiary provisions",
    description: "What governs the payout when a named beneficiary dies first, and why a contingent designation matters.",
  },
  {
    href: "/managing-your-policy/missed-premium-payment",
    title: "Missed premium payments",
    description: "Grace periods, lapse, and the professional protocol for a payment that didn't process.",
    image: "/photos/planning-senior-phone-call.jpg",
  },
  {
    href: "/managing-your-policy/how-to-file-a-claim",
    title: "Filing a death benefit claim",
    description: "The professional procedure a beneficiary follows to initiate and complete a claim.",
    image: "/photos/planning-hands-signing.jpg",
  },
  {
    href: "/managing-your-policy/how-long-a-claim-takes-to-pay",
    title: "Claim processing timelines",
    description: "The documented factors that accelerate or delay a claim's payout.",
  },
  {
    href: "/managing-your-policy/find-a-lost-policy",
    title: "Locating an undocumented policy",
    description: "A systematic approach to tracking down a policy when records are unavailable.",
    image: "/photos/planning-senior-laptop.jpg",
  },
  {
    href: "/managing-your-policy/contestability-period",
    title: "The contestability period",
    description: "Why a carrier retains review rights during a policy's first two years, professionally explained.",
  },
  {
    href: "/managing-your-policy/claim-denied",
    title: "Responding to a denied claim",
    description: "Documented reasons for denial, and the full range of professional options available afterward.",
  },
  {
    href: "/managing-your-policy/change-beneficiary",
    title: "Beneficiary updates",
    description: "The proper procedure for updating a designation, and when a review is professionally advisable.",
    image: "/photos/planning-advisor-senior-documents.jpg",
  },
  {
    href: "/managing-your-policy/cancel-policy",
    title: "Policy cancellation",
    description: "What cancellation entails procedurally, and what to verify before proceeding.",
  },
];

export default function ManagingYourPolicyPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <SafeLink href="/" className="hover:text-harbor">Home</SafeLink> / Managing Your Policy
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Professional policy administration resources
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          This section is not intended for prospective applicants — it provides professional
          guidance for policyholders who require assistance with a specific administrative
          matter: a payment issue, a claim in progress, an outdated beneficiary designation, or a
          question regarding policy mechanics. Locate the relevant topic below.
        </p>

        <h2 className="mt-14 font-display text-2xl font-extrabold text-harbor">
          Available resources
        </h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {TOPICS.map((topic) => (
            <TopicCard key={topic.href} href={topic.href} title={topic.title} description={topic.description} image={topic.image} />
          ))}
        </div>

        <h2 className="mt-14 font-display text-2xl font-extrabold text-harbor">
          Evaluating new coverage instead?
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          If you do not yet hold a policy, this section does not apply to your situation — return
          to the homepage to begin a professional coverage review, or, if a health condition is
          relevant to your evaluation, consult our{" "}
          <Link href="/pre-existing-conditions" className="text-harbor-mid underline">
            guide to pre-existing conditions
          </Link>{" "}
          first.
        </p>

        <div className="mt-14 text-center">
          <Button as="link" href={siteConfig.supportPhoneHref} variant="outline" size="lg">
            Call {siteConfig.supportPhoneDisplay}
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            Don&apos;t have a policy yet?{" "}
            <SafeLink href="/get-quote" className="font-semibold text-harbor-mid hover:underline">
              Request a Professional Coverage Review →
            </SafeLink>
          </p>
        </div>
      </div>
    </div>
  );
}
