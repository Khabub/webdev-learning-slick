import React from "react";
import classes from "./Dashboard_page.module.css";

import {
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Mo",
    quests: 40,
    questsOther: 17,
  },
  {
    name: "Tue",
    quests: 25,
    questsOther: 22,
  },
  {
    name: "Wen",
    quests: 28,
    questsOther: 23,
  },
  {
    name: "Thu",
    quests: 35,
    questsOther: 20,
  },
  {
    name: "Fri",
    quests: 39,
    questsOther: 28,
  },
  {
    name: "Sat",
    quests: 22,
    questsOther: 37,
  },
  {
    name: "Sun",
    quests: 42,
    questsOther: 35,
  },
];

const DashboardPage = () => {
  return (
    <div>
      <h4 className={classes.dashName}>Dashboard</h4>
      <div className={classes.dashboard}>
        <AreaChart
          width={180}
          height={70}
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
          <XAxis hide={true} />
          <YAxis hide={true} />
          <Tooltip offset={20} stroke="#000" wrapperStyle={{ fontSize: 6 }} />
          <Legend
            layout="horizontal"
            align="right"
            wrapperStyle={{ top: 60, fontSize: 6 }}
            iconType="square"
            iconSize={8}
          />
        </AreaChart>
      </div>
    </div>
  );
};

export default DashboardPage;
