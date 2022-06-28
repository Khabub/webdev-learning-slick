import React, { useCallback, useEffect, useState } from "react";
import classes from "./Dashboard_page.module.css";
import { dailyData, weeklyData, monthlyData } from "../store/data-list";
import ButtonRight from "../components/UI/ButtonRight";

import {
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const linksDayWeekMonth = [
  {
    id: 0,
    name: "daily",
    data: dailyData,
    setActive: true,
  },
  {
    id: 1,
    name: "weekly",
    data: weeklyData,
    setActive: false,
  },
  {
    id: 2,
    name: "monthly",
    data: monthlyData,
    setActive: false,
  },
];

const DashboardPage = () => {
  const [graphWidth, setGraphWidth] = useState("nothing");
  const [data, setData] = useState(linksDayWeekMonth[0].data);
  const [graphHeight, setGraphHeight] = useState("nothing");
  const [legend, setLegend] = useState(118);

  const handleWindowSize = useCallback(() => {
    if (window.innerWidth >= 1400) {
      setGraphWidth(1150);
      setGraphHeight(280);
      setLegend(270);
    } else if (window.innerWidth >= 1200) {
      setGraphWidth(1050);
      setGraphHeight(200);
      setLegend(190);
    } else if (window.innerWidth >= 1000) {
      setGraphWidth(750);
      setGraphHeight(130);
    } else if (window.innerWidth >= 700) {
      setGraphWidth(550);
      setGraphHeight(130);
    } else if (window.innerWidth >= 600) {
      setGraphWidth(470);
      setGraphHeight(130);
    } else if (window.innerWidth >= 500) {
      setGraphWidth(390);
      setGraphHeight(130);
    } else if (window.innerWidth >= 395) {
      setGraphWidth(290);
      setGraphHeight(130);
    } else if (window.innerWidth >= 345) {
      setGraphWidth(250);
      setGraphHeight(130);
    } else {
      setGraphWidth(210);
      setGraphHeight(130);
    }
  }, []);

  useEffect(() => {
    if (window.innerWidth >= 1400) {
      setGraphWidth(1150);
      setGraphHeight(280);
      setLegend(270);
    } else if (window.innerWidth >= 1200) {
      setGraphWidth(1050);
      setGraphHeight(200);
      setLegend(190);
    } else if (window.innerWidth >= 1000) {
      setGraphWidth(750);
      setGraphHeight(200);
    } else if (window.innerWidth >= 700) {
      setGraphWidth(550);
      setGraphHeight(130);
    } else if (window.innerWidth >= 600) {
      setGraphWidth(470);
      setGraphHeight(130);
    } else if (window.innerWidth >= 500) {
      setGraphWidth(390);
      setGraphHeight(130);
    } else if (window.innerWidth >= 395) {
      setGraphWidth(290);
      setGraphHeight(130);
    } else if (window.innerWidth >= 345) {
      setGraphWidth(250);
      setGraphHeight(130);
    } else {
      setGraphWidth(210);
      setGraphHeight(130);
    }

    window.addEventListener("resize", handleWindowSize);

    linksDayWeekMonth.map((prev) => (prev.setActive = false));
    linksDayWeekMonth[0].setActive = true;

    return () => {
      window.removeEventListener("resize", handleWindowSize);
    };
  }, [handleWindowSize]);

  const linkHandler = (val) => {
    linksDayWeekMonth.map((prev) => (prev.setActive = false));
    val.setActive = true;
    setData(val.data);
  };

  const link = (
    <ul className={classes.btnDayWeekMonth}>
      {linksDayWeekMonth.map((val) => (
        <ButtonRight
          key={val.id}
          name={val.name}
          class={val.setActive}
          pageHandle={linkHandler.bind(null, val)}
        />
      ))}
    </ul>
  );

  return (
    <div>
      <div className={classes.dashboard}>
        <AreaChart
          width={graphWidth}
          height={graphHeight}
          data={data}
          margin={{ top: 10, left: 10, bottom: 10, right: 10 }}
        >
          <Area
            type="monotone"
            dataKey="quests"
            stackId="0"
            stroke="#0055ff"
            fill="#0055ff"
            dot={true}
            name="Guild quests"
          />
          <Area
            type="monotone"
            dataKey="questsOther"
            stackId="1"
            stroke="#aaa"
            fill="#aaa"
            dot={true}
            name="Guild quests"
          />
          <CartesianGrid stroke="#888" vertical={false} />
          <XAxis dataKey="#" hide={true} />
          {/* # - aby se nic neukazalo v tooltipu */}
          <YAxis hide={true} />
          <Tooltip offset={20} stroke="#000" wrapperStyle={{ fontSize: 6 }} />
          <Legend
            layout="horizontal"
            align="right"
            wrapperStyle={{ top: legend, fontSize: 6 }}
            iconType="square"
            iconSize={8}
          />
        </AreaChart>
        <h4 className={classes.dashName}>Dashboard</h4>
        <h4 className={classes.graphName}>Quest Charts</h4>
        <h4 className={classes.typeCharName}>Crusader</h4>
        <p className={classes.descGraph}>* Lorem ipsum lorem ipsu Lorem</p>
        <div className={classes.dashButtons}>{link}</div>
      </div>
    </div>
  );
};

export default DashboardPage;
