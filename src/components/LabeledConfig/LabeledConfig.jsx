import S from "./LabeledConfig.module.scss";
import { Typography } from "../Typography/Typography";
import InfoIconSvg from "../../assets/img/info-icon.svg?react";
import { useHoverDirty } from "react-use";
import { useRef } from "react";
import { AppearingCard } from "../AppearingCard/AppearingCard";
import clsx from "clsx";

const tooltipPosition = "calc(100% + 5px)";

export function LabeledConfig({
  children,
  textBase,
  textOverride,
  labelReplace,
  className,
  withInfo,
}) {
  const labelTextPath = `${textBase}.label`;
  const tooltipTextPath = `${textBase}.tooltip`;

  const infoRef = useRef(null);
  const isHoveringOnIcon = useHoverDirty(infoRef);

  return (
    <div className={clsx(S.labeledConfig, className)}>
      <div className={S.label}>
        <Typography
          textPath={labelTextPath}
          replace={labelReplace}
          override={textOverride}
        />
        {withInfo && (
          <span ref={infoRef} className={S.iconWrapper}>
            <InfoIconSvg />
            {isHoveringOnIcon && (
              <AppearingCard top={tooltipPosition} left={tooltipPosition}>
                <Typography textPath={tooltipTextPath} />
              </AppearingCard>
            )}
          </span>
        )}
      </div>
      <div className={S.config}>{children}</div>
    </div>
  );
}
