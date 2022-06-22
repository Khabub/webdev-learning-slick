import React from "react";
import DashboardPage from "../../pages_dashboard/Dashboard_page";
import avatar from "../../assets/avatar.png";
import classes from "./Pages_Dashboard.module.css";

const PagesDashboard = () => {
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
          <li>Home Screen</li>
          <li>Dashboard</li>
          <li>Settings</li>
        </ul>
      </div>

      <div className={classes.dashRight}>
        <DashboardPage />
      </div>
    </div>
  );
};

export default PagesDashboard;
