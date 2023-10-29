import { numberFormat } from "../LabeledConfigurations/NumberFieldConfig/NumberFieldConfig";
import { TextInput } from "../TextInput/TextInput";
import S from "./SummaryRowCell.module.scss";

export function SummaryRowCell({ monthValue }) {
  return (
    <TextInput
      className={S.summaryRowCell}
      initialValue={`$${numberFormat(monthValue)}`}
      readOnly
    />
  );
}
