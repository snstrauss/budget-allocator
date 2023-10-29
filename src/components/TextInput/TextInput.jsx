import S from "./TextInput.module.scss";
import clsx from "clsx";
import { forwardRef, useState } from "react";

export const TextInput = forwardRef(function TextInput(
  {
    initialValue,
    valueOverride,
    onDone,
    preventClicks,
    className,
    formatter,
    icon,
    readOnly,
  },
  ref
) {
  const [textValue, setTextValue] = useState(initialValue);

  function doneEditing() {
    onDone();
    ref.current.blur();
  }

  function changeValue(ev) {
    const nextValue = ev.target.value;

    const nextFormattedValue =
      nextValue.length && formatter ? formatter(nextValue) : nextValue;

    setTextValue(nextFormattedValue);
  }

  function checkForEnter(ev) {
    if (ev.key === "Enter") {
      doneEditing();
    }
  }

  function onInputClick(ev) {
    if (preventClicks) {
      ev.preventDefault();
    }
  }

  return (
    <span className={clsx(S.textInput, className, !!icon && S.withIcon)}>
      {icon && <div className={S.icon}>{icon}</div>}
      <input
        ref={ref}
        className={clsx(S.input)}
        value={valueOverride || textValue}
        onMouseDown={onInputClick}
        onBlur={doneEditing}
        onChange={changeValue}
        onKeyUp={checkForEnter}
        readOnly={readOnly}
      />
    </span>
  );
});
