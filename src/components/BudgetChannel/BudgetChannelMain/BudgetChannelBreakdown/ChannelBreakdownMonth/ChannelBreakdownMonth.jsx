import DollarSignSvg from "../../../../../assets/img/dollar-sign.svg?react";
import { NumberFieldConfig, numberFormat } from "../../../../LabeledConfigurations/NumberFieldConfig/NumberFieldConfig";
import { useMonthName } from "../../../../../hooks/useMonths";

export function ChannelBreakdownMonth({ value, idx, onChange, className, readOnly }) {
  const monthName = useMonthName(idx);

  function changeMonthValue(newValue) {
    onChange(newValue, idx);
  }

  return (
    <NumberFieldConfig
      className={className}
      onChange={changeMonthValue}
      textOverride={monthName}
      initialValue={value}
      valueOverride={readOnly && numberFormat(value)}
      withInfo={false}
      icon={<DollarSignSvg />}
      readOnly={readOnly}
    />
  );
}
