import { useContext, useMemo } from "react";
import S from "./SummaryScreen.module.scss";
import { BudgetChannelsContext } from "../../../contexts/budgetChannelsContext";
import { getMonthNameFromIndex } from "../../../hooks/useMonths";
import { SummaryRowHeader } from "../../../components/SummaryRowHeader/SummaryRowHeader";
import { SummaryRowCell } from "../../../components/SummaryRowCell/SummaryRowCell";
import { SummaryMonthsRow } from "../../../components/SummaryMonthsRow/SummaryMonthsRow";

export function SummaryScreen() {
  const { state: channels } = useContext(BudgetChannelsContext);

  const allChannelsValuesAsComponents = useMemo(
    () =>
      channels.map(({ id, months }) => [
        <SummaryRowHeader channelId={id} key={`row-${id}`} />,
        ...months.map((monthValue, idx) => (
          <SummaryRowCell
            monthValue={monthValue}
            key={`${id}-${getMonthNameFromIndex(idx)}`.replace(/\s/g, "")}
          />
        )),
      ]),
    [channels]
  );

  return (
    <div className={S.summaryScreen}>
      {channels.length > 0 && <SummaryMonthsRow />}
      {...allChannelsValuesAsComponents}
    </div>
  );
}
