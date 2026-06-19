"use client";

export default function FuelMixChart({ data }: any) {
  return (
    <div className="bg-[#0B1117] border border-[#1F2937] p-4 rounded-lg">
      <h2 className="text-[#818CF8] font-semibold mb-2">
        Fuel Mix
      </h2>

      {data?.map((d: any, i: number) => (
        <div key={i} className="text-sm flex justify-between">
          <span>{d.fuel}</span>
          <span>{d.share}%</span>
        </div>
      ))}
    </div>
  );
}