import { useMemo } from "react";
import setDate from "date-fns/set";

export function useMonthName(idx) {
  return useMemo(() => getMonthNameFromIndex(idx), [idx]);
}

export function getMonthNameFromIndex(idx) {
  return setDate(new Date(), {
    date: 1,
    month: idx,
  }).toLocaleString("default", {
    month: "short",
    year: "2-digit",
  });
}

export function makeMonthsArray(fillCallback) {
  return Array.from({ length: 12 }, fillCallback);
}
