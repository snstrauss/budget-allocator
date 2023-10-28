import S from "./BudgetChannelMenu.module.scss";
import clsx from "clsx";
import DotsMenuSvg from "../../../assets/img/dots-menu.svg?react";
import { Typography } from "../../Typography/Typography";
import { useClickAway, useToggle } from "react-use";
import { useRef } from "react";
import { AppearingCard } from "../../AppearingCard/AppearingCard";

const menuTextBase = "allocator.menu.actions";

export function BudgetChannelMenu({ className, startEdit, removeChannel }) {
  const { menuIsOpen, menuRef, toggleMenu } = useMenuToggle();

  return (
    <div className={clsx(S.budgetChannelMenu, className)} onClick={toggleMenu}>
      <DotsMenuSvg />
      {menuIsOpen && (
        <AppearingCard className={S.menu} ref={menuRef} right="100%">
          <Typography
            textPath={`${menuTextBase}.edit`}
            size={14}
            weight={500}
            onClick={startEdit}
          />
          <Typography
            textPath={`${menuTextBase}.remove`}
            size={14}
            weight={500}
            className={S.removeButton}
            onClick={removeChannel}
          />
        </AppearingCard>
      )}
    </div>
  );
}

function useMenuToggle() {
  const [menuIsOpen, toggleMenu] = useToggle(false);
  const menuRef = useRef();
  useClickAway(menuRef, () => {
    toggleMenu();
  });

  function openCloseMenu(ev) {
    ev.stopPropagation();
    toggleMenu();
  }

  return { menuIsOpen, toggleMenu: openCloseMenu, menuRef };
}
