import { capitalize } from "radash";
import {
  BUDGET_ALLOCATION,
  BUDGET_FREQUANCY,
  BudgetChannelsContext,
  useBudgetChannel,
} from "../../../../contexts/budgetChannelsContext";
import { Button } from "../../../Button/Button";
import { LabeledConfig } from "../../../LabeledConfig/LabeledConfig";
import { NumberFieldConfig } from "../../../LabeledConfigurations/NumberFieldConfig/NumberFieldConfig";
import S from "./BudgetChannelConfig.module.scss";
import { ToggleConfig } from "../../../LabeledConfigurations/ToggleConfig/ToggleConfig";
import { useContext } from "react";

const configTextBase = `allocator.config`;

export function BudgetChannelConfig({ channelId }) {
  // const channel = useBudgetChannel(channelId);
  const { actions: { setChannelAllocation } } = useContext(BudgetChannelsContext);

  const { frequency, allocation } = useBudgetChannel(channelId);

  function updateBaseline(baseline) {
    console.log(`%cbaseline - ${baseline}`, "font-size: 35px; color: dodgerblue;");
  }

  function updateAllocationStrategy(allocation) {
    setChannelAllocation({
      id: channelId,
      allocation
    });
  }

  return (
    <div className={S.budgetChannelConfig}>
      <LabeledConfig textBase={`${configTextBase}.frequency`}>
        <Button>df</Button>
      </LabeledConfig>

      <NumberFieldConfig
        onChange={updateBaseline}
        textBase={`${configTextBase}.baseline`}
        initialValue={"34"}
        labelReplace={{
          frequency: `[${capitalize(
            BUDGET_FREQUANCY[frequency.toUpperCase()]
          )}]`,
        }}
      />

      <ToggleConfig
        textBase={`${configTextBase}.allocation`}
        options={[BUDGET_ALLOCATION.EQUAL, BUDGET_ALLOCATION.MANUAL]}
        initialValue={allocation}
        onChange={updateAllocationStrategy}
      />
    </div>
  );
}
