import blueScooter from "../../assets/blue.png";
import greenScooter from "../../assets/green.png";
import redScooter from "../../assets/red.png";
import ScooterItem from "./ScooterItem";

import { useContext } from "react";

import classes from "./ScooterList.module.css";
import { ScootersContext } from "../../store/scooter-context";

const ScooterList = (props) => {
  const listOfScooters = useContext(ScootersContext).scooters;
  const gameType = useContext(ScootersContext).gameType;

  if (gameType === "by color") {
    const redScooters = listOfScooters.filter(
      (scooter) => scooter.color === "red"
    );
    const blueScooters = listOfScooters.filter(
      (scooter) => scooter.color === "blue"
    );
    const greenScooters = listOfScooters.filter(
      (scooter) => scooter.color === "green"
    );

    return (
      <div className={classes.container_by_color}>
        <ul className={classes.scooter_list_by_color}>
          {redScooters.map((item) => {
            return (
              <ScooterItem
                id={item.id}
                key={item.id}
                className={classes.red}
                color={item.color}
                src={redScooter}
                percentage={item.percentage}
              />
            );
          })}
        </ul>
        <ul className={classes.scooter_list_by_color}>
          {greenScooters.map((item) => {
            return (
              <ScooterItem
                id={item.id}
                key={item.id}
                className={classes.green}
                color={item.color}
                src={greenScooter}
                percentage={item.percentage}
              />
            );
          })}
        </ul>
        <ul className={classes.scooter_list_by_color}>
          {blueScooters.map((item) => {
            return (
              <ScooterItem
                id={item.id}
                key={item.id}
                className={classes.blue}
                color={item.color}
                src={blueScooter}
                percentage={item.percentage}
              />
            );
          })}
        </ul>
      </div>
    );
  }

  return (
    <ul className={classes.scooter_list}>
      {listOfScooters.map((item) => {
        let src;
        if (item.color === "red") {
          src = redScooter;
        } else if (item.color === "blue") {
          src = blueScooter;
        } else if (item.color === "green") {
          src = greenScooter;
        }
        return (
          <ScooterItem
            id={item.id}
            key={item.id}
            className={
              item.color === "red"
                ? classes.red
                : item.color === "green"
                ? classes.green
                : classes.blue
            }
            color={item.color}
            src={src}
            percentage={item.percentage}
          />
        );
      })}
    </ul>
  );
};

export default ScooterList;
