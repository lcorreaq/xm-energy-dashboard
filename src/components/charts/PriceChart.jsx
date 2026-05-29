import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

function PriceChart({ data }) {
  return (
    <div className="w-full h-[400px]">
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="hour" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="value"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PriceChart;