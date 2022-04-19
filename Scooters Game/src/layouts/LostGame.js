import classes from "./LostGame.module.css";

import Button from "../components/UI/Button";
import { ScootersContext } from "../store/scooter-context";
import { useContext } from "react";
import SwitchGame from "../components/UI/SwitchGame";

const LostGame = () => {
  const startGame = useContext(ScootersContext).startGame;

  const startGameHandler = () => {
    startGame();
  };

  return (
    <div className={classes.container}>
      <div className={classes.lost_game}>
        <h1>Game over!</h1>
        <h2>Want to play again?</h2> 
        <SwitchGame/>
        <Button onClick={startGameHandler} className={classes.green_btn}>
          Start
        </Button>
      </div>
    </div>
  );
};

export default LostGame;
