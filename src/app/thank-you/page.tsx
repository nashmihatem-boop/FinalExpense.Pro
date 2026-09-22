import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { HorizonMark } from "@/components/horizon-mark";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "You're All Set",
  openGraph: { title: "You're All Set — FinalExpense.Pro" },
  twitter: { title: "You're All Set — FinalExpense.Pro" },
};

export default function ThankYouPage() {
  return (
    <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-xl flex-col items-center justify-center px-5 py-16 text-center">
      <HorizonMark className="h-16 w-16" />
      <h1 className="mt-6 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
        You&apos;re all set.
      </h1>
      <p className="mt-4 max-w-md text-lg leading-relaxed text-charcoal/75">
        A licensed professional will call you at the number you provided with
        a reviewed recommendation of your options. A copy of what you
        submitted is on its way to your inbox as well.
      </p>
      <p className="mt-3 max-w-md text-base text-charcoal/60">
        Prefer to speak with someone now? Call the number below.
      </p>
      <Button as="link" href={siteConfig.supportPhoneHref} variant="outline" size="lg" className="mt-7">
        Call {siteConfig.supportPhoneDisplay}
      </Button>
    </div>
  );
}
