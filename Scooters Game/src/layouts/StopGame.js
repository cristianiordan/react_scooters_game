import { ScootersContext } from "../store/scooter-context";
import { useContext } from "react";

import classes from "./StopGame.module.css";
import ScooterCounter from "../components/scooters/ScooterCounter";
import Button from "../components/UI/Button";
import SwitchGame from "../components/UI/SwitchGame";

const StopGame = () => {
  const startGame = useContext(ScootersContext).startGame;
  const stoppedGameType = useContext(ScootersContext).stoppedGameType;

  const startGameHandler = () => {
    startGame();
  };
  return (
    <div className={classes.container}>
      <div className={classes.lost_game}>
        <h1>Congrats! Your garage ({stoppedGameType}):</h1>
        <ScooterCounter />
        <h2>Want to play again?</h2>
        <SwitchGame />
        <Button onClick={startGameHandler} className={classes.green_btn}>
          Start
        </Button>
      </div>
    </div>
  );
};

export default StopGame;
