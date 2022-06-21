import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const MenuHamburger = (props) => {
  return <div className={classes.container}>{props.children}</div>;
};

const Modal = (props) => {
  const portal = document.getElementById("menu");

  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portal)}
      {ReactDOM.createPortal(
        <MenuHamburger>{props.children}</MenuHamburger>,
        portal
      )}
    </Fragment>
  );
};

export default Modal;
