import S from "./ColoredChannelIcon.module.scss";
import ChannelIconSvg from "../../assets/img/channel-icon.svg?react";
import clsx from "clsx";

export function ColoredChannelIcon({ color, className }) {
  const styleVariables = {
    "--color": color,
  };

  return (
    <ChannelIconSvg
      className={clsx(S.coloredChannelIcon, className)}
      style={styleVariables}
    />
  );
}
