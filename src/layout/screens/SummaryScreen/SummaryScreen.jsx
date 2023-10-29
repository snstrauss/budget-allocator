import { useContext, useMemo } from "react";
import S from "./SummaryScreen.module.scss";
import { BudgetChannelsContext } from "../../../contexts/budgetChannelsContext";
import { ChannelSummary } from "../../../components/ChannelSummary/ChannelSummary";
import { Typography } from "../../../components/Typography/Typography";
import {
  getMonthNameFromIndex,
  makeMonthsArray,
} from "../../../hooks/useMonths";

export function SummaryScreen() {
  const { state: channels } = useContext(BudgetChannelsContext);

  return (
    <div className={S.summaryScreen}>
      {channels.length > 0 && <SummaryTableHeader />}
      <div className={S.channels}>
        {channels.map(({ id }) => (
          <ChannelSummary key={id} channelId={id} />
        ))}
      </div>
    </div>
  );
}

function SummaryTableHeader() {
  const monthNames = useMemo(
    () => makeMonthsArray((_, idx) => getMonthNameFromIndex(idx)),
    []
  );

  return (
    <div className={S.header}>
      <Typography textPath="summary.channels_label" size={11} weight={900} />
      {monthNames.map((monthName) => (
        <Typography override={monthName} size={11} weight={900} />
      ))}
    </div>
  );
}
