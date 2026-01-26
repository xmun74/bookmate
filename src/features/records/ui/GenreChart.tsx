"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import type { GenreData } from "@/entities/record";

interface GenreChartProps {
  data: GenreData[];
}

export function GenreChart({ data }: GenreChartProps) {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm dark:bg-gray-800">
      <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">장르별 독서 비율</h3>
      <div style={{ width: "100%", height: 200 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie data={data} cx="50%" cy="50%" innerRadius={45} outerRadius={70} dataKey="value" stroke="none">
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "#1f2937",
                border: "none",
                borderRadius: "8px",
                color: "#fff",
                fontSize: "12px",
              }}
              formatter={(value: number) => [`${value}%`, "비율"]}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm">
        {data.map(item => (
          <div key={item.name} className="flex items-center gap-1.5">
            <div className="h-3 w-3 rounded-full" style={{ backgroundColor: item.color }} />
            <span className="text-gray-600 dark:text-gray-300">
              {item.name} {item.value}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
