import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { useEffect, useState } from "react";

function EarningsChart() {
  const [range, setRange] = useState("month");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/api/earnings?type=${range}`)
      .then(res => res.json())
      .then(data => setData(data));
  }, [range]);

  return (
    <div className="bg-white rounded-xl shadow p-6">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Earnings Summary</h2>

        <div className="flex gap-2">
          {["day", "week", "month"].map(item => (
            <button
              key={item}
              onClick={() => setRange(item)}
              className={`px-4 py-1 rounded-lg text-sm ${
                range === item
                  ? "bg-orange-500 text-white"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Chart */}
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="label" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="amount"
              stroke="#f97316"
              strokeWidth={3}
              dot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
export default EarningsChart;
