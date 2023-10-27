import { useContext, useEffect, useState } from "react";
import { BudgetChannelsContext } from "../../../contexts/budgetChannelsContext";
import S from "./AllocatorScreen.module.scss";
import { BudgetChannel } from "../../../components/BudgetChannel/BudgetChannel";

export function AllocatorScreen() {
  const { budgetChannels, openChannelId, setOpenChannelId } =
    useBudgetChannelsAccordion();

  return (
    <div className={S.allocatorScreen}>
      {budgetChannels.map((channelData) => {
        const { id } = channelData;

        const isOpen = openChannelId === id;

        return (
          <BudgetChannel
            key={id}
            channelData={channelData}
            isOpen={isOpen}
            onSelectChannel={() => setOpenChannelId(isOpen ? null : id)}
          />
        );
      })}
    </div>
  );
}

function useBudgetChannelsAccordion() {
  const { state: budgetChannels } = useContext(BudgetChannelsContext);

  const [openChannelId, setOpenChannelId] = useState();

  useEffect(() => {
    if (budgetChannels.length > 0) {
      setOpenChannelId(budgetChannels[0].id);
    }
  }, [budgetChannels]);

  return {
    budgetChannels,
    openChannelId,
    setOpenChannelId,
  };
}
