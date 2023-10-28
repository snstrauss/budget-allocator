import { forwardRef, useState } from "react";

export const TextInput = forwardRef(function TextInput(
  { initialValue, onDone, preventClicks, className, formatter },
  ref
) {
  const [textValue, setTextValue] = useState(initialValue);

  function doneEditing() {
    onDone();
    ref.current.blur();
  }

  function changeValue(ev) {
    const nextValue = ev.target.value;
    const nextFormattedValue = formatter ? formatter(nextValue) : nextValue;
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
    <input
      ref={ref}
      className={className}
      value={textValue}
      onMouseDown={onInputClick}
      onBlur={doneEditing}
      onChange={changeValue}
      onKeyUp={checkForEnter}
    />
  );
});
