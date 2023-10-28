import clsx from "clsx";
import S from "./BudgetChannel.module.scss";
import { BudgetChannelHeader } from "./BudgetChannelHeader/BudgetChannelHeader";
import { BudgetChannelMain } from "./BudgetChannelMain/BudgetChannelMain";

export function BudgetChannel({ channelData, isOpen, onSelectChannel }) {
  return (
    <div className={clsx(S.budgetChannel, isOpen && S.open)}>
      <BudgetChannelHeader
        channelData={channelData}
        onSelectChannel={onSelectChannel}
        isOpen={isOpen}
      />
      <BudgetChannelMain channelData={channelData} isOpen={isOpen} />
    </div>
  );
}
