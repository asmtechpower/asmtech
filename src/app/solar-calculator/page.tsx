import type { Metadata } from "next";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SubsidySavingsCalculator from "./SubsidySavingsCalculator";

export const metadata: Metadata = {
  title: "Solar Savings Calculator | ASMTECH Power & Infra Pvt Ltd",
  description:
    "Estimate Central Financial Assistance (CFA) and annual savings for residential rooftop solar using MNRE PM Surya Ghar slab norms. Illustrative figures — verify on the National Portal.",
    keywords: ['solar calculator', 'solar savings calculator', 'solar subsidy calculator', 'solar subsidy scheme', 'solar subsidy 2024'],
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        'max-snippet': -1,
        'max-image-preview': 'large',
        'max-video-preview': -1
      },
    },
};

export default function SolarCalculatorPage() {
  return (
    <main className="min-h-screen bg-[#f5f0e8]">
      <section className="pt-8 container mx-auto max-w-6xl">
        <Header />
      </section>

      <section className="container mx-auto max-w-6xl px-4 py-12 md:py-20">
        <div className="mx-auto max-w-4xl text-center mb-10 md:mb-14">
          <span className="inline-flex items-center rounded-full border border-neutral-400 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-neutral-800">
            MNRE — PM Surya Ghar
          </span>
          <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-neutral-900">
            Solar savings calculator
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Check indicative Central Financial Assistance for grid-connected
            residential rooftop systems and rough electricity savings from your
            tariff and expected generation.
          </p>
        </div>

        <SubsidySavingsCalculator />
      </section>

      <Footer />
    </main>
  );
}
