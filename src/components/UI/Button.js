import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  const isActive = props.class ? `${classes.active}` : "";
  return (
    <li>
      <button className={isActive} onClick={props.pageHandle}>
        {props.name}
      </button>
    </li>
  );
};

export default Button;
