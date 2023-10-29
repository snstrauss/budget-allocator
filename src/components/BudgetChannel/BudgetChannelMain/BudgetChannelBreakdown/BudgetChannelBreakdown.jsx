import { useContext } from "react";
import {
  BUDGET_ALLOCATION,
  BudgetChannelsContext,
  useBudgetChannel,
} from "../../../../contexts/budgetChannelsContext";
import { Typography } from "../../../Typography/Typography";
import S from "./BudgetChannelBreakdown.module.scss";
import { ChannelBreakdownMonth } from "./ChannelBreakdownMonth/ChannelBreakdownMonth";
import clsx from "clsx";

const breakdownTextBase = `allocator.breakdown`;

export function BudgetChannelBreakdown({ channelId }) {
  const {
    actions: { setMonthValue },
  } = useContext(BudgetChannelsContext);
  const { months, allocation } = useBudgetChannel(channelId);

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
              className={clsx(S.month, allocation)}
              value={value}
              idx={idx}
              onChange={updateMonthValue}
              readOnly={allocation === BUDGET_ALLOCATION.EQUAL}
            />
          );
        })}
      </div>
    </div>
  );
}
