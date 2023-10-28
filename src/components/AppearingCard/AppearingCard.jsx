import clsx from "clsx";
import S from "./AppearingCard.module.scss";
import { forwardRef, useMemo } from "react";

export const AppearingCard = forwardRef(function AppearingCard(
  { children, className, direction = "ltr", ...directionProps },
  ref
) {
  const directionParams = useDirectionParamsFromProps(directionProps);

  return (
    <div
      className={clsx(S.appearingCard, className)}
      style={directionParams}
      ref={ref}
    >
      {children}
    </div>
  );
});

function useDirectionParamsFromProps(directionProps) {
  return useMemo(
    () =>
      Object.entries(directionProps).reduce((params, [propName, propValue]) => {
        params[`--${propName}`] = propValue;

        return params;
      }, {}),
    [directionProps]
  );
}
