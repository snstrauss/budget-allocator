import clsx from "clsx";
import S from "./BudgetChannelMain.module.scss";
import { BudgetChannelConfig } from "./BudgetChannelConfig/BudgetChannelConfig";
import { BudgetChannelBreakdown } from "./BudgetChannelBreakdown/BudgetChannelBreakdown";

export function BudgetChannelMain({ channelId, isOpen }) {
  return (
    <main className={clsx(S.budgetChannelMain, isOpen && S.open)}>
      <BudgetChannelConfig channelId={channelId} />
      <BudgetChannelBreakdown channelId={channelId} />
    </main>
  );
}
