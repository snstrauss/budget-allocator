import "./styles/reset.css";
import "./styles/base.css";
import { RoutesProvider } from "./layout/RoutesProvider/RoutesProvider";
import { BudgetChannelsProvider } from "./contexts/budgetChannelsContext";

export function App() {
  return (
    <BudgetChannelsProvider>
      <RoutesProvider />
    </BudgetChannelsProvider>
  );
}
