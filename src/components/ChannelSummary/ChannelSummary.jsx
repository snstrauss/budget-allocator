import { useBudgetChannel } from "../../contexts/budgetChannelsContext";
import S from "./ChannelSummary.module.scss";
import { Typography } from "../Typography/Typography";
import { TextInput } from "../TextInput/TextInput";
import { ColoredChannelIcon } from "../ColoredChannelIcon/ColoredChannelIcon";
import { numberFormat } from '../LabeledConfigurations/NumberFieldConfig/NumberFieldConfig';

export function ChannelSummary({ channelId }) {
  const { name, months, iconColor } = useBudgetChannel(channelId);

  return (
    <div className={S.channelSummary}>
      <div className={S.channelDetails}>
        <ColoredChannelIcon className={S.icon} color={iconColor} />
        <Typography override={name} size={14} weight={500} />
      </div>
      {months.map((monthValue, idx) => (
        <TextInput
          key={idx}
          className={S.monthValue}
          initialValue={`$${numberFormat(monthValue)}`}
          readOnly
        />
      ))}
    </div>
  );
}
