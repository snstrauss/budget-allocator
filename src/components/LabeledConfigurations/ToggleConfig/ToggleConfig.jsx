import { LabeledConfig } from "../../LabeledConfig/LabeledConfig";
import S from "./ToggleConfig.module.scss";
import { Button } from "../../Button/Button";
import { Typography } from "../../Typography/Typography";
import clsx from "clsx";
import { useState } from "react";

export function ToggleConfig({
  textBase,
  className,
  initialValue,
  onChange,
  options = [],
}) {
  const [selectedIdx, setSelectedIdx] = useState(options.indexOf(initialValue));

  function setSelectedItem(idx) {
    setSelectedIdx(idx);
    onChange(options[idx]);
  }

  return (
    <LabeledConfig
      textBase={textBase}
      className={clsx(`${S.toggleConfig}`, className)}
      withInfo
    >
      <div className={S.options}>
        {options.map((option, idx) => (
          <Button
            key={option}
            onClick={() => setSelectedItem(idx)}
            className={clsx(S.button, idx === selectedIdx && S.selected)}
          >
            <Typography
              textPath={`${textBase}.options.${option}`}
              size={12}
              weight={500}
            />
          </Button>
        ))}
      </div>
    </LabeledConfig>
  );
}
