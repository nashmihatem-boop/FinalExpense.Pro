import type { Metadata } from "next";
import { Suspense } from "react";
import { Quiz } from "@/components/quote-quiz/quiz";

export const metadata: Metadata = {
  title: "Request a Professional Coverage Review",
  openGraph: { title: "Request a Professional Coverage Review — FinalExpense.Pro" },
  twitter: { title: "Request a Professional Coverage Review — FinalExpense.Pro" },
};

export default function GetQuotePage() {
  return (
    <Suspense fallback={null}>
      <Quiz />
    </Suspense>
  );
}
