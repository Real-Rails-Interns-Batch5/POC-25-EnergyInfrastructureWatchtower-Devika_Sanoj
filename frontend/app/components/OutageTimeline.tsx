"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  Tooltip,
  XAxis,
  YAxis,
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

export default function OutageTimeline({
  data,
}: any) {

  const chartData = data.map((item: any) => ({
    ...item,
    shortRegion:
      regionLabels[item.region] || item.region,
  }));

  return (
    <div className="bg-[#0B1117] border border-[#1F2937] rounded-lg p-4">

      <h2 className="text-[#38BDF8] font-semibold mb-3">
        Outage Timeline
      </h2>

      <div className="h-[260px] w-full">

        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData}>

            <XAxis
              dataKey="shortRegion"
              interval={0}
              angle={-20}
              textAnchor="end"
              height={70}
            />

            <YAxis />

            <Tooltip
              labelFormatter={(_, payload: any) =>
                payload?.[0]?.payload?.region
              }
            />

            <Area
              dataKey="customers_affected"
              stroke="#38BDF8"
              fill="#38BDF8"
              fillOpacity={0.25}
            />

          </AreaChart>
        </ResponsiveContainer>

      </div>
    </div>
  );
}