import { capitalize } from "radash";
import {
  BUDGET_FREQUANCY,
  useBudgetChannel,
} from "../../../../contexts/budgetChannelsContext";
import { Button } from "../../../Button/Button";
import { LabeledConfig } from "../../../LabeledConfig/LabeledConfig";
import { NumberFieldConfig } from "../../../LabeledConfigurations/NumberFieldConfig/NumberFieldConfig";
import S from "./BudgetChannelConfig.module.scss";

const configTextBase = `allocator.config`;

export function BudgetChannelConfig({ channelId }) {
  const channel = useBudgetChannel(channelId);

  const { frequency } = useBudgetChannel(channelId);

  function updateBaseline(value) {
    console.log(`%cbaseline - ${value}`, 'font-size: 35px; color: dodgerblue;');
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
          frequency: `[${capitalize(BUDGET_FREQUANCY[frequency.toUpperCase()])}]`,
        }}
      />

      <LabeledConfig textBase={`${configTextBase}.allocation`}>
        <Button>df</Button>
      </LabeledConfig>
    </div>
  );
}
