import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { TabsNavigation } from "../TabsNavigation/TabsNavigation";
import { AllocatorScreen } from "../screens/AllocatorScreen/AllocatorScreen";
import { SummaryScreen } from "../screens/SummaryScreen/SummaryScreen";
import { ErrorScreen } from "../screens/ErrorScreen/ErrorScreen";

export const TABS = {
  ROOT: '/',
  ALLOCATOR: 'allocator',
  SUMMARY: 'summary'
}

export const tabsConfig = {
  [TABS.ROOT]: <AllocatorScreen />,
  [TABS.ALLOCATOR]: <AllocatorScreen />,
  [TABS.SUMMARY]: <SummaryScreen />,
};

function makeRoutesConfig(tabs) {
  return Object.entries(tabs).map(([path, element]) => ({
    path,
    element,
  }));
}

const router = createBrowserRouter([
  {
    path: "",
    element: <TabsNavigation />,
    errorElement: <ErrorScreen />,
    children: [
      ...makeRoutesConfig(tabsConfig),
    ],
  },
]);

export function RoutesProvider() {
  return <RouterProvider router={router} />;
}
