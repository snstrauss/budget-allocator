import S from "./AppHeader.module.scss";
import { Typography } from "../../components/Typography/Typography";
import { Button } from "../../components/Button/Button";
import PlusSignSvg from "../../assets/img/plus-sign.svg?react";

const appHeaderTextBase = "app_header";

export function AppHeader() {
  return (
    <div className={S.header}>
      <div className={S.instructions}>
        <Typography
          textPath={`${appHeaderTextBase}.app_title`}
          size={24}
          weight={500}
        />
        <Typography
          textPath={`${appHeaderTextBase}.instructions_title`}
          size={18}
          weight={600}
        />
        <Typography
          textPath={`${appHeaderTextBase}.instructions`}
          className={S.info}
        />
      </div>
      <Button>
        <PlusSignSvg />
        <Typography
          textPath={`${appHeaderTextBase}.button`}
          size={12}
          weight={600}
        />
      </Button>
    </div>
  );
}
