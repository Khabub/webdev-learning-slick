import React from "react";
import classes from "./MenuStandard.module.css";
import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
  const isActiveClass = ({ isActive }) =>
    isActive ? `${classes.active}` : undefined;

  return (
    <div className={classes.container}>
      <div className={classes.logo}>
        <Link to="products">
          <h1>UNX</h1>
        </Link>
      </div>

      <ul className={classes.links}>
        <li>
          <NavLink to="products" className={isActiveClass}>Products</NavLink>
        </li>
        <li>
          <NavLink to="about" className={isActiveClass}>About</NavLink>
        </li>
        <li>
          <NavLink to="resources" className={isActiveClass}>Resources</NavLink>
        </li>
        <li>
          <NavLink to="contact" className={isActiveClass}>Contact</NavLink>
        </li>
      </ul>

      <div className={classes["btn-dashboard"]}>
        <button>Dashboard</button>
      </div>
    </div>
  );
};

export default Navigation;
