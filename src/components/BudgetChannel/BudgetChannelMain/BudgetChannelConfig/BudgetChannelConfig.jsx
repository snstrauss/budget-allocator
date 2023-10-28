import { Button } from "../../../Button/Button";
import { LabeledConfig } from "../../../LabeledConfig/LabeledConfig";
import S from "./BudgetChannelConfig.module.scss";

const configTextBase = `allocator.config`;

export function BudgetChannelConfig() {
  return (
    <div className={S.budgetChannelConfig}>
      <LabeledConfig textBase={`${configTextBase}.frequency`}>
        <Button>df</Button>
      </LabeledConfig>
      <LabeledConfig
        textBase={`${configTextBase}.baseline`}
        labelReplace={{ frequency: "[hey]" }}
      >
        <Button>df</Button>
      </LabeledConfig>
      <LabeledConfig textBase={`${configTextBase}.allocation`}>
        <Button>df</Button>
      </LabeledConfig>
    </div>
  );
}
