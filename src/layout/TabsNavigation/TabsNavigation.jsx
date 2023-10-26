import { Link, Outlet, useLocation } from "react-router-dom";
import { tabsConfig } from "../RoutesProvider/RoutesProvider";
import S from "./TabsNavigation.module.scss";
import { Typography } from "../../components/Typography/Typography";
import clsx from "clsx";
import { AppHeader } from "../AppHeader/AppHeader";

const tabsTextBase = "app_header.navigation";

export function TabsNavigation() {
  const { pathname } = useLocation();

  return (
    <>
      <AppHeader />
      <div className={S.tabsNavigation}>
        <div className={S.tabs}>
          {Object.keys(tabsConfig).map((tabId) => (
            <Tab
              key={tabId}
              tabId={tabId}
              isCurrentTab={pathname === `/${tabId}`}
            />
          ))}
        </div>
        <Outlet />
      </div>
    </>
  );
}

function Tab({ tabId, isCurrentTab }) {
  return (
    <Link
      to={tabId}
      key={tabId}
      className={clsx(S.tab, isCurrentTab && S.currentTab)}
    >
      <Typography
        textPath={`${tabsTextBase}.${tabId}`}
        size={20}
        weight={600}
      />
    </Link>
  );
}
