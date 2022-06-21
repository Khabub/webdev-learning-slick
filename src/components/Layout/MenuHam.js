import React from "react";
import Modal from "../UI/Modal";
import { NavLink } from "react-router-dom";
import classes from "./MenuHam.module.css";

const MenuHam = (props) => {

  const isActiveClass = ({ isActive }) =>
    isActive ? `${classes.active}` : undefined;

  return (
    <Modal onClose={props.onClose}>
      <ul className={classes.menuHamList}>
        <li>
          <NavLink to="home" className={isActiveClass}>
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to="about" className={isActiveClass}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="gallery" className={isActiveClass}>
            Resources
          </NavLink>
        </li>
        <li>
          <NavLink to="contact" className={isActiveClass}>
            Contact
          </NavLink>
        </li>
      </ul>     
      
    </Modal>
  );
};

export default MenuHam;
