import React from 'react';
import {
  Tooltip,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer
} from "recharts";

export const Circular = () => {
  const dataCircular = [
    { name: "Tokyo, Japan", value: 35, participantes:"2,458" },
    { name: "Sydney, Australia", value: 28,participantes:"2,458" },
    { name: "Paris, France", value: 22,participantes:"2,458" },
    { name: "Venice, Italy", value: 15,participantes:"2,458" }
  ];

  const COLORS = ["#4D9DE0", "#74C7E5", "#A1E3F5", "#C4F1FA"];

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 w-full lg:w-2/3 max-w-md border border-solid border-gray-400/50">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-lg">Top Destinations</h2>
        <select className="text-white text-sm border-none rounded-lg p-2 bg-sky-500">
          <option>This Month</option>
          <option>Popular</option>
          <option>Price</option>
        </select>
      </div>
      <div className="flex items-center">
        <div className="w-1/2">
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={dataCircular}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {dataCircular.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="w-1/2 pl-0">
          {dataCircular.map((entry, index) => (
            <div key={`legend-${index}`} className="mb-2 flex flex-col items-center gap-2">
              <div className='flex w-full items-center gap-2'>
                <span
                  className="inline-block w-3 h-3 rounded-full mr-2"
                  style={{ backgroundColor: COLORS[index % COLORS.length] }}
                ></span>
                <span className="text-gray-700 font-semibold">{entry.name}</span>
                <span className=" text-sm text-black">({entry.value}%)</span>
              </div>
              <span className="text-gray-500 text-sm w-full pl-7">{entry.participantes} participantes</span>
            </div>
          ))}
        </div>
      </div>
    </div>

  );
}
