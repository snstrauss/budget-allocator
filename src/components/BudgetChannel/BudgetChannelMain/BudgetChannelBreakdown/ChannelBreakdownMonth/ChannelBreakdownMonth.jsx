import DollarSignSvg from "../../../../../assets/img/dollar-sign.svg?react";
import { NumberFieldConfig } from "../../../../LabeledConfigurations/NumberFieldConfig/NumberFieldConfig";
import { useMonthName } from "../../../../../hooks/useMonths";

export function ChannelBreakdownMonth({ value, idx, onChange }) {
  const monthName = useMonthName(idx);

  function changeMonthValue(newValue) {
    onChange(newValue, idx);
  }

  return (
    <NumberFieldConfig
      onChange={changeMonthValue}
      textOverride={monthName}
      initialValue={value}
      withInfo={false}
      icon={<DollarSignSvg />}
    />
  );
}
