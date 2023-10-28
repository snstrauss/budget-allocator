import clsx from "clsx";
import S from "./BudgetChannel.module.scss";
import { BudgetChannelHeader } from "./BudgetChannelHeader/BudgetChannelHeader";
import { BudgetChannelMain } from "./BudgetChannelMain/BudgetChannelMain";

export function BudgetChannel({ channelId, isOpen, onSelectChannel }) {
  return (
    <div className={clsx(S.budgetChannel, isOpen && S.open)}>
      <BudgetChannelHeader
        channelId={channelId}
        onSelectChannel={onSelectChannel}
        isOpen={isOpen}
      />
      <BudgetChannelMain channelId={channelId} isOpen={isOpen} />
    </div>
  );
}
