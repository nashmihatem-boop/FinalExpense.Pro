import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SafeLink } from "@/components/safe-link";

export const metadata: Metadata = {
  title: "A Professional's Guide to Avoiding Final Expense Scams",
  description:
    "A systematic look at why final expense insurance draws bad actors, and six specific, professionally vetted checks to run before you buy or switch a policy.",
  openGraph: { title: "A Professional's Guide to Avoiding Final Expense Scams", description: "A systematic look at why final expense insurance draws bad actors, and six specific, professionally vetted checks to run before you buy or switch a policy." },

  twitter: { title: "A Professional's Guide to Avoiding Final Expense Scams", description: "A systematic look at why final expense insurance draws bad actors, and six specific, professionally vetted checks to run before you buy or switch a policy." },
};

const TOPICS = [
  {
    title: "Verifying licensure — the professional standard",
    description:
      "The exact state-license and NPN checks a licensed professional expects you to be able to run yourself.",
    href: "/avoiding-scams/verify-a-company-is-legitimate",
  },
  {
    title: "Auditing insurance advertising claims",
    description:
      "How to evaluate “as low as” pricing and “no medical exam” language the way an underwriter would.",
    href: "/avoiding-scams/truth-about-insurance-ads",
  },
  {
    title: "Distinguishing a professional call from a scripted one",
    description:
      "The specific markers that separate a credentialed agent's outreach from a scam call.",
    href: "/avoiding-scams/scam-calls-targeting-seniors",
  },
  {
    title: "Evaluating your distribution channel",
    description:
      "A professional breakdown of the captive-agent, independent-agent, and direct-carrier models.",
    href: "/avoiding-scams/independent-vs-captive-vs-direct",
  },
  {
    title: "Recognizing policy churning",
    description:
      "How to evaluate a replacement recommendation professionally, before agreeing to reset your coverage.",
    href: "/avoiding-scams/policy-churning",
  },
  {
    title: "Identifying agent misconduct",
    description:
      "The documented red flags that indicate an agent isn't acting in your interest, and the proper next step.",
    href: "/avoiding-scams/agent-fraud",
  },
];

export default function AvoidingScamsPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <SafeLink href="/" className="hover:text-harbor">Home</SafeLink> / Avoiding Scams
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          A professional's guide to avoiding final expense scams
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Every profession that deals with vulnerable decisions develops a checklist for the
          patterns that recur most often, and final expense insurance is no exception. This
          product is typically purchased later in life, frequently under real emotional weight —
          a diagnosis, a spouse's passing, a desire to finally close an open gap in planning — and
          that combination of stakes and urgency is exactly the profile bad actors are trained to
          exploit. What follows is a professional, systematic breakdown of that risk, regardless of
          which company you ultimately choose.
        </p>

        <h2 className="mt-14 font-display text-2xl font-extrabold text-harbor">
          Why this segment of the market draws professional scrutiny
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          The risk profile is well understood: buyers in this segment skew older, a meaningful
          share manage a fixed income, and a portion complete the transaction without a second
          reviewer — a spouse or adult child — checking the terms alongside them. Much of the
          business is still transacted by phone or mail rather than in person. None of this implies
          that buyers are unsophisticated, and it certainly doesn't reflect on the licensed
          professionals who make up the overwhelming majority of this industry. But any market
          with this risk profile will attract a specific class of bad actor, one who relies on
          urgency and unfamiliarity to bypass the scrutiny a decision like this warrants. Trained
          recognition of that pattern is the core of professional-grade protection here.
        </p>

        <h2 className="mt-14 font-display text-2xl font-extrabold text-harbor">
          The mitigating factor: this is a regulated profession
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Insurance ranks among the more heavily regulated consumer industries in the country.
          Every carrier and every individual producer must hold an active license in the state
          where you reside, and that credential is public record, verifiable by any consumer at no
          cost. This isn't an obscure loophole for the initiated — it's the standard, intended
          mechanism this market operates under, available to you regardless of which licensed
          professional you ultimately engage, including ours.
        </p>

        <h2 className="mt-14 font-display text-2xl font-extrabold text-harbor">
          Six checks a professional would run before you buy
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          The rest of this guide is organized into six specific, professionally vetted checks. None
          require prior expertise on your part — just a systematic understanding of what to verify
          before you commit.
        </p>
        {TOPICS.map((topic) => (
          <div key={topic.href} className="mt-8">
            <h3 className="font-display text-lg font-extrabold text-harbor">{topic.title}</h3>
            <p className="mt-2 text-base leading-relaxed text-charcoal/80">{topic.description}</p>
            <Link href={topic.href} className="mt-2 inline-block text-sm font-semibold text-harbor-mid hover:underline">
              Read the full guide →
            </Link>
          </div>
        ))}

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            Request a Professional Coverage Review
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <SafeLink href="/" className="font-semibold text-harbor-mid hover:underline">
              ← Back to Home
            </SafeLink>
          </p>
        </div>
      </div>
    </div>
  );
}
