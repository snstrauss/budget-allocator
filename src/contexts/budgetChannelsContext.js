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
};

const { Provider, Context } = createActionsContext(
  campaignActions,
  initialChannels
);

export const BudgetChannelsContext = Context;
export const BudgetChannelsProvider = Provider;
