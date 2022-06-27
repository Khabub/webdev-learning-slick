import React, { useCallback, useEffect, useState } from "react";
import classes from "./Dashboard_page.module.css";
import { dailyData, weeklyData, monthlyData } from "../store/data-list";

import {
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const DashboardPage = () => {
  const [graphWidth, setGraphWidth] = useState("nothing");
  const [data, setData] = useState(dailyData);

  const handleWindowSize = useCallback(() => {
    if (window.innerWidth > 395) {
      setGraphWidth(290);
    } else if (window.innerWidth > 345) {
      setGraphWidth(250);
    } else {
      setGraphWidth(210);
    }
  }, []);

  useEffect(() => {
    if (window.innerWidth > 395) {
      setGraphWidth(290);
    } else if (window.innerWidth > 345) {
      setGraphWidth(250);
    } else {
      setGraphWidth(210);
    }

    window.addEventListener("resize", handleWindowSize);

    return () => {
      window.removeEventListener("resize", handleWindowSize);
    };
  }, [handleWindowSize]);

  const dailyDataHandler = () => {
    setData(dailyData);
  };
  const weeklyDataHandler = () => {
    setData(weeklyData);
  };
  const monthlyDataHandler = () => {
    setData(monthlyData);
  };

  return (
    <div>
      <div className={classes.dashboard}>
        <AreaChart
          width={graphWidth}
          height={130}
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
            wrapperStyle={{ top: 118, fontSize: 6 }}
            iconType="square"
            iconSize={8}
          />
        </AreaChart>
        <h4 className={classes.dashName}>Dashboard</h4>
        <h4 className={classes.graphName}>Quest Charts</h4>
        <h4 className={classes.typeCharName}>Crusader</h4>
        <p className={classes.descGraph}>* Lorem ipsum lorem ipsu Lorem</p>
        <div className={classes.dashButtons}>
          <button onClick={monthlyDataHandler} className={classes.monthlyBtn}>
            monthly
          </button>
          <button onClick={weeklyDataHandler} className={classes.weeklyBtn}>
            weekly
          </button>
          <button onClick={dailyDataHandler} className={classes.dailyActive}>
            daily
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
