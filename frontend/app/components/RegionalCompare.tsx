"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const regionLabels: Record<string, string> = {
  India: "🇮🇳",
  Japan: "🇯🇵",
  Germany: "🇩🇪",
  France: "🇫🇷",
  UK: "🇬🇧",
  UAE: "🇦🇪",
  Singapore: "🇸🇬",
  Australia: "🇦🇺",
  USA: "🇺🇸",
};

export default function RegionalCompare({
  emissions,
}: any) {
  const chartData = emissions.map((item: any) => ({
    ...item,
    shortRegion:
      regionLabels[item.region] || item.region,
  }));

  return (
    <div className="bg-[#0B1117] border border-[#1F2937] rounded-lg p-4">

      <h2 className="text-[#38BDF8] font-semibold mb-3">
        Regional Emissions Comparison
      </h2>

      <div className="h-[260px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <XAxis
              dataKey="shortRegion"
              interval={0}
              angle={-20}
              textAnchor="end"
              height={70}
            />

            <YAxis />

            <Tooltip
              formatter={(value) => [value, "CO₂ MT"]}
              labelFormatter={(_, payload: any) =>
                payload?.[0]?.payload?.region
              }
            />

            <Bar
              dataKey="co2_mt"
              fill="#38BDF8"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}