import { useMemo } from "react";
import DollarSignSvg from "../../../../../assets/img/dollar-sign.svg?react";
import { NumberFieldConfig } from "../../../../LabeledConfigurations/NumberFieldConfig/NumberFieldConfig";

export function ChannelBreakdownMonth({ value, idx, onChange }) {
  const monthName = useMonthName(idx);

  function valueChanged(ds) {
    // debugger;
  }

  return (
    <NumberFieldConfig
      onChange={valueChanged}
      textOverride={monthName}
      initialValue={"34"}
      withInfo={false}
      icon={<DollarSignSvg />}
    />
  );
}

function useMonthName(idx) {
  return useMemo(
    () =>
      new Date(new Date().setMonth(idx)).toLocaleString("default", {
        month: "short",
        year: "2-digit",
      }),
    [idx]
  );
}
