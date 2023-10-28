import { useContext } from "react";
import {
  BudgetChannelsContext,
  useBudgetChannel,
} from "../../../../contexts/budgetChannelsContext";
import { Typography } from "../../../Typography/Typography";
import S from "./BudgetChannelBreakdown.module.scss";
import { ChannelBreakdownMonth } from "./ChannelBreakdownMonth/ChannelBreakdownMonth";

const breakdownTextBase = `allocator.breakdown`;

export function BudgetChannelBreakdown({ channelId }) {
  const {
    actions: { setMonthValue },
  } = useContext(BudgetChannelsContext);
  const { months } = useBudgetChannel(channelId);

  function updateMonthValue(newValue, monthIndex) {
    setMonthValue({
      channelId,
      monthIndex,
      newValue,
    });
  }

  return (
    <div className={S.budgetChannelBreakdown}>
      <div className={S.text}>
        <Typography
          textPath={`${breakdownTextBase}.title`}
          size={16}
          weight={600}
        />
        <Typography
          textPath={`${breakdownTextBase}.instructions`}
          className={S.instructions}
        />
      </div>
      <div className={S.breakdown}>
        {months.map((value, idx) => {
          return (
            <ChannelBreakdownMonth
              key={idx}
              value={value}
              idx={idx}
              onChange={updateMonthValue}
            />
          );
        })}
      </div>
    </div>
  );
}
