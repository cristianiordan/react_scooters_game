import { ScootersContext } from "../../store/scooter-context";
import { useContext } from "react";
import classes from "./SwitchGame.module.css";

const SwitchGame = () => {
  const changeGameType = useContext(ScootersContext).changeGameType;
  const gameType = useContext(ScootersContext).gameType;

  const changeGameHandler = () => {
    changeGameType();
  };

  return (
    <div className={classes.theme_switcher}>
      <label className={classes.switch}>
        <input onChange={changeGameHandler} id="theme" type="checkbox" />
        <span className={classes.slider}></span>
      </label>
      <p className="theme-name">{gameType}</p>
    </div>
  );
};

export default SwitchGame;
