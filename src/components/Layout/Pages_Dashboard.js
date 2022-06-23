import React from "react";
import { NavLink } from "react-router-dom";
import DashboardPage from "../../pages_dashboard/Dashboard_page";
import avatar from "../../assets/avatar.png";
import classes from "./Pages_Dashboard.module.css";
import { Route, Routes, Navigate } from "react-router-dom";
import DashboardHomescreen from "../../pages_dashboard/Dashboard_homescreen";
import DashboardSettings from "../../pages_dashboard/Dashboard_settings";

const PagesDashboard = () => {
  const isActiveClass = ({ isActive }) =>
    isActive ? `${classes.active}` : undefined;

  return (
    <div className={classes.container}>
      <div className={classes.dashLeft}>
        <div className={classes.avatarBox}>
          <div className={classes.avatarBg}>
            <img className={classes.avatarImg} src={avatar} alt="avatar"></img>
          </div>
          <p className={classes.avatarName}>Kabub</p>
          <p className={classes.avatarStatus}>PRO Account</p>
        </div>

        <ul className={classes.dashList}>
          <li>
            <NavLink to="homescreen" className={isActiveClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="dashboard" className={isActiveClass}>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="settings" className={isActiveClass}>
              Settings
            </NavLink>
          </li>
        </ul>
      </div>

      <div className={classes.dashRight}>
        <Routes>
          <Route path="/" element={<Navigate to="homescreen" />} />
          <Route path="homescreen" element={<DashboardHomescreen />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="settings" element={<DashboardSettings />} />       
        </Routes>
      </div>
    </div>
  );
};

export default PagesDashboard;
