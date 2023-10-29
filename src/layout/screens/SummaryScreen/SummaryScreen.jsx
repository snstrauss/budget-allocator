import { useContext } from "react";
import S from "./SummaryScreen.module.scss";
import { BudgetChannelsContext } from "../../../contexts/budgetChannelsContext";
import { ChannelSummary } from "../../../components/ChannelSummary/ChannelSummary";
import { Typography } from "../../../components/Typography/Typography";
import { MONTH_NAMES } from "../../../hooks/useMonths";

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
  return (
    <div className={S.header}>
      <Typography textPath="summary.channels_label" size={11} weight={900} />
      {MONTH_NAMES.map((monthName) => (
        <Typography override={monthName} size={11} weight={900} />
      ))}
    </div>
  );
}
