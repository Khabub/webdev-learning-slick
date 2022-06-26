import React, { useState } from "react";
import DashboardPage from "../../pages_dashboard/Dashboard_page";
import avatar from "../../assets/avatar.png";
import classes from "./Pages_Dashboard.module.css";
import DashboardHomescreen from "../../pages_dashboard/Dashboard_homescreen";
import DashboardSettings from "../../pages_dashboard/Dashboard_settings";

const pageInitial = {
  home: true,
  dashboard: false,
  settings: false,
};

const PagesDashboard = () => {
  const [page, setPage] = useState(pageInitial);

  const homeHandler = () => {
    setPage({ home: true, dashboard: false, settings: false });
  };

  const dashboardHandler = () => {
    setPage({ home: false, dashboard: true, settings: false });
  };
  const settingsHandler = () => {
    setPage({ home: false, dashboard: false, settings: true });
  };

  let showPage;
  let activeLinkDash, activeLinkHome, activeLinkSet;

  if (page.home) {
    showPage = <DashboardHomescreen />;
    activeLinkHome = `${classes.active}`;
  }
  if (page.dashboard) {
    showPage = <DashboardPage />;
    activeLinkDash = `${classes.active}`;
  }
  if (page.settings) {
    showPage = <DashboardSettings />;
    activeLinkSet = `${classes.active}`;
  }

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
            <button className={activeLinkHome} onClick={homeHandler}>
              Home
            </button>
          </li>
          <li>
            <button className={activeLinkDash} onClick={dashboardHandler}>
              Dashboard
            </button>
          </li>
          <li>
            <button className={activeLinkSet} onClick={settingsHandler}>
              Settings
            </button>
          </li>
        </ul>
      </div>

      <div className={classes.dashRight}>{showPage}</div>
    </div>
  );
};

export default PagesDashboard;
