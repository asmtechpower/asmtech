import type { Metadata } from "next";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { ROOFTOP_SUBSIDY_ROWS } from "./subsidyData";

export const metadata: Metadata = {
  title: "Solar Rooftop Subsidy | ASMTECH Power & Infra Pvt Ltd",
  description:
    "Central and state government rooftop solar subsidy slabs by plant capacity. Illustrative figures — confirm eligibility and amounts on the National Portal and with your DISCOM.",
  keywords: [
    "rooftop solar subsidy",
    "central government subsidy",
    "state government subsidy",
    "solar subsidy calculator",
    "solar subsidy scheme",
    "solar subsidy 2024",
  ],
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

const inr = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

const benefits = [
  "Up to 80% government subsidy",
  "Warranty up to 30 years",
  "Instant savings up to 90% on your electricity bill",
  "Financing facility also available @ 6% p.a. interest",
];

export default function SubsidyPage() {
  return (
    <main className="min-h-screen bg-[#f5f0e8]">
      <section className="pt-8 container mx-auto max-w-6xl">
        <Header />
      </section>

      <section className="container mx-auto max-w-6xl px-4 py-12 md:py-20">
        <div className="mx-auto max-w-4xl text-center mb-10 md:mb-14">
          <span className="inline-flex items-center rounded-full border border-neutral-400 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-neutral-800">
            Solar rooftop yojna
          </span>
          <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[#0a1628]">
            Central &amp; state subsidy by capacity
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Subsidy amounts for grid-connected rooftop solar by plant capacity
            (kW). Figures are indicative; verify on the National Portal and with
            your state agency.
          </p>
        </div>

        <div className="mx-auto max-w-5xl rounded-2xl border-2 border-[#1e4a8a]/40 bg-white shadow-sm overflow-hidden">
          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#1e4a8a]/25">
            <div className="min-w-0">
              <div className="bg-emerald-600 px-4 py-3 text-center text-sm font-bold uppercase tracking-wide text-white">
                Central government subsidy
              </div>
              <ul className="divide-y divide-[#1e4a8a]/20" role="list">
                {ROOFTOP_SUBSIDY_ROWS.map((row) => (
                  <li
                    key={`c-${row.capacityKw}`}
                    className="flex items-center justify-between gap-3 px-4 py-3.5 text-[#0a1628]"
                  >
                    <span className="font-semibold tabular-nums">
                      {row.capacityKw} kW
                    </span>
                    <span className="font-bold tabular-nums text-right">
                      {inr.format(row.centralInr)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="min-w-0">
              <div className="bg-emerald-600 px-4 py-3 text-center text-sm font-bold uppercase tracking-wide text-white">
                State government subsidy
              </div>
              <ul className="divide-y divide-[#1e4a8a]/20" role="list">
                {ROOFTOP_SUBSIDY_ROWS.map((row) => (
                  <li
                    key={`s-${row.capacityKw}`}
                    className="flex items-center justify-between gap-3 px-4 py-3.5 text-[#0a1628]"
                  >
                    <span className="font-semibold tabular-nums">
                      {row.capacityKw} kW
                    </span>
                    <span className="font-bold tabular-nums text-right">
                      {inr.format(row.stateInr)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t-2 border-[#1e4a8a]/25 bg-[#f8fafc] px-4 py-4 md:px-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">
              Total subsidy (central + state)
            </p>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-1 text-sm text-[#0a1628]">
              {ROOFTOP_SUBSIDY_ROWS.map((row) => (
                <li
                  key={`t-${row.capacityKw}`}
                  className="flex justify-between gap-2 tabular-nums"
                >
                  <span className="text-neutral-600">{row.capacityKw} kW</span>
                  <span className="font-semibold">
                    {inr.format(row.totalInr)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ul className="mx-auto max-w-5xl mt-10 md:mt-12 space-y-3 text-center text-sm sm:text-base font-bold uppercase tracking-wide text-[#0a1628]">
          {benefits.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </section>

      <Footer />
    </main>
  );
}
