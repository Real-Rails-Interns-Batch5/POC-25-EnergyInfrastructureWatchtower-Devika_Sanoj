"use client";

export default function RiskScoreCard({
  intelligence,
}: any) {

  const risk =
    intelligence?.risk_scores?.[0];

  if (!risk) {
    return null;
  }

  let color = "#22C55E";

  if (risk.score > 70) {
    color = "#EF4444";
  } else if (risk.score > 40) {
    color = "#EAB308";
  }

  return (
    <div
      className="
        bg-[#0B1117]
        border
        border-[#1F2937]
        rounded-lg
        p-4
      "
    >
      <h2 className="text-[#38BDF8] font-semibold mb-3">
        Grid Risk Score
      </h2>

      <div
        style={{ color }}
        className="text-4xl font-bold"
      >
        {risk.score}
      </div>

      <div className="text-gray-400 mt-2">
        {risk.level} Risk
      </div>

      <div className="mt-4 text-xs text-gray-500">
        Regional infrastructure stress indicator
      </div>
    </div>
  );
}