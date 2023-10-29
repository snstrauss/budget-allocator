import { getMonthNameFromIndex, makeMonthsArray } from "../../hooks/useMonths";
import { Typography } from "../Typography/Typography";
import S from "./SummaryMonthsRow.module.scss";

const monthNames = makeMonthsArray((_, idx) => getMonthNameFromIndex(idx));
export function SummaryMonthsRow() {
  return (
    <>
      <Typography
        className={S.monthName}
        textPath="summary.channels_label"
        size={11}
        weight={900}
      />
      {monthNames.map((name) => (
        <Typography
          className={S.monthName}
          key={name}
          override={name}
          size={11}
          weight={900}
        />
      ))}
    </>
  );
}
