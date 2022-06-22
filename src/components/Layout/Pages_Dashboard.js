import React from "react";
import DashboardPage from "../../pages_dashboard/Dashboard_page";
// import avatar from "../../assets/avatar.png";
import classes from "./Pages_Dashboard.module.css";

const PagesDashboard = () => {
  return (
    <div className={classes.container}>
      <div className={classes.dashLeft}></div>

      <div className={classes.dashRight}>
        <DashboardPage />
      </div>
    </div>
  );
};

export default PagesDashboard;
