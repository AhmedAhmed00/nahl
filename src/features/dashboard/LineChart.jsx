import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ChartHead, StatsWrapper } from "./BarChartSales";

export default function LineChartCustomers() {
  return (
    <StatsWrapper>
      <ChartHead as={"h3"}>Total Customers</ChartHead>

      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 20" />
          <XAxis
            tick={{ fontSize: 12 }} // ← change font size here
            dataKey="name"
          />
          <YAxis
            tick={{ fontSize: 12 }} // ← change font size here
          />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </StatsWrapper>
  );
}
const data = [
  { name: "Jan", value: 4000 },
  { name: "Feb", value: 3000 },
  { name: "Mar", value: 2000 },
  { name: "Apr", value: 2780 },
  { name: "May", value: 1890 },
  { name: "Jun", value: 2390 },
  { name: "Jul", value: 3490 },
];
