import { random } from "radash";
import S from "./ErrorScreen.module.scss";
import { Button } from "../../../components/Button/Button";
import { Typography } from "../../../components/Typography/Typography";
import { useNavigate } from "react-router-dom";

const errorFaces = ["🤔", "🤷‍♂️", "😳", "😱", "😵‍💫"];

export function ErrorScreen() {
  const rndIdx = random(0, errorFaces.length - 1);

  const navigate = useNavigate();

  function tryAgain() {
    navigate();
  }

  return (
    <div className={S.errorScreen}>
      {errorFaces[rndIdx]}
      <Button onClick={tryAgain} className={S.reloadButton}>
        <Typography textPath="error_screen.button" size={50} weight={600} />
      </Button>
    </div>
  );
}
