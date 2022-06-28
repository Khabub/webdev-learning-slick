import React, { useState } from "react";
import DashboardPage from "../../pages_dashboard/Dashboard_page";
import avatar from "../../assets/administrator-32.png";
import classes from "./Pages_Dashboard.module.css";
import DashboardHomescreen from "../../pages_dashboard/Dashboard_homescreen";
import DashboardSettings from "../../pages_dashboard/Dashboard_settings";
import Button from "../UI/Button";

const links = [
  {
    id: 0,
    name: "Home",
    pageName: <DashboardHomescreen />,
    setActive: true,
  },
  {
    id: 1,
    name: "Dashboard",
    pageName: <DashboardPage />,
    setActive: false,
  },
  {
    id: 2,
    name: "Settings",
    pageName: <DashboardSettings />,
    setActive: false,
  },
];

const PagesDashboard = () => {
  const [page, setPage] = useState(links[0].pageName);

  const pageHandler = (val) => {
    links.map((prev) => (prev.setActive = false));

    val.setActive = true;
    setPage(val.pageName);
  };

  const link = (
    <ul className={classes.dashList}>
      {links.map((val) => (
        <Button
          key={val.id}
          name={val.name}
          class={val.setActive}
          pageHandle={pageHandler.bind(null, val)}
        />
      ))}
    </ul>
  );

  return (
    <div className={classes.container}>
      <div className={classes.dashLeft}>
        <div className={classes.avatarBox}>
          <div className={classes.avatarBg}>
            <img src={avatar} alt="avatar"></img>
          </div>
          <p className={classes.avatarName}>Kabub</p>
          <p className={classes.avatarStatus}>PRO Account</p>
        </div>
        {link}
      </div>

      <div className={classes.dashRight}>{page}</div>
    </div>
  );
};

export default PagesDashboard;
