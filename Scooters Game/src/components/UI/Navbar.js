import Button from "./Button";
import ScooterCounter from "../scooters/ScooterCounter";
import { ScootersContext } from "../../store/scooter-context";
import { useContext } from "react";

import classes from "./Navbar.module.css";

const Navbar = () => {
  const addScooter = useContext(ScootersContext).addScooter;
  const stopGame = useContext(ScootersContext).stopGame;

  const addScooterHandler = () => {
    addScooter();
  };

  const stopGameHandler = () => {
    stopGame();
  };

  return (
    <nav className={classes.navbar}>
      <ScooterCounter />
      <Button onClick={addScooterHandler} className={classes.btn_green}>
        Add Scooter
      </Button>
      <Button onClick={stopGameHandler} className={classes.btn_red}>
        Stop Game
      </Button>
    </nav>
  );
};

export default Navbar;
