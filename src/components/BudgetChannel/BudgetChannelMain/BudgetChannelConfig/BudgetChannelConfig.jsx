import { capitalize } from "radash";
import {
  BUDGET_ALLOCATION,
  BUDGET_FREQUANCY,
  BudgetChannelsContext,
  useBudgetChannel,
} from "../../../../contexts/budgetChannelsContext";
import { NumberFieldConfig } from "../../../LabeledConfigurations/NumberFieldConfig/NumberFieldConfig";
import S from "./BudgetChannelConfig.module.scss";
import { ToggleConfig } from "../../../LabeledConfigurations/ToggleConfig/ToggleConfig";
import { useContext } from "react";
import { DropDownConfig } from "../../../LabeledConfigurations/DropDownConfig/DropDownConfig";

const configTextBase = `allocator.config`;

export function BudgetChannelConfig({ channelId }) {
  const {
    actions: { setChannelAllocation, setChannelFrequency },
  } = useContext(BudgetChannelsContext);

  const { frequency, allocation } = useBudgetChannel(channelId);
  
  function updateFrequency(frequency) {
    setChannelFrequency({
      id: channelId,
      frequency,
    });
  }

  function updateBaseline(baseline) {
    console.log(
      `%cbaseline - ${baseline}`,
      "font-size: 35px; color: dodgerblue;"
    );
  }

  function updateAllocationStrategy(allocation) {
    setChannelAllocation({
      id: channelId,
      allocation,
    });
  }

  return (
    <div className={S.budgetChannelConfig}>
      <DropDownConfig
        textBase={`${configTextBase}.frequency`}
        onChange={updateFrequency}
        options={[
          BUDGET_FREQUANCY.ANNUALLY,
          BUDGET_FREQUANCY.MONTHLY,
          BUDGET_FREQUANCY.QUARTERLY,
        ]}
      />

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
