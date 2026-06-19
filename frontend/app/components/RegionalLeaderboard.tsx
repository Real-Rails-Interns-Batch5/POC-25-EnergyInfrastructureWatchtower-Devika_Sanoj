"use client";

export default function RegionalLeaderboard() {

  const regions = [
    ["India", 78],
    ["Japan", 65],
    ["Germany", 58],
    ["UAE", 54],
    ["USA", 47],
  ];

  return (
    <div className="bg-[#0B1117] border border-[#1F2937] rounded-lg p-4">

      <h2 className="text-[#38BDF8] font-semibold mb-3">
        Regional Risk Rankings
      </h2>

      <div className="space-y-2">

        {regions.map(([name, score]) => (
          <div
            key={name}
            className="flex justify-between text-sm"
          >
            <span>{name}</span>
            <span className="text-[#38BDF8]">
              {score}
            </span>
          </div>
        ))}

      </div>

    </div>
  );
}