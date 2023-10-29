import clsx from "clsx";
import S from "./BudgetChannelMain.module.scss";
import { BudgetChannelConfig } from "./BudgetChannelConfig/BudgetChannelConfig";
import { BudgetChannelBreakdown } from "./BudgetChannelBreakdown/BudgetChannelBreakdown";
import {
  BUDGET_ALLOCATION,
  BUDGET_FREQUANCY,
  BudgetChannelsContext,
  useBudgetChannel,
} from "../../../contexts/budgetChannelsContext";
import { useContext, useEffect } from "react";
import { makeMonthsArray } from "../../../hooks/useMonths";

export function BudgetChannelMain({ channelId, isOpen }) {
  useBudgetDistribution(channelId);

  return (
    <main className={clsx(S.budgetChannelMain, isOpen && S.open)}>
      <BudgetChannelConfig channelId={channelId} />
      <BudgetChannelBreakdown channelId={channelId} />
    </main>
  );
}

function useBudgetDistribution(channelId) {
  const {
    actions: { setChannelMonths, setChannelBaseline },
  } = useContext(BudgetChannelsContext);
  const { frequency, allocation, baseline, months } =
    useBudgetChannel(channelId);

  const monthsSum = months.reduce((sum, month) => (sum += parseInt(month)), 0);

  useEffect(() => {
    if (allocation === BUDGET_ALLOCATION.MANUAL) {
      manuallySetBaseline(channelId, monthsSum, setChannelBaseline);
    }
  }, [allocation, monthsSum, setChannelBaseline, channelId]);

  useEffect(() => {
    if (allocation === BUDGET_ALLOCATION.EQUAL) {
      distributeBaselineToMonths(
        channelId,
        baseline,
        frequency,
        setChannelMonths
      );
    }
  }, [allocation, baseline, frequency, setChannelMonths, channelId]);
}

function manuallySetBaseline(channelId, sum, setBaseline) {
  setBaseline({
    id: channelId,
    baseline: sum,
  });
}

function distributeBaselineToMonths(channelId, baseline, frequency, setMonths) {
  const newMonthsDistribution = makeMonthsArray(
    frequencyDistributionStrategies[frequency](baseline)
  );

  setMonths({
    id: channelId,
    months: newMonthsDistribution,
  });
}

const frequencyDistributionStrategies = {
  [BUDGET_FREQUANCY.ANNUALLY]: (baseline) => () => baseline / 12,
  [BUDGET_FREQUANCY.MONTHLY]: (baseline) => () => baseline,
  [BUDGET_FREQUANCY.QUARTERLY]: (baseline) => () => baseline / 3,
};
