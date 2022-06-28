import React from "react";
import classes from "./ButtonRight.module.css";

const ButtonRight = (props) => {

  const isActive = props.class ? `${classes.active}` : "";
  return (
    <li className={classes.btns}>
      <button className={isActive} onClick={props.pageHandle}>
        {props.name}
      </button>
    </li>
  );
};

export default ButtonRight;
