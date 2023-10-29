import { LabeledConfig } from "../../LabeledConfig/LabeledConfig";
import S from "./NumberFieldConfig.module.scss";
import { TextInput } from "../../TextInput/TextInput";
import { useRef } from "react";
import clsx from "clsx";

export function NumberFieldConfig({
  textBase,
  textOverride,
  labelReplace,
  onChange,
  initialValue,
  valueOverride,
  withInfo = true,
  icon,
  className,
  readOnly,
}) {
  const inputRef = useRef();

  function doneEditing() {
    onChange(removeCommas(inputRef.current.value));
  }

  return (
    <LabeledConfig
      textBase={textBase}
      textOverride={textOverride}
      labelReplace={labelReplace}
      className={clsx(S.numberFieldConfig, className)}
      withInfo={withInfo}
    >
      <TextInput
        ref={inputRef}
        className={S.input}
        initialValue={initialValue}
        valueOverride={valueOverride}
        formatter={numberFormat}
        onDone={doneEditing}
        icon={icon}
        readOnly={readOnly}
      />
    </LabeledConfig>
  );
}

export const numberFormat = (value) => {
  const noCommasValue = parseFloat(removeCommas(value));
  return valueIsNumber(noCommasValue)
    ? formatWithCommas(noCommasValue)
    : noCommasValue.slice(0, -1);
};
const valueIsNumber = (value) => !Number.isNaN(Number(value));
const formatWithCommas = (numberStr) =>
  Intl.NumberFormat("default", { maximumFractionDigits: 2 }).format(
    parseFloat(numberStr)
  );
const removeCommas = (str) => str.toString().replace(/,/g, "");
