"use client";

export default function AIExplanationPanel({
  intelligence,
}: any) {

  const region =
    intelligence?.risk_scores?.[0];

  if (!region) {
    return null;
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
        AI Regional Analysis
      </h2>

      <div className="text-sm font-semibold">
        {region.region}
      </div>

      <div className="text-xs text-gray-400 mt-2">
        Risk Score: {region.score}
      </div>

      <div className="text-xs text-gray-400">
        Risk Level: {region.level}
      </div>

      <div className="mt-3 text-sm text-gray-300 leading-relaxed">
        {region.ai_explanation}
      </div>
    </div>
  );
}