import { useContext } from "react";

import { ScootersContext } from "../../store/scooter-context";
import classes from "./ScooterItem.module.css";

const ScooterItem = (props) => {
  const chargeScooter = useContext(ScootersContext).chargeScooter;

  const chargeScooterHandler = () => {
    chargeScooter(props.id);
  };

  return (
    <li
      onClick={chargeScooterHandler}
      style={{ opacity: `${props.percentage / 100}` }}
      className={`${classes.scooter} ${props.className}`}
    >
      <img
        className={classes.scooter_img}
        src={props.src}
        alt={`${props.color} scooter`}
      />
      <span className={classes.scooter_percentage}>{props.percentage}%</span>
    </li>
  );
};

export default ScooterItem;
