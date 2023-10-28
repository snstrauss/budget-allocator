import { useContext, useRef } from "react";
import S from "./BudgetChannelHeader.module.scss";
import OpenIndicatorSvg from "../../../assets/img/open-close-indicator.svg?react";
import ChannelIconSvg from "../../../assets/img/channel-icon.svg?react";
import { BudgetChannelMenu } from "../BudgetChannelMenu/BudgetChannelMenu";
import clsx from "clsx";
import { BudgetChannelsContext } from "../../../contexts/budgetChannelsContext";
import { useClickAway, useKey, useToggle } from "react-use";

export function BudgetChannelHeader({ channelData, onSelectChannel, isOpen }) {
  const { isInEditMode, startEditMode, inputRef, removeChannel } =
    useChannelMenuOptions(channelData);

  const { name } = channelData;

  return (
    <header
      className={clsx(S.budgetChannelHeader, isOpen && S.open)}
      onClick={onSelectChannel}
    >
      <OpenIndicatorSvg className={S.indicator} />
      <ChannelIconSvg />
      <input
        className={clsx(S.name, isInEditMode && S.edit)}
        readOnly={!isInEditMode}
        defaultValue={name}
        ref={inputRef}
      />
      <BudgetChannelMenu
        className={S.menu}
        startEdit={startEditMode}
        removeChannel={removeChannel}
      />
    </header>
  );
}

function useChannelMenuOptions({ id }) {
  const {
    actions: { renameChannel, removeChannel },
  } = useContext(BudgetChannelsContext);

  const [isInEditMode, toggleEditMode] = useToggle(false);

  const inputRef = useRef();
  useClickAway(inputRef, endEditMode);

  useKey(
    "Enter",
    () => {
      if (isInEditMode) {
        endEditMode();
      }
    },
    {
      event: "keyup",
    },
    [isInEditMode]
  );

  function startEditMode() {
    toggleEditMode();
    inputRef.current.focus();
  }

  function endEditMode() {
    if (isInEditMode) {
      renameChannel({
        id,
        name: inputRef.current.value,
      });

      toggleEditMode();
    }
  }

  function removeSelectedChannel() {
    removeChannel({
      id,
    });
  }

  return {
    isInEditMode,
    startEditMode,
    inputRef,
    removeChannel: removeSelectedChannel,
  };
}
