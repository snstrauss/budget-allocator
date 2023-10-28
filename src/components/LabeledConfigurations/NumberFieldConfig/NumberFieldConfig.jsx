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
  withInfo = true,
  icon,
  fieldClassName
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
      className={S.numberFieldConfig}
      withInfo={withInfo}
    >
      <TextInput
        ref={inputRef}
        className={clsx(S.input, fieldClassName)}
        initialValue={initialValue}
        formatter={numberFormat}
        onDone={doneEditing}
        icon={icon}
      />
    </LabeledConfig>
  );
}

function numberFormat(value) {
  return valueIsNumber(value) ? formatWithCommas(value) : value.slice(0, -1);
}

const valueIsNumber = (value) => /^[\d,]+$/.test(value);
const formatWithCommas = (numberStr) =>
  Intl.NumberFormat().format(parseInt(removeCommas(numberStr)));
const removeCommas = (str) => str.replace(/,/g, "");
