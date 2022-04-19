import { ScootersContext } from "./store/scooter-context";
import { useContext } from "react";
import PlayGame from "./layouts/PlayGame";
import LostGame from "./layouts/LostGame";
import StopGame from "./layouts/StopGame";
import ChoseGame from "./layouts/ChoseGame";

const App = () => {
  const gameIsLosed = useContext(ScootersContext).gameIsLosed;
  const gameIsStopped = useContext(ScootersContext).gameIsStopped;
  const gameIsChosen = useContext(ScootersContext).gameIsChosen;
  if (!gameIsChosen) {
    return <ChoseGame />;
  }

  if (gameIsStopped) {
    return <StopGame />;
  }

  if (gameIsLosed) {
    return <LostGame />;
  } else {
    return <PlayGame />;
  }
};

export default App;
