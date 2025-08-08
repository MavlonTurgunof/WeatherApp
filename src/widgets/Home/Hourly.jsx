import { HiOutlineClock } from "react-icons/hi";
import {
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  LabelList,
} from "recharts";

export default function Hourly({ data, isLoading, error }) {
  if (error) return <p className="text-red-500">{error}</p>;
  if (isLoading || !data) return <p>Loading hourly forecast...</p>;

  // Get today's date (YYYY-MM-DD)
  const todayStr = new Date().toISOString().split("T")[0];

  // Filter only today's data points
  const todaysData = data.list.filter((item) =>
    item.dt_txt.startsWith(todayStr)
  );

  // Convert into chart-friendly format
  const chartData = todaysData.map((item) => {
    const time = new Date(item.dt_txt)
      .toLocaleTimeString("en-US", {
        hour: "numeric",
        hour12: true,
      })
      .toLowerCase(); // e.g., "6 am"
    return {
      time,
      value: Math.round(item.main.temp),
    };
  });

  return (
    <div className="shadow-md border-2 border-primary p-4 rounded-2xl w-full h-auto">
      <div className="flex items-center gap-2 text-secondary text-[20px]">
        <HiOutlineClock /> <h1>HOURLY FORECAST</h1>
      </div>
      <div className="w-full h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="time" />
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#8884d8"
              fill="url(#colorValue)"
              dot={{ stroke: "#8884d8", strokeWidth: 2, r: 3, fill: "#fff" }}
            >
              <LabelList dataKey="value" position="top" />
            </Area>
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
