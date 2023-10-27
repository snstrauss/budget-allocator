import clsx from "clsx";
import S from "./BudgetChannel.module.scss";
import { BudgetChannelHeader } from "./BudgetChannelHeader/BudgetChannelHeader";

export function BudgetChannel({ channelData, isOpen, onSelectChannel }) {
  return (
    <div className={clsx(S.budgetChannel, isOpen && S.open)}>
      <BudgetChannelHeader
        channelData={channelData}
        onSelectChannel={onSelectChannel}
        isOpen={isOpen}
      />
      <main>main content</main>
    </div>
  );
}
