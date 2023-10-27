import clsx from "clsx";
import S from "./BudgetChannel.module.scss";
import OpenIndicatorSvg from "../../assets/img/open-close-indicator.svg?react";
import ChannelIconSvg from "../../assets/img/channel-icon.svg?react";
import { BudgetChannelMenu } from "../BudgetChannelMenu/BudgetChannelMenu";
import { useClickAway, useKey, useToggle } from "react-use";
import { useContext, useRef } from "react";
import { BudgetChannelsContext } from "../../contexts/budgetChannelsContext";

export function BudgetChannel({ channelData, isOpen, onSelectChannel }) {
  const { name } = channelData;

  const { isInEditMode, startEditMode, inputRef, removeChannel } =
    useChannelMenuOptions(channelData);

  return (
    <div className={clsx(S.budgetChannel, isOpen && S.open)}>
      <header onClick={onSelectChannel}>
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
      <main>main content</main>
    </div>
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
