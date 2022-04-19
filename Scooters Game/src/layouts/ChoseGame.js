import Button from "../components/UI/Button";
import { ScootersContext } from "../store/scooter-context";
import { useContext } from "react";
import classes from "./ChoseGame.module.css";
import SwitchGame from "../components/UI/SwitchGame";

const ChooseGame = () => {
  const startGame = useContext(ScootersContext).startGame;


  const startGameHandler = () => {
    startGame();
  };

  return (
    <div className={classes.container}>
      <div className={classes.lost_game}>
        <h1>Welcome!</h1>
        <h2>Choose Game</h2>
        <SwitchGame/>
        <Button onClick={startGameHandler} className={classes.green_btn}>
          Start Game
        </Button>
      </div>
    </div>
  );
};

export default ChooseGame;
