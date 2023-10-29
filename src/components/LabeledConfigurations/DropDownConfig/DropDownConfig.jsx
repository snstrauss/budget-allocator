import S from "./DropDownConfig.module.scss";
import { LabeledConfig } from "../../LabeledConfig/LabeledConfig";
import { useTextFromPath } from "../../Typography/Typography";
import ArrowSvg from "../../../assets/img/open-close-indicator.svg?react";

export function DropDownConfig({ textBase, options, onChange, value }) {
  const optionStrings = useTextFromPath(`${textBase}.options`);

  function onSelection(ev) {
    onChange(ev.target.value);
  }

  return (
    <LabeledConfig className={S.dropDownConfig} textBase={textBase} withInfo>
      <div className={S.selectWrapper}>
        <select onChange={onSelection}>
          {options.map((option) => (
            <option value={option} key={option} selected={option === value}>
              {optionStrings[option]}
            </option>
          ))}
        </select>
        <ArrowSvg className={S.arrow} />
      </div>
    </LabeledConfig>
  );
}
