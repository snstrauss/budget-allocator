import { forwardRef, useState } from "react";

export const TextInput = forwardRef(function TextInput(
  { initialValue, onDone, preventClicks, className },
  ref
) {
  const [textValue, setTextValue] = useState(initialValue);

  function doneEditing() {
    console.log(`%cdone editing`, 'font-size: 35px; color: dodgerblue;');
    onDone();
    ref.current.blur();
  }

  function changeValue(ev) {
    setTextValue(ev.target.value);
  }

  function checkForEnter(ev) {
    if (ev.key === "Enter") {
      console.log(`%ckey os enter!`, 'font-size: 35px; color: dodgerblue;');
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
