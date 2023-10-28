import { useContext, useRef } from "react";
import S from "./BudgetChannelHeader.module.scss";
import OpenIndicatorSvg from "../../../assets/img/open-close-indicator.svg?react";
import ChannelIconSvg from "../../../assets/img/channel-icon.svg?react";
import { BudgetChannelMenu } from "../BudgetChannelMenu/BudgetChannelMenu";
import clsx from "clsx";
import {
  BudgetChannelsContext,
  useBudgetChannel,
} from "../../../contexts/budgetChannelsContext";
import { TextInput } from "../../TextInput/TextInput";

export function BudgetChannelHeader({ channelId, onSelectChannel, isOpen }) {
  const channelData = useBudgetChannel(channelId);

  const {
    actions: { renameChannel, removeChannel },
  } = useContext(BudgetChannelsContext);

  const inputRef = useRef();
  function startNameEdit() {
    inputRef.current.focus();
  }

  function doneNameEdit(newName) {
    renameChannel({
      id: channelId,
      name: newName,
    });
  }

  function checkIfDoneTyping(typedChar, fullName) {
    if (typedChar === "Enter") {
      doneNameEdit(fullName);
    }
  }

  function removeThisChannel() {
    removeChannel({ id: channelId });
  }

  const { name } = channelData;

  return (
    <header
      className={clsx(S.budgetChannelHeader, isOpen && S.open)}
      onClick={onSelectChannel}
    >
      <OpenIndicatorSvg className={S.indicator} />
      <ChannelIconSvg />
      <TextInput
        ref={inputRef}
        className={S.name}
        initialValue={name}
        onDone={doneNameEdit}
        onType={checkIfDoneTyping}
      />
      <BudgetChannelMenu
        className={S.menu}
        startEdit={startNameEdit}
        removeChannel={removeThisChannel}
      />
    </header>
  );
}
