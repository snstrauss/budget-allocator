import { useContext, useRef } from "react";
import S from "./BudgetChannelHeader.module.scss";
import OpenIndicatorSvg from "../../../assets/img/open-close-indicator.svg?react";
import { BudgetChannelMenu } from "../BudgetChannelMenu/BudgetChannelMenu";
import clsx from "clsx";
import {
  BudgetChannelsContext,
  useBudgetChannel,
} from "../../../contexts/budgetChannelsContext";
import { TextInput } from "../../TextInput/TextInput";
import { ColoredChannelIcon } from "../../ColoredChannelIcon/ColoredChannelIcon";

export function BudgetChannelHeader({ channelId, onSelectChannel, isOpen }) {
  const channelData = useBudgetChannel(channelId);

  const {
    actions: { renameChannel, removeChannel },
  } = useContext(BudgetChannelsContext);

  const inputRef = useRef();
  function startNameEdit() {
    inputRef.current.focus();
  }

  const { name, iconColor } = channelData;

  function doneNameEdit() {
    renameChannel({
      id: channelId,
      name: inputRef.current.value,
    });
  }

  function removeThisChannel() {
    removeChannel({ id: channelId });
  }

  return (
    <header
      className={clsx(S.budgetChannelHeader, isOpen && S.open)}
      onClick={onSelectChannel}
    >
      <OpenIndicatorSvg className={S.indicator} />
      <ColoredChannelIcon color={iconColor} />

      <TextInput
        ref={inputRef}
        initialValue={name}
        className={S.name}
        onDone={doneNameEdit}
        preventClicks
      />

      <BudgetChannelMenu
        className={S.menu}
        startEdit={startNameEdit}
        removeChannel={removeThisChannel}
      />
    </header>
  );
}
