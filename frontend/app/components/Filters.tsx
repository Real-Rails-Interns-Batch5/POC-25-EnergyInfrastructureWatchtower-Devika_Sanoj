"use client";

export default function Filters({
  regions,
  selectedRegion,
  setSelectedRegion,
  selectedFuel,
  setSelectedFuel,
}: any) {
  return (
    <div className="bg-[#0B1117] border border-[#1F2937] p-4 rounded-lg">

      <h2 className="text-[#38BDF8] font-semibold mb-2">
        Filters
      </h2>

      {/* REGION FILTER */}
      <select
        className="w-full bg-[#030712] border border-[#1F2937] p-2 mb-2"
        value={selectedRegion}
        onChange={(e) => setSelectedRegion(e.target.value)}
      >
        <option value="All">All Regions</option>
        {regions?.map((r: any) => (
          <option key={r} value={r}>
            {r}
          </option>
        ))}
      </select>

      {/* FUEL FILTER */}
      <select
        className="w-full bg-[#030712] border border-[#1F2937] p-2"
        value={selectedFuel}
        onChange={(e) => setSelectedFuel(e.target.value)}
      >
        <option value="All">All Fuels</option>
        <option value="Wind">Wind</option>
        <option value="Solar">Solar</option>
        <option value="Coal">Coal</option>
        <option value="Natural Gas">Gas</option>
        <option value="Hydro">Hydro</option>
      </select>

    </div>
  );
}