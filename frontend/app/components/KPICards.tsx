"use client";

export default function KPICards({
  intelligence,
  outages,
  regions,
}: any) {
  const renewable =
    intelligence?.headline_metric?.value || "0%";

  const emissions =
    intelligence?.average_emissions || 0;

  const outageCount =
    outages?.length || 0;

  const regionCount =
    regions?.length || 0;

  const cards = [
    {
      title: "Renewable Share",
      value: renewable,
    },
    {
      title: "Average Emissions",
      value: `${emissions} MT`,
    },
    {
      title: "Active Outages",
      value: outageCount,
    },
    {
      title: "Regions Monitored",
      value: regionCount,
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-4">

      {cards.map((card) => (
        <div
          key={card.title}
          className="
            bg-[#0B1117]
            border
            border-[#1F2937]
            rounded-lg
            p-4
          "
        >
          <div className="text-xs text-gray-400">
            {card.title}
          </div>

          <div className="mt-2 text-2xl font-bold text-[#38BDF8]">
            {card.value}
          </div>
        </div>
      ))}

    </div>
  );
}