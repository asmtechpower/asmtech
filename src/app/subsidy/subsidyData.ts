/** Rooftop solar subsidy slabs (illustrative — verify on the National Portal / state DISCOM). */
export type SubsidyRow = {
  capacityKw: number;
  centralInr: number;
  stateInr: number;
  totalInr: number;
};

export const ROOFTOP_SUBSIDY_ROWS: SubsidyRow[] = [
  { capacityKw: 1, centralInr: 33_000, stateInr: 15_000, totalInr: 48_000 },
  { capacityKw: 2, centralInr: 66_000, stateInr: 30_000, totalInr: 96_000 },
  { capacityKw: 3, centralInr: 85_800, stateInr: 45_000, totalInr: 1_30_800 },
  { capacityKw: 4, centralInr: 85_800, stateInr: 45_000, totalInr: 1_30_800 },
  { capacityKw: 5, centralInr: 85_800, stateInr: 45_000, totalInr: 1_30_800 },
  { capacityKw: 6, centralInr: 85_800, stateInr: 45_000, totalInr: 1_30_800 },
  { capacityKw: 7, centralInr: 85_800, stateInr: 45_000, totalInr: 1_30_800 },
  { capacityKw: 8, centralInr: 85_800, stateInr: 45_000, totalInr: 1_30_800 },
  { capacityKw: 9, centralInr: 85_800, stateInr: 45_000, totalInr: 1_30_800 },
  { capacityKw: 10, centralInr: 85_800, stateInr: 45_000, totalInr: 1_30_800 },
];
