import clsx from "clsx";
import S from "./TextInput.module.scss";
import { forwardRef, useState } from "react";

export const TextInput = forwardRef(function TextInput({ className, initialValue, onDone, onType }, ref) {
  const [isInEditMode, setIsInEditMode] = useState(false);

  function enterFocus(ev) {
    setIsInEditMode(true);
    ev.stopPropagation();
  }

  function leaveFocus(ev) {
    setIsInEditMode(false);
    onDone(ev.target.value);
  }

  function charTyped(ev) {
    onType(ev.key, ref.current.value);
  }

  return (
    <input
      ref={ref}
      className={clsx(S.textInput, className)}
      readOnly={!isInEditMode}
      defaultValue={initialValue}
      onKeyUpCapture={charTyped}
      onClick={enterFocus}
      onFocus={enterFocus}
      onBlur={leaveFocus}
    />
  );
});
