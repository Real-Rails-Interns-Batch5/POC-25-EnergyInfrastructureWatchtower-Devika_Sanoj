"use client";

export default function OutageMonitor() {

  const outages = [
    "Mumbai Substation Alert",
    "Tokyo Transformer Maintenance",
    "Berlin Grid Congestion",
    "Paris Renewable Curtailment",
  ];

  return (
    <div className="bg-[#0B1117] border border-[#1F2937] rounded-lg p-4">

      <h2 className="text-[#38BDF8] font-semibold mb-3">
        Live Outage Feed
      </h2>

      <div className="space-y-2 text-xs">

        {outages.map((item, index) => (
          <div
            key={index}
            className="border-l-2 border-red-500 pl-2 text-gray-300"
          >
            {item}
          </div>
        ))}

      </div>

    </div>
  );
}