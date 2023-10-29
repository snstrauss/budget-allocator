import S from "./ColoredChannelIcon.module.scss";
import ChannelIconSvg from "../../assets/img/channel-icon.svg?react";

export function ColoredChannelIcon({ color }) {
  const styleVariables = {
    "--color": color,
  };

  return (
    <ChannelIconSvg className={S.coloredChannelIcon} style={styleVariables} />
  );
}
