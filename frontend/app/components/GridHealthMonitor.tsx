"use client";

export default function GridHealthMonitor() {
  return (
    <div className="bg-[#0B1117] border border-[#1F2937] rounded-lg p-4">

      <h2 className="text-[#38BDF8] font-semibold mb-3">
        Grid Health Monitor
      </h2>

      <div className="space-y-3">

        <div>
          <div className="flex justify-between text-xs">
            <span>Grid Stability</span>
            <span className="text-green-400">92%</span>
          </div>

          <div className="w-full h-2 bg-[#1F2937] rounded mt-1">
            <div className="h-2 bg-green-500 rounded w-[92%]" />
          </div>
        </div>

        <div>
          <div className="flex justify-between text-xs">
            <span>Transmission Capacity</span>
            <span className="text-yellow-400">74%</span>
          </div>

          <div className="w-full h-2 bg-[#1F2937] rounded mt-1">
            <div className="h-2 bg-yellow-500 rounded w-[74%]" />
          </div>
        </div>

        <div>
          <div className="flex justify-between text-xs">
            <span>Renewable Integration</span>
            <span className="text-cyan-400">81%</span>
          </div>

          <div className="w-full h-2 bg-[#1F2937] rounded mt-1">
            <div className="h-2 bg-cyan-500 rounded w-[81%]" />
          </div>
        </div>

      </div>
    </div>
  );
}