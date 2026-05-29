import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

function GenerationChart({ data }) {

  return (
    <div className="w-full h-[600px]">

      <ResponsiveContainer width="100%" height="100%">

        <BarChart
          data={data}
          layout="vertical"
          margin={{
            top: 20,
            right: 30,
            left: 60,
            bottom: 20,
          }}
        >

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis type="number" />

          <YAxis
            type="category"
            dataKey="name"
            width={80}
          />

          <Tooltip />

          <Bar
            dataKey="total"
            fill="#2563eb"
          />

        </BarChart>

      </ResponsiveContainer>

    </div>
  );
}

export default GenerationChart;