import { useContext, useMemo } from "react";
import { createActionsContext } from "./createActionsContext";

export const BUDGET_FREQUANCY = {
  ANNUALLY: "annually",
  MONTHLY: "monthly",
  QUARTERLY: "quarterly",
};

export const BUDGET_ALLOCATION = {
  EQUAL: "equal",
  MANUAL: "manual",
};

const initialChannels = [];

function createNewChannel() {
  return {
    id: crypto.randomUUID(),
    name: "New Channel",
    allocation: BUDGET_ALLOCATION.EQUAL,
    frequency: BUDGET_FREQUANCY.ANNUALLY,
    months: Array(12).fill(0),
  };
}

const campaignActions = {
  addChannel: (state) => {
    return [...state, createNewChannel()];
  },
  renameChannel: (state, { id, name }) => {
    const relevantChannel = state.find((channel) => channel.id === id);
    relevantChannel.name = name;

    return [...state];
  },
  removeChannel: (state, { id }) =>
    state.filter((channel) => channel.id !== id),
};

const { Provider, Context } = createActionsContext(
  campaignActions,
  initialChannels
);

export const BudgetChannelsContext = Context;
export const BudgetChannelsProvider = Provider;

export function useBudgetChannel(id) {
  const { state: allChannels } = useContext(BudgetChannelsContext);

  return useMemo(
    () => allChannels.find((channel) => channel.id === id),
    [allChannels, id]
  );
}
