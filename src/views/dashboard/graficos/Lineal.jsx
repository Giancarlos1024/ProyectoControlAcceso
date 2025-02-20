import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

const dataLineal = [
  { name: "Sun", valor: 400 },
  { name: "Mon", valor: 450 },
  { name: "Tue", valor: 300 },
  { name: "Wed", valor: 635 },
  { name: "Thu", valor: 420},
  { name: "Fri", valor: 600},
  { name: "Sat", valor: 550 }
];

// Tooltip personalizado
const CustomTooltip = ({ active, payload, label, coordinate }) => {
  if (active && payload && payload.length) {
    const { x, y } = coordinate;
    return (
      <div
        className="absolute bg-blue-50 shadow-md rounded-lg px-5 py-2 text-center"
        style={{
          left: x - 40, // Ajusta la posición horizontal
          top: y - 80, // Ajusta la posición vertical para que aparezca arriba del punto
          pointerEvents: "none", // Evita que el tooltip interfiera con el hover
        }}
      >
        <p className="font-semibold text-gray-700">${payload[0].value}</p>
        <p className="text-xs text-gray-500">{label}</p>
      </div>
    );
  }
  return null;
};

const Lineal = () => {
  return (
    <div className='flex-1 bg-white p-5 rounded-lg shadow-md border border-solid border-gray-400'>
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-lg">Revenue Overview</h2>
        <select className="text-white text-sm border-none rounded-lg p-2 bg-sky-500">
          <option>Weekly</option>
          <option>Popular</option>
          <option>Price</option>
        </select>
      </div>
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={dataLineal}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis 
              dataKey="name" 
              tick={{ fill: "#9CA3AF" }} 
              axisLine={false} // Quita la línea del eje X
              tickLine={false} // Quita las líneas de las marcas en X
              padding={{ left: 30 }} // Espacio solo a la derecha
            />
            <YAxis

              tick={{ fill: "#9CA3AF" }} 
              axisLine={false} // Quita la línea del eje Y
              tickLine={false} // Quita las líneas de las marcas en Y
              tickFormatter={(value) => `$${value}`} // Agrega el símbolo $
               
            />
            <Tooltip content={<CustomTooltip />} />
            <Line 
              type="monotone"
              dataKey="valor"
              stroke="#81BECE"
              strokeWidth={4}
              dot={{ r: 4 }}
              activeDot={{ r: 6, stroke: "#3B82F6", strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Lineal;
