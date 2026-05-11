/**
 * Central Financial Assistance (CFA) for grid-connected residential rooftop solar
 * under PM Surya Ghar: Muft Bijli Yojana — individual residential segment,
 * per MNRE notified norms (₹/kWp slabs; no CFA beyond 3 kWp).
 *
 * Estimates only; eligibility and disbursement are subject to DISCOM / National Portal verification.
 */

export const CFA_GENERAL_FIRST_2_KW = 30_000;
export const CFA_GENERAL_NEXT_1_KW = 18_000;
export const CFA_SPECIAL_FIRST_2_KW = 33_000;
export const CFA_SPECIAL_NEXT_1_KW = 19_800;
export const MAX_SUBSIDISED_KW = 3;

export function residentialCfaInr(
  capacityKw: number,
  specialCategoryState: boolean
): number {
  const kw = Math.min(Math.max(capacityKw, 0), MAX_SUBSIDISED_KW);
  const first = specialCategoryState
    ? CFA_SPECIAL_FIRST_2_KW
    : CFA_GENERAL_FIRST_2_KW;
  const next = specialCategoryState
    ? CFA_SPECIAL_NEXT_1_KW
    : CFA_GENERAL_NEXT_1_KW;
  if (kw <= 0) return 0;
  if (kw <= 2) return kw * first;
  return 2 * first + (kw - 2) * next;
}

/** Indicative sizing bands often cited for residential rooftop planning (units ≈ kWh). */
export function indicativeCapacityBand(monthlyUnits: number): string {
  if (!Number.isFinite(monthlyUnits) || monthlyUnits <= 0) {
    return "Enter monthly consumption for an indicative capacity band.";
  }
  if (monthlyUnits <= 150) {
    return "Indicative band: about 1–2 kWp — align with your sanctioned load and roof space.";
  }
  if (monthlyUnits <= 300) {
    return "Indicative band: about 2–3 kWp — align with your sanctioned load and roof space.";
  }
  return "Indicative band: often 3 kWp or higher for higher use; CFA is only on up to 3 kWp.";
}

export function annualGenerationKwh(
  capacityKw: number,
  yieldKwhPerKwPerYear: number
): number {
  return Math.max(0, capacityKw) * Math.max(0, yieldKwhPerKwPerYear);
}

export function annualBillSavingsInr(
  annualKwh: number,
  tariffInrPerKwh: number
): number {
  return annualKwh * Math.max(0, tariffInrPerKwh);
}
