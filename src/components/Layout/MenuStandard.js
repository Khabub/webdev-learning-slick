import React from "react";
import classes from "./MenuStandard.module.css";

const Navigation = () => {

  return (
    <div className={classes.container}>
      <div className={classes.logo}>
        <h1>UNX</h1>
      </div>
     
        <ul className={classes.links}>
          <li><a href="#t">Products</a></li>
          <li><a href="#t">About</a></li>
          <li><a href="#t">Resources</a></li>
          <li><a href="#t">Contact</a></li>
        </ul>
     
      <div className={classes["btn-dashboard"]}>
        <button>Dashboard</button>
      </div>
    </div>
  );
};

export default Navigation;