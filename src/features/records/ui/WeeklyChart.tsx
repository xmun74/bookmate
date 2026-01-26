"use client";

import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";
import type { WeeklyReadingData } from "@/entities/record";

interface WeeklyChartProps {
  data: WeeklyReadingData[];
}

export function WeeklyChart({ data }: WeeklyChartProps) {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm dark:bg-gray-800">
      <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">주간 독서량</h3>
      <div style={{ width: "100%", height: 200 }}>
        <ResponsiveContainer>
          <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#9ca3af" }} />
            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#9ca3af" }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1f2937",
                border: "none",
                borderRadius: "8px",
                color: "#fff",
                fontSize: "12px",
              }}
              formatter={(value?: number) => [`${value ?? 0}쪽`, "읽은 쪽수"]}
            />
            <Bar dataKey="pages" fill="#3b82f6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-3 flex items-center justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
        <div className="flex items-center gap-1.5">
          <div className="h-3 w-3 rounded-sm bg-blue-500" />
          <span>읽은 쪽수</span>
        </div>
      </div>
    </div>
  );
}
