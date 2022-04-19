import blackScooter from "../../assets/black_small.png";
import blueScooter from "../../assets/blue_small.png";
import greenScooter from "../../assets/green_small.png";
import redScooter from "../../assets/red_small.png";

import { ScootersContext } from "../../store/scooter-context";
import { useContext } from "react";

import classes from "./ScooterCounter.module.css";

const ScooterCounter = (props) => {
  const scootersList = useContext(ScootersContext).scooters;
  const allCounter = scootersList.length;

  let redCounter = 0;
  let greenCounter = 0;
  let blueCounter = 0;
  scootersList.forEach((scooter) => {
    if (scooter.color === "red") {
      redCounter++;
    } else if (scooter.color === "blue") {
      blueCounter++;
    } else {
      greenCounter++;
    }
  });

  return (
    <div className={classes.scooter_counter}>
      <div className={classes.scooter_box}>
        <img
          className={classes.scooter_img}
          src={blackScooter}
          alt="Black scooter"
        />
        <span className={classes.black_counter}>{allCounter}</span>
      </div>
      <div className={classes.scooter_box}>
        <img
          className={classes.scooter_img}
          src={redScooter}
          alt="Red scooter"
        />
        <span className={classes.red_counter}>{redCounter}</span>
      </div>
      <div className={classes.scooter_box}>
        <img
          className={classes.scooter_img}
          src={greenScooter}
          alt="Green scooter"
        />
        <span className={classes.green_counter}>{greenCounter}</span>
      </div>
      <div className={classes.scooter_box}>
        <img
          className={classes.scooter_img}
          src={blueScooter}
          alt="Blue scooter"
        />
        <span className={classes.blue_counter}>{blueCounter}</span>
      </div>
    </div>
  );
};

export default ScooterCounter;
