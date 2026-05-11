"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  annualBillSavingsInr,
  annualGenerationKwh,
  indicativeCapacityBand,
  MAX_SUBSIDISED_KW,
  residentialCfaInr,
} from "./mnre";

const inr = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

function parseNum(value: string, fallback: number): number {
  const n = parseFloat(value.replace(/,/g, ""));
  return Number.isFinite(n) ? n : fallback;
}

export default function SubsidySavingsCalculator() {
  const [capacityKw, setCapacityKw] = useState("3");
  const [monthlyUnits, setMonthlyUnits] = useState("250");
  const [tariff, setTariff] = useState("8");
  const [yieldPerKw, setYieldPerKw] = useState("1450");
  const [costPerKw, setCostPerKw] = useState("55000");
  const [specialCategory, setSpecialCategory] = useState(true);

  const cap = parseNum(capacityKw, 0);
  const monthly = parseNum(monthlyUnits, 0);
  const tariffN = parseNum(tariff, 0);
  const yieldN = parseNum(yieldPerKw, 1450);
  const costPerKwN = parseNum(costPerKw, 0);

  const results = useMemo(() => {
    const cfa = residentialCfaInr(cap, specialCategory);
    const annualKwh = annualGenerationKwh(cap, yieldN);
    const savingsYear = annualBillSavingsInr(annualKwh, tariffN);
    const grossCost = Math.max(0, cap * costPerKwN);
    const netAfterCfa = Math.max(0, grossCost - cfa);
    const simplePaybackYears =
      savingsYear > 0 ? netAfterCfa / savingsYear : null;
    const bandNote = indicativeCapacityBand(monthly);
    return {
      cfa,
      annualKwh,
      savingsYear,
      grossCost,
      netAfterCfa,
      simplePaybackYears,
      bandNote,
    };
  }, [cap, costPerKwN, monthly, specialCategory, tariffN, yieldN]);

  return (
    <div className="rounded-3xl border border-neutral-200 bg-white/80 p-6 sm:p-8 md:p-10 shadow-sm">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-12">
        <div className="flex flex-col gap-6">
          <fieldset className="flex flex-col gap-3">
            <legend className="text-sm font-semibold text-neutral-900">
              Rooftop capacity (kWp)
            </legend>
            <input
              type="range"
              min={0}
              max={10}
              step={0.5}
              value={Math.min(10, Math.max(0, cap))}
              onChange={(e) => setCapacityKw(e.target.value)}
              className="w-full accent-green-500"
              aria-valuetext={`${cap} kilowatts peak`}
            />
            <div className="flex items-center gap-3">
              <input
                type="number"
                min={0}
                step={0.1}
                value={capacityKw}
                onChange={(e) => setCapacityKw(e.target.value)}
                className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-2.5 text-neutral-900 outline-none focus:border-neutral-500"
                aria-label="Capacity in kWp"
              />
              <span className="text-sm text-neutral-500 shrink-0">kWp</span>
            </div>
            <p className="text-xs text-neutral-500 leading-relaxed">
              CFA applies only on up to {MAX_SUBSIDISED_KW} kWp under MNRE norms;
              generation savings below use your full entered capacity.
            </p>
          </fieldset>

          <label className="flex flex-col gap-2">
            <span className="text-sm font-semibold text-neutral-900">
              Average monthly electricity (units)
            </span>
            <input
              type="number"
              min={0}
              value={monthlyUnits}
              onChange={(e) => setMonthlyUnits(e.target.value)}
              className="rounded-xl border border-neutral-300 bg-white px-4 py-2.5 text-neutral-900 outline-none focus:border-neutral-500"
            />
            <span className="text-xs text-neutral-600">{results.bandNote}</span>
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-sm font-semibold text-neutral-900">
              Effective tariff (₹ / unit)
            </span>
            <input
              type="number"
              min={0}
              step={0.1}
              value={tariff}
              onChange={(e) => setTariff(e.target.value)}
              className="rounded-xl border border-neutral-300 bg-white px-4 py-2.5 text-neutral-900 outline-none focus:border-neutral-500"
            />
            <span className="text-xs text-neutral-500">
              Blended rate after slabs, for a rough annual bill-offset estimate.
            </span>
          </label>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-2">
              <span className="text-sm font-semibold text-neutral-900">
                Yield (kWh / kWp / year)
              </span>
              <input
                type="number"
                min={0}
                step={10}
                value={yieldPerKw}
                onChange={(e) => setYieldPerKw(e.target.value)}
                className="rounded-xl border border-neutral-300 bg-white px-4 py-2.5 text-neutral-900 outline-none focus:border-neutral-500"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-sm font-semibold text-neutral-900">
                System cost (₹ / kWp)
              </span>
              <input
                type="number"
                min={0}
                step={1000}
                value={costPerKw}
                onChange={(e) => setCostPerKw(e.target.value)}
                className="rounded-xl border border-neutral-300 bg-white px-4 py-2.5 text-neutral-900 outline-none focus:border-neutral-500"
              />
            </label>
          </div>

          <label className="flex cursor-pointer items-start gap-3 rounded-2xl border border-neutral-200 bg-[#f5f0e8]/50 p-4">
            <input
              type="checkbox"
              checked={specialCategory}
              onChange={(e) => setSpecialCategory(e.target.checked)}
              className="mt-1 size-4 rounded border-neutral-400 text-green-600 focus:ring-green-500"
            />
            <span className="text-sm text-neutral-800 leading-relaxed">
              <span className="font-semibold text-neutral-900">
                Special Category States / UTs
              </span>{" "}
              (higher CFA per kWp slab). Typical MNRE listings include North
              Eastern states, Sikkim, Himachal Pradesh, Uttarakhand, Jammu &amp;
              Kashmir, Ladakh, Lakshadweep, and Andaman &amp; Nicobar Islands.
              Confirm your DISCOM / state notification.
            </span>
          </label>
        </div>

        <div className="flex flex-col gap-6 rounded-2xl border border-neutral-200 bg-[#f5f0e8] p-6 sm:p-8">
          <h2 className="text-lg font-bold text-neutral-900">
            Estimated outcomes
          </h2>
          <dl className="flex flex-col gap-4">
            <div className="flex flex-col gap-1 border-b border-neutral-200/80 pb-4">
              <dt className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
                Central subsidy (CFA) on up to 3 kWp
              </dt>
              <dd className="text-2xl font-bold text-neutral-900">
                {inr.format(results.cfa)}
              </dd>
            </div>
            <div className="flex flex-col gap-1 border-b border-neutral-200/80 pb-4">
              <dt className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
                Approx. annual generation
              </dt>
              <dd className="text-xl font-semibold text-neutral-900">
                {Math.round(results.annualKwh).toLocaleString("en-IN")} kWh
              </dd>
            </div>
            <div className="flex flex-col gap-1 border-b border-neutral-200/80 pb-4">
              <dt className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
                Approx. annual bill offset
              </dt>
              <dd className="text-xl font-semibold text-neutral-900">
                {inr.format(results.savingsYear)}
              </dd>
            </div>
            <div className="flex flex-col gap-1 border-b border-neutral-200/80 pb-4">
              <dt className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
                Rough net capital (cost − CFA)
              </dt>
              <dd className="text-xl font-semibold text-neutral-900">
                {inr.format(results.netAfterCfa)}
              </dd>
            </div>
            <div className="flex flex-col gap-1">
              <dt className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
                Simple payback (years)
              </dt>
              <dd className="text-xl font-semibold text-neutral-900">
                {results.simplePaybackYears != null &&
                Number.isFinite(results.simplePaybackYears)
                  ? results.simplePaybackYears.toFixed(1)
                  : "—"}
              </dd>
              <span className="text-xs text-neutral-600 mt-1">
                Net cost divided by annual savings; ignores O&amp;M, loan
                interest, degradation, and net-metering rules.
              </span>
            </div>
          </dl>

          <Link
            href="/contact"
            className="mt-auto inline-flex w-fit items-center justify-center rounded-full bg-green-400 px-6 py-2.5 text-sm font-medium text-black transition-all hover:bg-green-300 active:scale-[0.97]"
          >
            Get a detailed quote
          </Link>
        </div>
      </div>

      <p className="mt-8 text-xs text-neutral-600 leading-relaxed border-t border-neutral-200 pt-6">
        This tool applies the residential CFA slab structure (₹30,000 / ₹18,000
        per kWp for the first 2 kWp and next 1 kWp; ₹33,000 / ₹19,800 in Special
        Category States/UTs) with no CFA beyond 3 kWp, as under PM Surya Ghar.
        Apply and track status on the{" "}
        <a
          href="https://pmsuryaghar.gov.in"
          className="underline text-neutral-800 hover:text-black"
          target="_blank"
          rel="noopener noreferrer"
        >
          National Portal (pmsuryaghar.gov.in)
        </a>
        . Figures are illustrative only and not financial or legal advice.
      </p>
    </div>
  );
}
