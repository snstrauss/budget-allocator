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
    iconColor: getRandomColor(),
  };
}

const getRandomColor = () =>
  `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padEnd(6, "0")}`;

const campaignActions = {
  addChannel: (state) => {
    return [...state, createNewChannel()];
  },
  renameChannel: (allChannels, { id, name }) =>
    changeSingleChannel(allChannels, id, {
      name,
    }),
  setChannelFrequency: (allChannels, { id, frequency }) =>
    changeSingleChannel(allChannels, id, {
      frequency,
    }),
  setChannelAllocation: (allChannels, { id, allocation }) =>
    changeSingleChannel(allChannels, id, {
      allocation,
    }),
  setMonthValue: (allChannels, { channelId, monthIndex, newValue }) => {
    const relevantChannel = getSingleChannel(allChannels, channelId);
    relevantChannel.months[monthIndex] = newValue;

    return [...allChannels];
  },
  removeChannel: (state, { id }) =>
    state.filter((channel) => channel.id !== id),
};

function changeSingleChannel(allChannels, channelId, newValue = {}) {
  const relevantChannel = getSingleChannel(allChannels, channelId);
  Object.assign(relevantChannel, newValue);

  return [...allChannels];
}

const { Provider, Context } = createActionsContext(
  campaignActions,
  initialChannels
);

export const BudgetChannelsContext = Context;
export const BudgetChannelsProvider = Provider;

export function useBudgetChannel(id) {
  const { state: allChannels } = useContext(BudgetChannelsContext);

  return useMemo(() => getSingleChannel(allChannels, id), [allChannels, id]);
}

function getSingleChannel(allChannels, channelId) {
  return allChannels.find((channel) => channel.id === channelId);
}
