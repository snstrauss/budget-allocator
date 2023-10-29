import { useBudgetChannel } from "../../contexts/budgetChannelsContext";
import { ColoredChannelIcon } from "../ColoredChannelIcon/ColoredChannelIcon";
import { Typography } from "../Typography/Typography";
import S from "./SummaryRowHeader.module.scss";

export function SummaryRowHeader({ channelId }) {
  const { name, iconColor } = useBudgetChannel(channelId);

  return (
    <div className={S.summaryRowHeader} key={channelId}>
      <ColoredChannelIcon className={S.icon} color={iconColor} />
      <Typography override={name} size={14} weight={500} />
    </div>
  );
}
