import { LabeledConfig } from "../../LabeledConfig/LabeledConfig";
import S from "./NumberFieldConfig.module.scss";
import { TextInput } from "../../TextInput/TextInput";
import { useRef } from "react";

export function NumberFieldConfig({
  textBase,
  labelReplace,
  onChange,
  initialValue,
}) {
  const inputRef = useRef();

  function doneEditing() {
    onChange(removeCommas(inputRef.current.value));
  }

  function numberFormat(value) {
    return valueIsNumber(value) ? formatWithCommas(value) : value.slice(0, -1);
  }

  return (
    <LabeledConfig
      textBase={textBase}
      labelReplace={labelReplace}
      className={S.numberFieldConfig}
    >
      <TextInput
        ref={inputRef}
        className={S.input}
        initialValue={initialValue}
        formatter={numberFormat}
        onDone={doneEditing}
      />
    </LabeledConfig>
  );
}

const valueIsNumber = (value) => /^[\d,]+$/.test(value);
const formatWithCommas = (numberStr) =>
  Intl.NumberFormat().format(parseInt(removeCommas(numberStr)));
const removeCommas = (str) => str.replace(/,/g, "");
