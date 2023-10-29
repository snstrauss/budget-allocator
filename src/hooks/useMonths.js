import { useMemo } from "react";

export function useMonthName(idx) {
  return useMemo(() => getMonthNameFromIndex(idx), [idx]);
}

function getMonthNameFromIndex(idx) {
  return new Date(new Date().setMonth(idx)).toLocaleString("default", {
    month: "short",
    year: "2-digit",
  });
}

export const MONTH_NAMES = Array.from({ length: 12 }, (_, idx) =>
  getMonthNameFromIndex(idx)
);
