import clsx from "clsx";
import S from "./Button.module.scss";

export function Button({ children, onClick = () => {}, className }) {
  return (
    <button className={clsx(S.button, className)} onClick={onClick}>
      {children}
    </button>
  );
}
