import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { TabsNavigation } from "../TabsNavigation/TabsNavigation";
import { AllocatorScreen } from "../screens/AllocatorScreen/AllocatorScreen";
import { SummaryScreen } from "../screens/SummaryScreen/SummaryScreen";

export const TABS = {
  ALLOCATOR: 'allocator',
  SUMMARY: 'summary'
}

export const tabsConfig = {
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
    path: "/",
    element: <TabsNavigation />,
    children: [
      {
        path: "",
        element: <AllocatorScreen />,
      },
      ...makeRoutesConfig(tabsConfig),
    ],
  },
]);

export function RoutesProvider() {
  return <RouterProvider router={router} />;
}
