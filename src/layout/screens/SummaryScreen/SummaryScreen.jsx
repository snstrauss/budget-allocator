import { useContext } from "react";
import S from "./SummaryScreen.module.scss";
import {
  BudgetChannelsContext,
  useBudgetChannel,
} from "../../../contexts/budgetChannelsContext";

export function SummaryScreen() {
  const { state: channels } = useContext(BudgetChannelsContext);

  return (
    <div className={S.summaryScreen}>
      {channels.map(({ id }) => (
        <ChannelSummary key={id} channelId={id} />
      ))}
    </div>
  );
}

function ChannelSummary({ channelId }) {
  const { name, months } = useBudgetChannel(channelId);

  return (
    <div style={{ border: "2px solid red" }}>
      <div>{name}</div>
      {
        months.map(val => (<span style={{margin: 5}}>
          {val}
        </span>))
      }
    </div>
  );
}
