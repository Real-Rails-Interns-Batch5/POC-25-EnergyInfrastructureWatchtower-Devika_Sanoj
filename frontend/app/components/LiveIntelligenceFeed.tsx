"use client";

export default function LiveIntelligenceFeed() {

  const feed = [
    "Renewable generation increased 8.2%",
    "Japan transmission load elevated",
    "India outage risk trending upward",
    "European grid balancing event detected",
  ];

  return (
    <div className="bg-[#0B1117] border border-[#1F2937] rounded-lg p-4">

      <h2 className="text-[#38BDF8] font-semibold mb-3">
        Intelligence Feed
      </h2>

      <div className="space-y-2 text-xs text-gray-300">

        {feed.map((item, index) => (
          <div key={index}>
            • {item}
          </div>
        ))}

      </div>

    </div>
  );
}