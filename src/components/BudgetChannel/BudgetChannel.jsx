import clsx from "clsx";
import S from "./BudgetChannel.module.scss";
import OpenIndicatorSvg from "../../assets/img/open-close-indicator.svg?react";
import ChannelIconSvg from "../../assets/img/channel-icon.svg?react";
import DotsMenuSvg from "../../assets/img/dots-menu.svg?react";

export function BudgetChannel({ channelData, isOpen, onSelectChannel }) {
  const { name } = channelData;

  return (
    <div className={clsx(S.budgetChannel, isOpen && S.open)}>
      <header onClick={onSelectChannel}>
        <OpenIndicatorSvg className={S.indicator} />
        <ChannelIconSvg />
        {name}
        <DotsMenuSvg className={S.menu} />
      </header>
      <main>main content</main>
    </div>
  );
}
