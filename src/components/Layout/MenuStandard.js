import React from "react";
import classes from "./MenuStandard.module.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className={classes.container}>
      <div className={classes.logo}>
        <Link to="products">
          <h1>UNX</h1>
        </Link>
      </div>

      <ul className={classes.links}>
        <li>
          <a href="#t">Products</a>
        </li>
        <li>
          <a href="#t">About</a>
        </li>
        <li>
          <a href="#t">Resources</a>
        </li>
        <li>
          <a href="#t">Contact</a>
        </li>
      </ul>

      <div className={classes["btn-dashboard"]}>
        <button>Dashboard</button>
      </div>
    </div>
  );
};

export default Navigation;
