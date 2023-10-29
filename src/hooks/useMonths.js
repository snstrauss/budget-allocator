import { useMemo } from "react";

export function useMonthName(idx) {
  return useMemo(() => getMonthNameFromIndex(idx), [idx]);
}

export function getMonthNameFromIndex(idx) {
  return new Date(new Date().setMonth(idx)).toLocaleString("default", {
    month: "short",
    year: "2-digit",
  });
}

export function makeMonthsArray(fillCallback) {
  return Array.from({ length: 12 }, fillCallback);
}