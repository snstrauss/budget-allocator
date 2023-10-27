import { useContext, useState } from "react";
import { BudgetChannelsContext } from "../../../contexts/budgetChannelsContext";
import S from "./AllocatorScreen.module.scss";
import { BudgetChannel } from "../../../components/BudgetChannel/BudgetChannel";

export function AllocatorScreen() {
  const { state: budgetChannels } = useContext(BudgetChannelsContext);

  const [openIndex, setOpenIndex] = useState(0);


  return (
    <div className={S.allocatorScreen}>
      {budgetChannels.map((channelData, idx) => (
        <BudgetChannel
          channelData={channelData}
          isOpen={idx === openIndex}
          onSelectChannel={() => setOpenIndex(idx)}
        />
      ))}
    </div>
  );
}
