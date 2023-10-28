import { Typography } from "../../../Typography/Typography";
import S from "./BudgetChannelBreakdown.module.scss";

const breakdownTextBase = `allocator.breakdown`;

export function BudgetChannelBreakdown() {
  return (
    <div className={S.budgetChannelBreakdown}>
      <Typography textPath={`${breakdownTextBase}.title`} size={16} weight={600} />
      <Typography textPath={`${breakdownTextBase}.instructions`} className={S.instructions} />
    </div>
  );
}
